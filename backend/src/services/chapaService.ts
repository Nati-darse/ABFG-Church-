import axios from 'axios'

const CHAPA_BASE_URL = 'https://api.chapa.co/v1'
const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY

if (!CHAPA_SECRET_KEY) {
  console.error('❌ CHAPA_SECRET_KEY not found in environment variables')
  console.error('Please add CHAPA_SECRET_KEY to your .env file')
}

const chapaApi = axios.create({
  baseURL: CHAPA_BASE_URL,
  headers: {
    'Authorization': `Bearer ${CHAPA_SECRET_KEY}`,
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 second timeout
})

export interface ChapaInitializeData {
  amount: number
  currency: string
  email: string
  first_name: string
  last_name: string
  phone_number: string
  tx_ref: string
  callback_url?: string
  return_url?: string
  customization?: {
    title?: string
    description?: string
    logo?: string
  }
}

export const initializeChapa = async (data: ChapaInitializeData) => {
  try {
    if (!CHAPA_SECRET_KEY) {
      throw new Error('CHAPA_SECRET_KEY is not configured')
    }

    console.log('🔍 Making Chapa API request to:', `${CHAPA_BASE_URL}/transaction/initialize`)
    console.log('🔍 Request data:', { ...data, phone_number: '***' }) // Hide phone for security

    const response = await chapaApi.post('/transaction/initialize', data)
    
    console.log('✅ Chapa API response status:', response.status)
    console.log('✅ Chapa API response data:', response.data)
    
    return response.data
  } catch (error: any) {
    console.error('❌ Chapa initialization error:')
    console.error('Error message:', error.message)
    console.error('Error response:', error.response?.data)
    console.error('Error status:', error.response?.status)
    console.error('Error headers:', error.response?.headers)
    
    if (error.response?.status === 401) {
      throw new Error('Invalid Chapa API key. Please check your CHAPA_SECRET_KEY.')
    }
    
    if (error.response?.status === 400) {
      throw new Error(`Chapa validation error: ${error.response.data?.message || 'Invalid request data'}`)
    }
    
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      throw new Error('Unable to connect to Chapa payment service. Please try again later.')
    }
    
    throw new Error(error.response?.data?.message || error.message || 'Failed to initialize payment')
  }
}

export const verifyChapa = async (tx_ref: string) => {
  try {
    if (!CHAPA_SECRET_KEY) {
      throw new Error('CHAPA_SECRET_KEY is not configured')
    }

    console.log('🔍 Verifying Chapa transaction:', tx_ref)
    
    const response = await chapaApi.get(`/transaction/verify/${tx_ref}`)
    
    console.log('✅ Chapa verification response:', response.data)
    
    return response.data
  } catch (error: any) {
    console.error('❌ Chapa verification error:', error.response?.data || error.message)
    throw new Error(error.response?.data?.message || 'Failed to verify payment')
  }
}

export const getTransactionStatus = async (tx_ref: string) => {
  try {
    if (!CHAPA_SECRET_KEY) {
      throw new Error('CHAPA_SECRET_KEY is not configured')
    }

    const response = await chapaApi.get(`/transaction/verify/${tx_ref}`)
    return response.data
  } catch (error: any) {
    console.error('❌ Chapa status check error:', error.response?.data || error.message)
    throw new Error(error.response?.data?.message || 'Failed to check transaction status')
  }
}

// Webhook signature verification (if Chapa provides webhook signatures)
export const verifyWebhookSignature = (payload: string, signature: string): boolean => {
  // Implementation depends on Chapa's webhook signature method
  // This is a placeholder - check Chapa documentation for actual implementation
  return true
}

export default {
  initializeChapa,
  verifyChapa,
  getTransactionStatus,
  verifyWebhookSignature
}