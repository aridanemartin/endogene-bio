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
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const pathname = usePathname()
  const isBurgerIconWhite =
    (pathname.includes('/blog') || pathname.includes('/tarifas')) && !isOpen

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
            <div className="navContent__logo">
              <Image
                src={navLogo}
                alt="Con Nutricion Saludable - Logo"
                fill
                objectFit="contain"
              />
            </div>
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

            {/* <div className="socialIcon">
              <Link
                href="https://www.facebook.com/carolina.almeidaramirez"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </Link>
            </div>
            <div className="socialIcon">
              <Link
                href="https://www.instagram.com/connutricionsaludable/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </Link>
            </div>
            <div className="socialIcon">
              <Link
                href="https://www.doctoralia.es/carolina-almeida-ramirez/dietista-nutricionista/las-palmas-de-gran-canaria"
                target="_blank"
                rel="noreferrer"
              >
                <DoctoraliaIcon />
              </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}
