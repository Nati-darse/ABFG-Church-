import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        events: 'Events',
        media: 'Media',
        contact: 'Contact',
        donate: 'Donate',
        prayerRequest: 'Prayer Request'
      },
      home: {
        welcome: 'Welcome to Alembank Full Gospel Church',
        subtitle: 'A place of worship, fellowship, and spiritual growth in Addis Ababa',
        joinUs: 'Join Us for Worship',
        learnMore: 'Learn More',
        whyChoose: 'Why Choose Our Church?',
        whyChooseSubtitle: 'We are committed to creating a welcoming environment where everyone can grow in their faith journey',
        upcomingEvents: 'Upcoming Events',
        upcomingEventsSubtitle: 'Join us for these upcoming events and programs',
        readyToJoin: 'Ready to Join Our Community?',
        readyToJoinSubtitle: 'Take the next step in your faith journey. We\'d love to welcome you into our church family.',
        visitUs: 'Visit Us',
        requestPrayer: 'Request Prayer'
      },
      footer: {
        address: 'Alembank Area, Addis Ababa, Ethiopia',
        phone: '+251-11-XXX-XXXX',
        email: 'info@alembankchurch.org',
        followUs: 'Follow Us',
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us',
        copyright: '© 2024 Alembank Full Gospel Church. All rights reserved. Made with ❤️ for the glory of God.'
      },
      about: {
        title: 'About Our Church',
        subtitle: 'Alembank Full Gospel Church is a vibrant community of believers dedicated to worshiping God, growing in faith, and serving our community in Addis Ababa.',
        history: 'Our History',
        mission: 'Our Mission',
        vision: 'Our Vision',
        values: 'Our Core Values',
        valuesSubtitle: 'These values guide everything we do as a church community',
        leadership: 'Our Leadership',
        leadershipSubtitle: 'Meet the dedicated leaders who guide our church community'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We\'d love to hear from you. Get in touch with us for any questions, prayer requests, or to learn more about our church community.',
        sendMessage: 'Send us a Message',
        findUs: 'Find Us',
        directions: 'Directions',
        getDirections: 'Get Directions'
      },
      donate: {
        title: 'Support Our Ministry',
        subtitle: 'Your generous donations help us continue our mission of spreading God\'s love and serving our community. Every contribution makes a difference.',
        makeADonation: 'Make a Donation',
        securePayment: 'Secure payment powered by Chapa',
        proceedToPayment: 'Proceed to Payment'
      },
      prayer: {
        title: 'Prayer Requests',
        subtitle: 'We believe in the power of prayer. Share your prayer needs with us, and our dedicated prayer team will lift you up in prayer.',
        submitRequest: 'Submit Your Prayer Request',
        submitRequestSubtitle: 'Share your prayer needs with confidence. All requests are treated with care and confidentiality.',
        submitPrayerRequest: 'Submit Prayer Request',
        howWeHandle: 'How We Handle Your Prayer Requests',
        howWeHandleSubtitle: 'Your prayer requests are handled with care, confidentiality, and dedication'
      }
    }
  },
  am: {
    translation: {
      nav: {
        home: 'መነሻ',
        about: 'ስለ እኛ',
        services: 'አገልግሎቶች',
        events: 'ዝግጅቶች',
        media: 'ሚዲያ',
        contact: 'ያግኙን',
        donate: 'ለግሱ',
        prayerRequest: 'የጸሎት ጥያቄ'
      },
      home: {
        welcome: 'ወደ አለምባንክ ሙሉ ወንጌል ቤተክርስቲያን እንኳን በደህና መጡ',
        subtitle: 'በአዲስ አበባ የአምልኮ፣ የወንድማማችነት እና የመንፈሳዊ እድገት ቦታ',
        joinUs: 'ለአምልኮ ይቀላቀሉን',
        learnMore: 'የበለጠ ይወቁ',
        whyChoose: 'ለምን ቤተክርስቲያናችንን ይመርጣሉ?',
        whyChooseSubtitle: 'ሁሉም ሰው በእምነት ጉዞው ውስጥ እንዲያድግ የሚያስችል አቀባባይ አካባቢ ለመፍጠር ቆርጠናል',
        upcomingEvents: 'የሚመጡ ዝግጅቶች',
        upcomingEventsSubtitle: 'ለእነዚህ የሚመጡ ዝግጅቶች እና ፕሮግራሞች ይቀላቀሉን',
        readyToJoin: 'ማህበረሰባችንን ለመቀላቀል ዝግጁ ነዎት?',
        readyToJoinSubtitle: 'በእምነት ጉዞዎ ውስጥ ቀጣዩን እርምጃ ይውሰዱ። ወደ ቤተክርስቲያን ቤተሰባችን እንኳን በደህና መጡ።',
        visitUs: 'ይጎብኙን',
        requestPrayer: 'ጸሎት ይጠይቁ'
      },
      footer: {
        address: 'አለምባንክ አካባቢ፣ አዲስ አበባ፣ ኢትዮጵያ',
        phone: '+251-11-XXX-XXXX',
        email: 'info@alembankchurch.org',
        followUs: 'ይከተሉን',
        quickLinks: 'ፈጣን አገናኞች',
        contactUs: 'ያግኙን',
        copyright: '© 2024 አለምባንክ ሙሉ ወንጌል ቤተክርስቲያን። ሁሉም መብቶች የተጠበቁ ናቸው። ለእግዚአብሔር ክብር በ❤️ የተሰራ።'
      },
      about: {
        title: 'ስለ ቤተክርስቲያናችን',
        subtitle: 'አለምባንክ ሙሉ ወንጌል ቤተክርስቲያን እግዚአብሔርን ለማምለክ፣ በእምነት ለማደግ እና በአዲስ አበባ ማህበረሰባችንን ለማገልገል የተወሰነ ሕያው የአማኞች ማህበረሰብ ነው።',
        history: 'የእኛ ታሪክ',
        mission: 'የእኛ ተልእኮ',
        vision: 'የእኛ ራዕይ',
        values: 'የእኛ ዋና እሴቶች',
        valuesSubtitle: 'እነዚህ እሴቶች እንደ ቤተክርስቲያን ማህበረሰብ የምናደርገውን ሁሉ ይመራሉ',
        leadership: 'የእኛ አመራር',
        leadershipSubtitle: 'የቤተክርስቲያን ማህበረሰባችንን የሚመሩ ቁርጠኛ መሪዎችን ያግኙ'
      },
      contact: {
        title: 'ያግኙን',
        subtitle: 'ከእርስዎ መስማት እንወዳለን። ለማንኛውም ጥያቄ፣ የጸሎት ጥያቄዎች ወይም ስለ ቤተክርስቲያን ማህበረሰባችን የበለጠ ለማወቅ ያግኙን።',
        sendMessage: 'መልእክት ይላኩልን',
        findUs: 'ያግኙን',
        directions: 'አቅጣጫዎች',
        getDirections: 'አቅጣጫ ያግኙ'
      },
      donate: {
        title: 'አገልግሎታችንን ይደግፉ',
        subtitle: 'የእርስዎ ለጋስ ልገሳ የእግዚአብሔርን ፍቅር ለማሰራጨት እና ማህበረሰባችንን ለማገልገል ያለንን ተልእኮ እንድንቀጥል ይረዳናል። እያንዳንዱ አስተዋፅዖ ለውጥ ያመጣል።',
        makeADonation: 'ልገሳ ያድርጉ',
        securePayment: 'በቻፓ የተጠበቀ ክፍያ',
        proceedToPayment: 'ወደ ክፍያ ይቀጥሉ'
      },
      prayer: {
        title: 'የጸሎት ጥያቄዎች',
        subtitle: 'በጸሎት ኃይል እናምናለን። የጸሎት ፍላጎቶችዎን ከእኛ ጋር ያካፍሉ፣ እና የተወሰነ የጸሎት ቡድናችን በጸሎት ይደግፍዎታል።',
        submitRequest: 'የጸሎት ጥያቄዎን ያስገቡ',
        submitRequestSubtitle: 'የጸሎት ፍላጎቶችዎን በመተማመን ያካፍሉ። ሁሉም ጥያቄዎች በጥንቃቄ እና በሚስጥራዊነት ይታያሉ።',
        submitPrayerRequest: 'የጸሎት ጥያቄ ያስገቡ',
        howWeHandle: 'የጸሎት ጥያቄዎችዎን እንዴት እንይዛለን',
        howWeHandleSubtitle: 'የጸሎት ጥያቄዎችዎ በጥንቃቄ፣ በሚስጥራዊነት እና በቁርጠኝነት ይታያሉ'
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  })

export default i18n