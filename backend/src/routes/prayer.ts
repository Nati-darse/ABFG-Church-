import express from 'express'
import { body, validationResult } from 'express-validator'
import PrayerRequest from '../models/PrayerRequest'
import { sendEmail } from '../services/emailService'

const router = express.Router()

// Validation rules
const prayerValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('requestType').isIn(['healing', 'family', 'financial', 'spiritual', 'guidance', 'thanksgiving', 'other']).withMessage('Invalid request type'),
  body('title').trim().isLength({ min: 5, max: 200 }).withMessage('Title must be between 5 and 200 characters'),
  body('description').trim().isLength({ min: 10, max: 2000 }).withMessage('Description must be between 10 and 2000 characters'),
  body('phone').optional().trim().isLength({ max: 20 }).withMessage('Phone number cannot exceed 20 characters'),
  body('isUrgent').optional().isBoolean().withMessage('isUrgent must be a boolean'),
  body('isAnonymous').optional().isBoolean().withMessage('isAnonymous must be a boolean'),
  body('allowSharing').optional().isBoolean().withMessage('allowSharing must be a boolean')
]

// Submit prayer request
router.post('/', prayerValidation, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      })
    }

    const {
      name,
      email,
      phone,
      requestType,
      title,
      description,
      isUrgent = false,
      isAnonymous = false,
      allowSharing = false
    } = req.body

    // Create prayer request
    const prayerRequest = new PrayerRequest({
      name,
      email,
      phone,
      requestType,
      title,
      description,
      isUrgent,
      isAnonymous,
      allowSharing
    })

    await prayerRequest.save()

    // Send notification email to prayer team
    try {
      const displayName = isAnonymous ? 'Anonymous' : name
      await sendEmail({
        to: process.env.PRAYER_TEAM_EMAIL || 'prayer@alembankchurch.org',
        subject: `${isUrgent ? 'URGENT - ' : ''}New Prayer Request: ${title}`,
        html: `
          <h2>${isUrgent ? 'URGENT - ' : ''}New Prayer Request</h2>
          <p><strong>From:</strong> ${displayName}</p>
          ${!isAnonymous ? `<p><strong>Email:</strong> ${email}</p>` : ''}
          ${!isAnonymous && phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Type:</strong> ${requestType}</p>
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Description:</strong></p>
          <p>${description.replace(/\n/g, '<br>')}</p>
          <p><strong>Urgent:</strong> ${isUrgent ? 'Yes' : 'No'}</p>
          <p><strong>Allow Sharing:</strong> ${allowSharing ? 'Yes' : 'No'}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `
      })
    } catch (emailError) {
      console.error('Failed to send prayer team notification:', emailError)
    }

    // Send confirmation email to user
    try {
      await sendEmail({
        to: email,
        subject: 'Your Prayer Request - Alembank Full Gospel Church',
        html: `
          <h2>Thank you for your prayer request</h2>
          <p>Dear ${name},</p>
          <p>We have received your prayer request and our prayer team will be praying for you.</p>
          <p><strong>Your request:</strong> ${title}</p>
          <p>We believe in the power of prayer and trust that God will work in your situation.</p>
          <p>"And this is the confidence that we have toward him, that if we ask anything according to his will he hears us." - 1 John 5:14</p>
          <p>God bless you!</p>
          <p>Alembank Full Gospel Church Prayer Team</p>
        `
      })
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
    }

    res.status(201).json({
      success: true,
      message: 'Prayer request submitted successfully',
      data: {
        id: prayerRequest._id,
        title: prayerRequest.title,
        requestType: prayerRequest.requestType,
        isUrgent: prayerRequest.isUrgent,
        createdAt: prayerRequest.createdAt
      }
    })

  } catch (error) {
    console.error('Prayer request submission error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to submit prayer request'
    })
  }
})

// Get prayer requests (admin/prayer team only)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const status = req.query.status as string
    const requestType = req.query.requestType as string
    const urgent = req.query.urgent === 'true'

    const query: any = {}
    if (status) query.status = status
    if (requestType) query.requestType = requestType
    if (urgent) query.isUrgent = true

    const prayerRequests = await PrayerRequest.find(query)
      .sort({ isUrgent: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-email -phone') // Hide sensitive info in list view

    const total = await PrayerRequest.countDocuments(query)

    res.json({
      success: true,
      data: prayerRequests,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('Get prayer requests error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve prayer requests'
    })
  }
})

// Update prayer request status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params
    const { status, prayedBy } = req.body

    if (!['pending', 'praying', 'answered'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      })
    }

    const updateData: any = { status }
    if (prayedBy) {
      updateData.$addToSet = { prayedBy }
    }

    const prayerRequest = await PrayerRequest.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    )

    if (!prayerRequest) {
      return res.status(404).json({
        success: false,
        message: 'Prayer request not found'
      })
    }

    res.json({
      success: true,
      message: 'Prayer request status updated',
      data: prayerRequest
    })

  } catch (error) {
    console.error('Update prayer request error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update prayer request'
    })
  }
})

export default router