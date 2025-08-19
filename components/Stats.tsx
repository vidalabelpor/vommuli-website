// Converted to Server Component for LCP optimization
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '$2.3B+',
    label: 'Capital Raised',
    description: 'Total funding facilitated across all deals',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Companies Served',
    description: 'Startups and growth companies helped',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Target,
    value: '95%',
    label: 'Success Rate',
    description: 'Companies that secured funding',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Award,
    value: '8.2',
    label: 'Average Rating',
    description: 'Client satisfaction score',
    color: 'from-orange-500 to-red-600'
  }
];

const additionalMetrics = [
  {
    category: 'Funding Rounds',
    metrics: [
      { label: 'Seed', value: '150+', percentage: '30%' },
      { label: 'Series A', value: '200+', percentage: '40%' },
      { label: 'Series B', value: '100+', percentage: '20%' },
      { label: 'Series C+', value: '50+', percentage: '10%' }
    ]
  },
  {
    category: 'Industries Served',
    metrics: [
      { label: 'Technology', value: '200+', percentage: '40%' },
      { label: 'Healthcare', value: '100+', percentage: '20%' },
      { label: 'Fintech', value: '75+', percentage: '15%' },
      { label: 'Other', value: '125+', percentage: '25%' }
    ]
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of companies secure the funding they need to scale and succeed.
          </p>
        </div>

        {/* Simplified Stats Grid - Core metrics only */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-primary-100 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-primary-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}