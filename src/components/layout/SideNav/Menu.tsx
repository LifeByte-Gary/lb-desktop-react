import React from 'react'
import SpeedIcon from '@mui/icons-material/Speed'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PeopleIcon from '@mui/icons-material/People'
import { List } from '@mui/material'
import SubMenu, { TSubMenu } from './SubMenu'
import MenuItem, { TMenuItem } from './MuneItem'

type TMenuList = Array<{
  key: string
  title: string
  subtitle?: string
  items: Array<TSubMenu | TMenuItem>
}>

const menuList: TMenuList = [
  {
    key: 'dashboard',
    title: 'Dashboard',
    items: [
      {
        key: 'dashboard',
        icon: <SpeedIcon />,
        text: 'Dashboard'
      }
    ]
  },
  {
    key: 'company',
    title: 'Company',
    subtitle: 'My Company',
    items: [
      {
        key: 'offices',
        icon: <ApartmentIcon />,
        text: 'Offices'
      },
      {
        key: 'users',
        icon: <PeopleIcon />,
        text: 'Users',
        items: [
          {
            key: 'overview',
            text: 'Overview'
          },
          {
            key: 'management',
            text: 'User Management'
          }
        ]
      }
    ]
  }
]

const Menu: React.FC = () => {
  return (
    <nav>
      {menuList.map((menu) => {
        return (
          <div key={menu.key}>
            <h1>{menu.title}</h1>
            {menu?.subtitle != null ? <h2>{menu.subtitle}</h2> : null}

            <List>
              {menu.items.map((item) =>
                'items' in item ? (
                  <SubMenu
                    icon={item.icon}
                    text={item.text}
                    items={item.items}
                  />
                ) : (
                  <MenuItem
                    icon={item.icon}
                    text={item.text}
                  />
                )
              )}
            </List>
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
