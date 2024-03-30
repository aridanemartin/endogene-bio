import Image from 'next/image'
import React from 'react'
import uterusShape from '@assets/icons/uterus.svg'
import './Hero.scss'
import { useTranslation } from 'src/app/i18n/client'
import { Trans } from 'react-i18next'

const Hero = ({ textContent }) => {
  return (
    <div className="hero">
      <div className="hero__content">
        <Image
          src={uterusShape}
          alt="uterus shape"
          quality={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="hero__text-content">
        <h1 className="hero__title">EndoGene.Bio</h1>
        <h2 className="hero__subtitle">{textContent}</h2>
      </div>
    </div>
  )
}

export default Hero
