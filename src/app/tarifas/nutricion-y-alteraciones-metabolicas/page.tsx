import { PriceCard } from '@components/PriceCard/PriceCard'
import React from 'react'
import '@styles/Tarifas.scss'

import { getPrices } from 'src/sanity/utils/sanity-querys'
import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutrition-yellow.jpg'
import type { Metadata } from 'next'
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
      return a.price - b.price
    })
  }

  const sortedTarifas = sortByPrice(tarifas)

  return (
    <>
      <Header
        title="Tarifas: Nutrición y alteraciones metabólicas"
        image={heroImage}
      />
      <main className="main-layout">
        <Headline
          title="Nutrición y alteraciones metabólicas"
          subtitle="La alimentación es un pilar fundamental en el tratamiento de enfermedades metabólicas, como la diabetes, la obesidad, la hipercolesterolemia, la hipertensión, entre otras."
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
