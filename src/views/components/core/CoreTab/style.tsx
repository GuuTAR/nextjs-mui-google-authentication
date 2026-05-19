import { TabPanel } from '@mui/lab'
import { Stack, styled } from '@mui/material'

export const TapContainer = styled(Stack)({
  height: '100%',
})

export const TabDivider = styled(Stack)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

export const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}))
