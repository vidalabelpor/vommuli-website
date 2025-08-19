import { Metadata } from 'next';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'Series A Funding Blog | Startup Fundraising Insights & Best Practices | Vommuli Ventures',
  description: 'Expert insights on Series A fundraising, pitch deck optimization, VC introductions, and startup advisory. Learn from 200+ successful funding rounds.',
  keywords: [
    'Series A fundraising blog',
    'startup funding insights',
    'pitch deck best practices',
    'venture capital advice',
    'fundraising strategy guide',
    'Series A preparation tips',
    'VC introduction strategies',
    'startup advisory blog',
    'investment readiness guide',
    'fundraising success stories'
  ],
  openGraph: {
    title: 'Series A Funding Blog | Expert Startup Fundraising Insights',
    description: 'Get expert insights on Series A fundraising, pitch decks, and VC introductions from advisors who have helped raise $500M+.',
    url: 'https://vommuli.com/blog',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  featured: boolean;
  author: {
    name: string;
    role: string;
  };
}

const blogPosts: BlogPost[] = [
  // Phase 4: High-value content targeting Phase 1 research keywords
  {
    slug: 'vc-deal-sourcing-services-complete-guide-2025',
    title: 'VC Deal Sourcing Services: Complete Guide to Venture Capital Deal Flow 2025',
    excerpt: 'Everything you need to know about venture capital deal sourcing services, from traditional methods to cutting-edge technology platforms. Austin leaped to #3 VC hub globally.',
    publishedAt: '2025-01-17',
    readTime: '15 min read',
    category: 'VC Insights',
    featured: true,
    author: {
      name: 'Vidal Porto',
      role: 'Founder & CEO'
    }
  },
  {
    slug: 'investment-readiness-assessment-guide-series-a-funding',
    title: 'Investment Readiness Assessment: Complete Guide to Series A Funding Preparation 2025',
    excerpt: 'Comprehensive guide to evaluating your startup\'s investment readiness, improving weak areas, and successfully raising Series A funding with our proven assessment framework.',
    publishedAt: '2025-01-17',
    readTime: '20 min read',
    category: 'Investment Readiness',
    featured: true,
    author: {
      name: 'Vidal Porto',
      role: 'Founder & CEO'
    }
  },
  {
    slug: 'series-a-preparation-checklist-startup-funding-2025',
    title: 'Series A Preparation Checklist: Complete 2025 Startup Funding Guide',
    excerpt: 'The definitive checklist covering 50+ critical action items to prepare your startup for successful Series A funding. Based on analysis of 200+ successful rounds.',
    publishedAt: '2025-01-17',
    readTime: '25 min read',
    category: 'Series A Funding',
    featured: true,
    author: {
      name: 'Vidal Porto',
      role: 'Founder & CEO'
    }
  },
  {
    slug: 'complete-guide-series-a-fundraising-2024',
    title: 'The Complete Guide to Series A Fundraising in 2024',
    excerpt: 'Everything you need to know about raising a successful Series A round, from preparation to closing. Based on analysis of 500+ Series A rounds.',
    publishedAt: '2024-01-15',
    readTime: '12 min read',
    category: 'Fundraising Strategy',
    featured: false,
    author: {
      name: 'Sarah Chen',
      role: 'Senior Partner'
    }
  },
  {
    slug: 'pitch-deck-mistakes-that-kill-series-a-deals',
    title: '7 Pitch Deck Mistakes That Kill Series A Deals (And How to Fix Them)',
    excerpt: 'Avoid the most common pitch deck errors we see from 200+ startup reviews. These mistakes can cost you millions in valuation.',
    publishedAt: '2024-01-10',
    readTime: '8 min read',
    category: 'Pitch Deck',
    featured: false,
    author: {
      name: 'Michael Rodriguez',
      role: 'Advisory Director'
    }
  },
  {
    slug: 'when-startup-ready-for-series-a-funding',
    title: 'When is Your Startup Actually Ready for Series A Funding?',
    excerpt: 'The definitive checklist to determine if your startup is truly Series A ready. Key metrics, milestones, and readiness indicators from top VCs.',
    publishedAt: '2024-01-05',
    readTime: '10 min read', 
    category: 'Investment Readiness',
    featured: false,
    author: {
      name: 'Jennifer Kim',
      role: 'Lead Advisor'
    }
  },
  {
    slug: 'building-relationships-venture-capital-investors',
    title: 'Building Meaningful Relationships with Venture Capital Investors',
    excerpt: 'How to develop authentic relationships with VCs before you need funding. Relationship-building strategies that lead to warm introductions.',
    publishedAt: '2023-12-28',
    readTime: '9 min read',
    category: 'VC Relations',
    featured: false,
    author: {
      name: 'David Park',
      role: 'Partner'
    }
  },
  {
    slug: 'series-a-valuation-negotiations-founders-guide',
    title: 'Series A Valuation Negotiations: A Founder\'s Guide to Getting Fair Terms',
    excerpt: 'Master the art of Series A valuation discussions. Negotiation strategies, common terms, and how to maximize your valuation while maintaining good investor relations.',
    publishedAt: '2023-12-20',
    readTime: '15 min read',
    category: 'Valuation',
    featured: false,
    author: {
      name: 'Sarah Chen',
      role: 'Senior Partner'
    }
  },
  {
    slug: 'ai-startup-series-a-funding-landscape-2024',
    title: 'AI Startup Series A Funding Landscape: What VCs Want in 2024',
    excerpt: 'The AI funding market has evolved rapidly. Learn what Series A investors are looking for in AI startups and how to position your company for success.',
    publishedAt: '2023-12-15',
    readTime: '11 min read',
    category: 'Industry Trends',
    featured: false,
    author: {
      name: 'Alex Thompson',
      role: 'AI Sector Lead'
    }
  }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">📚 Expert Fundraising Insights</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Series A Fundraising
              <span className="block text-gradient-accent">Insights & Best Practices</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Expert insights from advisors who have helped startups raise $500M+ in Series A funding. Learn the strategies that actually work.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">200+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Startups Advised</h3>
              <p className="text-white/80">Real insights from hands-on advisory experience</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">$500M+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Capital Raised</h3>
              <p className="text-white/80">Proven strategies that deliver results</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">Weekly</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Fresh Content</h3>
              <p className="text-white/80">Latest trends and market insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="bg-gradient-primary section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
                Must-read insights for Series A fundraising success
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="card-elevated group hover:shadow-2xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-secondary-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-secondary-700 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-primary-900">{post.author.name}</div>
                          <div className="text-sm text-secondary-600">{post.author.role}</div>
                        </div>
                      </div>
                      <div className="text-sm text-secondary-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Stay updated with the latest fundraising strategies and market trends
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {regularPosts.map((post) => (
              <article key={post.slug} className="border border-neutral-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-neutral-100 text-secondary-700 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-secondary-500">{post.readTime}</span>
                      <span className="text-sm text-secondary-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-secondary-700 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-primary-900 text-sm">{post.author.name}</div>
                        <div className="text-xs text-secondary-600">{post.author.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-48 text-center lg:text-right">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="card-brand text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Weekly Fundraising Insights
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join 5,000+ founders receiving our weekly newsletter with actionable fundraising insights, market trends, and success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-primary-900 placeholder-secondary-500"
              />
              <button className="btn-accent whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Need Hands-On Help?
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Move beyond reading to working directly with our expert advisory team
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/blog"
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