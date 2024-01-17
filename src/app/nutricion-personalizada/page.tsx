import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-personalizada-hero.webp'
import etapasImage from '@assets/pictures/etapas.webp'
import nutricionClinicaImage from '@assets/pictures/nutricion-clinica.webp'
import type { Metadata } from 'next'
import PictureSection from '@components/PictureSection/PictureSection'
import TextBlock from '@components/TextBlock/TextBlock'

export const metadata: Metadata = {
  title: 'Nutrición Personalizada | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas - obesidad, diabetes, alteraciones digestivas, hepáticas, renales, cardiovasculares, alergias e intolerancias, entre otras.',
}

export default function NutricionPersonalizadaPage() {
  return (
    <>
      <Header title="Nutrición Personalizada" image={heroImage} />
      <main className="main-layout">
        <PictureSection
          pictureSrc={etapasImage}
          picturePosition="left"
          text={
            <TextBlock
              title="Nutrición para todas las etapas de la vida"
              children={
                <>
                  <p>
                    Ofrecemos servicios de nutrición personalizados para todas
                    las etapas de la vida. Desde la infancia hasta la edad
                    avanzada, reconocemos la importancia de una alimentación
                    equilibrada.
                  </p>
                  <p>
                    Nos enfocamos en la nutrición infantil para asegurar un
                    desarrollo saludable desde los primeros años y ofrecemos
                    orientación nutricional adaptada a las necesidades
                    específicas de los adolescentes.
                  </p>
                  <p>
                    En la edad adulta, nos centramos en alcanzar y mantener un
                    peso saludable y abordar cualquier desafío nutricional
                    individual.
                  </p>
                  <p>
                    Durante el embarazo y la lactancia, proporcionamos
                    asesoramiento nutricional crucial para garantizar un óptimo
                    desarrollo fetal y el bienestar de la madre. Para las
                    mujeres que atraviesan la menopausia, ofrecemos estrategias
                    nutricionales para gestionar cambios hormonales y promover
                    la salud ósea y cardiovascular.
                  </p>
                  <p>
                    En la edad avanzada, nos adaptamos a las necesidades
                    cambiantes del cuerpo, priorizando la nutrición para
                    mantener la vitalidad y prevenir enfermedades asociadas con
                    el envejecimiento.
                  </p>
                </>
              }
            />
          }
        />
        <PictureSection
          pictureSrc={nutricionClinicaImage}
          picturePosition="right"
          text={
            <TextBlock
              title="Nutrición Clínica"
              children={
                <>
                  <p>
                    proporcionar apoyo integral para condiciones como obesidad,
                    diabetes, alteraciones digestivas, hepáticas, renales,
                    cardiovasculares, alergias e intolerancias, entre otras.
                  </p>
                  <p>
                    Para aquellos lidiando con la obesidad, trabajamos en la
                    creación de planes nutricionales específicos, promoviendo
                    cambios de estilo de vida sostenibles para alcanzar y
                    mantener un peso saludable. En el caso de la diabetes,
                    desarrollamos estrategias nutricionales que ayudan a
                    controlar los niveles de azúcar en la sangre, mejorando la
                    calidad de vida.
                  </p>
                  <p>
                    Para las alteraciones digestivas, hepáticas y renales,
                    adaptamos nuestro enfoque nutricional para proporcionar
                    alivio y mejorar la función orgánica. En condiciones
                    cardiovasculares, nos centramos en reducir factores de
                    riesgo a través de pautas alimenticias que favorezcan la
                    salud del corazón. Además, ofrecemos orientación para
                    gestionar alergias e intolerancias, garantizando una dieta
                    equilibrada y libre de complicaciones.
                  </p>
                  <p>
                    En nuestro consultorio, nos comprometemos a trabajar contigo
                    para abordar tus necesidades específicas de salud,
                    proporcionando orientación nutricional efectiva y
                    personalizada. Tu bienestar es nuestra prioridad, y estamos
                    aquí para ayudarte a alcanzar una salud óptima a través de
                    prácticas nutricionales adecuadas.
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
