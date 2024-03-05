import { PriceCard } from '@components/PriceCard/PriceCard'
import React from 'react'
import '@styles/Tarifas.scss'

import { getPrices } from 'src/sanity/utils/sanity-querys'
import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-colectividades.webp'
import type { Metadata } from 'next'
import { NutritionSections } from '@components/NutritionSections/NutritionSections'
import Headline from '@components/Headline/Headline'

export const metadata: Metadata = {
  title: 'Tarifas | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default async function Tarifas() {
  const tarifas = await getPrices('nutricionAlteracionesMetabolicasPrices')

  function sortByPrice(tarifas) {
    return tarifas.sort(function (a, b) {
      return a.order - b.order
    })
  }

  const sortedTarifas = sortByPrice(tarifas)

  return (
    <>
      <Header title="Tarifas" image={heroImage} />
      <main className="main-layout">
        <Headline
          title="Tarifas"
          subtitle="Haz clic en cualquiera de nuestros servicios y accede a las diferentes tarifas y bonos de sesiones. Si tienes alguna duda, no dudes en hacerlo a través de nuestro formulario de contacto."
          id="servicios"
        />
        <NutritionSections isTarifas />
      </main>
    </>
  )
}
