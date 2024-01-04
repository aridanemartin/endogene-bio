import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-colectividades.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifas | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default function NutricionPersonalizadaPage() {
  return (
    <>
      <Header title="Tarifas" image={heroImage} />
      <main className="main-layout">
        <p>nutricionpersonalizada</p>
      </main>
    </>
  )
}
