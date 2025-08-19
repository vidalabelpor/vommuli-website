'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavigationProps {
  variant?: 'light' | 'dark';
}

export default function Navigation({ variant = 'light' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const locations = [
    {
      name: 'Austin, Texas',
      href: '/locations/austin',
      description: '#3 VC hub globally - Silicon Hills tech ecosystem'
    },
    {
      name: 'New York City',
      href: '/locations/new-york',
      description: 'Wall Street & Manhattan financial district'
    },
    {
      name: 'Denver, Colorado',
      href: '/locations/denver',
      description: 'Mile High cleantech & aerospace innovation'
    },
    {
      name: 'Miami, Florida',
      href: '/locations/miami',
      description: 'Latin America gateway & fintech hub'
    },
    {
      name: 'Boston, Massachusetts',
      href: '/locations/boston',
      description: 'Biotech & university ecosystem'
    },
    {
      name: 'Chicago, Illinois',
      href: '/locations/chicago',
      description: 'Midwest financial & industrial capital'
    },
    {
      name: 'San Francisco, California',
      href: '/locations/san-francisco',
      description: 'Silicon Valley venture capital center'
    },
  ];

  const services = [
    {
      name: 'Series A Funding Advisory',
      href: '/series-a-funding-advisory',
      description: 'Expert Series A preparation & VC introductions'
    },
    {
      name: 'Venture Capital Introduction',
      href: '/venture-capital-introduction',
      description: 'Early-stage funding connections with top VC firms'
    },
    {
      name: 'Pitch Deck Review',
      href: '/pitch-deck-review-consulting',
      description: 'Professional pitch deck optimization services'
    },
    {
      name: 'Growth Capital Advisory',
      href: '/growth-capital-advisory',
      description: 'Scale-ready companies seeking expansion capital'
    },
    {
      name: 'Private Equity Fundraising',
      href: '/private-equity-fundraising',
      description: 'Institutional capital for established businesses'
    },
    {
      name: 'AI & Tech Funding',
      href: '/ai-tech-funding-advisory',
      description: 'Specialized funding for AI and emerging tech'
    },
    {
      name: 'Climate Tech Funding',
      href: '/climate-tech-renewable-energy-funding',
      description: 'Renewable energy & sustainability capital'
    },
    {
      name: 'M&A Advisory',
      href: '/ma-advisory',
      description: 'Strategic transactions and exit planning'
    }
  ];

  const resources = [
    {
      name: 'Investment Readiness Assessment',
      href: '/tools/investment-readiness-assessment',
      description: 'Free tool to evaluate your funding readiness'
    },
    {
      name: 'Blog & Insights',
      href: '/blog',
      description: 'Expert insights on Series A fundraising'
    },
    {
      name: 'Startup Resources',
      href: '/resources',
      description: 'Guides, checklists, and funding tools'
    },
    {
      name: 'Market Insights',
      href: '/insights',
      description: 'Venture capital market analysis'
    }
  ];

  const navStyles = variant === 'dark' 
    ? "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50 shadow-sm"
    : "bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm";
    
  const logoStyles = variant === 'dark'
    ? "text-2xl font-bold text-white hover:text-primary-400 transition-colors"
    : "text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors";
    
  const linkStyles = variant === 'dark'
    ? "text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
    : "text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors";

  return (
    <nav className={navStyles}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
              Vommuli
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                  <svg className="ml-1 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Dropdown */}
                <div className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-4 px-6">
                    <div className="grid grid-cols-1 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block p-3 rounded-md hover:bg-gray-50 transition-colors group"
                        >
                          <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  Locations
                  <svg className="ml-1 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-4 px-6">
                    <div className="grid grid-cols-1 gap-3">
                      {locations.map((location) => (
                        <Link
                          key={location.href}
                          href={location.href}
                          className="block p-3 rounded-md hover:bg-gray-50 transition-colors group"
                        >
                          <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                            {location.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {location.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                  Resources
                  <svg className="ml-1 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-4 px-6">
                    <div className="grid grid-cols-1 gap-3">
                      {resources.map((resource) => (
                        <Link
                          key={resource.href}
                          href={resource.href}
                          className="block p-3 rounded-md hover:bg-gray-50 transition-colors group"
                        >
                          <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                            {resource.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {resource.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
              <Link href="/series-a-funding-advisory" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 text-sm font-medium rounded-md transition-colors shadow-sm">
                Series A Consultation
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="text-gray-900 font-medium text-sm px-3 py-2">Services</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              
              <div className="text-gray-900 font-medium text-sm px-3 py-2 mt-4">Locations</div>
              {locations.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {location.name}
                </Link>
              ))}
              
              <div className="text-gray-900 font-medium text-sm px-3 py-2 mt-4">Resources</div>
              {resources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="block px-6 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {resource.name}
                </Link>
              ))}
              
              <Link
                href="/about"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/series-a-funding-advisory"
                className="block mx-3 my-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 text-sm font-medium rounded-md transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Series A Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}