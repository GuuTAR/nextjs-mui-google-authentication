import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

export const CHIP_HEIGHT: Record<'small' | 'medium', number> = {
  small: 32,
  medium: 40,
}

export const getMuiChip = (theme: Theme): MuiComponentType<'MuiChip'> => ({
  styleOverrides: {
    root: {
      '&': {
        padding: theme.spacing(0, 1),
      },
    },
    sizeMedium: {
      height: 40,
    },
    sizeSmall: {
      height: 32,
    },
  },
})
