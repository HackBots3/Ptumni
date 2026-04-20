import { BrevoClient } from '@getbrevo/brevo'

type SendEmailArgs = {
  to: { email: string; name?: string }[]
  subject: string
  htmlContent: string
  textContent?: string
  tags?: string[]
}

export type SendEmailResult =
  | { ok: true }
  | { ok: false; error: unknown }

function requireEnv(name: 'BREVO_API_KEY' | 'BREVO_SENDER_EMAIL' | 'BREVO_SENDER_NAME'): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

// Optional: reuse Brevo client across calls (good for high volume)
let cachedBrevoClient: BrevoClient | null = null

function getBrevoClient(apiKey: string): BrevoClient {
  if (!cachedBrevoClient) {
    cachedBrevoClient = new BrevoClient({ apiKey })
  }
  return cachedBrevoClient
}

export async function sendEmail(args: SendEmailArgs): Promise<SendEmailResult> {
  try {
    const apiKey = requireEnv('BREVO_API_KEY')
    const senderEmail = requireEnv('BREVO_SENDER_EMAIL')
    const senderName = requireEnv('BREVO_SENDER_NAME')

    const brevo = getBrevoClient(apiKey)

    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: senderEmail, name: senderName },
      to: args.to,
      subject: args.subject,
      htmlContent: args.htmlContent,
      textContent: args.textContent,
      tags: args.tags,
    })

    return { ok: true }
  } catch (error) {
    console.error('[BREVO] Failed to send email:', error)
    return { ok: false, error }
  }
}