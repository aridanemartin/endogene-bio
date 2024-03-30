import { PriceCard } from '@components/PriceCard/PriceCard'
import React from 'react'
import '@styles/Tarifas.scss'

import { getPrices } from 'src/sanity/utils/sanity-querys'
import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/etapas2.webp'
import type { Metadata } from 'next'
import Headline from '@components/Headline/Headline'

export const metadata: Metadata = {
  title: 'Tarifas | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default async function Tarifas() {
  const tarifas = await getPrices('nutricionEtapasDeLaVidaPrices')

  function sortByPrice(tarifas) {
    return tarifas.sort(function (a, b) {
      return a.order - b.order
    })
  }

  const sortedTarifas = sortByPrice(tarifas)

  return (
    <>
      <Header
        title="Tarifas: Nutrición en las etapas de la vida"
        image={heroImage}
      />
      <main className="main-layout">
        <Headline
          title="Nutrición en las Etapas de la Vida"
          subtitle="La alimentación a lo largo de la vida es crucial, desde la infancia hasta la edad avanzada, influyendo en la salud a través de la prevención de enfermedades y adaptándose a las necesidades específicas de cada etapa, como el crecimiento en la adolescencia, los cambios durante la gestación y lactancia, la menopausia y los requerimientos nutricionales en la edad avanzada."
        />
        <div className="priceCardContainer">
          {sortedTarifas.map((tarifa) => (
            <PriceCard
              key={tarifa._id}
              title={tarifa.title}
              description={tarifa.description}
              price={tarifa.price}
              priceDiscount={tarifa.priceDiscount}
              icon={tarifa.icon}
            />
          ))}
        </div>
      </main>
    </>
  )
}
