import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import ThanksForReachingOutEmail from 'src/_emails/thank-you-for-reaching-out'
import AutomaticResponseEmail from 'src/_emails/message-received'
// import i18nEmailOnly from './i18n-email-only/i18n-email-only'

const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

export async function POST(req) {
  const res = await req.json()
  const { name, email, message, translation } = res

  try {
    await resend.emails.send({
      from: 'info@endogene.bio',
      to: 'aridanemartin@gmail.com',
      subject: `Consulta Web - ${name}`,
      react: AutomaticResponseEmail({
        name,
        message,
        email,
      }),
    })

    await resend.emails.send({
      from: 'info@endogene.bio',
      to: email,
      subject: `${name}, ${translation.subject}`,
      react: ThanksForReachingOutEmail({
        name,
        translation,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, error: error.toString() })
  }
}
