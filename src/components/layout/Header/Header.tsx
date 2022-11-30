import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Button } from '@/components/base'

interface HeaderProps {
  collapsed: boolean
}

const Header: React.FC<HeaderProps> = ({ collapsed }) => {
  return (
    <>
      <AppBar
        position="static"
        className="fixed flex flex-col top-0 left-auto right-0 h-20 z-[1101]"
        style={{ width: `calc(100% - ${collapsed ? 100 : 280}px)` }}
      >
        <Toolbar>
          <Button color="inherit">Header</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
