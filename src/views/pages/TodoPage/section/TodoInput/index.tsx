'use client'

import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'

import { Typography } from '@mui/material'

import AddIcon from '@mui/icons-material/Add'

import { useAppData } from '@/providers/AppDataProvider'

import CoreButton from '@/views/components/core/CoreButton'

import * as Languages from './lang'
import * as Styles from './style'

type Props = {
  onAdd: (title: string) => void
}

export default function TodoInput({ onAdd }: Props) {
  const { language } = useAppData()

  const [title, setTitle] = useState<string>('')

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }, [])

  const handleAdd = useCallback((): void => {
    const trimmedTitle: string = title.trim()
    if (!trimmedTitle) return
    onAdd(trimmedTitle)
    setTitle('')
  }, [title, onAdd])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === 'Enter') handleAdd()
    },
    [handleAdd],
  )

  return (
    <Styles.Root>
      <Styles.TitleInput
        value={title}
        placeholder={Languages.PLACEHOLDER[language]}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        fullWidth
      />
      <Styles.AddButton>
        <CoreButton variant="contained" onClick={handleAdd}>
          <AddIcon fontSize="small" />
          <Typography variant="body2">{Languages.ADD_BUTTON[language]}</Typography>
        </CoreButton>
      </Styles.AddButton>
    </Styles.Root>
  )
}
