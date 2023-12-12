import { PriceCard } from '@components/PriceCard/PriceCard'
import React from 'react'
import '@styles/Tarifas.scss'

import { getPrices } from 'src/sanity/utils/sanity-querys'
import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-colectividades.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifas | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default async function Tarifas() {
  const tarifas = await getPrices()

  function sortByPrice(tarifas) {
    return tarifas.sort(function (a, b) {
      return a.price - b.price
    })
  }

  const sortedTarifas = sortByPrice(tarifas)

  return (
    <>
      <Header title="Tarifas" image={heroImage} />
      <main className="main-layout">
        <div className="priceCardContainer">
          {sortedTarifas.map((tarifa) => (
            <PriceCard
              key={tarifa._id}
              title={tarifa.title}
              description={tarifa.description}
              price={tarifa.price}
              priceDiscount={tarifa.priceDiscount}
              duration={tarifa.duration}
              icon={tarifa.icon}
            />
          ))}
        </div>
      </main>
    </>
  )
}
