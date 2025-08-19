import React from 'react';
import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  priority?: 'high' | 'medium' | 'low';
}

interface RelatedLink {
  title: string;
  href: string;
  description: string;
  category: 'service' | 'location' | 'tool' | 'resource';
  priority: 'high' | 'medium' | 'low';
}

interface InternalLinkingSystemProps {
  currentPage: string;
  context?: 'service' | 'location' | 'tool' | 'about' | 'home' | 'blog' | 'insight' | 'resource';
  maxLinks?: number;
  showDescriptions?: boolean;
  layout?: 'horizontal' | 'vertical' | 'grid';
  className?: string;
}

// Internal link component with SEO optimization
export function InternalLink({ href, children, className = '', priority = 'medium' }: InternalLinkProps) {
  const baseClasses = 'text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium';
  const priorityClasses = {
    high: 'text-primary-900 font-semibold',
    medium: 'text-primary-600 font-medium', 
    low: 'text-primary-500 font-normal'
  };

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${priorityClasses[priority]} ${className}`}
      rel={priority === 'high' ? 'next' : undefined}
    >
      {children}
    </Link>
  );
}

// Comprehensive internal linking system
export default function InternalLinkingSystem({ 
  currentPage, 
  context = 'service',
  maxLinks = 6,
  showDescriptions = true,
  layout = 'grid',
  className = ''
}: InternalLinkingSystemProps) {
  
  // Define strategic link relationships
  const linkMap: Record<string, RelatedLink[]> = {
    '/': [
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        description: 'Expert guidance for your Series A fundraising journey',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Pitch Deck Review & Consulting',
        href: '/pitch-deck-review-consulting', 
        description: 'Professional pitch deck optimization services',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Investment Readiness Assessment',
        href: '/tools/investment-readiness-assessment',
        description: 'Free assessment to evaluate your funding readiness',
        category: 'tool',
        priority: 'high'
      },
      {
        title: 'NYC Series A Advisory',
        href: '/locations/new-york',
        description: 'Manhattan-based Series A funding experts',
        category: 'location',
        priority: 'medium'
      }
    ],
    
    '/series-a-funding-advisory': [
      {
        title: 'Pitch Deck Review & Consulting',
        href: '/pitch-deck-review-consulting',
        description: 'Optimize your pitch deck for Series A success',
        category: 'service', 
        priority: 'high'
      },
      {
        title: 'Investment Readiness Assessment',
        href: '/tools/investment-readiness-assessment',
        description: 'Evaluate your Series A readiness with our free tool',
        category: 'tool',
        priority: 'high'
      },
      {
        title: 'Venture Capital Introduction',
        href: '/venture-capital-introduction',
        description: 'Connect with Series A-focused VC firms',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'NYC Series A Experts',
        href: '/locations/new-york',
        description: 'Manhattan-based Series A advisory services',
        category: 'location',
        priority: 'medium'
      },
      {
        title: 'Austin Series A Advisory',
        href: '/locations/austin',
        description: 'Silicon Hills Series A funding expertise',
        category: 'location',
        priority: 'medium'
      }
    ],

    '/pitch-deck-review-consulting': [
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        description: 'Comprehensive Series A fundraising guidance',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Investment Readiness Assessment',
        href: '/tools/investment-readiness-assessment',
        description: 'Check if your startup is Series A ready',
        category: 'tool',
        priority: 'high'
      },
      {
        title: 'AI Tech Funding Advisory',
        href: '/ai-tech-funding-advisory',
        description: 'Specialized AI startup pitch deck services',
        category: 'service',
        priority: 'medium'
      },
      {
        title: 'Growth Capital Advisory',
        href: '/growth-capital-advisory',
        description: 'Growth-stage pitch deck optimization',
        category: 'service',
        priority: 'medium'
      }
    ],

    '/tools/investment-readiness-assessment': [
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        description: 'Expert Series A fundraising guidance',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Pitch Deck Review & Consulting',
        href: '/pitch-deck-review-consulting',
        description: 'Professional pitch deck optimization',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Schedule Consultation',
        href: '/contact',
        description: 'Discuss your fundraising strategy with experts',
        category: 'resource',
        priority: 'high'
      }
    ],

    '/locations/new-york': [
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        description: 'Our flagship Series A advisory services',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Pitch Deck Review & Consulting',
        href: '/pitch-deck-review-consulting',
        description: 'NYC-focused pitch deck optimization',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Austin Series A Advisory',
        href: '/locations/austin',
        description: 'Silicon Hills Series A expertise',
        category: 'location',
        priority: 'medium'
      },
      {
        title: 'Denver Series A Advisory', 
        href: '/locations/denver',
        description: 'Mile High City Series A services',
        category: 'location',
        priority: 'medium'
      }
    ],

    '/locations/austin': [
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        description: 'Expert Series A guidance for Austin startups',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'AI Tech Funding Advisory',
        href: '/ai-tech-funding-advisory',
        description: 'Austin AI startup funding expertise',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'NYC Series A Advisory',
        href: '/locations/new-york',
        description: 'Wall Street connections and expertise',
        category: 'location',
        priority: 'medium'
      }
    ],

    '/locations/denver': [
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        description: 'Series A guidance for Colorado startups',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Climate Tech Funding',
        href: '/climate-tech-renewable-energy-funding',
        description: 'Cleantech funding for Denver innovators',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Austin Series A Advisory',
        href: '/locations/austin',
        description: 'Texas tech hub Series A expertise',
        category: 'location',
        priority: 'medium'
      }
    ],

    '/about': [
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        description: 'Learn about our flagship advisory service',
        category: 'service',
        priority: 'high'
      },
      {
        title: 'Our Success Stories',
        href: '/series-a-funding-advisory#case-studies',
        description: 'Real client success stories and results',
        category: 'resource',
        priority: 'medium'
      },
      {
        title: 'Get Started Today',
        href: '/contact',
        description: 'Schedule a consultation to discuss your needs',
        category: 'resource',
        priority: 'high'
      }
    ],

    '/contact': [
      {
        title: 'Investment Readiness Assessment',
        href: '/tools/investment-readiness-assessment',
        description: 'Free assessment before your consultation',
        category: 'tool',
        priority: 'high'
      },
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        description: 'Learn about our comprehensive advisory services',
        category: 'service',
        priority: 'medium'
      },
      {
        title: 'About Our Team',
        href: '/about',
        description: 'Meet the experts behind your success',
        category: 'resource',
        priority: 'medium'
      }
    ]
  };

  // Get relevant links for current page
  const getRelatedLinks = (currentPage: string): RelatedLink[] => {
    return linkMap[currentPage] || [];
  };

  const relatedLinks = getRelatedLinks(currentPage).slice(0, maxLinks);

  if (relatedLinks.length === 0) {
    return null;
  }

  const layoutClasses = {
    horizontal: 'flex flex-wrap gap-6',
    vertical: 'space-y-4',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
  };

  return (
    <div className={`${className}`}>
      <div className={layoutClasses[layout]}>
        {relatedLinks.map((link, index) => (
          <div key={index} className="group">
            <InternalLink 
              href={link.href} 
              priority={link.priority}
              className="block hover:no-underline"
            >
              <div className="p-4 border border-neutral-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-primary-900 group-hover:text-primary-700 transition-colors">
                    {link.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 ml-2 flex-shrink-0">
                    {link.category}
                  </span>
                </div>
                {showDescriptions && (
                  <p className="text-sm text-secondary-600 leading-relaxed">
                    {link.description}
                  </p>
                )}
                <div className="mt-3 text-primary-600 group-hover:text-primary-800 font-medium text-sm">
                  Learn More →
                </div>
              </div>
            </InternalLink>
          </div>
        ))}
      </div>
    </div>
  );
}

// Quick navigation component for common conversion paths
export function QuickNavigation({ className = '' }: { className?: string }) {
  const quickLinks = [
    {
      title: 'Series A Advisory',
      href: '/series-a-funding-advisory',
      icon: '🚀'
    },
    {
      title: 'Pitch Deck Review',
      href: '/pitch-deck-review-consulting',
      icon: '📊'
    },
    {
      title: 'Readiness Assessment',
      href: '/tools/investment-readiness-assessment',
      icon: '✅'
    },
    {
      title: 'Get Started',
      href: '/contact',
      icon: '💬'
    }
  ];

  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap gap-3">
        {quickLinks.map((link, index) => (
          <InternalLink
            key={index}
            href={link.href}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 hover:bg-primary-100 rounded-full text-sm font-medium transition-colors"
            priority="medium"
          >
            <span>{link.icon}</span>
            <span>{link.title}</span>
          </InternalLink>
        ))}
      </div>
    </div>
  );
}

// Contextual cross-sell component for service pages
export function CrossSell({ currentService, className = '' }: { currentService: string, className?: string }) {
  const crossSellMap: Record<string, { title: string; href: string; reason: string }[]> = {
    'series-a': [
      {
        title: 'Pitch Deck Review',
        href: '/pitch-deck-review-consulting',
        reason: '85% of our Series A clients also optimize their pitch deck'
      },
      {
        title: 'Investment Readiness Assessment',
        href: '/tools/investment-readiness-assessment',
        reason: 'Validate your Series A readiness before starting'
      }
    ],
    'pitch-deck': [
      {
        title: 'Series A Funding Advisory',
        href: '/series-a-funding-advisory',
        reason: 'Complete advisory services beyond just pitch deck'
      },
      {
        title: 'VC Introduction Services',
        href: '/venture-capital-introduction',
        reason: 'Connect your optimized deck with the right investors'
      }
    ]
  };

  const crossSells = crossSellMap[currentService] || [];

  if (crossSells.length === 0) return null;

  return (
    <div className={`bg-accent-50 border-l-4 border-accent-500 p-6 ${className}`}>
      <h3 className="font-semibold text-primary-900 mb-4">
        Clients Who Choose This Also Need:
      </h3>
      <div className="space-y-3">
        {crossSells.map((crossSell, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <InternalLink href={crossSell.href} priority="high" className="font-medium">
                {crossSell.title}
              </InternalLink>
              <p className="text-sm text-secondary-600 mt-1">{crossSell.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}