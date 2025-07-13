import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, BookOpen, Globe } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Love & Compassion',
      description: 'We believe in showing God\'s love through our actions and service to others'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Biblical Truth',
      description: 'Our foundation is built on the unchanging truth of God\'s Word'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'We foster a welcoming environment where everyone belongs'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Mission',
      description: 'We are committed to spreading the Gospel locally and globally'
    }
  ]

  const leadership = [
    {
      name: 'Pastor Seboka ',
      position: 'Senior Pastor',
      image: '/ch2.jpg',
      description: 'Leading our church with wisdom and dedication for a years'
    },
    {
      name: 'Evangelical Isayas ',
      position: ' Evangelist',
      image: '/chs1.jpg',
      description: 'Passionate about youth ministry and healing ministry'
    },
    {
      name: 'Mergia Bekele ',
      position: 'Church Elder',
      image: '/ch4.jpg',
      description: 'Providing spiritual guidance and leadership to our congregation'
    }
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Church
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Alembank Full Gospel Church is a vibrant community of believers dedicated to 
              worshiping God, growing in faith, and serving our community in Addis Ababa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our History
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Alembank Full Gospel Church was established as a branch of the Ethiopian Full Gospel 
                Believers' Church, with a mission to spread the Gospel and build a strong Christian 
                community in the Alembank area of Addis Ababa.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Since our founding, we have been committed to creating a welcoming environment where 
                people from all walks of life can come together to worship, learn, and grow in their 
                relationship with Jesus Christ.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we continue to serve our community through various ministries, outreach programs, 
                and spiritual development initiatives, always staying true to our core values and biblical foundation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/ch5.jpg"
                alt="Church History"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To glorify God by making disciples of Jesus Christ through worship, fellowship, 
                discipleship, ministry, and evangelism. We are committed to spreading the Gospel 
                and serving our community with love and compassion.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be a thriving, Christ-centered church that transforms lives and communities 
                through the power of the Gospel. We envision a church where every member is 
                equipped to serve and make a positive impact in the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              These values guide everything we do as a church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet the dedicated leaders who guide our church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {leader.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {leader.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About