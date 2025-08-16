import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Venture Capital Introduction', href: '/venture-capital-introduction' },
    { name: 'Growth Capital Advisory', href: '/growth-capital-advisory' },
    { name: 'Private Equity Fundraising', href: '/private-equity-fundraising' },
    { name: 'M&A Advisory Services', href: '/ma-advisory' },
    { name: 'AI & Tech Funding', href: '/ai-tech-funding-advisory' },
    { name: 'Digital Infrastructure Funding', href: '/digital-infrastructure-funding' },
    { name: 'Healthcare & MedTech Funding', href: '/healthcare-medtech-funding' }
  ];

  const industries = [
    { name: 'Technology & Software', href: '/ai-tech-funding-advisory' },
    { name: 'Healthcare & Life Sciences', href: '/healthcare-medtech-funding' },
    { name: 'Digital Infrastructure', href: '/digital-infrastructure-funding' },
    { name: 'Financial Services', href: '/venture-capital-introduction' },
    { name: 'Manufacturing & Industrial', href: '/growth-capital-advisory' },
    { name: 'Energy & Sustainability', href: '/private-equity-fundraising' }
  ];

  const company = [
    { name: 'About Vommuli', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Success Stories', href: '/case-studies' },
    { name: 'Client Testimonials', href: '/testimonials' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press & Media', href: '/press' }
  ];

  const resources = [
    { name: 'Market Insights', href: '/insights' },
    { name: 'Capital Markets Report', href: '/reports' },
    { name: 'Funding Guides', href: '/guides' },
    { name: 'Webinars & Events', href: '/events' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Knowledge Center', href: '/knowledge' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              Vommuli
            </Link>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Expert capital introduction services connecting growth companies with venture capital, private equity, and strategic investors worldwide.
            </p>
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/vommuli" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/vommuli" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Capital Advisory Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Capital Advisory Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Expertise */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Industry Expertise</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.href}>
                  <Link 
                    href={industry.href} 
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link 
                    href={resource.href} 
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact CTA */}
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <h4 className="text-white font-semibold text-sm mb-2">Ready to Raise Capital?</h4>
              <p className="text-slate-400 text-xs mb-3">Schedule a confidential consultation to discuss your funding strategy.</p>
              <Link 
                href="/schedule-consultation" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-2 rounded transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-slate-400 text-sm">
                © {currentYear} Vommuli Financial Services. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/compliance" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Compliance
                </Link>
              </div>
            </div>
            
            <div className="text-slate-400 text-sm">
              <span>Made with </span>
              <span className="text-red-400">♥</span>
              <span> for entrepreneurs worldwide</span>
            </div>
          </div>

          {/* Additional SEO Footer Links */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="text-xs text-slate-500 leading-relaxed">
              <p className="mb-2">
                <strong>Vommuli Ventures</strong> provides expert capital introduction services for companies seeking venture capital, private equity, and growth capital funding. Our specialized advisory services include Series A, Series B, Series C fundraising, pre-IPO capital raising, strategic M&A advisory, and institutional investor introductions.
              </p>
              <p>
                <strong>Geographic Coverage:</strong> United States, Europe, Asia-Pacific | 
                <strong> Transaction Sizes:</strong> $1M - $500M+ | 
                <strong> Industries:</strong> Technology, Healthcare, Infrastructure, Financial Services, Manufacturing
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}