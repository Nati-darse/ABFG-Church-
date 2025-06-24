import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', data)
    alert('Thank you for your message! We will get back to you soon.')
    reset()
  }

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            We'd love to hear from you! Reach out to us with any questions, prayer requests, 
            or if you'd like to learn more about our church community
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're a first-time visitor, a long-time member, or someone 
                  exploring faith, we're here to connect with you. Don't hesitate to 
                  reach out with any questions or concerns.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Alembank Area<br />
                      Addis Ababa, Ethiopia<br />
                      P.O. Box XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main Office: +251 11 XXX XXXX<br />
                      Prayer Line: +251 11 XXX XXXX<br />
                      Emergency: +251 9XX XXX XXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      General: info@alembankfgc.org<br />
                      Pastor: pastor@alembankfgc.org<br />
                      Prayer: prayer@alembankfgc.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Available after service
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Need Immediate Help?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you're facing a crisis or need immediate prayer support, 
                  don't hesitate to call our emergency line or visit us in person.
                </p>
                <button className="btn-primary">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      {...register('subject', { required: 'Please select a subject' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="visit">Planning to Visit</option>
                      <option value="membership">Church Membership</option>
                      <option value="ministry">Ministry Involvement</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="counseling">Counseling Request</option>
                      <option value="event">Event Information</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none bg-white"
                    placeholder="Please share your message with us..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
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
              Service <span className="text-gradient">Times</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for worship and fellowship throughout the week
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                day: 'Sunday',
                service: 'Main Service',
                time: '9:00 AM - 12:00 PM',
                description: 'Worship, preaching, communion'
              },
              {
                day: 'Wednesday',
                service: 'Prayer Meeting',
                time: '6:00 PM - 8:00 PM',
                description: 'Prayer, Bible study, fellowship'
              },
              {
                day: 'Friday',
                service: 'Youth Service',
                time: '7:00 PM - 9:00 PM',
                description: 'Youth worship and activities'
              },
              {
                day: 'Saturday',
                service: 'Bible Study',
                time: '2:00 PM - 4:00 PM',
                description: 'Deep Bible study and discussion'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center card-hover"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.day}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {service.service}
                </p>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  {service.time}
                </p>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Alembank, Addis Ababa. We're easy to find and 
              accessible by public transportation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Directions & Parking
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2" />
                  <p className="text-gray-600">
                    <strong>By Car:</strong> Take the main road to Alembank area. 
                    Free parking is available on-site.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2" />
                  <p className="text-gray-600">
                    <strong>By Public Transport:</strong> Take bus routes 12, 15, or 18 
                    to Alembank stop. The church is a 5-minute walk from the bus stop.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2" />
                  <p className="text-gray-600">
                    <strong>Landmarks:</strong> Located near Alembank Elementary School 
                    and the main market area.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">First Time Visitor?</h4>
                <p className="text-gray-600 mb-4">
                  We'd love to welcome you personally! Let us know you're coming 
                  and we'll have someone meet you at the entrance.
                </p>
                <button className="btn-primary">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Let Us Know You're Coming
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Interactive Map</p>
                  <p className="text-gray-400">
                    Alembank Full Gospel Church<br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact