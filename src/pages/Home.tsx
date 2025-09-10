import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'RealGPT - A brutally honest AI chat app'
  }, [])

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-black">RealGPT</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          A brutally honest AI chat app.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/privacy" 
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md transition-colors"
        >
          Privacy Policy
        </Link>
        <Link 
          to="/terms" 
          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md transition-colors"
        >
          Terms of Use
        </Link>
      </div>
    </div>
  )
}
