import axios from 'axios'

interface ImportMeta {
  readonly env: {
    VITE_API_URL?: string
  }
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Contact Service
export const contactService = {
  submitContact: async (data: any) => {
    return api.post('/contact', data)
  },
}

// Prayer Request Service
export const prayerService = {
  submitPrayerRequest: async (data: any) => {
    return api.post('/prayer-requests', data)
  },
  getPrayerRequests: async () => {
    return api.get('/prayer-requests')
  },
}

// Donation Service
export const donationService = {
  initializePayment: async (data: any) => {
    return api.post('/donations/initialize', data)
  },
  verifyPayment: async (transactionId: string) => {
    return api.get(`/donations/verify/${transactionId}`)
  },
  getDonations: async () => {
    return api.get('/donations')
  },
}

// Events Service
export const eventService = {
  getEvents: async () => {
    return api.get('/events')
  },
  registerForEvent: async (eventId: string, data: any) => {
    return api.post(`/events/${eventId}/register`, data)
  },
}

// Media Service
export const mediaService = {
  getPhotos: async () => {
    return api.get('/media/photos')
  },
  getVideos: async () => {
    return api.get('/media/videos')
  },
}

export default api