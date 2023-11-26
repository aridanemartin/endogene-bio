'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  console.log(formData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        required
        placeholder="Nombre y Apellidos"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        required
        placeholder="email@ejemplo.com"
      />
      <textarea
        name="message"
        onChange={handleChange}
        required
        placeholder="Escribe aquí tu mensaje"
      />

      <button type="submit">Enviar</button>
    </form>
  )
}

export default ContactForm
