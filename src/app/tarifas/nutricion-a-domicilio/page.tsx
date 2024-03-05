import { PriceCard } from '@components/PriceCard/PriceCard'
import React from 'react'
import '@styles/Tarifas.scss'

import { getPrices } from 'src/sanity/utils/sanity-querys'
import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-a-domicilio.webp'
import type { Metadata } from 'next'
import Headline from '@components/Headline/Headline'

export const metadata: Metadata = {
  title: 'Tarifas - Nutrición a Domicilio | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default async function Tarifas() {
  const tarifas = await getPrices('nutricionADomicilioPrices')

  function sortByPrice(tarifas) {
    return tarifas.sort(function (a, b) {
      return a.order - b.order
    })
  }

  const sortedTarifas = sortByPrice(tarifas)

  return (
    <>
      <Header title="Tarifas: Nutrición a domicilio" image={heroImage} />
      <main className="main-layout">
        <Headline
          title="Nutrición a Domicilio"
          subtitle="El servicio de nutrición a domicilio ofrece una experiencia personalizada, analizando el entorno alimentario del cliente para trabajar en objetivos de dieta variada, hábitos saludables y conocimiento nutricional"
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
