import React, { MouseEventHandler } from 'react'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface TMenuItem {
  key: string
  icon?: React.ReactElement
  text: string
}

interface MenuItemProps {
  icon?: React.ReactElement
  text: string
  onclick?: MouseEventHandler
  expandable?: boolean
  expanded?: boolean
  className?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onclick, expandable, expanded, className }) => {
  return (
    <ListItemButton
      className={className}
      onClick={onclick}
    >
      <ListItemIcon sx={{ minWidth: icon != null ? '36px' : '18px' }}>{icon != null ? icon : <span>·</span>}</ListItemIcon>
      <ListItemText primary={text} />
      {expandable === true ? expanded === true ? <ExpandLessIcon /> : <ExpandMoreIcon /> : null}
    </ListItemButton>
  )
}

export default MenuItem
