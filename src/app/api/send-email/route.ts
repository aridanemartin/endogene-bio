import { NextResponse } from 'next/server'
import ThanksForReachingOutEmail from 'src/_emails/thank-you-for-reaching-out'
import AutomaticResponseEmail from 'src/_emails/message-received'
import nodemailer from 'nodemailer'
import { render } from '@react-email/components'

export async function POST(req) {
  const data = await req.json()
  const { name, email, message, translation } = data
  const { NEXT_SMTP_EMAIL, NEXT_SMTP_PASSWORD } = process.env

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NEXT_SMTP_EMAIL,
      pass: NEXT_SMTP_PASSWORD,
    },
  })

  const automaticResponseEmail = render(
    AutomaticResponseEmail({
      name,
      message,
      email,
    }),
  )

  const thanksForReachingOutEmail = render(
    ThanksForReachingOutEmail({
      name,
      translation,
    }),
  )

  try {
    const options = {
      from: NEXT_SMTP_EMAIL,
      to: email,
      subject: `${name}, ${translation.subject}`,
      html: thanksForReachingOutEmail,
    }

    await transporter.sendMail(options)

    const options2 = {
      from: NEXT_SMTP_EMAIL,
      to: 'aridanemartin@gmail.com',
      subject: `Email Web - ${name}`,
      html: automaticResponseEmail,
    }

    await transporter.sendMail(options2)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, error: error.toString() })
  }
}
