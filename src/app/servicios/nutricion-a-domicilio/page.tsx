import Header from '@components/Header/Header'
import type { Metadata } from 'next'
import TextBlock from '@components/TextBlock/TextBlock'
import PictureSection from '@components/PictureSection/PictureSection'
import nutricionADomicilioHero from '@assets/pictures/nutricion-a-domicilio.webp'
import nutricionADomicilioSectionImage2 from '@assets/pictures/healthyJar.webp'
import nutricionADomicilioSectionImage from '@assets/pictures/nutricion-personalizada-hero.webp'

export const metadata: Metadata = {
  title: 'Nutrición a domicilio | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default function NutricionADomicilio() {
  return (
    <>
      <Header title="Nutrición a domicilio" image={nutricionADomicilioHero} />
      <main className="main-layout">
        <PictureSection
          pictureSrc={nutricionADomicilioSectionImage}
          picturePosition="right"
          text={
            <TextBlock
              title="Nutrición a domicilio"
              children={
                <>
                  <p>
                    Con el servicio de nutrición a domicilio la dietista
                    nutricionista podrá conocer el entorno donde te alimentas
                    para así poder tener una visión más completa de ti. De esta
                    manera y acorde a tus circunstancias personales iremos
                    trabajando diferentes aspectos de la alimentación sin tener
                    como foco central el peso.
                  </p>
                  <p>
                    <b>
                      ¿Qué conseguirás teniendo el servicio de nutrición en tu
                      propio domicilio o tu entorno habitual?
                    </b>
                  </p>

                  <p>
                    Un tratamiento más personalizado con enfoque completo de tu
                    alimentación, ya que podremos analizar que almacenas en tu
                    despensa y/o nevera, como lo guardas, dónde preparas los
                    alimentos y dónde comes, todos estos aspectos son muy
                    importante para que puedas alcanzar tus objetivos de forma
                    saludable.
                  </p>
                  <p>
                    Tras la primera visita que ya habremos conocido el entorno
                    donde te alimentas y te habremos realizaremos un estudio
                    nutricional de tus costumbres y evaluación de la composición
                    corporal mediante bioimpedancia y plicómetro para conocer tu
                    contenido en grasa, musculo, agua ,grasa visceral y otros
                    componentes, marcaremos juntos unos objetivos y trazaremos
                    un plan de acción para alcanzarlos.
                  </p>
                </>
              }
            />
          }
        />
        <PictureSection
          pictureSrc={nutricionADomicilioSectionImage2}
          picturePosition="left"
          text={
            <TextBlock
              title="¿Sobre qué objetivos trabajaremos?"
              children={
                <>
                  <ol>
                    <li>
                      Sobre una dieta variada, equilibrada siguiendo los
                      patrones de la dieta mediterránea, adaptada a tu estilo de
                      vida
                    </li>
                    <li>
                      Como te relacionas con la comida y mitos sobre la
                      alimentación.
                    </li>
                    <li>
                      Hábitos saludables siguiendo el ciclo circadiano desde que
                      te levantas hasta que te cuestas como horas de sueño,
                      ejercicio físico y actividad física, horarios de comida…
                    </li>
                    <li>
                      Aprenderás cómo ordenar el frigorífico, veremos qué
                      productos son más saludables.
                    </li>
                    <li>
                      Como realizar la compra de forma más eficaz y sacándole el
                      mayor partido a tu cesta de la compra.
                    </li>
                    <li>
                      Sabrás leer el etiquetado de los alimentos, diferenciando
                      aquellos productos de mayor calidad nutricional.
                    </li>
                    <li>
                      Conocerás pequeños trucos para cocinar de forma rápida,
                      sana y equilibrada.
                    </li>
                    <li>
                      Conseguirás elaborar tu propio plan de alimentación.
                    </li>
                  </ol>
                  <p>
                    En cada sesión se irán trabajando los diferentes aspectos de
                    la alimentación de forma dinámica y se evaluara la
                    composición corporal.
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
