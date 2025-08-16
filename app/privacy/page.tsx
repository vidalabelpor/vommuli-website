import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vommuli Financial Capital',
  description: 'Vommuli\'s privacy policy outlining how we collect, use, and protect your personal information in our capital introduction services.',
  openGraph: {
    title: 'Privacy Policy | Vommuli Financial Capital',
    description: 'Learn about Vommuli\'s commitment to protecting your privacy and personal information.',
    url: 'https://vommuli.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-700">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="text-slate-300 space-y-8">
            <div>
              <p className="text-lg text-slate-400 mb-8">
                <strong>Effective Date:</strong> December 2024
              </p>
              <p className="leading-relaxed">
                At Vommuli Financial Capital ("Vommuli," "we," "us," or "our"), we are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website or use our capital introduction services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Personal Information</h3>
              <p className="mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Name, title, and contact information (email, phone, address)</li>
                <li>Company information and business details</li>
                <li>Financial information related to funding requirements</li>
                <li>Professional background and experience</li>
                <li>Investment preferences and objectives</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-400 mb-3">Technical Information</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar technologies</li>
                <li>Device and operating system information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide capital introduction and advisory services</li>
                <li>Match you with appropriate investors or investment opportunities</li>
                <li>Communicate about our services and industry insights</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Protect against fraud and ensure security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">With Your Consent</h3>
              <p className="mb-4">We will share your information with potential investors or partners only with your explicit consent and in accordance with our service agreements.</p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Service Providers</h3>
              <p className="mb-4">We may share information with trusted third-party service providers who assist us in operating our business, subject to confidentiality agreements.</p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Legal Requirements</h3>
              <p className="mb-4">We may disclose information when required by law or to protect our legal rights and interests.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="mb-4">We implement appropriate technical and organizational measures to protect your information, including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection practices</li>
                <li>Secure communication channels for sensitive information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. We will securely delete or anonymize information when it is no longer needed, unless we are required to retain it by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information (subject to legal requirements)</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
              <p className="mb-4">
                Our website uses cookies and similar technologies to enhance your experience and analyze website usage. You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the effective date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="mb-2"><strong>Email:</strong> privacy@vommuli.com</p>
                <p className="mb-2"><strong>General Contact:</strong> contact@vommuli.com</p>
                <p><strong>Website:</strong> https://vommuli.com</p>
              </div>
            </div>

            <div className="border-t border-slate-600 pt-8">
              <p className="text-slate-400 text-sm">
                This Privacy Policy was last updated on December 2024. For the most current version, please visit our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}