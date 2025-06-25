import express from 'express'
import { body, validationResult } from 'express-validator'
import Event from '../models/Event'
import { sendEmail } from '../services/emailService'

const router = express.Router()

// Get all events
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const category = req.query.category as string
    const upcoming = req.query.upcoming === 'true'

    const query: any = { isActive: true }
    if (category) query.category = category
    if (upcoming) query.date = { $gte: new Date() }

    const events = await Event.find(query)
      .sort({ date: 1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-registrations') // Hide registrations in list view

    const total = await Event.countDocuments(query)

    res.json({
      success: true,
      data: events,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get events error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve events'
    })
  }
})

// Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
    
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      })
    }

    res.json({
      success: true,
      data: event
    })

  } catch (error) {
    console.error('Get event error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve event'
    })
  }
})

// Register for event
const registrationValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('phone').optional().trim().isLength({ max: 20 }).withMessage('Phone number cannot exceed 20 characters')
]

router.post('/:id/register', registrationValidation, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const { name, email, phone } = req.body
    const eventId = req.params.id

    const event = await Event.findById(eventId)
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      })
    }

    if (!event.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Event registration is not active'
      })
    }

    if (event.date < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Cannot register for past events'
      })
    }

    // Check if already registered
    const existingRegistration = event.registrations.find(reg => reg.email === email)
    if (existingRegistration) {
      return res.status(400).json({
        success: false,
        message: 'You are already registered for this event'
      })
    }

    // Check capacity
    if (event.maxAttendees && event.currentAttendees >= event.maxAttendees) {
      return res.status(400).json({
        success: false,
        message: 'Event is full'
      })
    }

    // Add registration
    event.registrations.push({
      name,
      email,
      phone,
      registeredAt: new Date()
    })
    event.currentAttendees += 1

    await event.save()

    // Send confirmation email
    try {
      await sendEmail({
        to: email,
        subject: `Event Registration Confirmation - ${event.title}`,
        html: `
          <h2>Event Registration Confirmed</h2>
          <p>Dear ${name},</p>
          <p>You have successfully registered for the following event:</p>
          <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date.toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Description:</strong> ${event.description}</p>
          </div>
          <p>We look forward to seeing you at the event!</p>
          <p>If you need to cancel your registration, please contact us at info@alembankchurch.org</p>
          <p>God bless you!</p>
          <p>Alembank Full Gospel Church</p>
        `
      })
    } catch (emailError) {
      console.error('Failed to send registration confirmation:', emailError)
    }

    res.status(201).json({
      success: true,
      message: 'Successfully registered for event',
      data: {
        eventTitle: event.title,
        registrationDate: new Date(),
        currentAttendees: event.currentAttendees
      }
    })

  } catch (error) {
    console.error('Event registration error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to register for event'
    })
  }
})

// Create event (admin only)
const eventValidation = [
  body('title').trim().isLength({ min: 5, max: 200 }).withMessage('Title must be between 5 and 200 characters'),
  body('description').trim().isLength({ min: 10, max: 2000 }).withMessage('Description must be between 10 and 2000 characters'),
  body('date').isISO8601().withMessage('Please provide a valid date'),
  body('time').trim().notEmpty().withMessage('Time is required'),
  body('location').trim().isLength({ min: 5, max: 200 }).withMessage('Location must be between 5 and 200 characters'),
  body('category').isIn(['worship', 'youth', 'outreach', 'special', 'ministry', 'family']).withMessage('Invalid category'),
  body('maxAttendees').optional().isInt({ min: 1 }).withMessage('Max attendees must be at least 1')
]

router.post('/', eventValidation, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const event = new Event(req.body)
    await event.save()

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: event
    })

  } catch (error) {
    console.error('Create event error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to create event'
    })
  }
})

export default router