import React from 'react'
import Image, { StaticImageData } from 'next/image'
import logo from '../../_assets/logos/endogeneLogo.svg'
import './HeroTemplate.scss'

export default function HeroTemplate({ src }: { src: StaticImageData }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${src})` }}>
      <Image
        className="hero__background"
        src={src}
        alt="hero"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="hero__logo">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  )
}
