'use client'

import './NutritionSections.scss'
import Image from 'next/image'
import nutricionPersonalizada from '@assets/pictures/nutricion-personalizada.jpg'
import nutricionColectividades from '@assets/pictures/nutricion-colectividades.jpg'

export const NutritionSections = () => {
  return (
    <section className="sections" id="servicios">
      <div className="sections__box sections__box1">
        <h1 className="sections__title">Nutrición Personalizada</h1>
        <div className="sections__content">
          <div className="sections__content-description">
            <h2>Nutrición Personalizada</h2>
            <p>
              Asesoramiento Nutricional para todas las etapas de la vida:
              Infancia, adolescencia, embarazo, edad adulta, menopausia, edad
              avanzada.
              <br />
              <br />
              Nutrición Clínica para obesidad, diabetes, hipertensión,
              alteraciones tiroideas, renales digestivas, hepáticas, alergias e
              intolerancias y otros.
            </p>
            <button>Saber más</button>
          </div>
        </div>
      </div>
      <div className="sections__box sections__box2">
        <h1 className="sections__title">Nutrición de Colectividades</h1>
        <div className="sections__content">
          <div className="sections__content-description">
            <h2>Nutrición de Colectividades</h2>
            <p>
              Elaboración de menús para comedores escolares, centros
              sociosanitarios y geriátricos de acuerdo a la legislación vigente.
              <br />
              <br />
              Asesoramiento en Seguridad Alimentaria: control higiénico
              sanitario de las instalaciones.
            </p>
            <button>Saber más</button>
          </div>
        </div>
      </div>
    </section>
  )
}
