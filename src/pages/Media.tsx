import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Image, Calendar, Eye } from 'lucide-react'

const Media = () => {
  const [activeTab, setActiveTab] = useState('photos')

  const photos = [
    {
      id: 1,
      title: 'Sunday Service Worship',
      date: '2024-02-25',
      image: 'https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Worship'
    },
    {
      id: 2,
      title: 'Youth Conference 2024',
      date: '2024-02-20',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Youth'
    },
    {
      id: 3,
      title: 'Community Outreach',
      date: '2024-02-15',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Outreach'
    },
    {
      id: 4,
      title: 'Children\'s Ministry',
      date: '2024-02-10',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Children'
    },
    {
      id: 5,
      title: 'Baptism Service',
      date: '2024-02-05',
      image: 'https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Baptism'
    },
    {
      id: 6,
      title: 'Women\'s Fellowship',
      date: '2024-01-30',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Fellowship'
    }
  ]

  const videos = [
    {
      id: 1,
      title: 'Sunday Service - February 25, 2024',
      date: '2024-02-25',
      duration: '1:45:30',
      thumbnail: 'https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      views: '245'
    },
    {
      id: 2,
      title: 'Youth Conference Highlights',
      date: '2024-02-20',
      duration: '25:15',
      thumbnail: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      views: '189'
    },
    {
      id: 3,
      title: 'Pastor\'s Message: Walking in Faith',
      date: '2024-02-18',
      duration: '35:20',
      thumbnail: 'https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      views: '312'
    },
    {
      id: 4,
      title: 'Worship Team Performance',
      date: '2024-02-15',
      duration: '12:45',
      thumbnail: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      views: '156'
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
            Media Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto opacity-90"
          >
            Relive precious moments from our church services, events, and community activities 
            through our photo and video gallery
          </motion.p>
        </div>
      </section>

      {/* Media Navigation */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'photos'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                <Image className="h-5 w-5 inline mr-2" />
                Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'videos'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                <Play className="h-5 w-5 inline mr-2" />
                Videos
              </button>
            </div>
          </div>

          {/* Photos Section */}
          {activeTab === 'photos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl shadow-lg card-hover cursor-pointer"
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
                      <div className="flex items-center text-sm opacity-90">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(photo.date).toLocaleDateString()}
                      </div>
                      <span className="inline-block mt-2 px-2 py-1 bg-primary-600 text-xs rounded-full">
                        {photo.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Videos Section */}
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Play className="h-8 w-8 text-primary-600 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">
                            {new Date(video.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          <span className="text-sm">{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Content Section */}
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
              Featured <span className="text-gradient">Content</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss these special moments and messages from our church community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8468/cross-sunset-sunrise-hill.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Featured Service"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                  <Play className="h-10 w-10 text-primary-600 ml-1" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Latest Sunday Service
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Experience our most recent Sunday service featuring powerful worship, 
                inspiring message, and the presence of God. Join us as we dive deep 
                into God's Word and discover His plan for our lives.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-primary-600" />
                  <span>February 25, 2024</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Play className="h-5 w-5 mr-3 text-primary-600" />
                  <span>1 hour 45 minutes</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Eye className="h-5 w-5 mr-3 text-primary-600" />
                  <span>245 views</span>
                </div>
              </div>
              <button className="btn-primary">
                Watch Full Service
                <Play className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated with Our Latest Content
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Never miss a service or special event. Subscribe to our channel and 
              get notified when we upload new content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Subscribe to YouTube
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-medium py-3 px-6 rounded-lg transition-all duration-200">
                Follow on Social Media
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Media