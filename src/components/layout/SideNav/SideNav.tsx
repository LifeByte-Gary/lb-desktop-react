import React, { MouseEventHandler } from 'react'
import { Button } from '@/components/base'

interface SideNavProps {
  collapsed: boolean
  toggleCollapse: MouseEventHandler<HTMLButtonElement>
}

const SideNav: React.FC<SideNavProps> = ({ collapsed, toggleCollapse }) => {
  return (
    <nav
      className="fixed left-0 right-auto overflow-auto bg-gray-200 h-full"
      style={{ width: collapsed ? 100 : 280 }}
    >
      <Button onClick={toggleCollapse}>Collapse</Button>
      <div>Side Nav</div>
    </nav>
  )
}

export default SideNav
