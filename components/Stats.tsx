'use client';

import { motion } from 'framer-motion';
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
    <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of companies secure the funding they need to scale and succeed.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-primary-100 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-primary-200">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Detailed Performance Metrics
            </h3>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Get insights into our comprehensive service coverage across different funding stages and industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {additionalMetrics.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metric.label} className="bg-white/20 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{metric.label}</span>
                        <span className="text-primary-200 text-sm">{metric.percentage}</span>
                      </div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: metric.percentage }}
                          transition={{ duration: 1, delay: 0.8 + metricIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary-400 to-accent-400 h-2 rounded-full"
                        />
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-white font-bold">{metric.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Industry Recognition & Awards
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="h-12 w-32 bg-white/20 rounded"></div>
              <div className="h-12 w-28 bg-white/20 rounded"></div>
              <div className="h-12 w-36 bg-white/20 rounded"></div>
              <div className="h-12 w-24 bg-white/20 rounded"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
