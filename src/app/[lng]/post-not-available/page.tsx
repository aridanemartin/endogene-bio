'use client'

import { NotFoundComponent } from '@components/NotFoundComponent/NotFoundComponent'
import { usePathname } from 'next/navigation'

function NotFoundPage() {
  const path = usePathname()
  const locale = path.split('/')[1]

  return <NotFoundComponent locale={locale} isBlogPage />
}

export default NotFoundPage
