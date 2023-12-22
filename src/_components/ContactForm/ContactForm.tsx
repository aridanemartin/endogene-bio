'use client'

import React, { useState } from 'react'
import './ContactForm.scss'
import Input from '@components/Input/Input'
import Textarea from '@components/Textarea/Textarea'

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [isFatalError, setIsFatalError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  console.log('====> ', formErrors)

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
      if (formData[field].trim() === '') {
        newErrors[
          field
        ] = `Por favor introduzca su ${fieldSpanishNames[field]}.`
      }
      valid = false
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
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      setIsEmailSent(true)
      console.log('Email sent successfully')
    } catch (error) {
      console.error('Error sending email:', error)
      setIsFatalError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const renderButton = () => {
    if (isLoading) {
      return <button type="submit">Enviando...</button>
    } else if (isEmailSent) {
      return <button type="submit">Enviado</button>
    } else if (isFatalError) {
      return <button type="submit">Error</button>
    } else {
      return <button type="submit">Enviar</button>
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre y Apellidos"
        error={formErrors.name}
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email@ejemplo.com"
        error={formErrors.email}
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Escribe aquí tu mensaje"
        error={formErrors.message}
      />
      {renderButton()}
    </form>
  )
}

export default ContactForm
