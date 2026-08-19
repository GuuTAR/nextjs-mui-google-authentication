import { createTheme, Theme } from '@mui/material'

import { getMuiAlert } from './alert'
import { getMuiAppBar } from './appBar'
import { getMuiButton } from './button'
import { getMuiCheckbox } from './checkbox'
import { getMuiChip } from './chip'
import { getMuiFormControl } from './formControl'
import { getMuiFormHelperText } from './formHelperText'
import { getMuiSvgIcon } from './icon'
import { getMuiOutlinedInput } from './outlinedInput'
import { PALETTE } from './palette'
import { getMuiPaper } from './paper'
import { getMuiTab } from './tab'
import { TYPOGRAPHY } from './typography'

export const theme: Theme = createTheme({
  palette: PALETTE,
  typography: TYPOGRAPHY,
})

theme.components = {
  ...theme.components,
  MuiAlert: getMuiAlert(theme),
  MuiAppBar: getMuiAppBar(theme),
  MuiButton: getMuiButton(theme),
  MuiCheckbox: getMuiCheckbox(theme),
  MuiFormControl: getMuiFormControl(theme),
  MuiFormHelperText: getMuiFormHelperText(theme),
  MuiPaper: getMuiPaper(theme),
  MuiSvgIcon: getMuiSvgIcon(theme),
  MuiTab: getMuiTab(theme),
  MuiChip: getMuiChip(theme),
  MuiOutlinedInput: getMuiOutlinedInput(theme),
}
