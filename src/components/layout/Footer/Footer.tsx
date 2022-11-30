import React from 'react'

interface FooterProps {
  collapsed: boolean
}

const Footer: React.FC<FooterProps> = ({ collapsed }) => {
  return (
    <footer
      className="fixed h-20 top-auto right-0 left-auto bottom-0 bg-blue-500"
      style={{ width: `calc(100% - ${collapsed ? 100 : 280}px)` }}
    >
      Footer
    </footer>
  )
}

export default Footer
