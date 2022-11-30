import { useState } from 'react'

const useCollapse = (): {
  collapsed: boolean
  toggleCollapse: () => void
} => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleCollapse = (): void => {
    setCollapsed(!collapsed)
  }

  return { collapsed, toggleCollapse }
}

export default useCollapse
