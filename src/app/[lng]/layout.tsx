import { dir } from 'i18next'
import Nav from '@components/Nav/Nav'
import { Forum, Lexend, Open_Sans } from 'next/font/google'
import '@styles/global.scss'
import Footer from '@components/Footer/Footer'
import AriSignature from '@components/AriSignature/AriSignature'
import { languages } from '../i18n/settings'
import '../../styles/globals.css'

export const metadata = {
  title: 'Endogene.Bio | Building a legacy in female health',
  description:
    'EndoGene.Bio is dedicated to molecular biomarker discovery in female health. We look at epigenetic markers in menstrual blood. Our first target is the development of non-invasive biomarkers for better endometriosis diagnosis and management. ',
  icons: {
    icon: [
      {
        url: '/endogeneFavicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/endogeneFavicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

const openSans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const lexend = Lexend({
  weight: ['100', '200', '400', '600'],
  subsets: ['latin'],
  variable: '--font-lexend',
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
      <body className={openSans.variable + ' ' + lexend.variable}>
        <Nav lng={lng} />
        {children}
        <Footer lng={lng} />
        <AriSignature />
      </body>
    </html>
  )
}
