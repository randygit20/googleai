import React from 'react';
import { Check, X } from 'lucide-react';

export const WhoItsFor: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-on-scroll max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>Honest Positioning</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">Direct from Page 2 of the Guide</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.2] mb-6 text-balance">
            Although most of the work has been done for you, if you are looking for an overnight fix, don't buy this.
          </h2>

          <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed">
            This guide isn't a motivation hack or a "get focused quick scheme"—you actually have to show up and be consistent, but I promise you it will be worth it.
          </p>
        </div>

        {/* 2-Column Binary Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For You */}
          <div className="reveal-on-scroll bg-[#1A1A1A] border border-[#2A2A2A] p-7 sm:p-8 rounded-sm shadow-xs ring-1 ring-[#6B3FA0]/60" data-delay="100">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-4 pb-3 border-b border-[#2A2A2A] font-mono">
              <Check className="w-4 h-4 text-[#9B6BD6]" />
              <span>This Guide Was Written For You If:</span>
            </div>

            <ul className="space-y-4 text-sm text-[#A6A6A0]">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span className="text-[#F5F2EA]">You are tired of starting over, tired of failing yourself, and ready to finally build a focus system that sticks.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span className="text-[#F5F2EA]">You know you are capable of learning high-value skills, passing exams, or building projects, but get lost on TikTok, YouTube, and WhatsApp.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span className="text-[#F5F2EA]">You see your peers starting businesses, traveling abroad, and landing remote jobs, and you know you have the talent—you just need a system to reliably start.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                <span className="text-[#F5F2EA]">You want small, measurable daily steps (33-minute sprints and 2-minute morning checks) that work in real life.</span>
              </li>
            </ul>
          </div>

          {/* Not For You */}
          <div className="reveal-on-scroll bg-[#141414] border border-[#2A2A2A] p-7 sm:p-8 rounded-sm" data-delay="250">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-4 pb-3 border-b border-[#2A2A2A] font-mono">
              <X className="w-4 h-4 text-[#A6A6A0]" />
              <span>Please Do Not Buy This If:</span>
            </div>

            <ul className="space-y-4 text-sm text-[#A6A6A0]">
              <li className="flex items-start gap-3">
                <span className="text-[#A6A6A0]/40 font-mono text-xs mt-1 shrink-0">—</span>
                <span>You are looking for cheap emotional motivation or a book that simply makes you feel good while nothing in your life changes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6A6A0]/40 font-mono text-xs mt-1 shrink-0">—</span>
                <span>You expect a magic pill that eliminates distraction without changing your phone environment or completing the daily worksheets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6A6A0]/40 font-mono text-xs mt-1 shrink-0">—</span>
                <span>You want an automated screen-locking software app. This is a personal behavioral protocol, not an app blocker.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A6A6A0]/40 font-mono text-xs mt-1 shrink-0">—</span>
                <span>You are unwilling to dedicate 10 to 15 minutes each day to read the prompt and apply the action to your real work.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
