import { Paper, Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1.5),
}))

export const ListCard = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(1.5),
  overflow: 'hidden',
}))

export const EmptyState = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(6, 2),
}))

export const FooterRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(1),
}))
