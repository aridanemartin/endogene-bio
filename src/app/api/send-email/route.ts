import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import GraciasPorContactar from 'src/emails/gracias-por-contactar'

const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

export async function POST(req) {
  const res = await req.json()
  const { name, email, message } = res
  console.log('Sending email:', { name, email, message })
  try {
    // await resend.emails.send({
    //   from: 'info@nutricionsaludablelaspalmas.com',
    //   to: ['connutricionsaludable@gmail.com'],
    //   subject: `Consulta Web - ${name}`,
    //   html: `<p>${message}</p>`,
    // })

    await resend.emails.send({
      from: 'info@nutricionsaludablelaspalmas.com',
      to: email,
      subject: `Gracias por contactarnos - ${name}`,
      react: GraciasPorContactar({ name }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, error: error.toString() })
  }
}
