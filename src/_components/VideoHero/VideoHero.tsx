'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import logo from '../../_assets/logos/endogeneLogo.svg'
import './VideoHero.scss'

export default function VideoHero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch((error) => {
        console.error('Error trying to play the video:', error)
      })
    }
  }, [])

  return (
    <div className="videoHero">
      <video ref={videoRef} muted autoPlay loop playsInline>
        <source src={`static/header.mp4`} type="video/mp4" />
        <source src={`static/header.webm`} type="video/webm" />
        <source src={`static/header.ogv`} type="video/ogg" />
      </video>

      <div className="videoHero__logo">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  )
}
