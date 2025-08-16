import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Vommuli Financial Capital',
  description: 'Terms of Service for Vommuli\'s capital introduction and advisory services. Learn about our service terms, conditions, and legal agreements.',
  openGraph: {
    title: 'Terms of Service | Vommuli Financial Capital',
    description: 'Review the terms and conditions for using Vommuli\'s capital introduction services.',
    url: 'https://vommuli.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-700">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="text-slate-300 space-y-8">
            <div>
              <p className="text-lg text-slate-400 mb-8">
                <strong>Effective Date:</strong> December 2024
              </p>
              <p className="leading-relaxed">
                These Terms of Service ("Terms") govern your use of the Vommuli Financial Capital website and services. By accessing our website or engaging our services, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Services Overview</h2>
              <p className="mb-4">
                Vommuli Financial Capital ("Vommuli," "we," "us," or "our") provides capital introduction and advisory services, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Venture capital introductions and advisory</li>
                <li>Private equity fundraising services</li>
                <li>Growth capital advisory</li>
                <li>Mergers and acquisitions advisory</li>
                <li>Specialized sector funding (AI/Tech, Healthcare, Infrastructure, Climate Tech)</li>
                <li>Strategic capital introduction consulting</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Limitations and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">No Guarantee of Funding</h3>
              <p className="mb-4">
                Our services facilitate introductions and provide advisory support. We do not guarantee that any client will receive funding or successfully complete a transaction. Investment decisions are made solely by investors based on their own criteria and due diligence.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Advisory Nature</h3>
              <p className="mb-4">
                Our services are advisory in nature. We do not provide legal, accounting, or tax advice. Clients should consult with qualified professionals for such matters.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-400 mb-3">No Investment Advice</h3>
              <p className="mb-4">
                We do not provide investment advice or recommendations to buy, sell, or hold any securities. Our role is limited to facilitating introductions between parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Client Obligations</h2>
              <p className="mb-4">As a client, you agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate, complete, and current information</li>
                <li>Maintain the confidentiality of introduction processes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not misrepresent your business or financial condition</li>
                <li>Respond promptly to reasonable requests for information</li>
                <li>Pay agreed-upon fees in accordance with our fee structure</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Confidentiality</h2>
              <p className="mb-4">
                We maintain strict confidentiality regarding client information and will not disclose confidential information without proper authorization, except as required by law or as necessary to provide our services with your consent.
              </p>
              <p>
                Clients must also maintain confidentiality regarding information shared about potential investors and other parties during the introduction process.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Fees and Payment Terms</h2>
              <p className="mb-4">
                Our fee structure will be outlined in separate engagement agreements. Fees may include:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Retainer fees for advisory services</li>
                <li>Success fees based on completed transactions</li>
                <li>Monthly advisory fees for ongoing services</li>
              </ul>
              <p>
                Fees are non-refundable unless otherwise specified in writing. Payment terms will be detailed in individual engagement letters.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                All content on our website, including text, graphics, logos, and software, is owned by Vommuli or our licensors and is protected by intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, or create derivative works from our content without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Vommuli shall not be liable for any indirect, incidental, special, or consequential damages arising from or relating to our services or these Terms.
              </p>
              <p>
                Our total liability for any claims shall not exceed the fees paid by the client for the specific services giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Indemnification</h2>
              <p>
                Clients agree to indemnify and hold harmless Vommuli from any claims, damages, or expenses arising from the client's breach of these Terms, misrepresentation of information, or violation of applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
              <p className="mb-4">
                Either party may terminate services with written notice as specified in the engagement agreement. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Confidentiality obligations survive termination</li>
                <li>Fees for services rendered remain due and payable</li>
                <li>Ongoing obligations continue as specified in agreements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Compliance and Regulatory</h2>
              <p className="mb-4">
                Vommuli operates in compliance with applicable securities laws and regulations. Our services are structured to comply with relevant regulatory requirements.
              </p>
              <p>
                Clients are responsible for their own compliance with applicable laws and regulations in their jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes arising from these Terms or our services shall be resolved through:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Good faith negotiation between the parties</li>
                <li>Mediation by a mutually agreed mediator</li>
                <li>Binding arbitration if mediation fails</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Vommuli is incorporated, without regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Website Use</h2>
              <p className="mb-4">
                When using our website, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the website for lawful purposes only</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not transmit harmful code or malicious software</li>
                <li>Respect intellectual property rights</li>
                <li>Provide accurate information in any forms or communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated to clients with reasonable notice. Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">15. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remainder of the Terms shall remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">16. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms or our services, please contact us:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <p className="mb-2"><strong>Email:</strong> legal@vommuli.com</p>
                <p className="mb-2"><strong>General Contact:</strong> contact@vommuli.com</p>
                <p><strong>Website:</strong> https://vommuli.com</p>
              </div>
            </div>

            <div className="border-t border-slate-600 pt-8">
              <p className="text-slate-400 text-sm">
                These Terms of Service were last updated on December 2024. By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}