import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Heart, Send, Shield, Users, Clock, CheckCircle } from 'lucide-react'

interface PrayerRequestForm {
  name: string
  email: string
  phone?: string
  category: string
  request: string
  isUrgent: boolean
  isAnonymous: boolean
  allowSharing: boolean
}

const PrayerRequests = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PrayerRequestForm>()

  const onSubmit = async (data: PrayerRequestForm) => {
    // Here you would typically send the data to your backend
    console.log('Prayer request submitted:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const prayerCategories = [
    'Health & Healing',
    'Family & Relationships',
    'Financial Provision',
    'Spiritual Growth',
    'Career & Education',
    'Guidance & Direction',
    'Salvation',
    'Other'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-gold-500 text-white">
        <div className="container-max text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Prayer Requests
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            We believe in the power of prayer. Share your prayer needs with our church family, 
            and let us stand with you in faith and intercession
          </motion.p>
        </div>
      </section>

      {/* Prayer Request Form Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Submit Your <span className="text-gradient">Prayer Request</span>
              </h2>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-800 font-medium">
                      Your prayer request has been submitted successfully. Our prayer team will lift you up in prayer.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Prayer Category *
                    </label>
                    <select
                      id="category"
                      {...register('category', { required: 'Please select a category' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a category</option>
                      {prayerCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="request" className="block text-sm font-medium text-gray-700 mb-2">
                    Prayer Request *
                  </label>
                  <textarea
                    id="request"
                    rows={6}
                    {...register('request', { required: 'Prayer request is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please share your prayer request with us..."
                  />
                  {errors.request && (
                    <p className="mt-1 text-sm text-red-600">{errors.request.message}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isUrgent"
                      {...register('isUrgent')}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isUrgent" className="ml-2 text-sm text-gray-700">
                      This is an urgent prayer request
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isAnonymous"
                      {...register('isAnonymous')}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isAnonymous" className="ml-2 text-sm text-gray-700">
                      Submit this request anonymously
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="allowSharing"
                      {...register('allowSharing')}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="allowSharing" className="ml-2 text-sm text-gray-700">
                      Allow sharing with prayer groups (name will be kept confidential)
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Prayer Request
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>

            {/* Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How We Handle Your Requests
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Confidential & Secure</h4>
                      <p className="text-gray-600">Your prayer requests are handled with complete confidentiality and stored securely.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Prayer Team</h4>
                      <p className="text-gray-600">Our dedicated prayer team commits to praying for each request regularly.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Timely Response</h4>
                      <p className="text-gray-600">Urgent requests are prioritized and prayed for immediately.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gold-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Scripture Promise
                </h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."
                </blockquote>
                <p className="text-right text-primary-600 font-semibold mt-4">- Mark 11:24</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Other Ways to Connect
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Prayer Hotline</h4>
                    <p className="text-gray-600">Call us at +251 11 XXX XXXX for immediate prayer support</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">In-Person Prayer</h4>
                    <p className="text-gray-600">Visit us after any service for personal prayer ministry</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">Send prayer requests to prayer@alembankfgc.org</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prayer Ministry Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Prayer <span className="text-gradient">Ministry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the different ways we engage in prayer as a church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Intercessory Prayer',
                description: 'Our prayer warriors commit to regular intercession for submitted requests and church needs.',
                schedule: 'Daily at 6:00 AM'
              },
              {
                icon: Users,
                title: 'Corporate Prayer',
                description: 'Join us for powerful corporate prayer sessions during our Wednesday evening services.',
                schedule: 'Wednesdays 6:00 PM'
              },
              {
                icon: Clock,
                title: '24/7 Prayer Chain',
                description: 'Urgent requests are immediately shared with our prayer chain for continuous coverage.',
                schedule: 'Available 24/7'
              },
              {
                icon: Heart,
                title: 'Healing Prayer',
                description: 'Special prayer ministry for physical, emotional, and spiritual healing needs.',
                schedule: 'Sundays after service'
              },
              {
                icon: Users,
                title: 'Prayer Groups',
                description: 'Small prayer groups meet throughout the week for intimate prayer and fellowship.',
                schedule: 'Various times'
              },
              {
                icon: Shield,
                title: 'Prayer Counseling',
                description: 'One-on-one prayer sessions with trained prayer counselors for deeper needs.',
                schedule: 'By appointment'
              }
            ].map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center card-hover"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                  <ministry.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {ministry.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {ministry.description}
                </p>
                <div className="text-primary-600 font-medium text-sm">
                  {ministry.schedule}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrayerRequests