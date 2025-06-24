import React from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Users, BookOpen, Music, Heart, Baby, Gamepad2 } from 'lucide-react'

const Services = () => {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Join us for inspiring worship, biblical teaching, and meaningful fellowship 
            throughout the week
          </motion.p>
        </div>
      </section>

      {/* Main Services Section */}
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
              Weekly <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience God's presence through worship, prayer, and the teaching of His Word
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Sunday Morning Service',
                time: '9:00 AM - 12:00 PM',
                description: 'Our main worship service featuring contemporary praise, biblical preaching, and communion. Perfect for families and individuals seeking spiritual nourishment.',
                features: ['Contemporary Worship', 'Biblical Preaching', 'Holy Communion', 'Children\'s Ministry'],
                icon: Music,
                color: 'primary'
              },
              {
                title: 'Wednesday Prayer Meeting',
                time: '6:00 PM - 8:00 PM',
                description: 'Join us for an intimate time of prayer, Bible study, and fellowship. A perfect midweek spiritual boost for your faith journey.',
                features: ['Intercessory Prayer', 'Bible Study', 'Testimonies', 'Fellowship'],
                icon: Heart,
                color: 'gold'
              },
              {
                title: 'Friday Youth Service',
                time: '7:00 PM - 9:00 PM',
                description: 'Dynamic service designed for teenagers and young adults with contemporary worship, relevant teaching, and fun activities.',
                features: ['Youth Worship', 'Life-Relevant Teaching', 'Games & Activities', 'Peer Fellowship'],
                icon: Gamepad2,
                color: 'primary'
              },
              {
                title: 'Saturday Bible Study',
                time: '2:00 PM - 4:00 PM',
                description: 'Deep dive into God\'s Word with systematic Bible study, discussion, and practical application for daily living.',
                features: ['Systematic Study', 'Group Discussion', 'Practical Application', 'Q&A Sessions'],
                icon: BookOpen,
                color: 'gold'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-16 h-16 ${
                    service.color === 'primary' ? 'bg-primary-100' : 'bg-gold-100'
                  } rounded-full mr-4`}>
                    <service.icon className={`h-8 w-8 ${
                      service.color === 'primary' ? 'text-primary-600' : 'text-gold-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.time}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">What to Expect:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className={`w-2 h-2 ${
                          service.color === 'primary' ? 'bg-primary-600' : 'bg-gold-600'
                        } rounded-full mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
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
              Church <span className="text-gradient">Departments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your place to serve and grow in our various ministry departments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Baby,
                title: 'Children\'s Ministry',
                description: 'Nurturing young hearts with age-appropriate Bible lessons, games, and activities.',
                ageGroup: 'Ages 3-12',
                activities: ['Sunday School', 'Bible Stories', 'Crafts & Games', 'Special Events']
              },
              {
                icon: Users,
                title: 'Youth Ministry',
                description: 'Empowering teenagers to grow in faith while navigating life\'s challenges.',
                ageGroup: 'Ages 13-18',
                activities: ['Youth Services', 'Camps & Retreats', 'Mentorship', 'Community Service']
              },
              {
                icon: Heart,
                title: 'Women\'s Ministry',
                description: 'Building sisterhood through Bible study, fellowship, and mutual support.',
                ageGroup: 'All Women',
                activities: ['Bible Study', 'Prayer Groups', 'Conferences', 'Outreach Programs']
              },
              {
                icon: Users,
                title: 'Men\'s Ministry',
                description: 'Strengthening men to be godly leaders in their families and communities.',
                ageGroup: 'All Men',
                activities: ['Men\'s Breakfast', 'Bible Study', 'Service Projects', 'Accountability Groups']
              },
              {
                icon: Music,
                title: 'Worship Ministry',
                description: 'Leading the congregation in passionate worship through music and arts.',
                ageGroup: 'All Ages',
                activities: ['Choir', 'Instrumental Team', 'Sound & Media', 'Dance Ministry']
              },
              {
                icon: BookOpen,
                title: 'Teaching Ministry',
                description: 'Equipping believers with biblical knowledge and practical life application.',
                ageGroup: 'All Ages',
                activities: ['Bible Classes', 'Discipleship', 'Leadership Training', 'Seminars']
              }
            ].map((department, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                  <department.icon className="h-8 w-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {department.title}
                </h3>
                
                <p className="text-primary-600 font-medium text-center mb-4">
                  {department.ageGroup}
                </p>
                
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {department.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Activities:</h4>
                  <ul className="space-y-1">
                    {department.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
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
                Visit Us <span className="text-gradient">This Sunday</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We'd love to welcome you to our church family! Come as you are and 
                experience the warmth of our community and the power of God's love.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Alembank, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-primary-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Service Time</p>
                    <p className="text-gray-600">Sunday 9:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
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
                alt="Church Service"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services