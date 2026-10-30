import React from 'react';
import { Check, ShieldCheck, Zap, FileText, Smartphone, LifeBuoy } from 'lucide-react';

const ADVANTAGES = [
  {
    number: "01",
    icon: Zap,
    title: "Zero Motivation Cheerleading",
    description: "Eliminates procrastination not by force, but by design: small chunks, clear next actions, and pre-committed rules.",
    badge: "By Design, Not Force"
  },
  {
    number: "02",
    icon: Smartphone,
    title: "100% Tool-Agnostic",
    description: "Requires zero software. Works in a simple PDF, on a sheet of paper beside your desk, or in a physical notebook.",
    badge: "Zero App Overhead"
  },
  {
    number: "03",
    icon: LifeBuoy,
    title: "Built for Real Life",
    description: "Teaches focus inside imperfect conditions—with WhatsApp, with noisy homes, with power cuts, with family duties, and real deadlines.",
    badge: "Real-World Tested"
  },
  {
    number: "04",
    icon: FileText,
    title: "A Direct, 30-Page Tactical Field Protocol",
    description: "Each day takes 10–15 minutes. Includes exact worksheets, danger maps, and quick reference cards.",
    badge: "Action in 15 Mins"
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Setback-Hardened Architecture",
    description: "Includes the 'Relapse Recovery Protocol' and 'Minimum Viable Day' specifically designed for bad days.",
    badge: "Relapse Armor"
  }
];

export const DifferentiationMatrix: React.FC = () => {
  return (
    <section id="what-youre-getting" className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="reveal-on-scroll max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>The Focus Advantage</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">Direct Digital Edition</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F5F2EA] leading-[1.18] mb-5 text-balance">
            WHAT YOU'RE GETTING
          </h2>

          <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed">
            The core Reclaim Your Focus advantages engineered to eliminate procrastination and make starting effortless every single day.
          </p>
        </div>

        {/* Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            const delay = (idx + 1) * 100;
            return (
              <div
                key={adv.number}
                data-delay={delay}
                className={`reveal-on-scroll bg-[#1A1A1A] border border-[#2A2A2A] p-6 sm:p-7 rounded-sm shadow-xs flex flex-col justify-between hover:border-[#6B3FA0]/60 transition-all ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm bg-[#3F2466]/60 border border-[#6B3FA0]/40 flex items-center justify-center text-[#9B6BD6]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9B6BD6] bg-[#141414] border border-[#2A2A2A] px-2.5 py-1 rounded-xs">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F5F2EA] mb-3">
                    {adv.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A6A6A0] leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A2A2A] flex items-center gap-2 text-xs font-mono text-[#9B6BD6]">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0" />
                  <span>The Reclaim Your Focus Difference</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
