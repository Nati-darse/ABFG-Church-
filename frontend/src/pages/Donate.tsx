import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Users, Shield } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { donationService } from '../services/api'
import toast from 'react-hot-toast'

interface DonationForm {
  amount: number
  firstName: string
  lastName: string
  email: string
  phone: string
  purpose: string
  isAnonymous: boolean
}

const Donate = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<DonationForm>()

  const donationPurposes = [
    { value: 'general', label: 'General Church Fund' },
    { value: 'building', label: 'Building & Maintenance' },
    { value: 'missions', label: 'Missions & Outreach' },
    { value: 'youth', label: 'Youth Ministry' },
    { value: 'charity', label: 'Charity & Community Support' },
    { value: 'other', label: 'Other' }
  ]

  const quickAmounts = [100, 250, 500, 1000, 2500, 5000]

  const onSubmit = async (data: DonationForm) => {
    setIsLoading(true)
    try {
      const response = await donationService.initializePayment(data)
      
      if (response.data.status === 'success') {
        // Redirect to Chapa payment page
        window.location.href = response.data.data.checkout_url
      } else {
        toast.error('Failed to initialize payment. Please try again.')
      }
    } catch (error) {
      console.error('Donation error:', error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-hero section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Support Our Ministry
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Your generous donations help us continue our mission of spreading God's love 
              and serving our community. Every contribution makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">Families Supported</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-300">Community Programs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">100%</h3>
              <p className="text-gray-600 dark:text-gray-300">Secure Donations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="text-center mb-8">
                <CreditCard className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Make a Donation
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Secure payment powered by Chapa
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Quick Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Select Amount (ETB)
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          const amountInput = document.getElementById('amount') as HTMLInputElement
                          if (amountInput) amountInput.value = amount.toString()
                        }}
                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-200"
                      >
                        {amount.toLocaleString()} ETB
                      </button>
                    ))}
                  </div>
                  <input
                    id="amount"
                    type="number"
                    placeholder="Enter custom amount"
                    {...register('amount', { 
                      required: 'Amount is required',
                      min: { value: 10, message: 'Minimum amount is 10 ETB' }
                    })}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {errors.amount && (
                    <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                  )}
                </div>

                {/* Purpose */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Donation Purpose
                  </label>
                  <select
                    {...register('purpose', { required: 'Please select a purpose' })}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select purpose</option>
                    {donationPurposes.map((purpose) => (
                      <option key={purpose.value} value={purpose.value}>
                        {purpose.label}
                      </option>
                    ))}
                  </select>
                  {errors.purpose && (
                    <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>
                  )}
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Anonymous Donation */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('isAnonymous')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Make this donation anonymous
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Proceed to Payment'}
                </button>
              </form>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Your payment is secured by Chapa's industry-standard encryption
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate