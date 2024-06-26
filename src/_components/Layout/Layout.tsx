import { ReactNode } from 'react'

interface LayoutProps {
  maxWidth?: string
  children: ReactNode
  className?: string
}

const Layout = ({ maxWidth, children, className }: LayoutProps) => {
  return (
    <section
      className={className}
      style={{ maxWidth: maxWidth, margin: '0 auto', padding: '1rem' }}
    >
      {children}
    </section>
  )
}

export default Layout
