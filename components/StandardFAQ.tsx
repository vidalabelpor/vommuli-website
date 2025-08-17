'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords?: string[];
}

interface StandardFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  categories?: string[];
  showCategoryFilter?: boolean;
  className?: string;
}

export default function StandardFAQ({
  title = "Frequently Asked Questions",
  subtitle = "Get answers to the most common questions about our services and how we can help your business.",
  faqs,
  categories = [],
  showCategoryFilter = false,
  className = ""
}: StandardFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Generate categories from FAQs if not provided
  const allCategories = categories.length > 0 
    ? ['All', ...categories]
    : ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className={`section-padding bg-gradient-neutral ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-primary-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        {showCategoryFilter && allCategories.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 border border-neutral-200 hover:border-primary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="faq-item"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-header"
              >
                <h3 className="text-lg font-semibold text-secondary-900 pr-4 text-left">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-content"
                >
                  <p className="mb-4">{faq.answer}</p>
                  
                  {/* Category and Keywords */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="text-sm text-secondary-500">
                      <span className="font-medium">Category:</span> {faq.category}
                    </div>
                    {faq.keywords && faq.keywords.length > 0 && (
                      <div className="text-sm text-secondary-500 mt-1">
                        <span className="font-medium">Related:</span> {faq.keywords.join(', ')}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 border border-neutral-200">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is here to help. Schedule a free consultation to discuss your specific needs and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Free Consultation
              </button>
              <button className="btn-secondary">
                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}