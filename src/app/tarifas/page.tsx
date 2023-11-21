import { PriceCard } from '@components/PriceCard/PriceCard'
import React from 'react'
import '@styles/Tarifas.scss'

import { getPrices } from 'src/sanity/utils/sanity-querys'
import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-colectividades.jpg'

interface indexProps {}

export default async function Tarifas({}: indexProps) {
  const tarifas = await getPrices()

  return (
    <>
      <Header title="Tarifas" image={heroImage} />
      <main className="main-layout">
        <div className="priceCardContainer">
          {tarifas.map((tarifa) => (
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
