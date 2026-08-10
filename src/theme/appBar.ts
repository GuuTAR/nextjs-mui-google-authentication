import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiAppBar = (_: Theme): MuiComponentType<'MuiAppBar'> => ({
  styleOverrides: {
    root: {
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      boxShadow: 'none',
    },
  },
})
