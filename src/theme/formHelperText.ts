import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiFormHelperText = (_: Theme): MuiComponentType<'MuiFormHelperText'> => ({
  styleOverrides: {
    root: {
      marginLeft: 0,
    },
  },
})
