import React from 'react';
import { usePricing } from '../context/PricingContext';

interface MobileStickyBarProps {
  onOpenCheckout: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCheckout }) => {
  const { pricing } = usePricing();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111111]/95 backdrop-blur-md border-t border-[#2A2A2A] px-4 py-2.5 flex items-center justify-between shadow-lg">
      <div>
        <div className="font-serif text-sm font-medium text-[#F5F2EA] leading-tight">
          {pricing.displayPrice} <span className="font-sans text-[11px] font-normal text-[#A6A6A0]">({pricing.currencyCode})</span>
        </div>
        <div className="text-[10px] text-[#9B6BD6] font-mono">
          30-Day Money-Back Guarantee
        </div>
      </div>

      <button
        onClick={onOpenCheckout}
        className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-colors rounded-xs cursor-pointer whitespace-nowrap active:scale-95"
      >
        Get the Manual — {pricing.displayPrice}
      </button>
    </div>
  );
};
