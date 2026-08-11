'use client'

import { useMemo } from 'react'

import { Stack, Typography } from '@mui/material'

import TaskAltIcon from '@mui/icons-material/TaskAlt'

import { Todo } from '@/types/Todo'

import { useAppData } from '@/providers/AppDataProvider'

import CoreButton from '@/views/components/core/CoreButton'

import TodoItem from '@/views/pages/TodoPage/section/TodoItem'

import * as Languages from './lang'
import * as Styles from './style'

type Props = {
  todos: Todo[]
  filteredTodos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onClearCompleted: () => void
}

export default function TodoList({ todos, filteredTodos, onToggle, onDelete, onClearCompleted }: Props) {
  const { language } = useAppData()

  const activeCount: number = useMemo(() => todos.filter((todo) => !todo.isCompleted).length, [todos])
  const completedCount: number = useMemo(() => todos.filter((todo) => todo.isCompleted).length, [todos])

  if (filteredTodos.length === 0) {
    return (
      <Styles.EmptyState>
        <TaskAltIcon fontSize="large" color="disabled" />
        <Typography variant="subtitle1" color="textSecondary">
          {Languages.EMPTY_TITLE[language]}
        </Typography>
        <Typography variant="body2" color="textDisabled">
          {Languages.EMPTY_DESCRIPTION[language]}
        </Typography>
      </Styles.EmptyState>
    )
  }

  return (
    <Styles.Root>
      <Styles.ListCard>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </Styles.ListCard>
      <Styles.FooterRow>
        <Typography variant="body2" color="textSecondary">
          {activeCount} {Languages.ITEMS_LEFT[language]}
        </Typography>
        {completedCount > 0 ? (
          <Stack>
            <CoreButton variant="text" onClick={onClearCompleted}>
              <Typography variant="body2">{Languages.CLEAR_COMPLETED[language]}</Typography>
            </CoreButton>
          </Stack>
        ) : null}
      </Styles.FooterRow>
    </Styles.Root>
  )
}
