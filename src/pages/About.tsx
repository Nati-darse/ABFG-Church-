import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Globe, Award, Church, BookOpen } from 'lucide-react'

const About = () => {
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
            About Our Church
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Learn about our history, mission, and the passionate community that makes 
            Alembank Full Gospel Church a beacon of hope in Addis Ababa
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Alembank Full Gospel Church was established as a branch of the Ethiopian 
                Full Gospel Believers' Church, with a vision to serve the growing community 
                in the Alembank area of Addis Ababa. Our church was founded on the principles 
                of biblical truth, passionate worship, and genuine fellowship.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From humble beginnings, we have grown into a vibrant community of believers 
                who are committed to spreading God's love and making a positive impact in 
                our neighborhood and beyond. Our journey has been marked by God's faithfulness 
                and the dedication of our members.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to build on our foundation of faith, welcoming all who 
                seek to know God and experience His transforming love.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/161154/church-building-religion-christian-161154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Church Building"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              Our Mission & <span className="text-gradient">Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To glorify God by making disciples of Jesus Christ through passionate worship, 
                biblical teaching, authentic fellowship, and compassionate service to our 
                community and the world. We are committed to helping every person discover 
                their purpose in God's kingdom and grow in their relationship with Him.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mr-4">
                  <Globe className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a thriving, multicultural church community that transforms lives and 
                impacts our city for Christ. We envision a church where people from all 
                backgrounds find hope, healing, and purpose, and where the love of God is 
                demonstrated through our words and actions in tangible ways.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do as a church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Biblical Truth',
                description: 'We believe in the authority and relevance of God\'s Word for all aspects of life.'
              },
              {
                icon: Heart,
                title: 'Authentic Worship',
                description: 'We worship God with passion, sincerity, and reverence in spirit and truth.'
              },
              {
                icon: Users,
                title: 'Genuine Fellowship',
                description: 'We foster deep, meaningful relationships built on love, trust, and mutual support.'
              },
              {
                icon: Church,
                title: 'Faithful Service',
                description: 'We serve God and others with humility, excellence, and sacrificial love.'
              },
              {
                icon: Globe,
                title: 'Community Impact',
                description: 'We actively engage in meeting the needs of our community and beyond.'
              },
              {
                icon: Award,
                title: 'Spiritual Growth',
                description: 'We are committed to helping every person mature in their faith journey.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our church with wisdom, compassion, and faith
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Pastor [Name]',
                role: 'Senior Pastor',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                description: 'Leading our church with biblical wisdom and pastoral care for over [X] years.'
              },
              {
                name: 'Pastor [Name]',
                role: 'Associate Pastor',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                description: 'Overseeing youth ministry and community outreach programs.'
              },
              {
                name: '[Name]',
                role: 'Worship Leader',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                description: 'Leading our congregation in passionate and meaningful worship experiences.'
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About