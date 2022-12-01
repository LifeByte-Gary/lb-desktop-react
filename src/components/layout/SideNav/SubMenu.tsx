import React, { MouseEventHandler, useState } from 'react'
import MenuItem, { TMenuItem } from './MuneItem'
import { Collapse, List } from '@mui/material'

export interface TSubMenu {
  icon: React.ReactElement
  text: string
  items: TMenuItem[]
}

interface SubMenuProps {
  icon: React.ReactElement
  text: string
  items: TMenuItem[]
}

const SubMenu: React.FC<SubMenuProps> = ({ icon, text, items }) => {
  const [open, setOpen] = useState(false)
  const subMenuClickHandler: MouseEventHandler = () => {
    setOpen(!open)
  }

  return (
    <>
      <MenuItem
        icon={icon}
        text={text}
        expandable
        onclick={subMenuClickHandler}
      />
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
        >
          {items.map((item) => (
            <MenuItem
              key={item.key}
              text={item.text}
            />
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default SubMenu
