import axios from 'axios'

const CHAPA_BASE_URL = 'https://api.chapa.co/v1'
const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY

if (!CHAPA_SECRET_KEY) {
  console.warn('⚠️ CHAPA_SECRET_KEY not found in environment variables')
}

const chapaApi = axios.create({
  baseURL: CHAPA_BASE_URL,
  headers: {
    'Authorization': `Bearer ${CHAPA_SECRET_KEY}`,
    'Content-Type': 'application/json'
  }
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
    const response = await chapaApi.post('/transaction/initialize', data)
    return response.data
  } catch (error: any) {
    console.error('Chapa initialization error:', error.response?.data || error.message)
    throw new Error(error.response?.data?.message || 'Failed to initialize payment')
  }
}

export const verifyChapa = async (tx_ref: string) => {
  try {
    const response = await chapaApi.get(`/transaction/verify/${tx_ref}`)
    return response.data
  } catch (error: any) {
    console.error('Chapa verification error:', error.response?.data || error.message)
    throw new Error(error.response?.data?.message || 'Failed to verify payment')
  }
}

export const getTransactionStatus = async (tx_ref: string) => {
  try {
    const response = await chapaApi.get(`/transaction/verify/${tx_ref}`)
    return response.data
  } catch (error: any) {
    console.error('Chapa status check error:', error.response?.data || error.message)
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