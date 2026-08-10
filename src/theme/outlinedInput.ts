import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

export const getMuiOutlinedInput = (theme: Theme): MuiComponentType<'MuiOutlinedInput'> => ({
  styleOverrides: {
    root: {
      borderRadius: theme.spacing(1.5),
      background: theme.palette.background.default,
      fontSize: '15px',
      color: theme.palette.text.primary,
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.text.disabled,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
    notchedOutline: {
      borderColor: theme.palette.divider,
    },
    input: {
      padding: theme.spacing(1.625, 1.75),
      lineHeight: 1.55,
    },
  },
})
