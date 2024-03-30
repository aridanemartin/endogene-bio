import contacto from '@assets/pictures/contacto.webp'
import ContactForm from '@components/ContactForm/ContactForm'
import Image from 'next/image'
import type { Metadata } from 'next'

import '@styles/Contacto.scss'

export const metadata: Metadata = {
  title: 'Contacto | Carolina Almeida Nutricionista',
  description:
    'Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN, con más de 15 años de experiencia. Especializada en mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. ¡Prioriza tu bienestar hoy!',
}

const Contacto = () => {
  return (
    <main className="main-layout">
      <div className="contacto">
        <section className="contacto__form-section">
          <h1>Contacto</h1>
          <ContactForm />
        </section>
        <section className="contacto__image-section">
          <Image
            className="contacto__image"
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
