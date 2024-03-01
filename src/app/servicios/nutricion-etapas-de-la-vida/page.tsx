import Header from '@components/Header/Header'
import type { Metadata } from 'next'
import TextBlock from '@components/TextBlock/TextBlock'
import PictureSection from '@components/PictureSection/PictureSection'
import nutricionEtapasHeroImage from '@assets/pictures/etapas.webp'
import etapasSectionImage from '@assets/pictures/etapas2.jpg'

export const metadata: Metadata = {
  title: 'Tarifas | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default function NutricionDeColectividadesPage() {
  return (
    <>
      <Header
        title="Nutrición para todas las etapas de la vida"
        image={nutricionEtapasHeroImage}
      />
      <main className="main-layout">
        <PictureSection
          pictureSrc={etapasSectionImage}
          picturePosition="left"
          text={
            <TextBlock
              title="Nutrición para todas las etapas de la vida"
              children={
                <>
                  <ol>
                    <li>
                      <b>Alimentación infantil:</b> Los primeros años es una
                      etapa crucial de la vida ya que va a tener un gran impacto
                      sobre la salud, construyendo los pilares de la
                      alimentación en la etapa adulta. A través de la
                      alimentación se puede prevenir enfermedades futuras como
                      alergias, asmas, enfermedades cardiovasculares, diabetes,
                      etc. En esta etapa es importante animarlos a probar
                      diferentes alimentos para que experimenten a través de las
                      texturas, colores, sabores y olores las diferentes
                      sensaciones que les puede aportar dicho alimento.
                    </li>
                    <li>
                      <b>Alimentación en la adolescencia:</b> en esta etapa de
                      la vida, el individuo debe llegar a alcanzar,
                      prácticamente su crecimiento máximo por ello la
                      alimentación debe permitir un crecimiento adecuado
                      adaptándose a las diferentes necesidades según el ritmo o
                      velocidad de crecimiento, que es diferente en cada
                      adolescente.
                    </li>
                    <li>
                      <b>Alimentación durante la gestación:</b> el embarazo es
                      una etapa de la vida que requiere cubrir unas necesidades
                      nutricionales específicas, ya que desde el momento en que
                      la mujer queda embarazada se producen cambios en el
                      organismo, encaminados a lograr un crecimiento y
                      desarrollo fetales adecuados. En esta etapa las
                      necesidades nutricionales están aumentadas y condicionan
                      la salud de la madre y el niño.
                    </li>
                    <li>
                      <b>Alimentación durante la lactancia:</b> la calidad y la
                      duración de la lactancia materna depende tanto de las
                      reservas almacenadas durante la gestación como de la dieta
                      seguida por la madre durante la gestación y la lactancia.
                    </li>
                    <li>
                      <b>Alimentación en la menopausia:</b> es una etapa
                      importante en la vida de la mujer, se caracteriza por un
                      importante cambio hormonal, que conlleva varios cambios
                      fisiológicos naturales por ello es importante llevar unas
                      pautas de alimentación acorde a las circunstancias
                    </li>
                    <li>
                      <b>Alimentación en la edad avanzada:</b> son un grupo de
                      población con unos requerimientos nutricionales
                      específicos, debido a los cambios físicos y psicosociales
                      asociados al proceso de envejecimiento, así como al
                      aumento de las incidencias de enfermedades crónicas como
                      hipertensión, diabetes, cáncer, problemas cardiacos entre
                      otros
                    </li>
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
