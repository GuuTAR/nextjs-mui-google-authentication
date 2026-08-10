import { Button, Stack, styled, Typography } from '@mui/material'

export const LoginPageStyle = styled(Stack)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 0.5fr',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const DescriptionSection = styled(Stack)(({ theme }) => ({
  height: '100%',
  justifyContent: 'center',
  padding: theme.spacing(0, 8),
  gap: theme.spacing(2),
  background: theme.palette.custom.loginPage.descriptionBackground,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const ShortSummary = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: 2,
  color: theme.palette.primary.contrastText,
}))

export const ContrastText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}))

export const LoginSection = styled(Stack)(({ theme }) => ({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
}))

export const LoginContainer = styled(Stack)(({ theme }) => ({
  width: 300,
  gap: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}))

export const LoginButton = styled(Button)(({ theme }) => ({
  gap: theme.spacing(2),
}))
