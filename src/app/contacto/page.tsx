import contacto from '@assets/pictures/contacto.jpg'
import ContactForm from '@components/ContactForm/ContactForm'
import Image from 'next/image'

import '@styles/Contacto.scss'

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
