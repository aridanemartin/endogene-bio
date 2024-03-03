'use client'

import useIsMobile from 'src/_hooks/useIsMobile'
import './NutritionSections.scss'
import Link from 'next/link'

export const NutritionSections = ({ isTarifas }: { isTarifas?: boolean }) => {
  const serviciosOTarifas = isTarifas ? '/tarifas' : '/servicios'
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
      <Link
        href={`${serviciosOTarifas}/nutricion-a-domicilio`}
        className={`sections__box sections__box1 ${
          isTarifas ? 'disable-hover' : ''
        }`}
      >
        {renderTitle(
          'Nutrición a Domicilio',
          `${serviciosOTarifas}/nutricion-a-domicilio`,
        )}
        {!isTarifas && (
          <div className="sections__content">
            <div className="sections__content-description">
              <div className="sections__content-text">
                <h3>Nutrición a Domicilio</h3>
                <p>
                  El servicio de nutrición a domicilio ofrece asesoramiento
                  personalizado, evaluación de la composición corporal y
                  planificación de objetivos saludables en el entorno del
                  cliente.
                </p>
              </div>
              <Link href={`${serviciosOTarifas}/nutricion-a-domicilio`}>
                <button>Saber más</button>
              </Link>
            </div>
          </div>
        )}
      </Link>
      <Link
        href={`${serviciosOTarifas}/nutricion-etapas-de-la-vida`}
        className={`sections__box sections__box2 ${
          isTarifas ? 'disable-hover' : ''
        }`}
      >
        {renderTitle(
          'Nutrición en las diferentes etapas de la vida',
          `${serviciosOTarifas}/nutricion-etapas-de-la-vida`,
        )}
        {!isTarifas && (
          <div className="sections__content">
            <div className="sections__content-description">
              <div className="sections__content-text">
                <h3>Nutrición en las diferentes etapas de la vida</h3>
                <p>
                  Este servicio abarca todas las etapas de la vida, desde la
                  alimentación infantil hasta la edad avanzada, adaptándose a
                  las necesidades específicas de cada fase y previniendo
                  enfermedades futuras.
                </p>
              </div>
              <Link href={`${serviciosOTarifas}/nutricion-etapas-de-la-vida`}>
                <button>Saber más</button>
              </Link>
            </div>
          </div>
        )}
      </Link>
      <Link
        href={`${serviciosOTarifas}/nutricion-y-alteraciones-metabolicas`}
        className={`sections__box sections__box3 ${
          isTarifas ? 'disable-hover' : ''
        }`}
      >
        {renderTitle(
          'Nutrición y Alteraciones Metabólicas',
          `${serviciosOTarifas}/nutricion-y-alteraciones-metabolicas`,
        )}
        {!isTarifas && (
          <div className="sections__content">
            <div className="sections__content-description">
              <div className="sections__content-text">
                <h3>Nutrición y Alteraciones Metabólicas</h3>
                <p>
                  El servicio aborda el síndrome metabólico, relacionado con
                  obesidad, diabetes y enfermedad cardiovascular, destacando
                  cinco características clave, y enfatiza la importancia de la
                  alimentación consciente para mantener la salud.
                </p>
              </div>
              <Link
                href={`${serviciosOTarifas}/nutricion-y-alteraciones-metabolicas`}
              >
                <button>Saber más</button>
              </Link>
            </div>
          </div>
        )}
      </Link>
      <Link
        href={`${serviciosOTarifas}/nutricion-de-colectividades`}
        className={`sections__box sections__box4 ${
          isTarifas ? 'disable-hover' : ''
        }`}
      >
        {renderTitle(
          'Nutrición de Colectividades',
          `${serviciosOTarifas}/nutricion-de-colectividades`,
        )}
        {!isTarifas && (
          <div className="sections__content">
            <div className="sections__content-description">
              <div className="sections__content-text">
                <h3>Nutrición de Colectividades</h3>
                <p>
                  Cumpliendo la Ley 17/2011: Menús equilibrados, fichas
                  técnicas, valoración nutricional, recomendaciones para cenas,
                  desayunos y meriendas. Incluye menús adaptados (alergias,
                  intolerancias, patologías, vegetarianos/veganos) y formación.
                </p>
              </div>
              <Link href={`${serviciosOTarifas}/nutricion-de-colectividades`}>
                <button>Saber más</button>
              </Link>
            </div>
          </div>
        )}
      </Link>
    </section>
  )
}
