import { Stack, styled } from '@mui/material'

export const AppNameContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
}))
