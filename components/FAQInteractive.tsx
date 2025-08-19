'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from './FAQ';

const categories = ['All', 'Service Understanding', 'Pricing & Fees', 'Funding Stages', 'Process & Timeline', 'Company Differentiation', 'Industry Coverage', 'Company Requirements', 'Matching Process', 'Support Services', 'Post-Funding Support', 'Success Metrics', 'Getting Started'];

export default function FAQInteractive() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
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
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
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
              <div className="faq-content">
                <p className="mb-4">{faq.answer}</p>
                <div className="pt-4 border-t border-neutral-100">
                  <div className="text-sm text-secondary-500">
                    <span className="font-medium">Category:</span> {faq.category}
                  </div>
                  <div className="text-sm text-secondary-500 mt-1">
                    <span className="font-medium">Keywords:</span> {faq.keywords.join(', ')}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}