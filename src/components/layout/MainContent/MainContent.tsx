import React from 'react'

interface MainContentProps {
  collapsed: boolean
  children?: React.ReactNode
}

const MainContent: React.FC<MainContentProps> = ({ collapsed, children }) => {
  return (
    <main
      className="fixed right-0 overflow-auto bg-green-50 h-full py-20"
      style={{ width: `calc(100% - ${collapsed ? 100 : 280}px)` }}
    >
      {children ?? 'No Content'}
    </main>
  )
}

export default MainContent
