import { styled, Stack, Typography } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(0.5),
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: '-0.025em',
  color: theme.palette.text.primary,
}))

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
}))
