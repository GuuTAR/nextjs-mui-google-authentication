import { PaletteOptions } from '@mui/material'

export const PALETTE: PaletteOptions = {
  primary: {
    main: '#2D7FF9',
    light: '#6BC4FF',
    dark: '#0F4FCB',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#6BC4FF',
    light: '#A8DCFF',
    dark: '#3895C9',
    contrastText: '#0B1B3B',
  },
  error: { main: '#FF5A6E', light: '#FF8E9C', dark: '#C8243A', contrastText: '#FFFFFF' },
  warning: { main: '#F5C24A', light: '#FBD984', dark: '#B88A1E', contrastText: '#0B1B3B' },
  info: { main: '#2D7FF9', light: '#6BC4FF', dark: '#0F4FCB', contrastText: '#FFFFFF' },
  success: { main: '#16B981', light: '#4FD9B5', dark: '#0A8A5C', contrastText: '#FFFFFF' },
  text: {
    primary: '#0B1B3B',
    secondary: '#3A4A6E',
    disabled: '#A4AFC9',
  },
  divider: '#F2F6FD',
  background: { default: '#F2F6FD', paper: '#FFFFFF' },
  custom: {
    loginPage: {
      descriptionBackground:
        'linear-gradient(155deg, rgb(45, 127, 249) 0%, rgb(27, 95, 214) 55%, rgb(15, 79, 203) 100%)',
    },
  },
}
