import React, { MouseEventHandler, useState } from 'react'
import MenuItem, { TMenuItem } from './MuneItem'
import { Collapse, List } from '@mui/material'

export interface TSubMenu {
  key: string
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
  const [expanded, setExpanded] = useState(false)
  const subMenuClickHandler: MouseEventHandler = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <MenuItem
        icon={icon}
        text={text}
        expandable
        expanded={expanded}
        onclick={subMenuClickHandler}
      />
      <Collapse
        in={expanded}
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
              className="pl-10"
            />
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default SubMenu
