'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Building2, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO & Founder',
    company: 'TechFlow Solutions',
    funding: '$2.5M Series A',
    industry: 'SaaS',
    rating: 5,
    content: 'Vommuli transformed our fundraising process. Their deep understanding of the SaaS space and extensive VC network helped us secure Series A funding in just 6 weeks. The team\'s strategic guidance was invaluable.',
    avatar: '/avatars/sarah-chen.jpg',
    logo: '/logos/techflow.png'
  },
  {
    name: 'Michael Rodriguez',
    title: 'Co-Founder',
    company: 'HealthTech Innovations',
    funding: '$1.8M Seed Round',
    industry: 'Healthcare',
    rating: 5,
    content: 'As a healthcare startup, we needed investors who understood the regulatory landscape. Vommuli connected us with the perfect angel investors who not only provided capital but also strategic guidance.',
    avatar: '/avatars/michael-rodriguez.jpg',
    logo: '/logos/healthtech.png'
  },
  {
    name: 'Jennifer Park',
    title: 'Founder',
    company: 'FinServe Pro',
    funding: '$5M Series B',
    industry: 'Fintech',
    rating: 5,
    content: 'The Vommuli team exceeded our expectations. They helped us navigate complex Series B negotiations and connected us with investors who shared our vision for transforming financial services.',
    avatar: '/avatars/jennifer-park.jpg',
    logo: '/logos/finserve.png'
  },
  {
    name: 'David Thompson',
    title: 'CEO',
    company: 'Green Energy Systems',
    funding: '$12M Series C',
    industry: 'Clean Energy',
    rating: 5,
    content: 'Vommuli\'s expertise in late-stage funding was crucial for our Series C round. They helped us structure the deal optimally and connected us with strategic investors who could accelerate our growth.',
    avatar: '/avatars/david-thompson.jpg',
    logo: '/logos/green-energy.png'
  },
  {
    name: 'Lisa Wang',
    title: 'Co-Founder',
    company: 'EduTech Solutions',
    funding: '$800K Seed Round',
    industry: 'Education',
    rating: 5,
    content: 'Starting an edtech company during the pandemic was challenging, but Vommuli helped us tell our story effectively and connect with investors who believed in the future of online education.',
    avatar: '/avatars/lisa-wang.jpg',
    logo: '/logos/edutech.png'
  },
  {
    name: 'Robert Kim',
    title: 'Founder',
    company: 'LogiChain',
    funding: '$3.2M Series A',
    industry: 'Logistics',
    rating: 5,
    content: 'Vommuli\'s industry knowledge and investor network helped us secure funding at a critical growth stage. Their ongoing support and strategic advice continue to be valuable as we scale.',
    avatar: '/avatars/robert-kim.jpg',
    logo: '/logos/logichain.png'
  }
];

const successMetrics = [
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Success Rate',
    description: 'Companies that secured funding'
  },
  {
    icon: Building2,
    value: '6.2 weeks',
    label: 'Average Time',
    description: 'From introduction to funding'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Client Rating',
    description: 'Based on 500+ reviews'
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what founders and CEOs say about working with Vommuli for their capital introduction needs.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {successMetrics.map((metric, index) => (
            <div key={metric.label} className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {metric.label}
              </div>
              <div className="text-gray-600">
                {metric.description}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-primary-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Company Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Funding & Industry */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-gray-500">Funding:</span>
                      <div className="font-semibold text-gray-900">{testimonial.funding}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Industry:</span>
                      <div className="font-semibold text-gray-900">{testimonial.industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join Hundreds of Successful Companies
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to secure the funding you need to scale your business? Let's discuss how Vommuli can help you connect with the right investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Success Story
              </button>
              <button className="btn-secondary">
                View More Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
