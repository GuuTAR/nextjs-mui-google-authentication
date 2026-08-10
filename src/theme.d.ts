import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      loginPage: {
        descriptionBackground: string
      }
    }
  }

  interface PaletteOptions {
    custom: {
      loginPage: {
        descriptionBackground: string
      }
    }
  }
}
