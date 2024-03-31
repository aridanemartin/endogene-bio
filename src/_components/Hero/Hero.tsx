'use client'

import Image from 'next/image'
import React from 'react'
import uterusShape from '@assets/icons/uterus.svg'
import './Hero.scss'
import { useTranslation } from 'src/app/i18n/client'
import { Trans } from 'react-i18next'

const Hero = ({
  // textContent,

  lng,
}) => {
  const { t } = useTranslation(lng)

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
        <h2 className="hero__subtitle">
          <Trans
            t={t}
            i18nKey="HOME.slogan"
            defaults="Building a legacy in <strong>female health</strong>"
            components={{ strong: <strong /> }}
          />
        </h2>
      </div>
    </div>
  )
}

export default Hero
