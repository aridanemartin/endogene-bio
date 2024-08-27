import contacto from '@assets/icons/tricolor.svg'
import ContactForm from '@components/ContactForm/ContactForm'
import Image from 'next/image'
import type { Metadata } from 'next'

import '@styles/Contacto.css'
import { useTranslation } from 'src/app/i18n'
import Layout from '@components/Layout/Layout'
import Headline from '@components/Headline/Headline'

export const metadata: Metadata = {
  title: 'Contacto | Endogene.bio',
  description: '',
}

const Contacto = async ({ params: { lng } }) => {
  return (
    <Layout maxWidth="1100px" className="contactPage">
      <Headline lng={lng} titleKey="CONTACT.title" />
      <section className="contacto">
        <article className="form-section">
          <ContactForm lng={lng} />
        </article>
        <div className="image-section">
          <Image
            className="image"
            src={contacto}
            alt="Con Nutrición Saludable - Contacto"
            fill
          />
        </div>
      </section>
    </Layout>
  )
}

export default Contacto
