import React from 'react'

interface MainContentProps {
  widthOffset: number
  children?: React.ReactNode
}

const MainContent: React.FC<MainContentProps> = ({ widthOffset, children }) => {
  return (
    <main
      className="fixed right-0 overflow-auto bg-green-50 h-full my-20"
      style={{ width: `calc(100% - ${widthOffset}px)`, transition: 'width 200ms' }}
    >
      {children ?? 'No Content'}
    </main>
  )
}

export default MainContent
