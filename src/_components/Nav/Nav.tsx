'use client'

import './Nav.scss'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// images
import navLogo from '@assets/logos/carolinaLogoTransparent.png'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        onClick={toggle}
        className={!isOpen ? 'burger' : 'burger' + ' ' + 'open'}
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
                <Link
                  className="link"
                  href="/equipo/dr-julian-tamayo-endocrino"
                >
                  Conóceme
                </Link>
              </li>
              <li onClick={toggle}>
                <Link className="link" href="/blog">
                  Blog
                </Link>
              </li>
              <li onClick={toggle}>
                <Link className="link" href="/equipo">
                  Servicios
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
                href="https://www.facebook.com/juliantamayoendocrino/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="100%"
                  height="100%"
                >
                  {' '}
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
                </svg>
              </Link>
            </div>
            <div className="socialIcon">
              <Link
                href="https://www.instagram.com/connutricionsaludable/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                >
                  {' '}
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                </svg>
              </Link>
            </div>
            <div className="socialIcon">
              <Link
                href="https://www.doctoralia.es/carolina-almeida-ramirez/dietista-nutricionista/las-palmas-de-gran-canaria"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="100%"
                  height="100%"
                >
                  <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
