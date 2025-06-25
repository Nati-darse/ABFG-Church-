import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/alembank_church'
    
    const conn = await mongoose.connect(mongoURI)
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err)
    })
    
    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected')
    })
    
    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close()
      console.log('🔌 MongoDB connection closed through app termination')
      process.exit(0)
    })
    
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error)
    process.exit(1)
  }
}

export default connectDB