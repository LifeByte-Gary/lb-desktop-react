import React, { MouseEventHandler } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { IconButton } from '@mui/material'

interface SideNavProps {
  collapsed: boolean
  width: number
  toggleCollapse: MouseEventHandler<HTMLElement>
}

const SideNav: React.FC<SideNavProps> = ({ collapsed, width, toggleCollapse }) => {
  return (
    <nav
      className="fixed left-0 right-auto overflow-auto bg-gray-200 h-full"
      style={{ width, transition: 'width 200ms' }}
    >
      <IconButton
        className="rounded-none w-6 h-6"
        onClick={toggleCollapse}
      >
        {collapsed ? <MenuIcon /> : <MenuOpenIcon />}
      </IconButton>
      <div>Side Nav</div>
    </nav>
  )
}

export default SideNav
