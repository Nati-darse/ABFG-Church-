import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'Alembank Full Gospel Church',
  description = 'Welcome to Alembank Full Gospel Church - A place of worship, fellowship, and spiritual growth in Addis Ababa, Ethiopia.',
  keywords = 'church, gospel, christian, worship, prayer, ethiopia, addis ababa, alembank',
  image = '/cross-icon.svg',
  url = window.location.href
}) => {
  const fullTitle = title === 'Alembank Full Gospel Church' ? title : `${title} | Alembank Full Gospel Church`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO