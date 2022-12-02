import React, { MouseEventHandler, useContext } from 'react'
import classNames from 'classnames'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TagIcon from '@mui/icons-material/Tag'
import MenuContext from './MenuContext'

export interface TMenuItem {
  key: string
  icon?: React.ReactElement
  text: string
}

interface MenuItemProps {
  index: string
  icon?: React.ReactElement
  text: string
  expandable?: boolean
  expanded?: boolean
  className?: string
  onClick?: MouseEventHandler
  onActive?: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ index, icon, text, onClick, onActive, expandable, expanded, className }) => {
  const isTopLevel = index.split('.').length === 2
  const { activeIndex } = useContext(MenuContext)
  const isActive = activeIndex.startsWith(index)

  const clickHandler: MouseEventHandler = (e) => {
    if (onClick != null) {
      onClick(e)
    }
    if (onActive != null) {
      onActive()
    }
  }

  return (
    <ListItemButton
      color={'primary'}
      className={classNames('text-primary-main', { 'bg-blue-50': isActive && isTopLevel, 'hover:bg-blue-50': isTopLevel, 'hover:bg-transparent': !isTopLevel }, className)}
      onClick={clickHandler}
    >
      <ListItemIcon className={'text-primary-main'}>{icon != null ? icon : <TagIcon />}</ListItemIcon>
      <ListItemText>
        <span className={classNames({ 'font-bold': isTopLevel || isActive })}>{text}</span>
      </ListItemText>
      {expandable === true ? expanded === true ? <ExpandLessIcon /> : <ExpandMoreIcon /> : null}
    </ListItemButton>
  )
}

export default MenuItem
