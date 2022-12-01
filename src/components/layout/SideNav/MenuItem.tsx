import React, { ReactElement } from 'react'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export interface IMenuItem {
  key: string
  icon: ReactElement
  text: string
}
interface MenuItemProps {
  item: IMenuItem
}
const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <ListItemButton>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItemButton>
  )
}

export default MenuItem
