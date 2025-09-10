import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found - RealGPT'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found - RealGPT')
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Page Not Found - RealGPT')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Page not found - RealGPT')
    }
  }, [])

  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-black">Page Not Found</h1>
      <p className="text-gray-600 text-lg">
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center px-6 py-3 bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
