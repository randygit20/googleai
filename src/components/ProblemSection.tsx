import React, { useState } from 'react';
import { FOCUS_PROFILES, FocusProfile } from '../data/manualContent';
import { ShieldCheck, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { usePricing } from '../context/PricingContext';

interface ProblemSectionProps {
  onOpenCheckout?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenCheckout }) => {
  const [selectedProfile, setSelectedProfile] = useState<FocusProfile>(FOCUS_PROFILES[0]);
  const { pricing } = usePricing();

  return (
    <section id="the-problem" className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="reveal-on-scroll max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>The Real Trap</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">From Page 3 & 4 of the Protocol</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.2] mb-6 text-balance">
            "The worst part is the knowing. You know exactly what you should be doing. But there is a gap between knowing and doing. And that gap is where your potential goes to die."
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#A6A6A0] leading-relaxed">
            <p>
              You know you should be working on that project. You know you should be learning that skill. You know that course could change your life. But somehow you find yourself on TikTok. On YouTube. Watching what your peers are doing on LinkedIn while you sit there knowing you should be building too.
            </p>
            <p>
              You download courses you never finish. You start projects you abandon. You make plans on Sunday that you break by Tuesday. The shame is worse than the procrastination because you cannot blame ignorance. You know better. You just can’t do better.
            </p>
            <p className="font-medium text-[#F5F2EA]">
              You may be seeing your peers starting businesses, creating content, traveling abroad, getting jobs, internships, and remote roles. From the outside, it always seems easy—but the real barrier is rarely talent or capability. The trick is just getting you started... actually sitting down and starting.
            </p>
          </div>

          {/* Page 2 Reassurance: 30-Day Money-Back Guarantee Callout */}
          <div className="mt-8 p-4 bg-[#111111] border border-[#2A2A2A] rounded-sm flex items-start gap-3.5 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#3F2466]/60 border border-[#6B3FA0]/50 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-[#9B6BD6]" />
            </div>
            <div className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
              <span className="font-semibold text-[#F5F2EA] block mb-0.5">
                Protected by our 30-Day 100% Money-Back Guarantee
              </span>
              <span>
                You don't have to risk anything to test this system. Download the field manual for <strong className="text-[#F5F2EA]">$5.20 (₦6,900)</strong>. If its protocols don't immediately sharpen your daily execution, reply to your receipt email within 30 days for 100% money back.
              </span>
            </div>
          </div>
        </div>

        {/* The Exact Focus Profile Diagnostic from Page 7-8 of the PDF */}
        <div className="reveal-on-scroll mt-14 bg-[#111111] border border-[#2A2A2A] rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="mb-6 pb-4 border-b border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#9B6BD6] font-semibold mb-1">
                PAGE 7 OF THE GUIDE
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F5F2EA]">
                Identify Your Focus Profile (Which Distraction Pattern Sounds Most Like You?)
              </h3>
              <p className="text-xs text-[#A6A6A0] mt-1">
                Before Day 1, the guide has you diagnose your dominant pattern so you know which priority tools to emphasize.
              </p>
            </div>
            <span className="text-xs font-mono text-[#A6A6A0]/60 shrink-0">[PROFILES A — E]</span>
          </div>

          {/* Profile Selection Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {FOCUS_PROFILES.map((profile, pIdx) => {
              const isSelected = selectedProfile.id === profile.id;
              const delay = (pIdx + 1) * 80;
              return (
                <button
                  key={profile.id}
                  data-delay={delay}
                  onClick={() => setSelectedProfile(profile)}
                  className={`reveal-on-scroll text-left p-4 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#9B6BD6] bg-[#1A1A1A] shadow-xs'
                      : 'border-[#2A2A2A] hover:border-[#3A3A3A] bg-[#111111]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-semibold text-[#9B6BD6]">
                        PROFILE {profile.code}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#9B6BD6]' : 'bg-[#2A2A2A]'}`} />
                    </div>
                    <div className="font-medium text-sm text-[#F5F2EA] mb-1">
                      {profile.name}
                    </div>
                    <p className="text-xs text-[#A6A6A0] line-clamp-3 leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-medium text-[#9B6BD6]">
                    {isSelected ? 'Currently Viewing' : 'Select Profile →'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Breakdown for Selected Profile */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9B6BD6] bg-[#3F2466]/60 border border-[#6B3FA0]/40 px-2 py-0.5 rounded-xs font-mono">
                  Pattern Diagnosis · Profile {selectedProfile.code}
                </span>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#F5F2EA] mb-2">
                {selectedProfile.name}
              </h4>
              <p className="text-sm text-[#9B6BD6]/95 leading-relaxed mb-3 italic">
                "{selectedProfile.quote}"
              </p>
              <p className="text-xs text-[#A6A6A0]">
                {selectedProfile.description}
              </p>
            </div>

            <div className="md:col-span-5 bg-[#111111] border border-[#2A2A2A] p-4 rounded-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-2 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#9B6BD6] shrink-0" />
                <span>Your Priority Tools in the Guide:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#F5F2EA]">
                {selectedProfile.priorityTools.map((tool, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#9B6BD6] font-mono">→</span>
                    <span className="font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button Underneath Focus Profiles */}
          <div className="mt-8 pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#161616] p-5 rounded-sm">
            <div>
              <div className="font-medium text-sm text-[#F5F2EA]">
                Diagnosed with Profile {selectedProfile.code} ({selectedProfile.name})?
              </div>
              <div className="text-xs text-[#A6A6A0] mt-0.5">
                The 21-day protocol includes the exact step-by-step tools to reset this pattern.
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99] whitespace-nowrap shrink-0"
            >
              <span>Get the Field Manual — {pricing.displayPrice}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
