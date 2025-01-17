'use client'

import React, { useState } from 'react'
import './ContactForm.scss'
import Input from '@components/Input/Input'
import Textarea from '@components/Textarea/Textarea'
import checkMark from '@assets/icons/check.webp'
import Image from 'next/image'
import { useTranslation } from 'src/app/i18n/client'
import { useRouter } from 'next/navigation'

const ContactForm = ({ lng }) => {
  const router = useRouter()
  const { t } = useTranslation(lng)
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isFatalError, setIsFatalError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    translation: {
      dear: t('EMAILS.thanks-for-reaching-out.dear'),
      subject: t('EMAILS.thanks-for-reaching-out.subject'),
      message: t('EMAILS.thanks-for-reaching-out.message'),
      comeBack: t('EMAILS.thanks-for-reaching-out.come-back'),
    },
  })

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...formErrors }

    const fieldSpanishNames = {
      name: 'nombre y apellidos',
      email: 'email',
      message: 'mensaje',
    }

    // Check if each field is filled
    Object.keys(formData).forEach((field) => {
      if (field !== 'translation' && formData[field].trim() === '') {
        newErrors[
          field
        ] = `Por favor introduzca su ${fieldSpanishNames[field]}.`
        valid = false
      }
    })

    setFormErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setFormData({
        name: '',
        email: '',
        message: '',
        translation: {
          dear: t('EMAILS.thanks-for-reaching-out.dear'),
          subject: t('EMAILS.thanks-for-reaching-out.subject'),
          message: t('EMAILS.thanks-for-reaching-out.message'),
          comeBack: t('EMAILS.thanks-for-reaching-out.come-back'),
        },
      })
      setIsEmailSent(true)
    } catch (error) {
      setIsFatalError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isEmailSent) {
    router.push('/contact/thank-you')
  }

  const renderButton = () => {
    if (isLoading) {
      return (
        <button disabled>
          <span className="contact-form__button-loader"></span>
        </button>
      )
    } else if (isEmailSent) {
      return (
        <button className="contact-form__button-email-sent" disabled>
          {t('CONTACT.form.success')}
          <span className="check">
            <Image src={checkMark} alt="check" width={25} height={25} />
          </span>
        </button>
      )
    } else if (isFatalError) {
      return (
        <p className="contact-form__email-error">
          {t('CONTACT.form.no-service')}
        </p>
      )
    } else {
      return <button type="submit">{t('CONTACT.form.send')}</button>
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t('CONTACT.form.name')}
        error={formErrors.name}
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t('CONTACT.form.email')}
        error={formErrors.email}
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={t('CONTACT.form.message')}
        error={formErrors.message}
      />
      {renderButton()}
    </form>
  )
}

export default ContactForm
