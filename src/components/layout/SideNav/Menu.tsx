import React, { createContext, useContext } from 'react'
import { List } from '@mui/material'
import MenuItem, { IMenuItem } from './MenuItem'
import SubMenu, { ISubMenu } from './SubMenu'

export type MenuList = Array<IMenuItem | ISubMenu>

interface MenuProps {
  list: MenuList
}

export const MenuContext = createContext({
  level: 1
})

const Menu: React.FC<MenuProps> = ({ list }) => {
  const { level } = useContext(MenuContext)
  console.log(level)

  return (
    <List>
      {list.map((item) => {
        return 'subMenu' in item ? (
          <SubMenu
            key={item.key}
            item={item}
          />
        ) : (
          <MenuItem
            key={item.key}
            item={item}
          />
        )
      })}
    </List>
  )
}

export default Menu
