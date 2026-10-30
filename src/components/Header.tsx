import React, { useState } from 'react';
import { usePricing } from '../context/PricingContext';
import { Globe, ChevronDown } from 'lucide-react';
import { CountryCode } from '../data/pricing';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const { pricing, countryCode, setCountry, allTiers } = usePricing();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A] transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="font-serif text-xl font-medium tracking-tight text-[#F5F2EA] hover:text-[#9B6BD6] transition-colors"
        >
          Reclaim Your Focus
        </a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#A6A6A0]">
          <a href="#the-problem" className="hover:text-[#F5F2EA] transition-colors">
            The Problem
          </a>
          <a href="#the-sprint" className="hover:text-[#F5F2EA] transition-colors">
            The 21-Day System
          </a>
          <a href="#inside-the-manual" className="hover:text-[#F5F2EA] transition-colors">
            Inside the Manual
          </a>
          <a href="#what-youre-getting" className="hover:text-[#F5F2EA] transition-colors">
            What You're Getting
          </a>
          <a href="#faq" className="hover:text-[#F5F2EA] transition-colors">
            FAQ
          </a>
        </nav>

        {/* Zone 3: Country selector + Primary CTA action */}
        <div className="flex items-center gap-3">
          {/* Country / Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-2.5 py-1.5 text-xs font-mono bg-[#1A1A1A] hover:bg-[#222222] border border-[#2A2A2A] rounded-xs text-[#F5F2EA] flex items-center gap-1.5 cursor-pointer transition-colors"
              title="Change pricing region"
            >
              <span>{pricing.flag}</span>
              <span className="hidden sm:inline font-semibold">{pricing.currencyCode}</span>
              <ChevronDown className="w-3 h-3 text-[#A6A6A0]" />
            </button>

            {isDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-52 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xs shadow-xl py-1 z-50 animate-in fade-in duration-100"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#9B6BD6] border-b border-[#2A2A2A]">
                  Select Your Region:
                </div>
                {allTiers.map((tier) => (
                  <button
                    key={tier.code}
                    onClick={() => {
                      setCountry(tier.code as CountryCode);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-[#252525] transition-colors cursor-pointer ${
                      tier.code === countryCode ? 'bg-[#3F2466]/40 text-[#F5F2EA] font-semibold' : 'text-[#A6A6A0]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{tier.flag}</span>
                      <span>{tier.countryName}</span>
                    </span>
                    <span className="font-mono text-[#9B6BD6]">{tier.displayPrice}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onOpenCheckout}
            className="px-3.5 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-colors rounded-xs whitespace-nowrap cursor-pointer shadow-xs active:scale-[0.98]"
          >
            Get the Manual — {pricing.displayPrice}
          </button>
        </div>
      </div>
    </header>
  );
};
