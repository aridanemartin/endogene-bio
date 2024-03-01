import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/menu.jpg'
import etapasImage from '@assets/pictures/etapas.webp'
import type { Metadata } from 'next'
import PictureSection from '@components/PictureSection/PictureSection'
import TextBlock from '@components/TextBlock/TextBlock'

export const metadata: Metadata = {
  title:
    'Nutrición y Alteraciones Metabólicas | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas - obesidad, Hiperglucemia y/o hiperinsulinemia,HDLc bajo,Trigliceridos elevados,Hipertensión, entre otras.',
}

export default function NutricionYAlteracionesMetabolicas() {
  return (
    <>
      <Header title="Nutrición y Alteraciones Metabólicas" image={heroImage} />
      <main className="main-layout">
        <PictureSection
          pictureSrc={etapasImage}
          picturePosition="left"
          text={
            <TextBlock
              title="Nutrición y Alteraciones Metabólicas"
              children={
                <>
                  <p>
                    El síndrome metabólico hace mención de la asociación que
                    existe entre obesidad, diabetes y enfermedad cardiovascular
                    e hipertensión. El síndrome metabólico está involucrado en
                    el desarrollo de la diabetes tipo 2, hipertensión arterial,
                    infartos cerebrales, gota, etc.…enfermedades crónicas con
                    elevada prevalencia en nuestra sociedad actual.
                  </p>
                  <p>
                    Aunque hay distintas clasificaciones y definiciones, todas
                    coinciden en 5 características, inducida por la
                    hiperinsulinemia mantenida de forma crónica
                  </p>
                  <ol>
                    <li>Obesidad</li>
                    <li>Hiperglucemia y/o hiperinsulinemia</li>
                    <li>HDLc bajo</li>
                    <li>Trigliceridos elevados</li>
                    <li>Hipertensión</li>
                  </ol>
                  <p>
                    No te fíes por el aspecto físico, cualquier persona sin
                    aparentarlo puede padecer síndrome metabólico. Una persona
                    delgada puede cumplir 3 de las 5 características y tener
                    riesgo de desarrollar complicaciones secundarias mucho más
                    elevadas que una persona con obesidad y ningún criterio más.
                  </p>
                  <p>
                    Es importante conocerlo para poder diagnosticarlo y así
                    tratar las posibles complicaciones, ya que su prevalencia es
                    elevada en todos los países desarrollados en los que la
                    mayoría de las personas están sobrealimentados, pero mal
                    nutridos. Es la razón fundamental por la que planificar
                    nuestra alimentación de forma consciente y detallada,
                    eligiendo alimentos poco procesados, rico en nutrientes
                    esenciales y combinándolos de forma adecuada es fundamental
                    para un correcto estado de salud.
                  </p>
                </>
              }
            />
          }
        />
      </main>
    </>
  )
}
