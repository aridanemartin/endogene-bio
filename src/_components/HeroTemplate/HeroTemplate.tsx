import React from 'react'
import Image from 'next/image'
import heroImage from '@assets/pictures/carolinaProfileSquare.jpg'

import './HeroTemplate.scss'

export default function HeroTemplate() {
  return (
    <div className="hero">
      <div className="hero__text-content">
        <h1>
          Bienvenido a <strong>Con Nutrición Saludable</strong>
        </h1>
        <h2>
          ¡Bienvenidos al mundo de la nutrición consciente! Te invitamos a
          descubrir cómo nuestras soluciones personalizadas pueden mejorar tu
          salud y bienestar.
        </h2>
        <p>
          Haz clic ahora para empezar tu viaje hacia una vida más saludable.
        </p>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={heroImage} alt="hero" fill />
        </div>
      </div>
    </div>
  )
}
