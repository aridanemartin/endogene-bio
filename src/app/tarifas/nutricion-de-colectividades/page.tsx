import { PriceCard } from '@components/PriceCard/PriceCard'
import React from 'react'
import '@styles/Tarifas.scss'

import { getPrices } from 'src/sanity/utils/sanity-querys'
import Header from '@components/Header/Header'
import heroImage from '@assets/pictures/nutricion-colectividades.jpg'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarifas | Carolina Almeida Nutricionista',
  description:
    'Consulta las tarifas de Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN. Descubre opciones accesibles para mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. Invierte en tu salud con tarifas personalizadas y alcanza tus objetivos.',
}

export default async function Tarifas() {
  const tarifas = await getPrices('nutricionDeColectividadesPrices')

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
        {sortedTarifas.length ? (
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
        ) : (
          <div className="noTarifas">
            <p>
              Para solicitar tarifas del servicio de Nutrición de Colectividades
              por favor utilice el formulario de contacto
            </p>
            <div className="noTarifas__button">
              <Link href="/contacto" className="Button">
                Concertar cita
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
