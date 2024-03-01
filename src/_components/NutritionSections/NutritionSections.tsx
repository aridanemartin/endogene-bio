'use client'

import useIsMobile from 'src/_hooks/useIsMobile'
import './NutritionSections.scss'
import Link from 'next/link'

export const NutritionSections = () => {
  const renderTitle = (title: string, href: string) => {
    const isMobile = useIsMobile(768)

    if (isMobile) {
      return (
        <Link href={href}>
          <h2 className="sections__title">{title}</h2>
        </Link>
      )
    } else {
      return <h2>{title}</h2>
    }
  }

  return (
    <section className="sections">
      <div className="sections__box sections__box1">
        {renderTitle('Nutrición a Domicilio', '/nutricion-de-colectividades')}
        <div className="sections__content">
          <div className="sections__content-description">
            <h3>Nutrición a Domicilio</h3>
            <p>
              Elaboración de menús para comedores escolares, centros
              sociosanitarios y geriátricos de acuerdo a la legislación vigente.
              <br />
              <br />
              Asesoramiento en Seguridad Alimentaria: control higiénico
              sanitario de las instalaciones.
            </p>
            <Link href="servicios/nutricion-a-domicilio">
              <button>Saber más</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sections__box sections__box2">
        {renderTitle(
          'Nutrición en las diferentes etapas de la vida',
          'servicios/nutricion-etapas-de-la-vida',
        )}
        <div className="sections__content">
          <div className="sections__content-description">
            <h3>Nutrición en las diferentes etapas de la vida</h3>
            <p>
              Elaboración de menús para comedores escolares, centros
              sociosanitarios y geriátricos de acuerdo a la legislación vigente.
              <br />
              <br />
              Asesoramiento en Seguridad Alimentaria: control higiénico
              sanitario de las instalaciones.
            </p>
            <Link href="servicios/nutricion-etapas-de-la-vida">
              <button>Saber más</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sections__box sections__box3">
        {renderTitle(
          'Nutrición y Alteraciones Metabólicas',
          'servicios/nutricion-y-alteraciones-metabolicas',
        )}
        <div className="sections__content">
          <div className="sections__content-description">
            <h3>Nutrición y Alteraciones Metabólicas</h3>
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
            <Link href="servicios/nutricion-y-alteraciones-metabolicas">
              <button>Saber más</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sections__box sections__box4">
        {renderTitle(
          'Nutrición de Colectividades',
          'servicios/nutricion-de-colectividades',
        )}
        <div className="sections__content">
          <div className="sections__content-description">
            <h3>Nutrición de Colectividades</h3>
            <p>
              Elaboración de menús para comedores escolares, centros
              sociosanitarios y geriátricos de acuerdo a la legislación vigente.
              <br />
              <br />
              Asesoramiento en Seguridad Alimentaria: control higiénico
              sanitario de las instalaciones.
            </p>
            <Link href="servicios/nutricion-de-colectividades">
              <button>Saber más</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
