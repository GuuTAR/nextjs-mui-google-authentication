import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

export const getMuiButton = (theme: Theme): MuiComponentType<'MuiButton'> => ({
  styleOverrides: {
    root: {
      textTransform: 'none',
      borderRadius: theme.spacing(1.5),
    },
  },
})
