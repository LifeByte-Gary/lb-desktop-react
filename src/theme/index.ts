/**
 * Customize MUI global theme.
 */
import { createTheme } from '@mui/material'
import { indigo } from '@/theme/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: indigo['700'],
      light: indigo['400'],
      dark: indigo['800']
    }
  }
})

export default theme
