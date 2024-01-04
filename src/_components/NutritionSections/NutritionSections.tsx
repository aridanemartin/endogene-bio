'use client'

import './NutritionSections.scss'
import Link from 'next/link'
import { useIsMobile } from 'src/_hooks/useIsMobile'

export const NutritionSections = () => {
  const renderTitle = (title: string, href: string) => {
    const isMobile = useIsMobile()

    if (isMobile) {
      return (
        <Link href={href}>
          <h1 className="sections__title">{title}</h1>
        </Link>
      )
    } else {
      return <h2>{title}</h2>
    }
  }

  return (
    <section className="sections" id="servicios">
      <div className="sections__box sections__box1">
        {renderTitle('Nutrición Personalizada', '/nutricion-personalizada')}
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
            <Link href="/nutricion-personalizada">
              <button>Saber más</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sections__box sections__box2">
        {renderTitle(
          'Nutrición de Colectividades',
          '/nutricion-de-colectividades',
        )}
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
            <Link href="/nutricion-de-colectividades">
              <button>Saber más</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}