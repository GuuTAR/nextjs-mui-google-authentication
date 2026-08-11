'use client'

import { useCallback, useMemo, useState } from 'react'

import { Typography } from '@mui/material'

import { Todo } from '@/types/Todo'

import { useAppData } from '@/providers/AppDataProvider'
import { useUserData } from '@/providers/UserDataProvider'

import BoldText from '@/views/components/core/BoldText'
import CoreGroupButton from '@/views/components/core/CoreGroupButton'
import PageContainer from '@/views/components/core/PageContainer'

import TodoInput from '@/views/pages/TodoPage/section/TodoInput'
import TodoList from '@/views/pages/TodoPage/section/TodoList'

import { TODO_FILTER } from './enum'
import * as Languages from './lang'
import * as Styles from './style'

const INITIAL_TODOS: Todo[] = [
  { id: '1', title: 'Plan weekly grocery list', isCompleted: false, createdAt: new Date().toISOString() },
  { id: '2', title: 'Book dentist appointment', isCompleted: false, createdAt: new Date().toISOString() },
  { id: '3', title: 'Finish reading design doc', isCompleted: true, createdAt: new Date().toISOString() },
]

export default function TodoPage() {
  const { language } = useAppData()
  const { userDisplayName } = useUserData()

  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS)
  const [filter, setFilter] = useState<TODO_FILTER>(TODO_FILTER.ALL)

  const filteredTodos: Todo[] = useMemo(() => {
    if (filter === TODO_FILTER.ACTIVE) return todos.filter((todo) => !todo.isCompleted)
    if (filter === TODO_FILTER.COMPLETED) return todos.filter((todo) => todo.isCompleted)
    return todos
  }, [todos, filter])

  const handleAdd = useCallback((title: string): void => {
    setTodos((prev) => [
      { id: crypto.randomUUID(), title, isCompleted: false, createdAt: new Date().toISOString() },
      ...prev,
    ])
  }, [])

  const handleToggle = useCallback((id: string): void => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
  }, [])

  const handleDelete = useCallback((id: string): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }, [])

  const handleClearCompleted = useCallback((): void => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted))
  }, [])

  const handleFilterChange = useCallback((value: string | number): void => {
    setFilter(value as TODO_FILTER)
  }, [])

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
          <TodoInput onAdd={handleAdd} />
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
          <TodoList
            todos={todos}
            filteredTodos={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onClearCompleted={handleClearCompleted}
          />
        </Styles.Content>
      </Styles.Root>
    </PageContainer>
  )
}
