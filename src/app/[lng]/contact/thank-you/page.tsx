'use client'

import { NotFoundComponent } from '@components/NotFoundComponent/NotFoundComponent'
import { ThankYou } from '@components/ThankYou/ThankYou'
import { usePathname } from 'next/navigation'

function NotFoundPage() {
  const path = usePathname()
  const locale = path.split('/')[1]

  return <ThankYou locale={locale} />
}

export default NotFoundPage
