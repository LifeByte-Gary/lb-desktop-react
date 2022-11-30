import React from 'react'
import { Header } from '@/components/layout/Header'
import { SideNav } from '@/components/layout/SideNav'
import { MainContent } from '@/components/layout/MainContent'
import { Footer } from '@/components/layout/Footer'
import useCollapse from '@/components/layout/Layout/useCollapse'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { collapsed, toggleCollapse } = useCollapse()
  const sideNavWidth = collapsed ? 100 : 280

  return (
    <>
      <div className="h-screen">
        <Header widthOffset={sideNavWidth} />
        <SideNav
          collapsed={collapsed}
          toggleCollapse={toggleCollapse}
          width={sideNavWidth}
        />
        <MainContent widthOffset={sideNavWidth}>{children}</MainContent>
        <Footer widthOffset={sideNavWidth} />
      </div>
    </>
  )
}

export default Layout
