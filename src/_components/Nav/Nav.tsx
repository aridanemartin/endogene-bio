'use client'

import './Nav.scss'
import './Burger.scss'

import Link from 'next/link'
import Image from 'next/image'
import { use, useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// images
import navLogo from '@assets/logos/endogeneLogo.png'
import { FacebookIcon } from '@components/SocialIcon/FacebookIcon'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'src/app/i18n/client'
import { set } from 'sanity'
import { useMediaQuery } from 'src/_hooks/useMediaQuery'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/endogene-bio/',
    icon: <FacebookIcon />,
  },
]

export default function Nav({ lng }: { lng: string }) {
  const { t } = useTranslation(lng)
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery(1100)
  const toggle = () => setIsOpen(!isOpen)
  // const isBurgerIconWhite =
  //   (pathname.includes('/blog') ||
  //     pathname.includes('/tarifas') ||
  //     pathname.includes('/servicios') ||
  //     pathname === '/') &&
  //   !isOpen
  const isBurgerIconWhite = false

  const linkAnimation = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

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
          <Link href={`/${lng}`} className="navContent__logo">
            <Image
              src={navLogo}
              alt="Endogene.Bio - Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <motion.ul
            className="linksWrapper"
            initial={false}
            animate={isOpen || isDesktop ? 'open' : 'closed'}
            variants={variants}
          >
            <motion.li variants={linkAnimation}>
              <Link
                className="link"
                href={`/${lng}/technology`}
                onClick={toggle}
              >
                {t('NAV.technology')}
              </Link>
            </motion.li>
            <motion.li variants={linkAnimation}>
              <Link className="link" href={`/${lng}/team`} onClick={toggle}>
                Team
              </Link>
            </motion.li>
            <motion.li variants={linkAnimation}>
              <Link className="link" href={`/${lng}/blog`} onClick={toggle}>
                News
              </Link>
            </motion.li>

            <motion.li variants={linkAnimation}>
              <Link className="link" href={`/${lng}/contact`} onClick={toggle}>
                Contact
              </Link>
            </motion.li>
            <motion.li variants={linkAnimation}>
              <Link
                className="link joinUs"
                href={`/${lng}/join-us`}
                onClick={toggle}
              >
                Join Us
              </Link>
            </motion.li>
          </motion.ul>

          {/* <div className="navContent__social">
            <SocialIcons socialLinks={socialLinks} />
          </div> */}
        </div>
      </div>
    </>
  )
}
