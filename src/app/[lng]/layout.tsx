import { dir } from 'i18next'
import Nav from '@components/Nav/Nav'
import { Forum } from 'next/font/google'
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
        url: '/endogeneLogoPurple.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/endogeneLogoWhite.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
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
        <Footer lng={lng} />
        <AriSignature />
      </body>
    </html>
  )
}
