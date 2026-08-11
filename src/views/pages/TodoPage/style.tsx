import { AppBar, Avatar, Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  alignItems: 'center',
  background: theme.palette.background.default,
}))

export const HeaderBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(2, 4),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 2),
  },
}))

export const HeaderContent = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}))

export const UserSection = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}))

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}))

export const Content = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: 640,
  padding: theme.spacing(6, 3),
  gap: theme.spacing(3),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
  },
}))

export const GreetingSection = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(0.5),
}))

export const FilterRow = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
}))
