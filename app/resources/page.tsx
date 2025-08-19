import { Metadata } from 'next';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'Free Series A Fundraising Resources | Templates, Guides & Tools | Vommuli Ventures',
  description: 'Download free Series A fundraising resources: pitch deck templates, financial models, investor CRM, due diligence checklists. Trusted by 200+ startups.',
  keywords: [
    'Series A fundraising resources',
    'free pitch deck template',
    'startup funding templates',
    'Series A financial model',
    'investor CRM template',
    'due diligence checklist',
    'fundraising timeline template',
    'Series A preparation guide',
    'venture capital resources',
    'startup fundraising toolkit'
  ],
  openGraph: {
    title: 'Free Series A Fundraising Resources & Templates',
    description: 'Download proven templates and guides used by startups that have raised $500M+ in Series A funding.',
    url: 'https://vommuli.com/resources',
  },
};

interface Resource {
  title: string;
  description: string;
  type: 'template' | 'guide' | 'tool' | 'checklist';
  format: 'PDF' | 'Excel' | 'Google Sheets' | 'Notion' | 'Online Tool';
  downloadUrl: string;
  featured: boolean;
  category: 'Preparation' | 'Pitch Deck' | 'Financial Modeling' | 'Investor Relations' | 'Due Diligence';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  thumbnail?: string;
}

const resources: Resource[] = [
  {
    title: 'Series A Pitch Deck Template',
    description: 'Professional pitch deck template with 15 slides, proven to raise $500M+. Includes examples from successful Series A rounds.',
    type: 'template',
    format: 'PDF',
    downloadUrl: '/downloads/series-a-pitch-deck-template',
    featured: true,
    category: 'Pitch Deck',
    difficulty: 'Beginner',
    estimatedTime: '2 hours',
  },
  {
    title: 'Series A Financial Model Template',
    description: 'Complete 3-year financial model with unit economics, cash flow, and scenario planning. Used by 100+ funded startups.',
    type: 'template',
    format: 'Excel',
    downloadUrl: '/downloads/series-a-financial-model',
    featured: true,
    category: 'Financial Modeling',
    difficulty: 'Intermediate',
    estimatedTime: '4 hours',
  },
  {
    title: 'Investment Readiness Assessment',
    description: 'Comprehensive 50-point assessment to determine if your startup is Series A ready. Get personalized feedback.',
    type: 'tool',
    format: 'Online Tool',
    downloadUrl: '/tools/investment-readiness-assessment',
    featured: true,
    category: 'Preparation',
    difficulty: 'Beginner',
    estimatedTime: '15 minutes',
  },
  {
    title: 'Investor CRM & Tracking Template',
    description: 'Track 100+ investors, meeting notes, follow-ups, and deal pipeline. Never lose track of important relationships.',
    type: 'template',
    format: 'Google Sheets',
    downloadUrl: '/downloads/investor-crm-template',
    featured: false,
    category: 'Investor Relations',
    difficulty: 'Beginner',
    estimatedTime: '1 hour',
  },
  {
    title: 'Due Diligence Checklist & Data Room',
    description: 'Complete 200-item due diligence checklist with data room organization guide. Streamline your DD process.',
    type: 'checklist',
    format: 'PDF',
    downloadUrl: '/downloads/due-diligence-checklist',
    featured: false,
    category: 'Due Diligence',
    difficulty: 'Intermediate',
    estimatedTime: '3 hours',
  },
  {
    title: 'Series A Fundraising Timeline Template',
    description: '6-month fundraising timeline with milestones, tasks, and deadlines. Plan your raise like a pro.',
    type: 'template',
    format: 'Notion',
    downloadUrl: '/downloads/fundraising-timeline-template',
    featured: false,
    category: 'Preparation',
    difficulty: 'Beginner',
    estimatedTime: '30 minutes',
  },
  {
    title: 'Investor Outreach Email Templates',
    description: '10 proven email templates for initial outreach, follow-ups, and updates. Achieve 40% higher response rates.',
    type: 'template',
    format: 'PDF',
    downloadUrl: '/downloads/investor-email-templates',
    featured: false,
    category: 'Investor Relations',
    difficulty: 'Beginner',
    estimatedTime: '1 hour',
  },
  {
    title: 'Unit Economics Calculator',
    description: 'Interactive calculator for CAC, LTV, payback period, and growth metrics. Optimize your business model.',
    type: 'tool',
    format: 'Excel',
    downloadUrl: '/downloads/unit-economics-calculator',
    featured: false,
    category: 'Financial Modeling',
    difficulty: 'Intermediate',
    estimatedTime: '2 hours',
  }
];

export default function ResourcesPage() {
  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = resources.filter(resource => !resource.featured);
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'template': return '📄';
      case 'guide': return '📚';
      case 'tool': return '🔧';
      case 'checklist': return '✅';
      default: return '📁';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🎁 Free Resources</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Free Series A Fundraising
              <span className="block text-gradient-accent">Resources & Templates</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Download proven templates, guides, and tools used by startups that have raised $500M+ in Series A funding. Get the same resources we use with our advisory clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">8</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Resources</h3>
              <p className="text-white/80">Templates, tools, and guides for every stage</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">200+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Startups Served</h3>
              <p className="text-white/80">Battle-tested by successful companies</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">$500M</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Capital Raised</h3>
              <p className="text-white/80">Proven to generate results</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">Free</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Always Free</h3>
              <p className="text-white/80">No hidden costs or subscriptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Most Popular Resources
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Start with these essential resources used by the most successful startups
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="card-elevated group hover:shadow-2xl transition-all duration-300 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl">{getTypeIcon(resource.type)}</div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                        {resource.difficulty}
                      </span>
                      <span className="text-xs text-secondary-500 bg-neutral-100 px-2 py-1 rounded">
                        {resource.format}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {resource.title}
                  </h3>
                  
                  <p className="text-secondary-700 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-sm text-secondary-600">Category:</span>
                      <div className="font-medium text-secondary-900">{resource.category}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-secondary-600">Time:</span>
                      <div className="font-medium text-secondary-900">{resource.estimatedTime}</div>
                    </div>
                  </div>
                  
                  <Link
                    href={resource.downloadUrl}
                    className="block w-full bg-primary-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors group-hover:bg-primary-800"
                  >
                    {resource.type === 'tool' ? 'Use Tool' : 'Download Free'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Complete Resource Library
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Everything you need for a successful Series A fundraise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regularResources.map((resource, index) => (
              <div key={index} className="border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{getTypeIcon(resource.type)}</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                    <span className="text-xs text-secondary-500 bg-neutral-100 px-2 py-1 rounded">
                      {resource.format}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-secondary-700 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>
                    <span className="text-secondary-600">Category:</span>
                    <span className="font-medium text-secondary-900 ml-1">{resource.category}</span>
                  </div>
                  <div>
                    <span className="text-secondary-600">Time:</span>
                    <span className="font-medium text-secondary-900 ml-1">{resource.estimatedTime}</span>
                  </div>
                </div>
                
                <Link
                  href={resource.downloadUrl}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors group-hover:text-primary-800"
                >
                  {resource.type === 'tool' ? 'Use Tool' : 'Download Free'} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Resources by Category
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Find exactly what you need for each stage of your fundraising journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                category: 'Preparation',
                icon: '🚀',
                description: 'Get Series A ready with assessment tools and timeline templates',
                resourceCount: 2,
                resources: ['Investment Readiness Assessment', 'Fundraising Timeline Template']
              },
              {
                category: 'Pitch Deck',
                icon: '📊',
                description: 'Create compelling presentations that win investors',
                resourceCount: 1,
                resources: ['Series A Pitch Deck Template']
              },
              {
                category: 'Financial Modeling',
                icon: '💰',
                description: 'Build bulletproof financial models and unit economics',
                resourceCount: 2,
                resources: ['Series A Financial Model', 'Unit Economics Calculator']
              },
              {
                category: 'Investor Relations',
                icon: '🤝',
                description: 'Manage relationships and communications effectively',
                resourceCount: 2,
                resources: ['Investor CRM Template', 'Outreach Email Templates']
              },
              {
                category: 'Due Diligence',
                icon: '🔍',
                description: 'Prepare for investor due diligence like a pro',
                resourceCount: 1,
                resources: ['Due Diligence Checklist & Data Room']
              }
            ].map((category, index) => (
              <div key={index} className="card bg-white p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-900">{category.category}</h3>
                    <p className="text-secondary-600">{category.resourceCount} resources</p>
                  </div>
                </div>
                
                <p className="text-secondary-700 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {category.resources.map((resourceName, i) => (
                    <div key={i} className="flex items-center text-sm text-secondary-600">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      {resourceName}
                    </div>
                  ))}
                </div>
                
                <Link
                  href="#resources"
                  className="text-primary-600 hover:text-primary-800 font-medium transition-colors"
                >
                  View {category.category} Resources →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Want More Advanced Resources?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our exclusive email list for advanced resources, insider tips, and early access to new tools. Used by 1,000+ successful founders.
            </p>
            
            {/* Email Capture Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <form className="max-w-md mx-auto">
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-primary-900 placeholder-secondary-500 border-0"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-lg bg-white text-primary-900 placeholder-secondary-500 border-0"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white text-primary-900 border-0">
                    <option value="">Current funding stage</option>
                    <option value="pre-seed">Pre-Seed</option>
                    <option value="seed">Seed</option>
                    <option value="pre-series-a">Pre-Series A</option>
                    <option value="series-a">Series A</option>
                    <option value="post-series-a">Post-Series A</option>
                  </select>
                  <button 
                    type="submit"
                    className="w-full bg-accent-500 text-white py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                  >
                    Get Advanced Resources Free
                  </button>
                </div>
              </form>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <span>✅</span>
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span>🚀</span>
                <span>1,000+ founders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Need More Than Templates?
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Get hands-on help from our expert advisory team
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/resources"
            context="tool"
            maxLinks={4}
            layout="grid"
            showDescriptions={true}
            className="mb-8"
          />
          <div className="text-center">
            <QuickNavigation />
          </div>
        </div>
      </section>
    </main>
  );
}