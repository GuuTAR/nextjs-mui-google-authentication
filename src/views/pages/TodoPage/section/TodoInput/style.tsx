import { OutlinedInput, Stack, styled } from '@mui/material'

export const Root = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1.5),
}))

export const TitleInput = styled(OutlinedInput)(() => ({
  flex: 1,
}))

export const AddButton = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}))
