import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

export const getMuiAlert = (theme: Theme): MuiComponentType<'MuiAlert'> => ({
  styleOverrides: {
    root: {
      color: theme.palette.primary.contrastText,
    },
  },
})
