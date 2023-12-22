'use client'

import React, { useState } from 'react'
import './ContactForm.scss'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    domainUrl: process.env.NEXT_PUBLIC_DOMAIN_URL,
  })

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  })
  console.log('===errors===>', formErrors)

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

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Email sent successfully')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="contact-form__input">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          required
          placeholder="Nombre y Apellidos"
        />
        {formErrors.name && (
          <p className="contact-form__error" style={{ color: 'red' }}>
            {formErrors.name}
          </p>
        )}
      </div>
      <div className="contact-form__input">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          placeholder="email@ejemplo.com"
        />
        {formErrors.email && (
          <p className="contact-form__error" style={{ color: 'red' }}>
            {formErrors.email}
          </p>
        )}
      </div>
      <div className="contact-form__input">
        <textarea
          name="message"
          onChange={handleChange}
          required
          placeholder="Escribe aquí tu mensaje"
        />
        {formErrors.message && (
          <p className="contact-form__error" style={{ color: 'red' }}>
            {formErrors.message}
          </p>
        )}
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default ContactForm
