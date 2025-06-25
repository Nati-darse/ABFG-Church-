import mongoose, { Document, Schema } from 'mongoose'

export interface IPrayerRequest extends Document {
  name: string
  email: string
  phone?: string
  requestType: string
  title: string
  description: string
  isUrgent: boolean
  isAnonymous: boolean
  allowSharing: boolean
  status: 'pending' | 'praying' | 'answered'
  prayedBy: string[]
  createdAt: Date
  updatedAt: Date
}

const PrayerRequestSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  requestType: {
    type: String,
    required: [true, 'Request type is required'],
    enum: ['healing', 'family', 'financial', 'spiritual', 'guidance', 'thanksgiving', 'other']
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  isUrgent: {
    type: Boolean,
    default: false
  },
  isAnonymous: {
    type: Boolean,
    default: false
  },
  allowSharing: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'praying', 'answered'],
    default: 'pending'
  },
  prayedBy: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true
})

// Index for better query performance
PrayerRequestSchema.index({ requestType: 1, status: 1, createdAt: -1 })
PrayerRequestSchema.index({ isUrgent: 1, createdAt: -1 })

export default mongoose.model<IPrayerRequest>('PrayerRequest', PrayerRequestSchema)