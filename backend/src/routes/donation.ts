import express from 'express'
import { body, validationResult } from 'express-validator'
import Donation from '../models/Donation'
import { initializeChapa, verifyChapa } from '../services/chapaService'
import { sendEmail } from '../services/emailService'

const router = express.Router()

// Validation rules
const donationValidation = [
  body('firstName').trim().isLength({ min: 2, max: 50 }).withMessage('First name must be between 2 and 50 characters'),
  body('lastName').trim().isLength({ min: 2, max: 50 }).withMessage('Last name must be between 2 and 50 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('phone').trim().isLength({ min: 10, max: 20 }).withMessage('Phone number must be between 10 and 20 characters'),
  body('amount').isNumeric().isFloat({ min: 10 }).withMessage('Amount must be at least 10 ETB'),
  body('purpose').isIn(['general', 'building', 'missions', 'youth', 'charity', 'other']).withMessage('Invalid donation purpose'),
  body('isAnonymous').optional().isBoolean().withMessage('isAnonymous must be a boolean')
]

// Initialize donation payment
router.post('/initialize', donationValidation, async (req, res) => {
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
      firstName,
      lastName,
      email,
      phone,
      amount,
      purpose,
      isAnonymous = false
    } = req.body

    // Check if required environment variables are set
    if (!process.env.CHAPA_SECRET_KEY) {
      console.error('❌ CHAPA_SECRET_KEY is not set in environment variables')
      return res.status(500).json({
        success: false,
        message: 'Payment service is not configured. Please contact the administrator.'
      })
    }

    if (!process.env.FRONTEND_URL) {
      console.warn('⚠️ FRONTEND_URL is not set, using default callback URLs')
    }

    // Generate unique transaction ID
    const transactionId = `AFBC_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    console.log('🔍 Initializing donation:', {
      firstName,
      lastName,
      email,
      amount,
      purpose,
      transactionId
    })

    // Create donation record
    const donation = new Donation({
      firstName,
      lastName,
      email,
      phone,
      amount,
      purpose,
      isAnonymous,
      transactionId,
      status: 'pending'
    })

    await donation.save()
    console.log('✅ Donation record saved to database')

    // Initialize Chapa payment
    const chapaData = {
      amount,
      currency: 'ETB',
      email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      tx_ref: transactionId,
      callback_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/donation/callback`,
      return_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/donation/success`,
      customization: {
        title: 'Alembank Full Gospel Church Donation',
        description: `Donation for ${purpose}`,
        logo: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/fullgospellogo.png`
      }
    }

    console.log('🔍 Initializing Chapa payment with data:', chapaData)

    const chapaResponse = await initializeChapa(chapaData)
    console.log('✅ Chapa response received:', chapaResponse)

    if (chapaResponse.status === 'success') {
      // Update donation with Chapa reference
      donation.chapaReference = chapaResponse.data.tx_ref
      donation.paymentData = chapaResponse.data
      await donation.save()

      res.json({
        success: true,
        message: 'Payment initialized successfully',
        data: {
          checkout_url: chapaResponse.data.checkout_url,
          transaction_id: transactionId
        }
      })
    } else {
      donation.status = 'failed'
      await donation.save()

      res.status(400).json({
        success: false,
        message: 'Failed to initialize payment',
        error: chapaResponse.message
      })
    }

  } catch (error) {
    console.error('❌ Donation initialization error:', error)
    
    // Provide more specific error messages
    if (error.message.includes('CHAPA_SECRET_KEY')) {
      return res.status(500).json({
        success: false,
        message: 'Payment service is not configured. Please contact the administrator.'
      })
    }
    
    if (error.message.includes('network') || error.message.includes('ECONNREFUSED')) {
      return res.status(500).json({
        success: false,
        message: 'Payment service is temporarily unavailable. Please try again later.'
      })
    }

    res.status(500).json({
      success: false,
      message: 'Failed to initialize donation',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
})

// Verify donation payment
router.get('/verify/:transactionId', async (req, res) => {
  try {
    const { transactionId } = req.params

    const donation = await Donation.findOne({ transactionId })
    if (!donation) {
      return res.status(404).json({
        success: false,
        message: 'Donation not found'
      })
    }

    // Verify with Chapa
    const verification = await verifyChapa(transactionId)

    if (verification.status === 'success' && verification.data.status === 'success') {
      // Update donation status
      donation.status = 'completed'
      donation.paymentData = { ...donation.paymentData, verification: verification.data }
      await donation.save()

      // Send thank you email
      try {
        const displayName = donation.isAnonymous ? 'Anonymous Donor' : `${donation.firstName} ${donation.lastName}`
        
        await sendEmail({
          to: donation.email,
          subject: 'Thank you for your generous donation!',
          html: `
            <h2>Thank you for your donation!</h2>
            <p>Dear ${donation.firstName},</p>
            <p>Thank you for your generous donation of ${donation.amount} ETB to Alembank Full Gospel Church.</p>
            <p><strong>Donation Details:</strong></p>
            <ul>
              <li>Amount: ${donation.amount} ETB</li>
              <li>Purpose: ${donation.purpose}</li>
              <li>Transaction ID: ${transactionId}</li>
              <li>Date: ${new Date().toLocaleDateString()}</li>
            </ul>
            <p>Your contribution helps us continue our mission of spreading God's love and serving our community.</p>
            <p>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7</p>
            <p>May God bless you abundantly!</p>
            <p>Alembank Full Gospel Church</p>
          `
        })

        // Send notification to church admin
        await sendEmail({
          to: process.env.ADMIN_EMAIL || 'admin@alembankchurch.org',
          subject: `New Donation Received - ${donation.amount} ETB`,
          html: `
            <h2>New Donation Received</h2>
            <p><strong>Donor:</strong> ${displayName}</p>
            <p><strong>Amount:</strong> ${donation.amount} ETB</p>
            <p><strong>Purpose:</strong> ${donation.purpose}</p>
            <p><strong>Transaction ID:</strong> ${transactionId}</p>
            <p><strong>Email:</strong> ${donation.email}</p>
            <p><strong>Phone:</strong> ${donation.phone}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          `
        })
      } catch (emailError) {
        console.error('Failed to send donation emails:', emailError)
      }

      res.json({
        success: true,
        message: 'Payment verified successfully',
        data: {
          status: donation.status,
          amount: donation.amount,
          purpose: donation.purpose,
          transactionId
        }
      })
    } else {
      donation.status = 'failed'
      await donation.save()

      res.status(400).json({
        success: false,
        message: 'Payment verification failed',
        data: verification
      })
    }

  } catch (error) {
    console.error('Donation verification error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to verify donation'
    })
  }
})

// Get donations (admin only)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const status = req.query.status as string
    const purpose = req.query.purpose as string

    const query: any = {}
    if (status) query.status = status
    if (purpose) query.purpose = purpose

    const donations = await Donation.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-paymentData') // Hide sensitive payment data

    const total = await Donation.countDocuments(query)
    const totalAmount = await Donation.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ])

    res.json({
      success: true,
      data: donations,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      summary: {
        totalDonations: totalAmount[0]?.total || 0
      }
    })

  } catch (error) {
    console.error('Get donations error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve donations'
    })
  }
})

// Chapa webhook endpoint
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const event = req.body

    if (event.event === 'charge.success') {
      const transactionId = event.data.tx_ref

      const donation = await Donation.findOne({ transactionId })
      if (donation && donation.status === 'pending') {
        donation.status = 'completed'
        donation.paymentData = { ...donation.paymentData, webhook: event.data }
        await donation.save()

        console.log(`Donation ${transactionId} completed via webhook`)
      }
    }

    res.status(200).json({ received: true })

  } catch (error) {
    console.error('Webhook error:', error)
    res.status(500).json({ error: 'Webhook processing failed' })
  }
})

// Test route to check donation system status
router.get('/test', async (req, res) => {
  try {
    const status = {
      database: 'unknown',
      chapa: 'unknown',
      environment: {
        CHAPA_SECRET_KEY: process.env.CHAPA_SECRET_KEY ? 'set' : 'not set',
        FRONTEND_URL: process.env.FRONTEND_URL || 'not set',
        NODE_ENV: process.env.NODE_ENV || 'development'
      }
    }

    // Test database connection
    try {
      await Donation.findOne().limit(1)
      status.database = 'connected'
    } catch (dbError) {
      status.database = 'error'
      console.error('Database test error:', dbError)
    }

    // Test Chapa connection
    try {
      if (process.env.CHAPA_SECRET_KEY) {
        // Make a simple test request to Chapa
        const response = await fetch('https://api.chapa.co/v1/transaction/verify/test', {
          headers: {
            'Authorization': `Bearer ${process.env.CHAPA_SECRET_KEY}`,
            'Content-Type': 'application/json'
          }
        })
        status.chapa = response.status === 401 ? 'configured' : 'error'
      } else {
        status.chapa = 'not configured'
      }
    } catch (chapaError) {
      status.chapa = 'error'
      console.error('Chapa test error:', chapaError)
    }

    res.json({
      success: true,
      message: 'Donation system status',
      data: status
    })
  } catch (error) {
    console.error('Test route error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to check system status',
      error: error.message
    })
  }
})

export default router