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

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        onClick={toggle}
        className={`burger ${isOpen ? 'open' : ''}`}
        id="burger"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
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
              <li onClick={toggle}>
                <Link className="link" href="/">
                  Inicio
                </Link>
              </li>
              <li onClick={toggle}>
                <Link className="link" href="/carolina-almeida-nutricionista">
                  Conóceme
                </Link>
              </li>
              <li onClick={toggle}>
                <Link className="link" href="/blog">
                  Blog
                </Link>
              </li>
              <li onClick={toggle}>
                <Link className="link" href="/servicios">
                  Servicios
                </Link>
              </li>
              <li onClick={toggle}>
                <Link className="link" href="/tarifas">
                  Tarifas
                </Link>
              </li>
              <li onClick={toggle}>
                <Link className="link" href="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </section>
          <div className="navContent__social">
            <div className="socialIcon">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
