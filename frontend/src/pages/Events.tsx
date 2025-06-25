import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Easter Celebration Service',
      date: '2024-03-31',
      time: '9:00 AM - 12:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for a special Easter celebration with worship, testimonies, and fellowship.',
      image: 'https://images.pexels.com/photos/8468470/pexels-photo-8468470.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Special Service'
    },
    {
      title: 'Youth Conference 2024',
      date: '2024-04-15',
      time: '6:00 PM - 9:00 PM',
      location: 'Church Hall',
      description: 'A powerful conference for young people featuring inspiring speakers and worship.',
      image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Youth Event'
    },
    {
      title: 'Community Outreach Program',
      date: '2024-04-20',
      time: '8:00 AM - 4:00 PM',
      location: 'Various Locations',
      description: 'Join us as we serve our community through various outreach activities.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Outreach'
    },
    {
      title: 'Women\'s Retreat',
      date: '2024-05-10',
      time: '9:00 AM - 5:00 PM',
      location: 'Retreat Center',
      description: 'A day of spiritual renewal, fellowship, and growth for women of all ages.',
      image: 'https://images.pexels.com/photos/7551426/pexels-photo-7551426.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Women\'s Ministry'
    },
    {
      title: 'Family Fun Day',
      date: '2024-05-25',
      time: '10:00 AM - 4:00 PM',
      location: 'Church Grounds',
      description: 'A day of fun activities, games, and fellowship for the whole family.',
      image: 'https://images.pexels.com/photos/8468463/pexels-photo-8468463.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Family Event'
    },
    {
      title: 'Baptism Service',
      date: '2024-06-02',
      time: '11:00 AM - 1:00 PM',
      location: 'Main Sanctuary',
      description: 'Witness and celebrate as new believers take their next step in faith.',
      image: 'https://images.pexels.com/photos/8468464/pexels-photo-8468464.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Special Service'
    }
  ]

  const regularEvents = [
    {
      title: 'Sunday Worship Service',
      schedule: 'Every Sunday',
      time: '9:00 AM - 11:30 AM',
      description: 'Our main worship service with contemporary music and biblical teaching'
    },
    {
      title: 'Wednesday Prayer Meeting',
      schedule: 'Every Wednesday',
      time: '6:30 PM - 8:00 PM',
      description: 'Corporate prayer time for church, community, and global concerns'
    },
    {
      title: 'Friday Youth Fellowship',
      schedule: 'Every Friday',
      time: '7:00 PM - 9:00 PM',
      description: 'Young people gathering for worship, games, and spiritual growth'
    },
    {
      title: 'Monthly Bible Study',
      schedule: 'First Saturday of each month',
      time: '2:00 PM - 4:00 PM',
      description: 'In-depth study of God\'s Word with interactive discussions'
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
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
            <Calendar className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Church Events
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join us for upcoming events, special services, and regular programs 
              designed to strengthen our faith and community bonds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Mark your calendar for these special events and programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>
                  <button className="w-full btn-primary">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
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
              Regular Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join us for our ongoing weekly and monthly programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-primary-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="font-medium">{event.schedule}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Users className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't Miss Out!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Stay connected with our church community by registering for events 
              and receiving updates about upcoming programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Subscribe to Updates
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Contact Event Coordinator
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Events