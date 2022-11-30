import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Button } from '@/components/base'

interface HeaderProps {
  widthOffset: number
}

const Header: React.FC<HeaderProps> = ({ widthOffset }) => {
  return (
    <>
      <AppBar
        position="static"
        className="fixed flex flex-col top-0 left-auto right-0 h-20"
        style={{ width: `calc(100% - ${widthOffset}px)`, transition: 'width 200ms' }}
      >
        <Toolbar>
          <Button color="inherit">Header</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
