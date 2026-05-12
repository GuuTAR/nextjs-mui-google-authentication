import { createTheme, Theme } from '@mui/material'

import { PALETTE } from './palette'
import { TYPOGRAPHY } from './typography'
import { getMuiSvgIcon } from './icon'
import { getMuiTab } from './tab'
import { getMuiCheckbox } from './checkbox'

export const theme: Theme = createTheme({
  palette: PALETTE,
  typography: TYPOGRAPHY,
})

theme.components = {
  ...theme.components,
  MuiSvgIcon: getMuiSvgIcon(theme),
  MuiTab: getMuiTab(theme),
  MuiCheckbox: getMuiCheckbox(theme),
}
