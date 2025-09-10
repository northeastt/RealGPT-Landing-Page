import { useEffect } from 'react'

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Use - RealGPT'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'RealGPT Terms of Use - Read our terms and conditions for using the RealGPT app.')
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Terms of Use - RealGPT')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'RealGPT Terms of Use - Read our terms and conditions for using the RealGPT app.')
    }
  }, [])

  const effectiveDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-black mb-2">Terms of Use</h1>
        <p className="text-gray-600">Effective date: {effectiveDate}</p>
      </div>

      {/* Table of Contents */}
      <nav className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#acceptance" className="text-blue-600 hover:text-blue-800">Acceptance</a></li>
          <li><a href="#license" className="text-blue-600 hover:text-blue-800">License</a></li>
          <li><a href="#subscriptions-billing" className="text-blue-600 hover:text-blue-800">Subscriptions & Billing</a></li>
          <li><a href="#acceptable-use" className="text-blue-600 hover:text-blue-800">Acceptable Use</a></li>
          <li><a href="#content-ai-output" className="text-blue-600 hover:text-blue-800">Content & AI Output</a></li>
          <li><a href="#termination" className="text-blue-600 hover:text-blue-800">Termination</a></li>
          <li><a href="#disclaimers" className="text-blue-600 hover:text-blue-800">Disclaimers & Limitation of Liability</a></li>
          <li><a href="#changes" className="text-blue-600 hover:text-blue-800">Changes</a></li>
          <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
        </ul>
      </nav>

      <div className="prose prose-gray max-w-none">
        <section id="acceptance">
          <h2 className="text-2xl font-semibold text-black mb-4">Acceptance</h2>
          <p className="text-gray-700 leading-relaxed">
            By using RealGPT, you agree to these Terms and our Privacy Policy.
          </p>
        </section>

        <section id="license" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">License</h2>
          <p className="text-gray-700 leading-relaxed">
            We grant you a limited, non-transferable license to use the app for personal, lawful purposes.
          </p>
        </section>

        <section id="subscriptions-billing" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Subscriptions & Billing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            RealGPT offers auto-renewable subscriptions (e.g., monthly and yearly) that unlock Pro features.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The price and term are shown in-app before purchase. Payment is charged to your Apple ID at confirmation and renews unless canceled at least 24 hours before the end of the current period.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Manage or cancel in iOS Settings {'>'} Apple ID {'>'} Subscriptions. Unused portions of free trials (if offered) are forfeited on purchase.
          </p>
        </section>

        <section id="acceptable-use" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Acceptable Use</h2>
          <p className="text-gray-700 leading-relaxed">
            No unlawful, infringing, harmful, or abusive use; no reverse engineering or unauthorized access.
          </p>
        </section>

        <section id="content-ai-output" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Content & AI Output</h2>
          <p className="text-gray-700 leading-relaxed">
            AI responses may be inaccurate. You are responsible for how you use outputs. Do not rely on the app for professional advice.
          </p>
        </section>

        <section id="termination" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We may suspend or terminate access for violations or risks to the service.
          </p>
        </section>

        <section id="disclaimers" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Disclaimers & Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            Service is provided "as is" without warranties; liability is limited to the extent permitted by law.
          </p>
        </section>

        <section id="changes" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Changes</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms; continued use constitutes acceptance.
          </p>
        </section>

        <section id="contact" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            support@realgpt.app
          </p>
        </section>
      </div>
    </div>
  )
}
