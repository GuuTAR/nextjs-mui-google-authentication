import { Button, Stack, styled } from '@mui/material'

export const LoginPageStyle = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const LoginContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  gap: theme.spacing(1),
}))

export const GoogleLoginButton = styled(Button)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}))
