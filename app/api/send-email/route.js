import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to you (original functionality)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: 'harshb7839@gmail.com',
      subject: `[Experience Hub]: ${name} as (${email})`,
      text: message,
      html: `<p>${message}</p>`,
    }

    // Confirmation email to user
    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting hαrsh vαirαgi.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>I have received your message, I will get back to you as soon as possible. Thank you for your interest in my work.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #333;">Your message:</h4>
            <p style="margin: 0; color: #666;">${message}</p>
          </div>
          
          <p>Best regards,<br>
          <strong>hαrsh vαirαgi</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">This is an automated confirmation email. Please do not reply to this email.</p>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToUser)
    ])

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    )
  }
}
