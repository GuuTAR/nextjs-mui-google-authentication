'use client'

import { useCallback, useMemo, useState } from 'react'

import { Typography } from '@mui/material'

import { DisplayTodo } from '@/types/Todo'
import { ALERT_COLOR } from '@/enum/global'

import { useAppData } from '@/providers/AppDataProvider'
import { useTodoData } from '@/providers/TodoDataProvider'
import { useUserData } from '@/providers/UserDataProvider'

import BoldText from '@/views/components/core/BoldText'
import CoreGroupButton from '@/views/components/core/CoreGroupButton'
import PageContainer from '@/views/components/core/PageContainer'

import TodoInput from '@/views/pages/TodoPage/section/TodoInput'
import TodoList from '@/views/pages/TodoPage/section/TodoList'

import { TODO_FILTER } from './enum'
import * as Languages from './lang'
import * as Styles from './style'

export default function TodoPage() {
  const { language, handleShowNotification } = useAppData()
  const { userDisplayName } = useUserData()
  const { displayTodos, createTodo, resetTodos, toggleTodoStatus, deleteTodo } = useTodoData()

  const [filter, setFilter] = useState<TODO_FILTER>(TODO_FILTER.ALL)

  const filteredTodos: DisplayTodo[] = useMemo(() => {
    if (!displayTodos) return []

    if (filter === TODO_FILTER.ACTIVE) return displayTodos.filter((todo) => !todo.isCompleted)
    if (filter === TODO_FILTER.COMPLETED) return displayTodos.filter((todo) => todo.isCompleted)
    return displayTodos
  }, [displayTodos, filter])

  const handleCreateTodo = useCallback(
    async (title: string): Promise<void> => {
      const isSuccess: boolean = await createTodo(title)
      if (!isSuccess) {
        handleShowNotification({
          message: Languages.CREATE_TODO_FAILURE_MESSAGE[language],
          severity: ALERT_COLOR.ERROR,
        })
      } else {
        handleShowNotification({
          message: Languages.CREATE_TODO_SUCCESS_MESSAGE[language],
          severity: ALERT_COLOR.SUCCESS,
        })
      }
    },
    [createTodo, handleShowNotification, language],
  )

  const handleToggle = useCallback(
    (id: string): void => {
      const targetTodo: DisplayTodo | undefined = filteredTodos.find((t) => t.id === id)
      if (targetTodo) {
        toggleTodoStatus(id)
      }
    },
    [filteredTodos, toggleTodoStatus],
  )

  const handleDelete = useCallback(
    async (id: string): Promise<void> => {
      const isSuccess: boolean = await deleteTodo(id)
      if (!isSuccess) {
        handleShowNotification({
          message: Languages.DELETE_TODO_FAILURE_MESSAGE[language],
          severity: ALERT_COLOR.ERROR,
        })
      } else {
        handleShowNotification({
          message: Languages.DELETE_TODO_SUCCESS_MESSAGE[language],
          severity: ALERT_COLOR.SUCCESS,
        })
      }
    },
    [deleteTodo, handleShowNotification, language],
  )

  const handleFilterChange = useCallback((value: string | number): void => {
    setFilter(value as TODO_FILTER)
  }, [])

  const handleClearCompleted = useCallback(async (): Promise<void> => {
    const isSuccess: boolean = await resetTodos()
    if (!isSuccess) {
      handleShowNotification({
        message: Languages.RESET_TODOS_FAILURE_MESSAGE[language],
        severity: ALERT_COLOR.ERROR,
      })
    } else {
      handleShowNotification({
        message: Languages.RESET_TODOS_SUCCESS_MESSAGE[language],
        severity: ALERT_COLOR.SUCCESS,
      })
    }
  }, [resetTodos, handleShowNotification, language])

  return (
    <PageContainer isShowAppMenu>
      <Styles.Root>
        <Styles.Content>
          <Styles.GreetingSection>
            <BoldText variant="h4" color="textPrimary">
              {Languages.WELCOME_BACK[language]}
              {userDisplayName ? `, ${userDisplayName}` : ''}
            </BoldText>
            <Typography variant="body1" color="textSecondary">
              {Languages.SUBTITLE[language]}
            </Typography>
          </Styles.GreetingSection>
          <TodoInput onAdd={handleCreateTodo} />
          <Styles.FilterRow>
            <CoreGroupButton
              content={[
                Languages.FILTER_ALL[language],
                Languages.FILTER_ACTIVE[language],
                Languages.FILTER_COMPLETED[language],
              ]}
              contentValue={[TODO_FILTER.ALL, TODO_FILTER.ACTIVE, TODO_FILTER.COMPLETED]}
              value={filter}
              onChange={handleFilterChange}
            />
          </Styles.FilterRow>
          {displayTodos && (
            <TodoList
              todos={displayTodos}
              filteredTodos={filteredTodos}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onClearCompleted={handleClearCompleted}
            />
          )}
        </Styles.Content>
      </Styles.Root>
    </PageContainer>
  )
}
