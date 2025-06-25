import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

// Create transporter
const createTransporter = () => {
  if (process.env.NODE_ENV === 'production') {
    // Production email configuration (e.g., SendGrid, AWS SES, etc.)
    return nodemailer.createTransporter({
      service: 'gmail', // or your preferred service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  } else {
    // Development configuration (using Ethereal for testing)
    return nodemailer.createTransporter({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'ethereal.user@ethereal.email',
        pass: 'ethereal.pass'
      }
    })
  }
}

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: options.from || process.env.EMAIL_FROM || 'noreply@alembankchurch.org',
      to: options.to,
      subject: options.subject,
      html: options.html
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send email')
  }
}

export default { sendEmail }