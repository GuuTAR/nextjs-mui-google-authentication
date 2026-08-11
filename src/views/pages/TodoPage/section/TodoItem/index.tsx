'use client'

import { useCallback } from 'react'

import { Checkbox, IconButton } from '@mui/material'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined'

import { Todo } from '@/types/Todo'

import * as Styles from './style'

type Props = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  const handleToggle = useCallback((): void => {
    onToggle(todo.id)
  }, [onToggle, todo.id])

  const handleDelete = useCallback((): void => {
    onDelete(todo.id)
  }, [onDelete, todo.id])

  return (
    <Styles.Root>
      <Checkbox checked={todo.isCompleted} onChange={handleToggle} />
      <Styles.Title variant="body1" isCompleted={todo.isCompleted}>
        {todo.title}
      </Styles.Title>
      <IconButton onClick={handleDelete}>
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>
    </Styles.Root>
  )
}
