import React, { useState } from 'react';
import { X, Check, Lock, Download, BookOpen, ShieldCheck, ArrowRight, Globe } from 'lucide-react';
import { usePricing } from '../context/PricingContext';
import { CountryCode } from '../data/pricing';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { pricing, countryCode, setCountry, allTiers } = usePricing();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 900);
  };

  const handleDownloadSample = (filename: string) => {
    const element = document.createElement("a");
    const sampleContent = `========================================================================
RECLAIM YOUR FOCUS
A Practical 21-Day Protocol for Young People Who Keep Starting Over
By Kossy (Udenze Stanley)
========================================================================

Order Ref: RYF-${Math.floor(100000 + Math.random() * 900000)}
Licensed to: ${email || "User"}
Price: ${pricing.displayPrice} (${pricing.currencyCode}) — 30-Day 100% Money-Back Guarantee Active
Format: 30-Page Digital PDF Guide + Page 29 Quick Reference Card

------------------------------------------------------------------------
PAGE 29: QUICK REFERENCE CARD
Keep this open. Refer back to it daily.
------------------------------------------------------------------------

THE DAILY RESET PROTOCOL:
• Morning (2 mins): Write your #1 task, why it matters, and when you will do it.
  Before opening your phone.
• Day (33 mins): One 3-3-3 sprint. Phone in another room. One task only.
  Timer running.
• Evening (5 mins): One win. One lesson. One task for tomorrow.
  Phone on charge outside bedroom.

WHEN DISTRACTION HITS (Day 9 - Distraction Delay):
1. Write down the urge: 'Wanted to check [app] at [time].'
2. Wait 10 minutes before acting on it.
3. Most urges disappear. If not, take a 5-minute break — then return.
4. Never judge yourself for the urge. Judge only whether you acted on it.

WHEN YOU RELAPSE (Day 18 - Relapse Recovery):
1. Do not spiral. One bad day does not erase 17 good days.
2. Do not catch up. Just restart with one sprint.
3. Write one sentence about what caused it.
4. Do one sprint the same day. Restart momentum immediately.

THE MINIMUM VIABLE DAY (Page 15):
For bad days, power cuts, poor sleep, or chaos:
[ ] 2 mins: complete Morning Clarity Check.
[ ] 10 mins: work on one clearly defined micro-task.
[ ] 1 min: record what you completed and what interrupted you.

Go and build something.
— Kossy
`;
    const file = new Blob([sampleContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#1A1A1A] border border-[#2A2A2A] w-full max-w-lg rounded-sm shadow-2xl overflow-hidden relative ring-1 ring-[#6B3FA0]/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A6A6A0] hover:text-[#F5F2EA] p-1.5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-[#2A2A2A] bg-[#161616]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#9B6BD6] mb-1">
                SECURE CHECKOUT // INSTANT PDF ACCESS
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#F5F2EA]">
                Get Reclaim Your Focus
              </h3>
              <p className="text-xs text-[#A6A6A0] mt-1">
                By Kossy (Udenze Stanley). Instant PDF download delivered immediately to your inbox.
              </p>
            </div>

            {/* Order Summary & Region Switcher */}
            <div className="p-6 sm:p-8 space-y-5">
              {/* Currency & Region Selector */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#A6A6A0] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#9B6BD6]" />
                  <span>Billing Currency:</span>
                </span>
                <div className="flex items-center gap-1">
                  {allTiers.map((tier) => (
                    <button
                      key={tier.code}
                      type="button"
                      onClick={() => setCountry(tier.code as CountryCode)}
                      className={`px-2 py-0.5 rounded-xs text-[11px] cursor-pointer transition-colors ${
                        tier.code === countryCode
                          ? 'bg-[#3F2466] text-[#F5F2EA] border border-[#6B3FA0]/70 font-semibold'
                          : 'text-[#A6A6A0] hover:text-[#F5F2EA] bg-[#111111]'
                      }`}
                    >
                      <span>{tier.flag}</span> {tier.currencyCode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A] p-4 rounded-sm flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm text-[#F5F2EA]">
                    The 21-Day Focus Protocol (PDF)
                  </div>
                  <div className="text-xs text-[#A6A6A0]">
                    30-Page Guide + All Worksheets + Page 29 Desk Card
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-xl font-medium text-[#F5F2EA]">
                    {pricing.displayPrice}
                  </div>
                  <div className="text-[11px] font-mono text-[#A6A6A0]">
                    {pricing.currencyCode} · One-Time
                  </div>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F2EA] mb-2 font-mono">
                    Your Delivery Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#111111] border border-[#2A2A2A] rounded-sm focus:outline-none focus:border-[#9B6BD6] text-[#F5F2EA] placeholder-[#A6A6A0]/50"
                  />
                  <span className="text-[11px] text-[#A6A6A0] mt-1 block">
                    Your download link and receipt will be dispatched to this email immediately.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-colors rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-75"
                >
                  {isProcessing ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <span>Complete Order — {pricing.displayPrice}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="flex items-center justify-between text-xs text-[#A6A6A0] pt-2 border-t border-[#2A2A2A]">
                <div className="flex items-center gap-1.5 text-[#9B6BD6]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>30-Day 100% Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#A6A6A0]" />
                  <span>256-Bit Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Completion & Download State */
          <div className="p-8 sm:p-10 text-center">
            <div className="w-12 h-12 bg-[#3F2466]/60 border border-[#6B3FA0]/50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#9B6BD6]">
              <Check className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-[#9B6BD6]">
              ORDER CONFIRMED
            </span>
            <h3 className="font-serif text-2xl font-medium text-[#F5F2EA] mt-1 mb-2">
              Welcome to Reclaim Your Focus
            </h3>
            <p className="text-xs sm:text-sm text-[#A6A6A0] mb-6">
              A receipt and backup download link have been sent to <strong className="text-[#F5F2EA]">{email}</strong>. You can also download your files directly below:
            </p>

            <div className="space-y-2.5 text-left mb-6">
              <button
                onClick={() => handleDownloadSample("Reclaim_Your_Focus_30_Page_Guide_Kossy.txt")}
                className="w-full p-3 bg-[#111111] hover:bg-[#141414] border border-[#2A2A2A] rounded-sm flex items-center justify-between text-xs transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-[#9B6BD6]" />
                  <div>
                    <span className="font-medium text-[#F5F2EA] block">Reclaim Your Focus — 30-Page Guide (PDF)</span>
                    <span className="text-[10px] text-[#9B6BD6] font-mono">21-Day Productivity Reset Edition</span>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[#9B6BD6] font-semibold">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </span>
              </button>

              <button
                onClick={() => handleDownloadSample("Page_29_Quick_Reference_Desk_Card.txt")}
                className="w-full p-3 bg-[#111111] hover:bg-[#141414] border border-[#2A2A2A] rounded-sm flex items-center justify-between text-xs transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-[#9B6BD6]" />
                  <span className="font-medium text-[#F5F2EA]">Page 29: Quick Reference Desk Card</span>
                </div>
                <span className="flex items-center gap-1 text-[#9B6BD6] font-semibold">
                  <span>Download</span>
                </span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#A6A6A0] hover:text-[#F5F2EA] font-medium underline cursor-pointer"
            >
              Return to Guide Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
