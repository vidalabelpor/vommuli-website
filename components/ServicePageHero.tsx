'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  keyBenefits?: string[];
  stats?: Array<{
    value: string;
    label: string;
  }>;
  iconColor?: string;
  className?: string;
}

export default function ServicePageHero({
  title,
  subtitle,
  description,
  primaryCTA = "Get Started Today",
  secondaryCTA = "Schedule Consultation",
  keyBenefits = [],
  stats = [],
  iconColor = "text-primary-600",
  className = ""
}: ServicePageHeroProps) {
  return (
    <section className={`relative bg-service-gradient overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-neutral-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-400"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Specialized Expertise
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                {title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-gradient">{title.split(' ').slice(-1)}</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-600 font-semibold">
                {subtitle}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Key Benefits */}
            {keyBenefits.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-3"
              >
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className={`w-5 h-5 ${iconColor}`} />
                    <span className="text-secondary-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary group">
                {primaryCTA}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                {secondaryCTA}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Stats Grid */}
            {stats.length > 0 ? (
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="card-elevated text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-secondary-600 font-medium text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Default Visual */
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Expert Guidance</h3>
                    <p className="text-primary-100">Connect • Advise • Succeed</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Users className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <TrendingUp className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}