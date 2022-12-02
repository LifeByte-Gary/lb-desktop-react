import { createContext } from 'react'

export interface IMenuContext {
  activeIndex: string
  setActiveIndex?: (index: string) => void
}

export default createContext<IMenuContext>({
  activeIndex: 'dashboard-dashboard'
})
