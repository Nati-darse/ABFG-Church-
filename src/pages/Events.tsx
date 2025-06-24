import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react'

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Annual Church Conference',
      date: '2024-03-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for a powerful day of worship, teaching, and fellowship with guest speakers and special programs.',
      category: 'Conference',
      featured: true
    },
    {
      title: 'Youth Camp 2024',
      date: '2024-03-22',
      time: '3 Days',
      location: 'Camp Grounds',
      description: 'An exciting retreat for teenagers with activities, workshops, and spiritual growth opportunities.',
      category: 'Youth',
      featured: true
    },
    {
      title: 'Women\'s Prayer Breakfast',
      date: '2024-03-08',
      time: '8:00 AM - 10:00 AM',
      location: 'Fellowship Hall',
      description: 'Ladies, join us for a morning of prayer, fellowship, and encouragement over breakfast.',
      category: 'Women\'s Ministry',
      featured: false
    },
    {
      title: 'Men\'s Fellowship Meeting',
      date: '2024-03-10',
      time: '7:00 PM - 9:00 PM',
      location: 'Conference Room',
      description: 'Monthly gathering for men to discuss faith, life challenges, and mutual support.',
      category: 'Men\'s Ministry',
      featured: false
    },
    {
      title: 'Children\'s Easter Program',
      date: '2024-03-31',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Sanctuary',
      description: 'Special Easter celebration with children\'s performances, egg hunt, and family activities.',
      category: 'Children',
      featured: true
    },
    {
      title: 'Community Outreach Day',
      date: '2024-04-05',
      time: '9:00 AM - 4:00 PM',
      location: 'Various Locations',
      description: 'Join us as we serve our community through various outreach activities and service projects.',
      category: 'Outreach',
      featured: false
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

  const getCategoryColor = (category: string) => {
    const colors = {
      'Conference': 'bg-primary-100 text-primary-800',
      'Youth': 'bg-green-100 text-green-800',
      'Women\'s Ministry': 'bg-pink-100 text-pink-800',
      'Men\'s Ministry': 'bg-blue-100 text-blue-800',
      'Children': 'bg-yellow-100 text-yellow-800',
      'Outreach': 'bg-purple-100 text-purple-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
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
            Church Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Stay connected with our church community through special events, conferences, 
            and programs designed to strengthen your faith and build relationships
          </motion.p>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss these special upcoming events at our church
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-gold-500 relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white/90">{formatDate(event.date)}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  <button className="btn-primary w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events Section */}
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
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these upcoming church events and programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                
                <p className="text-primary-600 font-medium mb-3">
                  {formatDate(event.date)}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <button className="w-full text-primary-600 hover:text-primary-700 font-medium py-2 px-4 border border-primary-600 hover:border-primary-700 rounded-lg transition-colors">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Event <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different types of events we organize throughout the year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Conferences & Seminars',
                description: 'Annual conferences, leadership seminars, and special teaching events with guest speakers.',
                icon: Users,
                color: 'primary'
              },
              {
                title: 'Youth & Children Programs',
                description: 'Camps, retreats, VBS, and special programs designed for young people and children.',
                icon: Users,
                color: 'green'
              },
              {
                title: 'Fellowship Events',
                description: 'Community gatherings, potluck dinners, game nights, and social activities.',
                icon: Heart,
                color: 'pink'
              },
              {
                title: 'Outreach & Service',
                description: 'Community service projects, evangelism events, and charitable activities.',
                icon: Heart,
                color: 'purple'
              },
              {
                title: 'Holiday Celebrations',
                description: 'Christmas, Easter, and other holiday celebrations with special programs.',
                icon: Calendar,
                color: 'gold'
              },
              {
                title: 'Training & Workshops',
                description: 'Leadership training, ministry workshops, and skill development sessions.',
                icon: BookOpen,
                color: 'blue'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                  <category.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events