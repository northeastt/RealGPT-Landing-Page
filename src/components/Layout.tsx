import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
            RealGPT
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content" className="max-w-3xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-sm">
              © RealGPT, Inc.
            </p>
            <nav className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-gray-600 hover:text-black text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-600 hover:text-black text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded"
              >
                Terms of Use
              </Link>
              <Link 
                to="/support" 
                className="text-gray-600 hover:text-black text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded"
              >
                Support
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
