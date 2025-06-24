import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Smartphone, Building, Shield, CheckCircle, Gift } from 'lucide-react'

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('general')

  const predefinedAmounts = [50, 100, 250, 500, 1000, 2000]

  const donationCategories = [
    {
      id: 'general',
      title: 'General Fund',
      description: 'Support the overall ministry and operations of our church',
      icon: Heart
    },
    {
      id: 'building',
      title: 'Building Fund',
      description: 'Help us expand and maintain our church facilities',
      icon: Building
    },
    {
      id: 'missions',
      title: 'Missions & Outreach',
      description: 'Support our local and international mission work',
      icon: Globe
    },
    {
      id: 'youth',
      title: 'Youth Ministry',
      description: 'Invest in the next generation through youth programs',
      icon: Users
    },
    {
      id: 'benevolence',
      title: 'Benevolence Fund',
      description: 'Help families and individuals in need within our community',
      icon: Gift
    }
  ]

  const paymentMethods = [
    {
      id: 'card',
      title: 'Credit/Debit Card',
      description: 'Secure online payment with Visa, MasterCard, or American Express',
      icon: CreditCard
    },
    {
      id: 'mobile',
      title: 'Mobile Money',
      description: 'Pay using M-Birr, HelloCash, or other mobile payment services',
      icon: Smartphone
    },
    {
      id: 'bank',
      title: 'Bank Transfer',
      description: 'Direct bank transfer to our church account',
      icon: Building
    }
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
            Support Our Ministry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Your generous giving helps us spread God's love, serve our community, 
            and advance His kingdom. Every contribution makes a difference.
          </motion.p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Make a <span className="text-gradient">Donation</span>
              </h2>
              <p className="text-xl text-gray-600">
                Choose your donation amount and category to get started
              </p>
            </motion.div>

            <div className="bg-gray-50 rounded-2xl p-8">
              {/* Donation Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Choose Donation Category
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {donationCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setDonationType(category.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        donationType === category.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 bg-white hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <category.icon className={`h-5 w-5 mr-2 ${
                          donationType === category.id ? 'text-primary-600' : 'text-gray-600'
                        }`} />
                        <span className={`font-medium ${
                          donationType === category.id ? 'text-primary-600' : 'text-gray-900'
                        }`}>
                          {category.title}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Select Amount (ETB)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                      }}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'border-primary-600 bg-primary-600 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-primary-300'
                      }`}
                    >
                      {amount.toLocaleString()} ETB
                    </motion.button>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">Custom Amount:</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(null)
                    }}
                    placeholder="Enter amount"
                    className="flex-1 max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <span className="text-gray-600">ETB</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Choose Payment Method
                </h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer"
                    >
                      <input
                        type="radio"
                        id={method.id}
                        name="paymentMethod"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                      />
                      <label htmlFor={method.id} className="ml-3 flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <method.icon className="h-5 w-5 text-gray-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">{method.title}</p>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  <p className="text-green-800 font-medium">
                    Secure Donation Processing
                  </p>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Your donation is processed securely using industry-standard encryption. 
                  We never store your payment information.
                </p>
              </div>

              {/* Donate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary text-lg py-4"
                disabled={!selectedAmount && !customAmount}
              >
                <Heart className="h-5 w-5 mr-2" />
                Donate {selectedAmount ? `${selectedAmount.toLocaleString()} ETB` : customAmount ? `${customAmount} ETB` : ''}
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
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
              Your Impact <span className="text-gradient">Matters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your generous giving is making a difference in our community and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: '500+',
                title: 'Lives Touched',
                description: 'People reached through our ministry programs'
              },
              {
                icon: Gift,
                number: '150+',
                title: 'Families Helped',
                description: 'Families supported through our benevolence fund'
              },
              {
                icon: BookOpen,
                number: '75+',
                title: 'Youth Mentored',
                description: 'Young people in our discipleship programs'
              },
              {
                icon: Heart,
                number: '25+',
                title: 'Community Projects',
                description: 'Outreach initiatives completed this year'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
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
              Other Ways to <span className="text-gradient">Give</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different ways you can support our ministry beyond monetary donations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Volunteer Your Time',
                description: 'Join our volunteer teams in various ministry areas including children\'s ministry, worship team, and community outreach.',
                action: 'Learn More'
              },
              {
                icon: Gift,
                title: 'In-Kind Donations',
                description: 'Donate items like food, clothing, books, or equipment that can benefit our church and community programs.',
                action: 'See Needs List'
              },
              {
                icon: Heart,
                title: 'Planned Giving',
                description: 'Consider including our church in your will or estate planning to create a lasting legacy of faith.',
                action: 'Contact Us'
              },
              {
                icon: Users,
                title: 'Sponsor a Program',
                description: 'Sponsor specific programs like youth camps, community meals, or educational initiatives.',
                action: 'View Programs'
              },
              {
                icon: Building,
                title: 'Memorial Gifts',
                description: 'Honor loved ones with memorial gifts that support ongoing ministry and church operations.',
                action: 'Learn More'
              },
              {
                icon: Globe,
                title: 'Mission Trips',
                description: 'Support or participate in our mission trips to serve communities locally and internationally.',
                action: 'Get Involved'
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 card-hover"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 mx-auto">
                  <option.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {option.description}
                </p>
                <div className="text-center">
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    {option.action} →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Bank Transfer Details
              </h2>
              <p className="text-xl opacity-90 mb-8">
                For direct bank transfers, please use the following account details. 
                Don't forget to include your name and donation purpose in the reference.
              </p>
              
              <div className="bg-white/10 rounded-xl p-6 space-y-4">
                <div>
                  <p className="font-semibold">Bank Name:</p>
                  <p className="opacity-90">Commercial Bank of Ethiopia</p>
                </div>
                <div>
                  <p className="font-semibold">Account Name:</p>
                  <p className="opacity-90">Alembank Full Gospel Church</p>
                </div>
                <div>
                  <p className="font-semibold">Account Number:</p>
                  <p className="opacity-90">1000XXXXXXXX</p>
                </div>
                <div>
                  <p className="font-semibold">Swift Code:</p>
                  <p className="opacity-90">CBETETAA</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 rounded-2xl p-8">
                <CheckCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">
                  Thank You for Your Generosity
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Your faithful giving enables us to continue serving God and our community. 
                  We are grateful for your partnership in ministry.
                </p>
                <blockquote className="italic text-lg opacity-80">
                  "Each of you should give what you have decided in your heart to give, 
                  not reluctantly or under compulsion, for God loves a cheerful giver."
                </blockquote>
                <p className="text-right mt-4 font-semibold">- 2 Corinthians 9:7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donations