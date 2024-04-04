import contacto from '@assets/pictures/sophieribeiro.webp'
import ContactForm from '@components/ContactForm/ContactForm'
import Image from 'next/image'
import type { Metadata } from 'next'

import '@styles/Contacto.css'

export const metadata: Metadata = {
  title: 'Contacto | Endogene.bio',
  description:
    'Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN, con más de 15 años de experiencia. Especializada en mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. ¡Prioriza tu bienestar hoy!',
}

const Contacto = () => {
  return (
    <main className="main-layout">
      <div className="contacto">
        <section className="form-section">
          <h1>Contacto</h1>
          <ContactForm />
        </section>
        <section className="image-section">
          <Image
            className="image"
            src={contacto}
            alt="Con Nutrición Saludable - Contacto"
            fill
          />
        </section>
      </div>
    </main>
  )
}

export default Contacto
