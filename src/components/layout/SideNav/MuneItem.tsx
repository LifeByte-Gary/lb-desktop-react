import React, { MouseEventHandler } from 'react'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export interface TMenuItem {
  icon?: React.ReactElement
  key: string
  text: string
}

interface MenuItemProps {
  icon?: React.ReactElement
  text: string
  onclick?: MouseEventHandler
  expandable?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onclick, expandable }) => {
  return (
    <ListItemButton onClick={onclick}>
      <ListItemIcon>{icon != null ? icon : <span>·</span>}</ListItemIcon>
      <ListItemText primary={text} />
      {expandable === true ? <ExpandLessIcon /> : null}
    </ListItemButton>
  )
}

export default MenuItem
