import { Theme } from '@mui/material'

import { MuiComponentType } from './type'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMuiPaper = (_: Theme): MuiComponentType<'MuiPaper'> => ({
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: {
      boxShadow: '0 1px 2px rgba(11,27,59,.04)',
    },
  },
})
