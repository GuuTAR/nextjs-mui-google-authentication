'use client'

import { ReactNode } from 'react'
import { Stack, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { NextAppProvider as ToolpadProvider } from '@toolpad/core/nextjs'

import { theme } from '@/theme/theme'

import { AppDataProvider } from '@/providers/AppDataProvider'

type Props = {
  children: ReactNode
}

export default function RootProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <ToolpadProvider>
        <AppDataProvider>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack sx={{ height: '100vh' }}>{children}</Stack>
            </LocalizationProvider>
          </ThemeProvider>
        </AppDataProvider>
      </ToolpadProvider>
    </AppRouterCacheProvider>
  )
}
