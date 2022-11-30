import React from 'react'
import { Button as MUIButton, ButtonProps as MButtonProps, ThemeProvider } from '@mui/material'
import theme from './theme'

interface ButtonProps extends MButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...restProps } = props
  return (
    <ThemeProvider theme={theme}>
      <MUIButton {...restProps}>{children}</MUIButton>
    </ThemeProvider>
  )
}

export default Button
