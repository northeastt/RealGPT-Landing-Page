import { useEffect } from 'react'

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - RealGPT'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'RealGPT Privacy Policy - Learn how we collect, use, and protect your personal information.')
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Privacy Policy - RealGPT')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'RealGPT Privacy Policy - Learn how we collect, use, and protect your personal information.')
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
        <h1 className="text-3xl font-bold text-black mb-2">Privacy Policy</h1>
        <p className="text-gray-600">Effective date: {effectiveDate}</p>
      </div>

      {/* Table of Contents */}
      <nav className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#overview" className="text-blue-600 hover:text-blue-800">Overview</a></li>
          <li><a href="#information-we-collect" className="text-blue-600 hover:text-blue-800">Information We Collect</a></li>
          <li><a href="#how-we-use-information" className="text-blue-600 hover:text-blue-800">How We Use Information</a></li>
          <li><a href="#sharing" className="text-blue-600 hover:text-blue-800">Sharing</a></li>
          <li><a href="#data-retention" className="text-blue-600 hover:text-blue-800">Data Retention</a></li>
          <li><a href="#your-choices" className="text-blue-600 hover:text-blue-800">Your Choices</a></li>
          <li><a href="#international-transfers" className="text-blue-600 hover:text-blue-800">International Transfers</a></li>
          <li><a href="#children" className="text-blue-600 hover:text-blue-800">Children</a></li>
          <li><a href="#changes" className="text-blue-600 hover:text-blue-800">Changes</a></li>
          <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
        </ul>
      </nav>

      <div className="prose prose-gray max-w-none">
        <section id="overview">
          <h2 className="text-2xl font-semibold text-black mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            RealGPT ("we," "us") respects your privacy. This policy explains what we collect, how we use it, and your choices.
          </p>
        </section>

        <section id="information-we-collect" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-black mb-3">Account & Device Info</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            email, device model, OS version, app version, IP (for security and anti-fraud).
          </p>

          <h3 className="text-xl font-medium text-black mb-3">Usage Data</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            app interactions, crash logs, performance metrics.
          </p>

          <h3 className="text-xl font-medium text-black mb-3">Purchases</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            transaction identifiers and subscription status from Apple needed to unlock Pro features. We do not receive your full payment details.
          </p>

          <h3 className="text-xl font-medium text-black mb-3">Face Data</h3>
          <p className="text-gray-700 leading-relaxed">
            RealGPT does not collect, store, or share face data. If you choose to upload an image containing a face, the image is processed solely to provide the requested feature (e.g., content moderation or formatting). We do not perform face recognition, we do not extract face geometry or biometric identifiers, and we do not create a face template.
          </p>
        </section>

        <section id="how-we-use-information" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">How We Use Information</h2>
          <p className="text-gray-700 leading-relaxed">
            Provide and improve the app, fix bugs, prevent abuse, verify purchases, and comply with law.
          </p>
        </section>

        <section id="sharing" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Sharing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell personal data.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Service Providers (e.g., analytics, error logging, purchase validation) may process limited data under contract and only for our purposes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Legal: we may disclose data to comply with applicable law or protect rights, safety, and security.
          </p>
        </section>

        <section id="data-retention" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Data Retention</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Account & purchase records: retained as long as your account is active and as required by law (e.g., tax).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Crash/analytics: kept for operational troubleshooting and then deleted or anonymized.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Face Data: not collected or stored. Images you upload are processed transiently and not used to build biometric identifiers.
          </p>
        </section>

        <section id="your-choices" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Your Choices</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You may request deletion of your account data by contacting us at support@realgpt.app.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can disable analytics in the app settings (if available on your platform).
          </p>
          <p className="text-gray-700 leading-relaxed">
            You can manage Apple subscription settings in iOS Settings {'>'} Apple ID {'>'} Subscriptions.
          </p>
        </section>

        <section id="international-transfers" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">International Transfers</h2>
          <p className="text-gray-700 leading-relaxed">
            If data is processed outside your region, we use appropriate safeguards.
          </p>
        </section>

        <section id="children" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Children</h2>
          <p className="text-gray-700 leading-relaxed">
            RealGPT is not directed to children under 13 (or the minimum age in your country).
          </p>
        </section>

        <section id="changes" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Changes</h2>
          <p className="text-gray-700 leading-relaxed">
            We will update this policy when needed. We'll change the "Effective date" and may notify you in-app.
          </p>
        </section>

        <section id="contact" className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            RealGPT, Inc.
          </p>
          <p className="text-gray-700 leading-relaxed">
            support@realgpt.app
          </p>
        </section>

        <section className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-medium text-black mb-2">Face Data Location in this Policy</h3>
          <p className="text-gray-700 text-sm">
            See "Face Data" in "Information We Collect" and "Data Retention." These sections state that we do not collect, store, or share face data, and that images are processed transiently without biometric extraction.
          </p>
        </section>
      </div>
    </div>
  )
}
