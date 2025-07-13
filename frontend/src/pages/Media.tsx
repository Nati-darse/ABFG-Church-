import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Image, Calendar, Eye } from 'lucide-react'

const Media = () => {
  const [activeTab, setActiveTab] = useState('photos')

  const photos = [
    {
      id: 1,
      title: 'Sunday Worship Service',
      date: '2024-01-15',
      image: '/ch1.jpg',
      category: 'Worship'
    },
    {
      id: 2,
      title: 'Youth Fellowship',
      date: '2024-01-12',
      image: '/chy.jpg',
      category: 'Youth'
    },
    {
      id: 3,
      title: 'Community Outreach',
      date: '2024-01-10',
      image: '/chm.jpg',
      category: 'Outreach'
    },
    {
      id: 4,
      title: 'Baptism Service',
      date: '2024-01-08',
      image: '/ch2.jpg',
      category: 'Special Events'
    },
    {
      id: 5,
      title: 'Women\'s Ministry',
      date: '2024-01-05',
      image: '/ch3.jpg',
      category: 'Ministry'
    },
    {
      id: 6,
      title: 'Family Day',
      date: '2024-01-03',
      image: '/ch4.jpg',
      category: 'Family'
    }
  ]

  const videos = [
    {
      id: 1,
      title: 'Sunday Service - January 21, 2024',
      date: '2024-01-21',
      thumbnail: '/ch1.jpg',
      duration: '1:45:30',
      views: '1.2K',
      category: 'Sermon'
    },
    {
      id: 2,
      title: 'Youth Conference Highlights',
      date: '2024-01-18',
      thumbnail: '/chy2.jpg',
      duration: '25:15',
      views: '856',
      category: 'Youth'
    },
    {
      id: 3,
      title: 'Worship Night - Special Songs',
      date: '2024-01-15',
      thumbnail: '/ch5.jpg',
      duration: '35:20',
      views: '2.1K',
      category: 'Worship'
    },
    {
      id: 4,
      title: 'Pastor\'s Message: Faith in Action',
      date: '2024-01-12',
      thumbnail: '/ch2.jpg',
      duration: '42:10',
      views: '1.8K',
      category: 'Sermon'
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
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
            <Image className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Media Gallery
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our collection of photos and videos from church services, 
              events, and community activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'photos'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'videos'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600'
                }`}
              >
                Videos
              </button>
            </div>
          </div>

          {/* Photos Tab */}
          {activeTab === 'photos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                        {photo.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {photo.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{formatDate(photo.date)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Play className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                        {video.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{formatDate(video.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span className="text-sm">{video.views} views</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Media