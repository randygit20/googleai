import React from 'react';
import { X, Check } from 'lucide-react';

export const ParadigmShift: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-on-scroll max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>The Core Realization</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">Page 3 & 4 Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.2] mb-6 text-balance">
            Eliminate procrastination not by force, but by design.
          </h2>

          <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed">
            I designed a system of daily rituals, prompts, mini routines and bite-sized tasks for work/study so you don't have to. All you need to do is take out 5–15 minutes of your day and read/follow the prompt for the day. That's all.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Treating the Symptom (Force) */}
          <div className="reveal-on-scroll bg-[#1A1A1A] border border-[#2A2A2A] p-7 sm:p-8 rounded-sm shadow-xs flex flex-col justify-between" data-delay="100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-4 pb-3 border-b border-[#2A2A2A] font-mono">
                <X className="w-4 h-4 text-[#A6A6A0]" />
                <span>Treating the Symptom (By Force)</span>
              </div>

              <h3 className="font-serif text-xl font-medium text-[#F5F2EA] mb-4">
                "Demanding superhuman willpower from an exhausted brain."
              </h3>

              <ul className="space-y-4 text-sm text-[#A6A6A0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#A6A6A0]/50 font-mono text-xs mt-1 shrink-0">—</span>
                  <span><strong className="text-[#F5F2EA] font-medium">Motivation videos & cold showers:</strong> Gives an emotional high on Sunday night that completely evaporates by 2:00 PM Tuesday afternoon.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6A6A0]/50 font-mono text-xs mt-1 shrink-0">—</span>
                  <span><strong className="text-[#F5F2EA] font-medium">Overly ambitious timetables:</strong> Scheduling 12 hours of unbroken coding or study with zero margin for power cuts, noise, or real-life interruptions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6A6A0]/50 font-mono text-xs mt-1 shrink-0">—</span>
                  <span><strong className="text-[#F5F2EA] font-medium">Complex productivity apps:</strong> Spending 4 hours designing color-coded Notion databases instead of doing the actual uncomfortable work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A6A6A0]/50 font-mono text-xs mt-1 shrink-0">—</span>
                  <span><strong className="text-[#F5F2EA] font-medium">Blaming yourself when streaks break:</strong> Missing a single day triggers guilt, which causes you to abandon the entire plan for three weeks.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2A2A2A] text-xs font-mono text-[#A6A6A0]/70">
              RESULT: HIGH ANXIETY · FREQUENT BURNOUT · CONSTANTLY STARTING OVER
            </div>
          </div>

          {/* Right Column: Eliminating by Design (The Protocol) */}
          <div className="reveal-on-scroll bg-[#1A1A1A] border border-[#2A2A2A] p-7 sm:p-8 rounded-sm shadow-sm flex flex-col justify-between relative ring-1 ring-[#6B3FA0]/60" data-delay="220">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-4 pb-3 border-b border-[#2A2A2A] font-mono">
                <Check className="w-4 h-4 text-[#9B6BD6]" />
                <span>Treating the Disease (By Design)</span>
              </div>

              <h3 className="font-serif text-xl font-medium text-[#F5F2EA] mb-4">
                "Building an environment and rhythm around how your brain actually works."
              </h3>

              <ul className="space-y-4 text-sm text-[#A6A6A0]">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                  <span><strong className="text-[#F5F2EA] font-medium">Task breakdown into 15–30 min chunks:</strong> Eliminates ambiguity and fear so starting feels effortless, not overwhelming.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                  <span><strong className="text-[#F5F2EA] font-medium">The 3-3-3 Sprint (33 Minutes):</strong> Short enough to start even with zero motivation, long enough to build deep natural focus.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                  <span><strong className="text-[#F5F2EA] font-medium">Physical phone friction gates:</strong> Putting physical distance and friction between your impulse and your device rather than relying on willpower.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                  <span><strong className="text-[#F5F2EA] font-medium">The Minimum Viable Day & Relapse Recovery:</strong> Engineered specifically to survive bad days, generator noise, power cuts, and low mental energy.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2A2A2A] text-xs font-mono text-[#9B6BD6]">
              RESULT: SUSTAINABLE RHYTHM · SHOCK ABSORPTION · ZERO SPIRALING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
