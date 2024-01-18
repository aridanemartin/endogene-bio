import React from 'react'
import Image from 'next/image'
import heroImage from '@assets/pictures/carolinaProfileSquare.jpg'

import './HeroTemplate.scss'
import Link from 'next/link'

export default function HeroTemplate() {
  return (
    <div className="hero">
      <div className="hero__image">
        <Image src={heroImage} alt="hero" fill objectFit="cover" />
      </div>
      <div className="hero__text-content">
        <h1>
          Bienvenido a <br />
          <strong>Con Nutrición Saludable</strong>
        </h1>
        <h2>
          ¡Bienvenidos al mundo de la nutrición consciente! Te invitamos a
          descubrir cómo nuestras soluciones personalizadas pueden mejorar tu
          salud y bienestar.
        </h2>
        <p>
          Haz clic ahora para empezar tu viaje hacia una vida más saludable.
        </p>
        <Link href="/contacto" className="Button">
          <button className="hero__button">Concertar cita</button>
        </Link>
      </div>
    </div>
  )
}
