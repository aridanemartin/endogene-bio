import { ReactNode } from 'react'

interface LayoutProps {
  maxWidth?: string
  children: ReactNode
}

const Layout = ({ maxWidth, children }: LayoutProps) => {
  return <section style={{ maxWidth: maxWidth }}>{children}</section>
}

export default Layout
