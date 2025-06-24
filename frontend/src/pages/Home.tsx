import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Users, Calendar, BookOpen, SprayCan as Pray, ChevronDown } from 'lucide-react'
import LanguageSelector from '../components/LanguageSelector'

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-blue-100/40 to-blue-200/60" />
        
        {/* Language Selector - Top Right */}
        <div className="absolute top-24 right-8 z-20">
          <LanguageSelector />
        </div>
        
        <div className="relative z-10 text-center text-gray-900 px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to
            <span className="block text-blue-700">Alembank FGC</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-800 leading-relaxed"
          >
            A place where faith meets community, and hearts are transformed by God's love
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/about" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </Link>
            <Link to="/services" className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Join Our Services
            </Link>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-700 animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.button>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome to Our <span className="text-gradient">Church Family</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Alembank Full Gospel Church is a vibrant community of believers committed to 
                spreading God's love and serving our community in Addis Ababa. As a branch of 
                the Ethiopian Full Gospel Believers' Church, we are rooted in biblical truth 
                and passionate about worship, fellowship, and outreach.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you're seeking spiritual growth, community connection, or simply 
                curious about faith, you'll find a warm welcome here. Come as you are, 
                and discover the transforming power of God's love.
              </p>
              <Link to="/about" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Church Community"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the many ways you can connect, grow, and serve in our church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Worship Services',
                description: 'Join us for inspiring worship services filled with praise, prayer, and powerful biblical teaching.',
                link: '/services'
              },
              {
                icon: Users,
                title: 'Community Fellowship',
                description: 'Build meaningful relationships and find your place in our loving church family.',
                link: '/about'
              },
              {
                icon: Calendar,
                title: 'Events & Programs',
                description: 'Participate in special events, conferences, and programs designed for spiritual growth.',
                link: '/events'
              },
              {
                icon: BookOpen,
                title: 'Bible Study',
                description: 'Deepen your understanding of God\'s word through our weekly Bible study sessions.',
                link: '/services'
              },
              {
                icon: Pray,
                title: 'Prayer Ministry',
                description: 'Experience the power of prayer and submit your personal prayer requests.',
                link: '/prayer-requests'
              },
              {
                icon: Heart,
                title: 'Community Outreach',
                description: 'Join us in serving our community and making a positive impact in Addis Ababa.',
                link: '/about'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <Link 
                    to={feature.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Take the next step in your spiritual journey. We'd love to welcome you 
              into our church family and help you grow in faith.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                Visit Us This Sunday
              </Link>
              <Link to="/prayer-requests" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-medium py-3 px-6 rounded-lg transition-all duration-200">
                Submit Prayer Request
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home