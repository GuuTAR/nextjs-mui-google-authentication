import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

export const getMuiFormControl = (theme: Theme): MuiComponentType<'MuiFormControl'> => ({
  styleOverrides: {
    root: {
      gap: theme.spacing(0.5),
    },
  },
})
