import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, MapPin, Users, Calendar, Navigation } from 'lucide-react'
import MapView from '../components/ui/MapView'

const Services = () => {
  const [showMap, setShowMap] = useState(false)

  const services = [
    {
      title: 'Sunday Worship Service',
      time: '10:00 AM - 12:30 AM',
      description: 'Join us for inspiring worship, biblical teaching, and fellowship',
      features: ['Contemporary Worship', 'Biblical Preaching', 'Prayer Time', 'Fellowship']
    },
    {
      title: 'Morning Prayer Service',
      time: '8:00 AM - 9:45 AM',
      description: 'A time of focused prayer and spiritual reflection',
      features: ['Intercessory Prayer', 'Worship Songs', 'Testimonies', 'Communion']
    }
  ]

  const weeklyPrograms = [
    {
      day: 'Monday',
      program: 'Bible Study',
      time: '7:00 PM - 8:30 PM',
      description: 'Deep dive into God\'s Word with interactive discussions'
    },
    {
      day: 'Wednesday',
      program: 'Biblical Teaching',
      time: '6:30 PM - 8:00 PM',
      description: 'Different types of teachings for all servants '
    },
    {
      day: 'Saturday',
      program: 'Youth Fellowship',
      time: '5:30 PM - 7:30 PM',
      description: 'Young people gathering for worship, games, and growth'
    },
    {
      day: 'Tuesday',
      program: 'Women\'s Ministry',
      time: '10:00 AM - 12:00 PM',
      description: 'Women supporting each other in faith and life'
    }
  ]

  const departments = [
    {
      name: 'Children\'s Ministry',
      description: 'Nurturing young hearts with age-appropriate biblical teaching',
      ageGroup: 'Ages 3-12',
      activities: ['Sunday School', 'Bible Stories', 'Crafts & Games', 'Memory Verses']
    },
    {
      name: 'Youth Ministry',
      description: 'Empowering teenagers to grow in faith and leadership',
      ageGroup: 'Ages 13-25',
      activities: ['Youth Service', 'Discipleship', 'Community Service', 'Camps & Retreats']
    },
    {
      name: 'Adult Ministry',
      description: 'Supporting adults in their spiritual journey and life challenges',
      ageGroup: 'Ages 26+',
      activities: ['Bible Study', 'Marriage Ministry', 'Career Fellowship', 'Mentorship']
    },
    {
      name: 'Senior Ministry',
      description: 'Honoring and caring for our elderly members',
      ageGroup: 'Ages 60+',
      activities: ['Senior Fellowship', 'Health Ministry', 'Wisdom Sharing', 'Prayer Support']
    }
  ]

  const handleGetDirections = () => {
    // Open Google Maps with church location - XMVJ+C2M, Addis Ababa
    const churchAddress = 'XMVJ+C2M, Addis Ababa, Ethiopia'
    const encodedAddress = encodeURIComponent(churchAddress)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services & Programs
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Join us for meaningful worship experiences and spiritual growth opportunities 
              designed for every age and stage of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sunday Services */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sunday Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Come as you are and experience God's presence with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <div className="flex items-center text-primary-600 mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">{service.time}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 card p-8 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary-600 mr-2" />
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                Alembank Area, Addis Ababa, Ethiopia
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All services are conducted in both English and Amharic. 
              Childcare is available during all services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetDirections}
                className="btn-primary flex items-center justify-center"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Get Directions
              </button>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      {showMap && (
        <section className="section-padding bg-gray-50 dark:bg-gray-800">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Find Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Located in the heart of Alembank Area, Addis Ababa
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="card p-4"
            >
              <div className="h-96 w-full rounded-lg overflow-hidden">
                <MapView />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Weekly Programs */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Weekly Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join us throughout the week for various spiritual growth opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="text-primary-600 font-bold text-lg mb-2">
                  {program.day}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {program.program}
                </h3>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 mb-3">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{program.time}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ministry Departments
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find your place in our church family through age-appropriate ministries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {dept.name}
                    </h3>
                    <span className="text-primary-600 font-medium">{dept.ageGroup}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Activities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {dept.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We'd love to welcome you into our church family. Come and experience 
              God's love in a warm, welcoming community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowMap(!showMap)}
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                {showMap ? 'Hide Map' : 'Show Map'}
              </button>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services