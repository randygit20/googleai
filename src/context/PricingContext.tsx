import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CountryCode,
  CountryPricingTier,
  COUNTRY_PRICING,
  detectCountryFromProspect,
  getPricingForCountry,
} from '../data/pricing';

interface PricingContextType {
  countryCode: CountryCode;
  pricing: CountryPricingTier;
  setCountry: (code: CountryCode) => void;
  allTiers: CountryPricingTier[];
  isAutoDetected: boolean;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const PricingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('OTHER');
  const [isAutoDetected, setIsAutoDetected] = useState(true);

  useEffect(() => {
    // Detect country from prospect's environment
    const detected = detectCountryFromProspect();
    setCountryCode(detected);

    // Optional background check with a fast, lightweight lookup to verify
    try {
      const hasStored = localStorage.getItem('ryf_country_code');
      if (!hasStored) {
        fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(2500) })
          .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Failed to fetch geo');
          })
          .then((data) => {
            if (data?.country_code === 'NG') {
              setCountryCode('NG');
            } else if (data?.country_code === 'GB') {
              setCountryCode('GB');
            } else if (data?.country_code) {
              setCountryCode('OTHER');
            }
          })
          .catch(() => {
            // Silently fall back to initial client-side detection
          });
      }
    } catch {
      // Ignore background fetch errors
    }
  }, []);

  const setCountry = (code: CountryCode) => {
    setCountryCode(code);
    setIsAutoDetected(false);
    try {
      localStorage.setItem('ryf_country_code', code);
    } catch {
      // Ignore storage errors
    }
  };

  const pricing = getPricingForCountry(countryCode);
  const allTiers = Object.values(COUNTRY_PRICING);

  return (
    <PricingContext.Provider
      value={{
        countryCode,
        pricing,
        setCountry,
        allTiers,
        isAutoDetected,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};

export const usePricing = (): PricingContextType => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
};
