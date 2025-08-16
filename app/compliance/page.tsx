import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance & Regulatory Information | Vommuli Financial Capital',
  description: 'Learn about Vommuli\'s compliance framework, regulatory adherence, and commitment to ethical capital introduction practices.',
  openGraph: {
    title: 'Compliance & Regulatory Information | Vommuli Financial Capital',
    description: 'Vommuli\'s commitment to regulatory compliance and ethical business practices in capital introduction services.',
    url: 'https://vommuli.com/compliance',
  },
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-700">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Compliance & Regulatory</h1>
          
          <div className="text-slate-300 space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                At Vommuli Financial Capital, we are committed to maintaining the highest standards of compliance, ethics, and regulatory adherence in all our capital introduction and advisory services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Regulatory Framework</h2>
              <p className="mb-4">
                Our business operates within a comprehensive regulatory framework designed to ensure:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Compliance with applicable securities laws and regulations</li>
                <li>Adherence to financial services regulatory requirements</li>
                <li>Maintenance of professional standards and ethics</li>
                <li>Protection of client confidentiality and data privacy</li>
                <li>Transparency in business practices and fee structures</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Securities Law Compliance</h2>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Investment Adviser Regulations</h3>
              <p className="mb-4">
                Our advisory services are structured in compliance with applicable investment adviser regulations. We maintain appropriate registrations and filings as required by law.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Broker-Dealer Activities</h3>
              <p className="mb-4">
                We carefully structure our capital introduction services to comply with broker-dealer regulations while providing valuable advisory and introduction services to our clients.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Anti-Money Laundering (AML)</h3>
              <p className="mb-4">
                We maintain robust AML policies and procedures, including client due diligence, ongoing monitoring, and reporting of suspicious activities as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Client Protection Standards</h2>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Know Your Customer (KYC)</h3>
              <p className="mb-4">
                We implement comprehensive KYC procedures to verify client identities, understand their business needs, and ensure our services are appropriate for their circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Conflicts of Interest</h3>
              <p className="mb-4">
                We maintain policies to identify, disclose, and manage potential conflicts of interest. We prioritize our clients' interests and maintain transparency in our business relationships.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Confidentiality and Privacy</h3>
              <p className="mb-4">
                Client information is protected through strict confidentiality procedures, secure data handling practices, and compliance with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Professional Standards</h2>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Ethical Conduct</h3>
              <p className="mb-4">
                Our team adheres to the highest standards of professional ethics, including honesty, integrity, and fair dealing in all client relationships and business activities.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Professional Qualifications</h3>
              <p className="mb-4">
                Our professionals maintain relevant industry certifications, licenses, and continuing education requirements to ensure competency in their areas of expertise.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Due Diligence Standards</h3>
              <p className="mb-4">
                We conduct appropriate due diligence on both clients and potential investors to ensure suitable matches and maintain the integrity of our introduction process.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Operational Compliance</h2>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Record Keeping</h3>
              <p className="mb-4">
                We maintain comprehensive records of our activities, communications, and transactions in accordance with regulatory requirements and best practices.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Risk Management</h3>
              <p className="mb-4">
                Our risk management framework includes policies for operational risk, reputational risk, and regulatory compliance risk to protect both our firm and our clients.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Quality Assurance</h3>
              <p className="mb-4">
                We implement quality assurance procedures to ensure consistent service delivery and compliance with our internal standards and regulatory requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">International Compliance</h2>
              <p className="mb-4">
                For clients and transactions involving international jurisdictions, we:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Research and comply with applicable foreign regulations</li>
                <li>Implement appropriate cross-border compliance procedures</li>
                <li>Maintain awareness of international sanctions and restrictions</li>
                <li>Ensure proper tax and reporting considerations are addressed</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Ongoing Monitoring and Training</h2>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Regulatory Updates</h3>
              <p className="mb-4">
                We continuously monitor regulatory developments and update our policies and procedures to maintain compliance with evolving requirements.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Staff Training</h3>
              <p className="mb-4">
                Our team receives regular training on compliance requirements, ethical standards, and best practices to ensure consistent adherence to our high standards.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Internal Audits</h3>
              <p className="mb-4">
                We conduct regular internal reviews and audits to assess compliance effectiveness and identify areas for improvement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Reporting and Disclosure</h2>
              <p className="mb-4">
                We maintain transparency through:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Clear disclosure of fees and service terms</li>
                <li>Appropriate regulatory filings and registrations</li>
                <li>Timely reporting of material changes or issues</li>
                <li>Regular communication with regulatory authorities as required</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
              <p className="mb-4">
                To maintain our compliance standards, we expect clients to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Maintain appropriate licenses and registrations</li>
                <li>Disclose any material changes or potential issues</li>
                <li>Cooperate with our compliance procedures and requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Compliance Contact</h2>
              <p className="mb-4">
                For compliance-related questions, concerns, or to report potential violations, please contact our compliance team:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="mb-2"><strong>Compliance Email:</strong> compliance@vommuli.com</p>
                <p className="mb-2"><strong>General Contact:</strong> contact@vommuli.com</p>
                <p><strong>Confidential Reporting:</strong> Available upon request</p>
              </div>
            </div>

            <div className="border-t border-slate-600 pt-8">
              <p className="text-slate-400 text-sm">
                This compliance information is current as of December 2024. Our compliance framework is subject to ongoing review and enhancement to maintain the highest standards of regulatory adherence and client protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}