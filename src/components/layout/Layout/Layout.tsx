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
  return (
    <>
      <div className="h-screen">
        <Header collapsed={collapsed} />
        <SideNav
          collapsed={collapsed}
          toggleCollapse={toggleCollapse}
        />
        <MainContent collapsed={collapsed}>{children}</MainContent>
        <Footer collapsed={collapsed} />
      </div>
    </>
  )
}

export default Layout
