import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiSvgIcon = (_: Theme): MuiComponentType<'MuiSvgIcon'> => ({
  styleOverrides: {
    fontSizeLarge: {
      fontSize: 48,
    },
    fontSizeSmall: {
      fontSize: 16,
    },
  },
})
