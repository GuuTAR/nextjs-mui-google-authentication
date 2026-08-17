'use client'

import { ReactNode } from 'react'

import { Stack, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { theme } from '@/theme/theme'

import { AppDataProvider } from '@/providers/AppDataProvider'
import { TodoDataProvider } from '@/providers/TodoDataProvider'
import { UserDataProvider } from '@/providers/UserDataProvider'

import Notification from '@/views/components/core/Notification'
import Rendering from '@/views/components/core/Rendering'

type Props = {
  children: ReactNode
}

export default function RootProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <AppDataProvider>
        <UserDataProvider>
          <TodoDataProvider>
            <ThemeProvider theme={theme}>
              <Notification />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack>
                  <Rendering>{children}</Rendering>
                </Stack>
              </LocalizationProvider>
            </ThemeProvider>
          </TodoDataProvider>
        </UserDataProvider>
      </AppDataProvider>
    </AppRouterCacheProvider>
  )
}
