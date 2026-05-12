import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

export const getMuiTab = (theme: Theme): MuiComponentType<'MuiTab'> => ({
  styleOverrides: {
    textColorPrimary: {
      color: theme.palette.text.primary,
    },
  },
})
