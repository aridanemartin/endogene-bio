import contacto from '@assets/pictures/sophieribeiro.webp'
import ContactForm from '@components/ContactForm/ContactForm'
import Image from 'next/image'
import type { Metadata } from 'next'

import '@styles/Contacto.css'
import { useTranslation } from 'src/app/i18n'

export const metadata: Metadata = {
  title: 'Contacto | Endogene.bio',
  description: '',
}

const Contacto = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng)

  return (
    <main className="main-layout">
      <div className="contacto">
        <section className="form-section">
          <h1>{t('CONTACT.title')}</h1>
          <ContactForm lng={lng} />
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
