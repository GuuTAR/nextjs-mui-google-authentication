import { Stack, styled, Typography } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),

  '&:not(:last-of-type)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}))

type TitleProps = {
  isCompleted?: boolean
}

export const Title = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isCompleted',
})<TitleProps>(({ theme, isCompleted }) => ({
  flex: 1,
  textDecoration: isCompleted ? 'line-through' : 'none',
  color: isCompleted ? theme.palette.text.disabled : theme.palette.text.primary,
}))
