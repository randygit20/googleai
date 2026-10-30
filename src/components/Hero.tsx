import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';
import { usePricing } from '../context/PricingContext';

interface HeroProps {
  onOpenCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const { pricing } = usePricing();
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#2A2A2A] overflow-hidden bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Copy & Conversion Block) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F5F2EA] leading-[1.14] mb-6 text-balance">
              The Hardest Part Isn't Doing the Work. It's Starting.
            </h1>

            {/* Subheadline with Exact Marker Highlight Effect */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed max-w-2xl mb-7">
              <p className="text-base sm:text-lg leading-[1.85] sm:leading-[1.9]">
                <span className="bg-[#9B6BD6] text-white px-1.5 py-0.5 rounded-[3px] box-decoration-clone [box-decoration-break:clone] [-webkit-box-decoration-break:clone] font-normal inline">
                  You know you should be working on that project. You know you should be learning that skill. You know that course could change your life. But somehow you find yourself on TikTok. On YouTube. Watching what your peers are doing on LinkedIn while you sit there knowing you should be building too.
                </span>
              </p>

              <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed">
                You download courses you never finish. You start projects you abandon. You make plans on Sunday that you break by Tuesday. The shame is worse than the procrastination because you cannot blame ignorance. You know better. You just can’t do better.
              </p>
            </div>

            {/* Prominent 30-Day 100% Money-Back Guarantee Highlight Banner */}
            <div className="mb-8 p-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm flex items-start gap-3.5 shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#3F2466]/60 border border-[#6B3FA0]/50 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-[#9B6BD6]" />
              </div>
              <div className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
                <span className="font-semibold text-[#F5F2EA] block mb-0.5">
                  30-Day 100% Money-Back Guarantee
                </span>
                <span>
                  Test the full 21-day protocol with zero financial risk. If it doesn't help you finish tasks, protect your focus, and stop starting over, email within 30 days for a full, prompt 100% refund of your <strong className="text-[#F5F2EA]">{pricing.displayPrice}</strong>. No questions asked.
                </span>
              </div>
            </div>

            {/* Primary Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <button
                onClick={onOpenCheckout}
                className="px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
              >
                <span>Get the 21-Day Protocol — {pricing.displayPrice}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#inside-the-manual"
                className="px-5 py-3.5 text-sm font-medium text-[#F5F2EA] hover:text-white bg-[#1A1A1A] hover:bg-[#222222] border border-[#2A2A2A] transition-colors rounded-xs flex items-center justify-center gap-2 text-center"
              >
                <span>See What's Inside the PDF ↓</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#A6A6A0]" />
              </a>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#A6A6A0] pt-2 border-t border-[#2A2A2A] font-sans">
              <div className="flex items-center gap-1.5 text-[#F5F2EA] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#9B6BD6] shrink-0" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <span aria-hidden="true" className="text-[#2A2A2A]">·</span>
              <span>Immediate PDF Download</span>
              <span aria-hidden="true" className="text-[#2A2A2A]">·</span>
              <span className="text-[#F5F2EA]/80">By Kossy (Udenze Stanley)</span>
            </div>
          </div>

          {/* Right Column: Tactile Product Presentation */}
          <div className="reveal-on-scroll lg:col-span-5 relative" data-delay="150">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Ambient Lavender Halo */}
              <div className="absolute -inset-4 bg-[#9B6BD6]/20 rounded-2xl blur-3xl -z-10 pointer-events-none" />

              {/* Image Frame with Architectural Border */}
              <div className="relative rounded-sm overflow-hidden border border-[#6B3FA0]/60 bg-[#1A1A1A] shadow-2xl group">
                <img
                  src="/src/assets/images/reclaim_focus_book_1790575472304.jpg"
                  alt="Reclaim Your Focus - A 21-Day Productivity Reset field guide book"
                  className="w-full h-auto object-cover block opacity-95 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Overlay Callout Label */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#111111]/90 backdrop-blur-md text-[#F5F2EA] p-3 rounded-xs border border-[#6B3FA0]/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#9B6BD6] shrink-0" />
                    <span className="font-medium text-[#F5F2EA]">21-Day Productivity Reset</span>
                  </div>
                  <span className="text-[#9B6BD6] font-mono text-[11px] bg-[#3F2466]/80 px-2 py-0.5 rounded-xs border border-[#6B3FA0]/40">
                    30-Page Field Guide
                  </span>
                </div>
              </div>

              {/* PDF Header Attribution */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#A6A6A0] px-1 font-mono">
                <span className="text-[#9B6BD6]">RECLAIM YOUR FOCUS // BY KOSSY</span>
                <span className="text-[#9B6BD6] font-semibold">{pricing.displayPrice} ONCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
