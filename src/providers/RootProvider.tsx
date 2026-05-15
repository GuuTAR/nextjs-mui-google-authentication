'use client'

import { ReactNode } from 'react'
import { Stack, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import { theme } from '@/theme/theme'

import { AppDataProvider } from '@/providers/AppDataProvider'

import Notification from '@/views/components/core/Notification'

type Props = {
  children: ReactNode
}

export default function RootProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <AppDataProvider>
        <ThemeProvider theme={theme}>
          <Notification />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={{ height: '100vh' }}>{children}</Stack>
          </LocalizationProvider>
        </ThemeProvider>
      </AppDataProvider>
    </AppRouterCacheProvider>
  )
}
