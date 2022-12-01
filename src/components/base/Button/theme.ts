import { createTheme, Theme } from '@mui/material'

const theme = (theme: Theme): Theme =>
  createTheme({
    ...theme,
    components: {
      MuiButton: {
        styleOverrides: {}
      }
    }
  })

export default theme
