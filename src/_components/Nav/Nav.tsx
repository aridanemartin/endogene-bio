'use client'

import './Nav.scss'
import './Burger.scss'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// images
import navLogo from '@assets/logos/endogeneLogo.png'
import { DoctoraliaIcon } from '@components/SocialIcon/DoctoraliaIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import { FacebookIcon } from '@components/SocialIcon/FacebookIcon'
import { usePathname } from 'next/navigation'
import { SocialIcons } from '@components/SocialIcons/SocialIcons'
import { WhatsappIcon } from '@components/SocialIcon/WhatsappIcon'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/endogene-bio/',
    icon: <FacebookIcon />,
  },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const pathname = usePathname()
  // const isBurgerIconWhite =
  //   (pathname.includes('/blog') ||
  //     pathname.includes('/tarifas') ||
  //     pathname.includes('/servicios') ||
  //     pathname === '/') &&
  //   !isOpen
  const isBurgerIconWhite = false

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
              <Link className="link" href="/technology" onClick={toggle}>
                Technology
              </Link>
            </li>
            <li>
              <Link className="link" href="/team" onClick={toggle}>
                Team
              </Link>
            </li>
            <li>
              <Link className="link" href="/blog" onClick={toggle}>
                News
              </Link>
            </li>

            <li>
              <Link className="link" href="/contact" onClick={toggle}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="link joinUs" href="/join-us" onClick={toggle}>
                Join Us
              </Link>
            </li>
          </ul>

          {/* <div className="navContent__social">
            <SocialIcons socialLinks={socialLinks} />
          </div> */}
        </div>
      </div>
    </>
  )
}
