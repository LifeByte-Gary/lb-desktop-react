import React, { MouseEventHandler, useContext, useState } from 'react'
import MenuItem, { TMenuItem } from './MuneItem'
import { Collapse, List } from '@mui/material'
import MenuContext from './MenuContext'

export interface TSubMenu {
  key: string
  icon: React.ReactElement
  text: string
  items: TMenuItem[]
}

interface SubMenuProps {
  index: string
  icon: React.ReactElement
  text: string
  items: TMenuItem[]
}

const SubMenu: React.FC<SubMenuProps> = ({ index, icon, text, items }) => {
  const [expanded, setExpanded] = useState(false)
  const subMenuClickHandler: MouseEventHandler = () => {
    setExpanded(!expanded)
  }

  const { activeIndex, setActiveIndex } = useContext(MenuContext)

  const ActiveIndexHandler = (index: string): void => {
    console.log(activeIndex)
    if (setActiveIndex != null && index != null) {
      setActiveIndex(index)
    }
  }
  return (
    <>
      <MenuItem
        index={index}
        icon={icon}
        text={text}
        expandable
        expanded={expanded}
        onClick={subMenuClickHandler}
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
              index={`${index}.${item.key}`}
              text={item.text}
              className="pl-8"
              onActive={() => ActiveIndexHandler(`${index}.${item.key}`)}
            />
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default SubMenu
