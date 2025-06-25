import mongoose, { Document, Schema } from 'mongoose'

export interface IEvent extends Document {
  title: string
  description: string
  date: Date
  time: string
  location: string
  category: string
  image?: string
  maxAttendees?: number
  currentAttendees: number
  isActive: boolean
  registrations: Array<{
    name: string
    email: string
    phone?: string
    registeredAt: Date
  }>
  createdAt: Date
  updatedAt: Date
}

const EventSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  date: {
    type: Date,
    required: [true, 'Event date is required']
  },
  time: {
    type: String,
    required: [true, 'Event time is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Event location is required'],
    trim: true,
    maxlength: [200, 'Location cannot exceed 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Event category is required'],
    enum: ['worship', 'youth', 'outreach', 'special', 'ministry', 'family']
  },
  image: {
    type: String,
    trim: true
  },
  maxAttendees: {
    type: Number,
    min: [1, 'Maximum attendees must be at least 1']
  },
  currentAttendees: {
    type: Number,
    default: 0,
    min: [0, 'Current attendees cannot be negative']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  registrations: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true
    },
    registeredAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
})

// Index for better query performance
EventSchema.index({ date: 1, isActive: 1 })
EventSchema.index({ category: 1, date: 1 })

export default mongoose.model<IEvent>('Event', EventSchema)