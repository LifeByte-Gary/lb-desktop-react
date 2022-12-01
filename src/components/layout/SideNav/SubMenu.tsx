import React, { MouseEventHandler } from 'react'
import MenuItem, { IMenuItem } from './MenuItem'
import { ExpandLess } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export type ISubMenu = IMenuItem & {
  subMenu: Array<ISubMenu | IMenuItem>
}

interface SubMenuProps {
  item: ISubMenu
}

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
  const handleClick: MouseEventHandler = () => {}

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
        <ExpandLess />
      </ListItemButton>
      <Collapse
        in={true}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          {item.subMenu.map((item) => {
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
      </Collapse>
    </>
  )
}

export default SubMenu
