import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-colectividades.jpg'
import type { Metadata } from 'next'
import TextBlock from '@components/TextBlock/TextBlock'
import PictureSection from '@components/PictureSection/PictureSection'
import nutricionColectividadesHeroImage from '@assets/pictures/healthy-buffet.webp'
import etapasImage from '@assets/pictures/healthy-buffet-2.webp'
import controlHigienicoSanitarioImage from '@assets/pictures/healthyJar.webp'

export const metadata: Metadata = {
  title: 'Tarifas | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default function NutricionDeColectividadesPage() {
  return (
    <>
      <Header
        title="Nutrición De Colectividades"
        image={nutricionColectividadesHeroImage}
      />
      <main className="main-layout">
        <PictureSection
          pictureSrc={controlHigienicoSanitarioImage}
          picturePosition="right"
          text={
            <TextBlock
              title="Control Higiénico-Sanitario"
              children={
                <>
                  <p>
                    Ofrecemos un servicio integral de control
                    higiénico-sanitario que abarca diversos aspectos para
                    garantizar la seguridad alimentaria y la calidad en la
                    manipulación de alimentos. Algunos de nuestros servicios
                    incluyen:
                  </p>

                  <ol>
                    <li>Control higiénico-sanitario en cocinas.</li>
                    <li>
                      Implantación de APPCC (Análisis de Peligros y Puntos
                      Críticos de Control).
                    </li>
                    <li>Auditorías.</li>
                    <li>Manual de Buenas Prácticas de Manipulación.</li>
                    <li>Formación.</li>
                  </ol>
                </>
              }
            />
          }
        />
      </main>
    </>
  )
}
