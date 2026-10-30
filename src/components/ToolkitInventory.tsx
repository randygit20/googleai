import React from 'react';
import { BookOpen, Layers, FileSpreadsheet, ShieldAlert, Check } from 'lucide-react';

export const ToolkitInventory: React.FC = () => {
  const items = [
    {
      icon: BookOpen,
      title: "The Complete 30-Page Field Guide (PDF)",
      desc: "My 100% practical, zero-fluff manual. Contains all 21 daily missions, diagnostic tools, and the 3-phase progression I built to help you stop starting over.",
      badge: "Core Protocol"
    },
    {
      icon: FileSpreadsheet,
      title: "All 8 Integrated Worksheets & Trackers",
      desc: "Includes the Distraction Cost Calculator, Danger Time Map, Task Breakdown Worksheet, Avoidance Pattern Form, and the 21-Day Daily Check Tracker.",
      badge: "Practical Tools"
    },
    {
      icon: Layers,
      title: "The 1-Page Quick Reference Desk Card",
      desc: "A clean, high-contrast cheat sheet (from Page 29) to keep open on your desk or laminated beside your notebook. Covers Daily Reset, Distraction Delay, and Relapse Recovery.",
      badge: "Printable Companion"
    },
    {
      icon: ShieldAlert,
      title: "The Imperfect Environments Playbook",
      desc: "Specific, battle-tested protocols for surviving real conditions: noisy shared apartments, sudden power drops, spotty internet connections, and family interruptions.",
      badge: "Real Life Armor"
    }
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-on-scroll max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>What You Receive</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">Direct Digital Package</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.2] mb-6 text-balance">
            Everything included in your download.
          </h2>

          <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed">
            Within 60 seconds of checkout, you receive direct access to the entire 30-page PDF manual and companion materials. No complicated app installations, logins, or monthly fees.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const delay = (idx + 1) * 100;
            return (
              <div
                key={idx}
                data-delay={delay}
                className="reveal-on-scroll bg-[#111111] border border-[#2A2A2A] p-6 sm:p-7 rounded-sm shadow-xs flex flex-col justify-between hover:border-[#3A3A3A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-[#3F2466]/60 border border-[#6B3FA0]/40 text-[#9B6BD6]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9B6BD6]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#F5F2EA] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A6A6A0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A2A2A] flex items-center gap-2 text-xs text-[#F5F2EA]">
                  <Check className="w-3.5 h-3.5 text-[#9B6BD6]" />
                  <span>Immediate PDF delivery upon checkout</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
