import express from 'express'
import { body, validationResult } from 'express-validator'
import Contact from '../models/Contact'
import { sendEmail } from '../services/emailService'

const router = express.Router()

// Validation rules
const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('subject').trim().isLength({ min: 5, max: 200 }).withMessage('Subject must be between 5 and 200 characters'),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters'),
  body('phone').optional().trim().isLength({ max: 20 }).withMessage('Phone number cannot exceed 20 characters')
]

// Submit contact form
router.post('/', contactValidation, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const { name, email, phone, subject, message } = req.body

    // Create contact record
    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    })

    await contact.save()

    // Send notification email to church admin
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL || 'admin@alembankchurch.org',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `
      })
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError)
    }

    // Send confirmation email to user
    try {
      await sendEmail({
        to: email,
        subject: 'Thank you for contacting Alembank Full Gospel Church',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p>God bless you!</p>
          <p>Alembank Full Gospel Church</p>
        `
      })
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        createdAt: contact.createdAt
      }
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form'
    })
  }
})

// Get all contacts (admin only - would need authentication in production)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const status = req.query.status as string

    const query: any = {}
    if (status) {
      query.status = status
    }

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const total = await Contact.countDocuments(query)

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get contacts error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve contacts'
    })
  }
})

export default router