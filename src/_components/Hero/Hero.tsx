import Image from 'next/image'
import React from 'react'
import uterusShape from '../../_assets/icons/uterus.svg'
import './Hero.scss'

const Hero = () => {
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
          Personalizing the future of <strong>endometriosis</strong> management
          to empower <strong>women</strong>, physicians and the pharma industry.
        </h2>
      </div>
    </div>
  )
}

export default Hero
