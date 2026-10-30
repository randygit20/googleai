import React from 'react';
import { ShieldCheck, Check, ArrowRight, Zap, Lock, Globe } from 'lucide-react';
import { usePricing } from '../context/PricingContext';
import { CountryCode } from '../data/pricing';

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  const { pricing, countryCode, setCountry, allTiers, isAutoDetected } = usePricing();

  return (
    <section id="pricing" className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-on-scroll max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>Direct Digital Access</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">No Recurring Subscriptions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.2] mb-4 text-balance">
            Reclaim your attention today. Stop starting over.
          </h2>

          <p className="text-base text-[#A6A6A0] leading-relaxed">
            One single, transparent payment. Instant download link sent immediately to your email inbox.
          </p>
        </div>

        {/* Country-Specific Pricing Switcher Tabs */}
        <div className="reveal-on-scroll max-w-xl mx-auto mb-6" data-delay="100">
          <div className="flex items-center justify-between text-xs font-mono text-[#A6A6A0] mb-2 px-1">
            <span className="flex items-center gap-1.5 text-[#9B6BD6]">
              <Globe className="w-3.5 h-3.5" />
              <span>Select Your Region:</span>
            </span>
            {isAutoDetected && (
              <span className="text-[11px] text-[#A6A6A0]/70">
                Auto-localized for {pricing.countryName}
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2 bg-[#161616] p-1.5 rounded-sm border border-[#2A2A2A]">
            {allTiers.map((tier) => {
              const isSelected = tier.code === countryCode;
              return (
                <button
                  key={tier.code}
                  onClick={() => setCountry(tier.code as CountryCode)}
                  className={`py-2 px-2.5 rounded-xs text-xs font-mono transition-all text-center flex flex-col items-center justify-center cursor-pointer ${
                    isSelected
                      ? 'bg-[#3F2466] text-[#F5F2EA] font-semibold border border-[#6B3FA0]/70 shadow-xs'
                      : 'text-[#A6A6A0] hover:text-[#F5F2EA] hover:bg-[#1f1f1f]'
                  }`}
                >
                  <span className="flex items-center gap-1 mb-0.5">
                    <span>{tier.flag}</span>
                    <span className="truncate max-w-[90px]">{tier.countryName.split(' ')[0]}</span>
                  </span>
                  <span className={`text-[11px] ${isSelected ? 'text-[#9B6BD6]' : 'text-[#A6A6A0]'}`}>
                    {tier.displayPrice}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Focused Pricing Card */}
        <div className="reveal-on-scroll max-w-xl mx-auto bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm shadow-2xl overflow-hidden ring-1 ring-[#6B3FA0]/60" data-delay="200">
          {/* Card Header */}
          <div className="p-8 sm:p-10 border-b border-[#2A2A2A] bg-[#161616]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif text-2xl font-medium text-[#F5F2EA]">
                Reclaim Your Focus (PDF Edition)
              </span>
              <span className="text-xs font-mono bg-[#3F2466]/60 border border-[#6B3FA0]/40 px-2.5 py-1 rounded text-[#9B6BD6]">
                21-DAY RESET
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A6A6A0] mb-6 leading-relaxed">
              A Practical 21-Day Protocol for Young People Who Keep Starting Over. Includes all daily worksheets, 3-3-3 sprint rules, and the 1-Page Quick Reference Card.
            </p>

            {/* Region Title Badge & Price */}
            <div className="mb-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#9B6BD6] mb-1">
                {pricing.regionLabel}
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-4xl sm:text-5xl font-medium text-[#F5F2EA] tracking-tight">
                  {pricing.displayPrice}
                </span>
                <span className="text-xs font-mono text-[#A6A6A0] uppercase font-semibold">
                  {pricing.secondaryNote}
                </span>
              </div>
            </div>

            <div className="text-xs text-[#9B6BD6] font-medium flex items-center gap-1.5 mt-3 pt-3 border-t border-[#2A2A2A]">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{pricing.helpText} Instant delivery + 30-Day Money-Back Guarantee.</span>
            </div>
          </div>

          {/* Features List */}
          <div className="p-8 sm:p-10 bg-[#1A1A1A] border-b border-[#2A2A2A]">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-4 font-mono">
              What Arrives In Your Inbox:
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#A6A6A0]">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span><strong className="text-[#F5F2EA]">The Complete 30-Page Field Guide (PDF):</strong> 21 daily missions, 3 phases, and my proven, field-tested focus system.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span><strong className="text-[#F5F2EA]">The 1-Page Quick Reference Desk Card (Page 29):</strong> Clear cheat sheet covering the Daily Reset, Distraction Delay, and Relapse Recovery.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span><strong className="text-[#F5F2EA]">All 8 Practical Worksheets:</strong> Distraction Cost Calculator, Danger Time Map, Task Breakdown, and Baseline forms.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span><strong className="text-[#F5F2EA]">Focus in Imperfect Environments Playbook:</strong> Tested rules for noisy homes, sudden power cuts, and spotty internet.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span><strong className="text-[#F5F2EA]">Lifetime Revisions:</strong> Every future update of the guide sent to your email with zero extra charges.</span>
              </li>
            </ul>

            <div className="mt-8">
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
              >
                <span>Download the Field Manual — {pricing.displayPrice}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#A6A6A0]">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#A6A6A0]" />
                <span>Secure Checkout</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-[#9B6BD6]" />
                <span>Instant PDF Download</span>
              </span>
            </div>
          </div>

          {/* Risk Reversal Guarantee */}
          <div className="p-6 sm:p-8 bg-[#141414] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#3F2466]/60 border border-[#6B3FA0]/50 flex items-center justify-center shrink-0 mt-1">
              <ShieldCheck className="w-5 h-5 text-[#9B6BD6]" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#F5F2EA] mb-1 font-mono">
                The 30-Day 100% Money-Back Guarantee
              </div>
              <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
                Test the 21-day sprint. Use the 3-3-3 sprint, run the morning clarity checks, and deploy the relapse protocol when you have bad days. If it doesn't help you finish tasks and build consistency, simply reply to your receipt email within 30 days for a full, prompt 100% refund of your <strong className="text-[#F5F2EA]">{pricing.displayPrice}</strong>. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
