export const formatCurrency = (amount: number, currency: string = 'ETB'): string => {
  return new Intl.NumberFormat('en-ET', {
    style: 'currency',
    currency: currency === 'ETB' ? 'USD' : currency, // Fallback since ETB might not be supported
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount).replace('$', 'ETB ')
}

export const formatDate = (date: string | Date, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  }
  
  return dateObj.toLocaleDateString('en-US', defaultOptions)
}

export const formatTime = (time: string): string => {
  try {
    const [hours, minutes] = time.split(':')
    const date = new Date()
    date.setHours(parseInt(hours), parseInt(minutes))
    
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  } catch {
    return time
  }
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}