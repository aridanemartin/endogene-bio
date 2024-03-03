'use client'

import useIsMobile from 'src/_hooks/useIsMobile'
import './NutritionSections.scss'
import Link from 'next/link'

export const NutritionSections = ({ isTarifas }: { isTarifas?: boolean }) => {
  const serviciosOTarifas = isTarifas ? '/tarifas' : '/servicios'
  const isMobile = useIsMobile(768)
  const shouldDisplayContent = !isTarifas && !isMobile

  return (
    <section className="sections">
      <Link
        href={`${serviciosOTarifas}/nutricion-a-domicilio`}
        className={`sections__box sections__box1 ${
          isTarifas || isMobile ? 'disable-hover' : ''
        }`}
      >
        <h2>Nutrición a Domicilio</h2>
        {shouldDisplayContent && (
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

              <button>Saber más</button>
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
        <h2>Nutrición en las diferentes etapas de la vida</h2>{' '}
        {shouldDisplayContent && (
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

              <button>Saber más</button>
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
        <h2>Nutrición y Alteraciones Metabólicas</h2>
        {shouldDisplayContent && (
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

              <button>Saber más</button>
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
        <h2>Nutrición de Colectividades</h2>
        {shouldDisplayContent && (
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

              <button>Saber más</button>
            </div>
          </div>
        )}
      </Link>
    </section>
  )
}
