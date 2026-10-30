import React, { useState } from 'react';
import { SPRINT_PHASES } from '../data/manualContent';
import { Clock, BookMarked, CheckCircle2 } from 'lucide-react';

export const SprintArchitecture: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = SPRINT_PHASES[activePhaseIndex];

  return (
    <section id="the-sprint" className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {SPRINT_PHASES.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            const delay = (idx + 1) * 100;
            return (
              <button
                key={phase.phase}
                data-delay={delay}
                onClick={() => setActivePhaseIndex(idx)}
                className={`reveal-on-scroll text-left p-5 rounded-sm border transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#9B6BD6] bg-[#1A1A1A] shadow-xs'
                    : 'border-[#2A2A2A] hover:border-[#3A3A3A] bg-[#141414]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs uppercase tracking-wider font-semibold ${
                    isActive ? 'text-[#9B6BD6]' : 'text-[#9B6BD6]/70'
                  }`}>
                    {phase.days}
                  </span>
                  <span className="text-xs text-[#A6A6A0] font-mono">Phase 0{phase.phase}</span>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#F5F2EA] leading-snug">
                  {phase.title}
                </h3>
                <p className="text-xs text-[#A6A6A0] mt-1 line-clamp-1">
                  {phase.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detailed View */}
        <div className="reveal-on-scroll bg-[#1A1A1A] border border-[#2A2A2A] rounded-sm p-6 sm:p-8 shadow-xs" data-delay="250">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 pb-8 border-b border-[#2A2A2A]">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono uppercase tracking-wider text-[#9B6BD6] mb-2">
                Phase Objective · {activePhase.days}
              </div>
              <h4 className="font-serif text-2xl font-medium text-[#F5F2EA] mb-2">
                {activePhase.title}
              </h4>
              <p className="text-[#A6A6A0] text-xs italic mb-3">
                "{activePhase.tagline}"
              </p>
              <p className="text-[#A6A6A0] text-sm sm:text-base leading-relaxed">
                {activePhase.objective}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#111111] border border-[#2A2A2A] p-5 rounded-sm flex flex-col justify-center">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#9B6BD6] mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Phase Key Outcome</span>
              </div>
              <div className="font-medium text-[#F5F2EA] text-sm">
                {activePhase.keyDeliverable}
              </div>
              <div className="text-xs text-[#A6A6A0] mt-2">
                Concrete artifact produced and tested in your daily routine.
              </div>
            </div>
          </div>

          {/* Sample Day Exercises from PDF */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-4 flex items-center gap-2 font-mono">
              <BookMarked className="w-3.5 h-3.5 text-[#9B6BD6]" />
              <span>Exact Daily Exercises in {activePhase.days}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activePhase.sampleDays.map((sample, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-[#2A2A2A] p-4 rounded-sm flex flex-col justify-between hover:border-[#3A3A3A] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#A6A6A0] mb-2 font-mono">
                      <span>Day 0{sample.day}</span>
                      <span className="flex items-center gap-1 text-[11px] text-[#9B6BD6] font-semibold">
                        <Clock className="w-3 h-3 text-[#A6A6A0]" />
                        {sample.actionTime}
                      </span>
                    </div>
                    <div className="font-medium text-[#F5F2EA] text-sm mb-2">
                      {sample.title}
                    </div>
                    <p className="text-xs text-[#A6A6A0] leading-relaxed">
                      {sample.exercise}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#2A2A2A] flex items-center justify-between text-[11px] text-[#A6A6A0] font-mono">
                    <span className="text-[#9B6BD6] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9B6BD6] inline-block" />
                      1 Action Win
                    </span>
                    <span className="text-[#9B6BD6]">Page {Number(sample.day) ? Number(sample.day) + 8 : 15}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
