import { NextResponse } from 'next/server'
import Resend from 'resend'

const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  // No key available at build time; we'll still export the handler but return 500 at runtime if missing
  console.warn('RESEND_API_KEY is not set. Email sending will fail until it is configured.')
}

const resend = new Resend(resendApiKey || '')

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body || {}

    if (!email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!resendApiKey) {
      return NextResponse.json({ error: 'Server misconfiguration: missing RESEND_API_KEY' }, { status: 500 })
    }

    const safeName = name ? String(name).replace(/</g, '&lt;') : '—'
    const safeEmail = String(email).replace(/</g, '&lt;')
    const safePhone = phone ? String(phone).replace(/</g, '&lt;') : '—'
    const safeMessage = String(message).replace(/</g, '&lt;').replace(/\n/g, '<br/>')

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial; color:#111;">
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <h3>Message</h3>
        <p>${safeMessage}</p>
      </div>
    `

    // Resolve sender and recipient from environment variables
    const sendFrom = process.env.RESEND_FROM || 'onboarding@resend.dev'
    const recipient = process.env.QUOTE_RECIPIENT || ''

    // Basic validation for recipient
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!recipient || !emailRegex.test(recipient)) {
      console.warn('QUOTE_RECIPIENT is not set or invalid. Please set QUOTE_RECIPIENT in your .env.local')
    }

    await resend.emails.send({
      from: sendFrom,
      to: recipient || 'creativecodes08@gmail.com',
      subject: `Quote request from ${safeName} <${safeEmail}>`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Error in /api/send-quote:', err)
    return NextResponse.json({ error: err?.message || 'Internal server error' }, { status: 500 })
  }
}
