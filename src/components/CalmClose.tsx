import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { usePricing } from '../context/PricingContext';

interface CalmCloseProps {
  onOpenCheckout: () => void;
}

export const CalmClose: React.FC<CalmCloseProps> = ({ onOpenCheckout }) => {
  const { pricing } = usePricing();

  return (
    <section className="py-24 md:py-32 bg-[#111111] text-[#F5F2EA] border-b border-[#2A2A2A]">
      <div className="reveal-on-scroll max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9B6BD6] mb-4">
          <span>[A FINAL PERSONAL NOTE · PAGE 27 & 28]</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F2EA] leading-[1.18] mb-6 text-balance max-w-3xl mx-auto">
          This guide will not fix you. You do not need fixing. You were never broken.
        </h2>

        <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed max-w-2xl mx-auto mb-6">
          What you need is a system. A clear, simple process that works with how your brain actually operates in the real world—with social media, constant notifications, family expectations, spotty Wi-Fi, power cuts, and all the chaotic noise of everyday life.
        </p>

        <p className="text-sm text-[#F5F2EA]/90 leading-relaxed max-w-xl mx-auto mb-10 font-mono bg-[#161616] p-4 rounded-sm border border-[#2A2A2A]">
          "Start with Day 1. Just Day 1. The Distraction Cost Calculator. 10 minutes. That is all I am asking of you today. One day at a time. One sprint at a time. One small win at a time. Go and build something. — Kossy"
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.99]"
          >
            <span>Get Reclaim Your Focus — {pricing.displayPrice}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#A6A6A0] font-sans">
          <span>Instant PDF Download</span>
          <span>·</span>
          <span>All 8 Worksheets + Page 29 Desk Card</span>
          <span>·</span>
          <span className="text-[#9B6BD6] font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>30-Day 100% Money-Back Guarantee</span>
          </span>
        </div>
      </div>
    </section>
  );
};
