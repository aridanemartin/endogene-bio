'use client'

import './Nav.scss'
import './Burger.scss'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// images
import navLogo from '@assets/logos/carolinaLogoTransparent.png'
import { DoctoraliaIcon } from '@components/SocialIcon/DoctoraliaIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import { FacebookIcon } from '@components/SocialIcon/FacebookIcon'
import { usePathname } from 'next/navigation'
import { SocialIcons } from '@components/SocialIcons/SocialIcons'
import { WhatsappIcon } from '@components/SocialIcon/WhatsappIcon'

const socialLinks = [
  {
    href: 'https://www.facebook.com/carolina.almeidaramirez',
    icon: <FacebookIcon />,
  },
  {
    href: 'https://www.instagram.com/conutricionsaludable/',
    icon: <InstagramIcon />,
  },
  {
    href: 'https://www.doctoralia.es/carolina-almeida-ramirez/dietista-nutricionista/las-palmas-de-gran-canaria',
    icon: <DoctoraliaIcon />,
  },
  {
    href: 'https://api.whatsapp.com/send?phone=34665859643',
    icon: <WhatsappIcon color="#FFFFFF" />,
  },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const pathname = usePathname()
  const isBurgerIconWhite =
    pathname === '/' ||
    ((pathname.includes('/blog') ||
      pathname.includes('/tarifas') ||
      pathname.includes('/servicios')) &&
      !isOpen)

  return (
    <>
      <button
        onClick={toggle}
        className={`burger ${isOpen ? 'open' : ''}`}
        id="burger"
      >
        <span
          className={`burger__span ${
            isBurgerIconWhite && 'burger__span-white'
          }`}
        ></span>
        <span
          className={`burger__span ${
            isBurgerIconWhite && 'burger__span-white'
          }`}
        ></span>
        <span
          className={`burger__span ${
            isBurgerIconWhite && 'burger__span-white'
          }`}
        ></span>
        <span
          className={`burger__span ${
            isBurgerIconWhite && 'burger__span-white'
          }`}
        ></span>
      </button>
      <div className={isOpen ? 'nav' + ' ' + 'navOpen' : 'nav'}>
        <div className="navContent">
          <section className="navContent__leftSection">
            <Link href="/" className="navContent__logo">
              <Image
                src={navLogo}
                alt="Con Nutricion Saludable - Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <ul className="linksWrapper">
              <li>
                <Link className="link" href="/" onClick={toggle}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  href="/carolina-almeida-nutricionista"
                  onClick={toggle}
                >
                  Conóceme
                </Link>
              </li>
              <li>
                <Link className="link" href="/blog" onClick={toggle}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="link" href="/#servicios" onClick={toggle}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link className="link" href="/tarifas" onClick={toggle}>
                  Tarifas
                </Link>
              </li>
              <li>
                <Link className="link" href="/contacto" onClick={toggle}>
                  Contacto
                </Link>
              </li>
            </ul>
          </section>
          <div className="navContent__social">
            <SocialIcons socialLinks={socialLinks} />
          </div>
        </div>
      </div>
    </>
  )
}
