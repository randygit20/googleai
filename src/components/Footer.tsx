import React from 'react';
import { usePricing } from '../context/PricingContext';

export const Footer: React.FC = () => {
  const { pricing } = usePricing();

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#2A2A2A] py-14 text-[#A6A6A0] text-xs">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Col 1: Wordmark & Core Promise */}
          <div className="md:col-span-6">
            <span className="font-serif text-lg font-medium tracking-tight text-[#F5F2EA] block mb-1">
              Reclaim Your Focus
            </span>
            <span className="text-xs text-[#9B6BD6] font-mono block mb-2">
              A Practical 21-Day Protocol for Young People Who Keep Starting Over
            </span>
            <p className="text-[#A6A6A0] max-w-sm leading-relaxed">
              Written by Kossy (Udenze Stanley). A practical system to close the gap between knowing what you should do and actually doing it.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <div className="font-semibold text-[#F5F2EA] uppercase tracking-wider mb-3 font-mono">
              Sections
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#the-problem" className="hover:text-[#F5F2EA] transition-colors">
                  The Real Trap & Focus Profiles
                </a>
              </li>
              <li>
                <a href="#the-sprint" className="hover:text-[#F5F2EA] transition-colors">
                  The 3-Phase Progression
                </a>
              </li>
              <li>
                <a href="#inside-the-manual" className="hover:text-[#F5F2EA] transition-colors">
                  Inside the 30-Page PDF
                </a>
              </li>
              <li>
                <a href="#what-youre-getting" className="hover:text-[#F5F2EA] transition-colors">
                  What You're Getting
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#9B6BD6] transition-colors">
                  Download Guide — {pricing.displayPrice}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F5F2EA] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Publishing Details */}
          <div className="md:col-span-3">
            <div className="font-semibold text-[#F5F2EA] uppercase tracking-wider mb-3 font-mono">
              Official Details
            </div>
            <ul className="space-y-1.5 text-[#A6A6A0]">
              <li>Author: Kossy (Udenze Stanley)</li>
              <li>Price: {pricing.displayPrice} ({pricing.currencyCode})</li>
              <li className="text-[#9B6BD6]">30-Day 100% Money-Back Guarantee</li>
              <li>Format: 30-Page Digital PDF Edition</li>
              <li>Instant Delivery to Your Email</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#A6A6A0]">
            © 2026 Reclaim Your Focus by Kossy. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[#A6A6A0]">
            <span className="hover:text-[#F5F2EA] cursor-pointer">Privacy Notice</span>
            <span>·</span>
            <span className="hover:text-[#F5F2EA] cursor-pointer">Terms of Purchase</span>
            <span>·</span>
            <span className="hover:text-[#9B6BD6] cursor-pointer">30-Day Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
