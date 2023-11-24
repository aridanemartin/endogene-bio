import Nav from '@components/Nav/Nav'
import { Forum } from 'next/font/google'
import '@styles/global.scss'
import Footer from '@components/Footer/Footer'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={forum.variable}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
