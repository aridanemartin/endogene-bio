import { dir } from 'i18next'
import Nav from '@components/Nav/Nav'
import { Forum } from 'next/font/google'
import '@styles/global.scss'
import Footer from '@components/Footer/Footer'
import AriSignature from '@components/AriSignature/AriSignature'
import { languages } from '../i18n/settings'
import '../../styles/globals.css'

export const metadata = {
  title: 'Con Nutrición Saludable | Carolina Almeida',
  description:
    '¡Bienvenidos al mundo de la nutrición consciente! Te invitamos a descubrir cómo nuestras soluciones personalizadas pueden mejorar tu salud y bienestar.',
}

const forum = Forum({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-forum',
})

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={forum.variable}>
        <Nav lng={lng} />
        {children}
        <Footer />
        <AriSignature />
      </body>
    </html>
  )
}
