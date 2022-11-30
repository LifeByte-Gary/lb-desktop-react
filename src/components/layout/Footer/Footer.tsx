import React from 'react'

interface FooterProps {
  widthOffset: number
}

const Footer: React.FC<FooterProps> = ({ widthOffset }) => {
  return (
    <footer
      className="fixed h-20 top-auto right-0 left-auto bottom-0 bg-blue-500"
      style={{ width: `calc(100% - ${widthOffset}px)`, transition: 'width 200ms' }}
    >
      Footer
    </footer>
  )
}

export default Footer
