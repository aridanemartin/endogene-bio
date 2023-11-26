'use client'

import { useState } from 'react'
import './SectionsPreview.scss'
import Image from 'next/image'
import heroImage from '@assets/pictures/carolinaProfileSquare.jpg'
import nutricionPersonalizada from '@assets/pictures/nutricion-personalizada.jpg'
import nutricionColectividades from '@assets/pictures/nutricion-colectividades.jpg'

export const SectionsPreview = () => {
  const [isVisible, setIsVisible] = useState({
    tab1: true,
    tab2: false,
  })

  function handleVisible() {
    setIsVisible({
      tab1: !isVisible.tab1,
      tab2: !isVisible.tab2,
    })
  }

  function handleAddRemoveClass() {
    const className = 'tabs__image-visible'
    if (isVisible.tab1) {
      return className
    }
    return ''
  }

  return (
    <section className="tabs" id="servicios">
      <h1 className="tabs__title tabs__title1" onMouseEnter={handleVisible}>
        Nutrición Personalizada
      </h1>
      <p
        className={`tabs__description1 ${
          isVisible.tab1 ? 'tabs__description1-visible' : ''
        }`}
      >
        Asesoramiento Nutricional para todas las etapas de la vida: Infancia,
        adolescencia, embarazo, edad adulta, menopausia, edad avanzada.
        <br />
        <br />
        Nutrición Clínica para obesidad, diabetes, hipertensión, alteraciones
        tiroideas, renales digestivas, hepáticas, alergias e intolerancias y
        otros.
      </p>
      <h1 className="tabs__title tabs__title2" onMouseEnter={handleVisible}>
        Nutrición de Colectividades
      </h1>
      <p
        className={`tabs__description2 ${
          isVisible.tab2 ? 'tabs__description2-visible' : ''
        }`}
      >
        Elaboración de menús para comedores escolares, centros sociosanitarios y
        geriátricos de acuerdo a la legislación vigente.
        <br />
        <br />
        Asesoramiento en Seguridad Alimentaria: control higiénico sanitario de
        las instalaciones.
      </p>
      <div
        className={`tabs__image ${isVisible.tab1 ? 'tabs__image-visible' : ''}`}
      >
        <Image src={nutricionPersonalizada} alt="lala" fill />
      </div>
      <div
        className={`tabs__image ${isVisible.tab2 ? 'tabs__image-visible' : ''}`}
      >
        <Image src={nutricionColectividades} alt="lala" fill />
      </div>
    </section>
  )
}
