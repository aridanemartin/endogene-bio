import { ReactNode } from 'react'
import './Layout.css'

interface LayoutProps {
  maxWidth?: string
  children: ReactNode
  className?: string
}

const Layout = ({ maxWidth, children, className }: LayoutProps) => {
  return (
    <section className={`layout ${className}`} style={{ maxWidth: maxWidth }}>
      {children}
    </section>
  )
}

export default Layout
