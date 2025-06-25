import express from 'express'
import multer from 'multer'
import path from 'path'

const router = express.Router()

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi/
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (mimetype && extname) {
      return cb(null, true)
    } else {
      cb(new Error('Only images and videos are allowed'))
    }
  }
})

// Mock data for photos (in production, this would come from database)
const mockPhotos = [
  {
    id: 1,
    title: 'Sunday Worship Service',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Worship',
    description: 'Beautiful moments from our Sunday worship service'
  },
  {
    id: 2,
    title: 'Youth Fellowship',
    date: '2024-01-12',
    image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Youth',
    description: 'Young people gathering for fellowship and growth'
  },
  {
    id: 3,
    title: 'Community Outreach',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Outreach',
    description: 'Serving our community with love and compassion'
  }
]

// Mock data for videos
const mockVideos = [
  {
    id: 1,
    title: 'Sunday Service - January 21, 2024',
    date: '2024-01-21',
    thumbnail: 'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '1:45:30',
    views: 1200,
    category: 'Sermon',
    videoUrl: '#',
    description: 'Full Sunday service with worship and sermon'
  },
  {
    id: 2,
    title: 'Youth Conference Highlights',
    date: '2024-01-18',
    thumbnail: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '25:15',
    views: 856,
    category: 'Youth',
    videoUrl: '#',
    description: 'Highlights from our youth conference'
  }
]

// Get photos
router.get('/photos', async (req, res) => {
  try {
    const category = req.query.category as string
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 12

    let photos = mockPhotos
    if (category) {
      photos = photos.filter(photo => photo.category.toLowerCase() === category.toLowerCase())
    }

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedPhotos = photos.slice(startIndex, endIndex)

    res.json({
      success: true,
      data: paginatedPhotos,
      pagination: {
        page,
        limit,
        total: photos.length,
        pages: Math.ceil(photos.length / limit)
      }
    })

  } catch (error) {
    console.error('Get photos error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve photos'
    })
  }
})

// Get videos
router.get('/videos', async (req, res) => {
  try {
    const category = req.query.category as string
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 8

    let videos = mockVideos
    if (category) {
      videos = videos.filter(video => video.category.toLowerCase() === category.toLowerCase())
    }

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedVideos = videos.slice(startIndex, endIndex)

    res.json({
      success: true,
      data: paginatedVideos,
      pagination: {
        page,
        limit,
        total: videos.length,
        pages: Math.ceil(videos.length / limit)
      }
    })

  } catch (error) {
    console.error('Get videos error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve videos'
    })
  }
})

// Upload media (admin only)
router.post('/upload', upload.single('media'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      })
    }

    const { title, description, category } = req.body

    // In production, save to database
    const mediaItem = {
      id: Date.now(),
      title: title || req.file.originalname,
      description: description || '',
      category: category || 'general',
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      uploadedAt: new Date()
    }

    res.status(201).json({
      success: true,
      message: 'Media uploaded successfully',
      data: mediaItem
    })

  } catch (error) {
    console.error('Upload media error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to upload media'
    })
  }
})

// Get media categories
router.get('/categories', async (req, res) => {
  try {
    const categories = [
      { name: 'Worship', count: 15 },
      { name: 'Youth', count: 8 },
      { name: 'Outreach', count: 12 },
      { name: 'Special Events', count: 6 },
      { name: 'Ministry', count: 10 },
      { name: 'Family', count: 7 }
    ]

    res.json({
      success: true,
      data: categories
    })

  } catch (error) {
    console.error('Get categories error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve categories'
    })
  }
})

export default router