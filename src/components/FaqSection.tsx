import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/manualContent';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePricing } from '../context/PricingContext';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { pricing } = usePricing();

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getAnswer = (question: string, defaultAnswer: string) => {
    if (question.toLowerCase().includes('price')) {
      return `The price is a one-time localized payment of ${pricing.displayPrice} (${pricing.currencyCode}) for your region. We offer country-specific pricing for Nigeria (₦6,900), the United Kingdom (£4.50), and other countries ($5.20 USD). There are no recurring fees or subscriptions. If you try the 21-day protocol and feel it didn't give you a practical system you can actually maintain, simply reply to your receipt email within 30 days for a full 100% refund of your ${pricing.displayPrice}. No questions asked.`;
    }
    return defaultAnswer;
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal-on-scroll mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>Direct Answers</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">No Hidden Surprises</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.2] mb-4 text-balance">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-[#A6A6A0] leading-relaxed">
            Specific, honest answers about format, compatibility, and what to expect during the 21 days.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#2A2A2A] border-t border-b border-[#2A2A2A]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const delay = (idx + 1) * 70;
            return (
              <div key={idx} className="reveal-on-scroll py-5" data-delay={delay}>
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 py-2 cursor-pointer transition-colors group"
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#F5F2EA] group-hover:text-[#9B6BD6] transition-colors">
                    {item.question}
                  </span>
                  <span className="w-8 h-8 rounded-sm bg-[#111111] border border-[#2A2A2A] flex items-center justify-center text-[#A6A6A0] shrink-0 group-hover:text-[#F5F2EA] transition-colors">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#9B6BD6]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#A6A6A0]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-xs sm:text-sm text-[#A6A6A0] leading-relaxed max-w-3xl animate-in fade-in duration-150">
                    <p>{getAnswer(item.question, item.answer)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
