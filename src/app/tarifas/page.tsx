import { PriceCard } from '@components/PriceCard/PriceCard'
import React from 'react'
import '@styles/Tarifas.scss'

import { getPrices } from 'src/sanity/utils/sanity-querys'
import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-colectividades.jpg'

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
