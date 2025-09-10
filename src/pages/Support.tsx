import { useEffect } from 'react'

export default function Support() {
  useEffect(() => {
    document.title = 'Support - RealGPT'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get support for RealGPT - Contact us for help with the app, billing, or technical issues.')
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Support - RealGPT')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Get support for RealGPT - Contact us for help with the app, billing, or technical issues.')
    }
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-black mb-2">Support</h1>
        <p className="text-gray-600">Get help with RealGPT</p>
      </div>

      <div className="prose prose-gray max-w-none">
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Need help with RealGPT? We're here to assist you with any questions or issues you may have.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-black mb-4">Email Support</h3>
            <p className="text-gray-700 mb-4">
              For general support, billing questions, or technical issues:
            </p>
            <a 
              href="mailto:support@realgpt.app" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              support@realgpt.app
            </a>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-black mb-2">How do I cancel my subscription?</h3>
              <p className="text-gray-700">
                You can manage or cancel your subscription in iOS Settings {'>'} Apple ID {'>'} Subscriptions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-black mb-2">How do I request data deletion?</h3>
              <p className="text-gray-700">
                Send an email to support@realgpt.app with your account details and we'll process your request.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-black mb-2">Is my data secure?</h3>
              <p className="text-gray-700">
                Yes, we take your privacy seriously. Read our <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a> for details on how we protect your information.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-black mb-2">What features are included in Pro?</h3>
              <p className="text-gray-700">
                Pro features are unlocked through our subscription. Check the app for current Pro features and pricing.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Response Time</h2>
          <p className="text-gray-700 leading-relaxed">
            We typically respond to support requests within 24-48 hours during business days. 
            For urgent issues, please include "URGENT" in your email subject line.
          </p>
        </section>
      </div>
    </div>
  )
}
