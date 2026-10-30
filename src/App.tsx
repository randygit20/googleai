/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { PricingProvider } from './context/PricingContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ParadigmShift } from './components/ParadigmShift';
import { SprintArchitecture } from './components/SprintArchitecture';
import { ShowDontTell } from './components/ShowDontTell';
import { DifferentiationMatrix } from './components/DifferentiationMatrix';
import { ToolkitInventory } from './components/ToolkitInventory';
import { WhoItsFor } from './components/WhoItsFor';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CalmClose } from './components/CalmClose';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Initialize native IntersectionObserver scroll-driven entrance reveals
  useScrollReveal();

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <PricingProvider>
      <div className="min-h-screen bg-[#111111] text-[#F5F2EA] selection:bg-[#9B6BD6] selection:text-white pb-16 md:pb-0">
        {/* 1. Global Navigation Bar adhering to Top Bar Contract */}
        <Header onOpenCheckout={handleOpenCheckout} />

      {/* Main Narrative Sequence */}
      <main>
        {/* 2. Hero Section with 3 Switchable Perspectives and Tactile Flatlay Mockup */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* 3. The Visceral Problem: The Capacity Gap & Interactive Diagnostics */}
        <ProblemSection onOpenCheckout={handleOpenCheckout} />

        {/* 4. Paradigm Shift: The Fragile Willpower Trap vs. Resilient Protocol Architecture */}
        <ParadigmShift />

        {/* 5. The 21-Day Sprint Architecture & Day-by-Day Interactive Explorer */}
        <SprintArchitecture />

        {/* 6. Show, Don't Just Tell: Inside the Field Manual (Interactive Worksheet & Emergency Protocol Preview) */}
        <ShowDontTell onOpenCheckout={handleOpenCheckout} />

        {/* 7. Competitive Differentiation Matrix: What This Is Not */}
        <DifferentiationMatrix />

        {/* 8. The Complete Toolkit Inventory */}
        <ToolkitInventory />

        {/* 9. Honest Positioning: Who This Is (and Isn't) For */}
        <WhoItsFor />

        {/* 10. The Single-Tier Offer & 30-Day Practical Guarantee */}
        <PricingSection onOpenCheckout={handleOpenCheckout} />

        {/* 11. Strategic FAQ Accordion */}
        <FaqSection />

        {/* 12. Final Calm Invitation */}
        <CalmClose onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* 13. Quiet Footer */}
      <Footer />

      {/* Functional Checkout & Delivery Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />

      {/* Responsive Mobile Sticky Bar (Capped at <= 15% Viewport) */}
      <MobileStickyBar onOpenCheckout={handleOpenCheckout} />
    </div>
  </PricingProvider>
  );
}
