import React, { MouseEventHandler } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { IconButton } from '@mui/material'
import logo from '@/assets/icons/react.svg'
import Menu from './Menu'

interface SideNavProps {
  collapsed: boolean
  width: number
  toggleCollapse: MouseEventHandler<HTMLElement>
}

const SideNav: React.FC<SideNavProps> = ({ collapsed, width, toggleCollapse }) => {
  return (
    <aside
      className="fixed left-0 right-auto overflow-auto bg-gray-200 h-full border-0 border-r border-dotted border-r-grey-500"
      style={{ width, transition: 'width 200ms' }}
    >
      {/* Logo header. */}
      <div className="h-20 flex items-center bg-green-100 px-4">
        <div className="flex-1 grid content-center">
          <img
            src={logo}
            alt="Logo"
          />
        </div>

        <IconButton
          className="rounded-none w-6 h-6"
          onClick={toggleCollapse}
        >
          {collapsed ? <MenuIcon /> : <MenuOpenIcon />}
        </IconButton>
      </div>

      {/* Menu. */}
      <Menu />
    </aside>
  )
}

export default SideNav
