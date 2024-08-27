import { i18n as i18nEmailOnly } from 'next-i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    EMAILS: {
      'thanks-for-reaching-out': {
        subject: 'Thank you for reaching out to endogene.bio',
        message: 'Thank you for reaching out to us. We will contact you soon.',
      },
    },
  },
  es: {
    EMAILS: {
      'thanks-for-reaching-out': {
        subject: 'Gracias por contactar a endogene.bio',
        message:
          'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
      },
    },
  },
  fr: {
    EMAILS: {
      'thanks-for-reaching-out': {
        subject: 'Merci de nous contacter sur endogene.bio',
        message: 'Merci de nous contacter. Nous vous contacterons bientôt.',
      },
    },
  },
}

i18nEmailOnly.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18nEmailOnly
