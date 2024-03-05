import Header from '@components/Header/Header'
import type { Metadata } from 'next'
import TextBlock from '@components/TextBlock/TextBlock'
import PictureSection from '@components/PictureSection/PictureSection'
import nutricionColectividadesHeroImage from '@assets/pictures/blog3.webp'
import controlHigienicoSanitarioImage from '@assets/pictures/nutricion-colectividades.webp'
// @assets/pictures/nutricion-colectividades.webp
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
              title="Nutrición De Colectividades"
              children={
                <>
                  <p>
                    De acuerdo con la legislación vigente Ley 17/2011, de 5 de
                    julio, de seguridad alimentaria y nutrición, se llevará a
                    cabo
                  </p>

                  <ol>
                    <li>
                      Elaboración y validación de menús equilibrados basados en
                      productos de temporada adaptados a cada etapa.
                    </li>
                    <li>Fichas técnicas.</li>
                    <li>
                      Valoración nutricional (calorías, proteínas, lípidos,
                      hidratos de carbono).
                    </li>
                    <li>
                      Recomendaciones de cenas y propuesta de desayunos y
                      meriendas saludables.
                    </li>
                    <li>
                      Derivaciones de menús para necesidades especiales:
                      alergias, intolerancias alimentarias y patologías
                      infantiles.
                    </li>
                    <li>
                      Plan de menús adaptados según alternativas alimentarias:
                      menús vegetarianos, veganos...
                    </li>
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
