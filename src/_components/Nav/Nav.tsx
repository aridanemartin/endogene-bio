'use client'

import './Nav.scss'
import './Burger.scss'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

// images
import navLogo from '@assets/logos/endogeneLogo.svg'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'src/app/i18n/client'
import { useMediaQuery } from 'src/_hooks/useMediaQuery'
import { LanguageSelector } from '@components/LanguageSelector/LanguageSelector'

export default function Nav({ lng }: { lng: string }) {
  const { t, i18n } = useTranslation(lng)
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery(1100)
  const toggle = () => setIsOpen(!isOpen)
  const pathname = usePathname()
  const isBurgerIconWhite =
    (/\/blog\/.+/.test(pathname) || pathname.includes('terms-of-use')) &&
    !isOpen

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    const currentUrl = window.location.href
    const newUrl = currentUrl.replace(/\/(en|es|fr)(\/|$)/, `/${lng}$2`)
    window.location.href = newUrl
  }

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
          {/* a needs to be used here to avoid video bug when navigating */}
          <a href={`/${lng}`} className="navContent__logo" onClick={toggle}>
            <Image
              src={navLogo}
              alt="Endogene.Bio - Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </a>
          <motion.ul
            className="linksWrapper"
            initial={false}
            animate={isOpen || isDesktop ? 'open' : 'closed'}
            variants={variants}
          >
            <motion.li variants={linkAnimation}>
              <Link
                className={`link ${
                  pathname === `/${lng}/technology` ? 'active' : ''
                }`}
                href={`/${lng}/technology`}
                onClick={toggle}
              >
                {t('NAV.technology')}
              </Link>
            </motion.li>
            <motion.li variants={linkAnimation}>
              <Link
                className={`link ${
                  pathname === `/${lng}/team` ? 'active' : ''
                }`}
                href={`/${lng}/team`}
                onClick={toggle}
              >
                {t('NAV.team')}
              </Link>
            </motion.li>
            <motion.li variants={linkAnimation}>
              <Link
                className={`link ${
                  pathname === `/${lng}/blog` ? 'active' : ''
                }`}
                href={`/${lng}/blog`}
                onClick={toggle}
              >
                {t('NAV.news')}
              </Link>
            </motion.li>
            <motion.li variants={linkAnimation}>
              <Link
                className={`link ${
                  pathname === `/${lng}/join-us` ? 'active' : ''
                }`}
                href={`/${lng}/join-us`}
                onClick={toggle}
              >
                {t('NAV.join-us')}
              </Link>
            </motion.li>
            <motion.li variants={linkAnimation}>
              <Link
                className={`link specialLink`}
                href={`/${lng}/contact`}
                onClick={toggle}
              >
                {t('NAV.contact')}
              </Link>
            </motion.li>
            <motion.li variants={linkAnimation}>
              <LanguageSelector onChangeLanguage={changeLanguage} lng={lng} />
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </>
  )
}
