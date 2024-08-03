import React from 'react'
import Image, { StaticImageData } from 'next/image'
import logo from '../../_assets/logos/endogeneLogo.svg'
import './VideoHero.scss'

export default function VideoHero() {
  return (
    <div className="videoHero">
      <video muted autoPlay loop playsInline src={`static/header.mp4`} />
      <div className="videoHero__logo">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  )
}
