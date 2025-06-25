import mongoose, { Document, Schema } from 'mongoose'

export interface IDonation extends Document {
  firstName: string
  lastName: string
  email: string
  phone: string
  amount: number
  purpose: string
  isAnonymous: boolean
  paymentMethod: 'chapa'
  transactionId: string
  chapaReference: string
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
  paymentData?: any
  createdAt: Date
  updatedAt: Date
}

const DonationSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
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
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [10, 'Minimum donation amount is 10 ETB']
  },
  purpose: {
    type: String,
    required: [true, 'Purpose is required'],
    enum: ['general', 'building', 'missions', 'youth', 'charity', 'other']
  },
  isAnonymous: {
    type: Boolean,
    default: false
  },
  paymentMethod: {
    type: String,
    enum: ['chapa'],
    default: 'chapa'
  },
  transactionId: {
    type: String,
    required: true,
    unique: true
  },
  chapaReference: {
    type: String,
    sparse: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'cancelled'],
    default: 'pending'
  },
  paymentData: {
    type: Schema.Types.Mixed
  }
}, {
  timestamps: true
})

// Index for better query performance
DonationSchema.index({ transactionId: 1 })
DonationSchema.index({ status: 1, createdAt: -1 })
DonationSchema.index({ purpose: 1, status: 1 })

export default mongoose.model<IDonation>('Donation', DonationSchema)