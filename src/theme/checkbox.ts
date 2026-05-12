import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

export const getMuiCheckbox = (theme: Theme): MuiComponentType<'MuiCheckbox'> => ({
  styleOverrides: {
    root: {
      color: theme.palette.text.primary,
    },
  },
})
