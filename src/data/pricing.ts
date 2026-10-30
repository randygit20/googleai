// Country-specific pricing configurations based on prospect origin
// Follows survey brackets: Nigeria (₦5,000–₦8,899), UK (£3–£4.99), Other countries (US$5–US$8.99)

export type CountryCode = 'NG' | 'GB' | 'OTHER';

export interface CountryPricingTier {
  code: CountryCode;
  countryName: string;
  regionLabel: string;
  currencyCode: 'NGN' | 'GBP' | 'USD';
  currencySymbol: string;
  amount: number;
  displayPrice: string; // "₦6,900" | "£4.50" | "$5.20"
  fullDisplay: string; // "₦6,900 Naira" | "£4.50 GBP" | "US$5.20"
  secondaryNote: string; // e.g. "One-Time Payment · approx. $5.20 USD"
  surveyBracket: string; // e.g. "₦5,000–₦8,899"
  helpText: string;
  flag: string;
}

export const COUNTRY_PRICING: Record<CountryCode, CountryPricingTier> = {
  NG: {
    code: 'NG',
    countryName: 'Nigeria',
    regionLabel: 'Pricing — Nigeria',
    currencyCode: 'NGN',
    currencySymbol: '₦',
    amount: 6900,
    displayPrice: '₦6,900',
    fullDisplay: '₦6,900 Naira',
    secondaryNote: '(₦6,900 Naira · approx. $5.20 USD) · One-Time Payment',
    surveyBracket: '₦5,000–₦8,899 bracket',
    helpText: 'Localized for Nigeria. Pay with local bank transfer, debit card, or USSD.',
    flag: '🇳🇬',
  },
  GB: {
    code: 'GB',
    countryName: 'United Kingdom',
    regionLabel: 'Pricing — United Kingdom',
    currencyCode: 'GBP',
    currencySymbol: '£',
    amount: 4.5,
    displayPrice: '£4.50',
    fullDisplay: '£4.50 GBP',
    secondaryNote: '(£4.50 GBP · approx. $5.20 USD) · One-Time Payment',
    surveyBracket: '£3–£4.99 bracket',
    helpText: 'Localized for United Kingdom. Pay in British Pounds (£).',
    flag: '🇬🇧',
  },
  OTHER: {
    code: 'OTHER',
    countryName: 'Other Countries (USD)',
    regionLabel: 'Pricing — Other countries',
    currencyCode: 'USD',
    currencySymbol: '$',
    amount: 5.2,
    displayPrice: '$5.20',
    fullDisplay: 'US$5.20',
    secondaryNote: '(US$5.20 Reference Currency) · One-Time Payment',
    surveyBracket: 'US$5–US$8.99 bracket',
    helpText: 'International reference pricing in USD. Available in all countries worldwide.',
    flag: '🌐',
  },
};

/**
 * Detect the prospect's country based on URL parameters, localStorage override,
 * browser timezone, and browser navigator languages.
 */
export function detectCountryFromProspect(): CountryCode {
  if (typeof window === 'undefined') return 'OTHER';

  // 1. URL Parameter check: ?country=ng | uk | gb | other, or ?currency=ngn | gbp | usd
  try {
    const params = new URLSearchParams(window.location.search);
    const countryParam = params.get('country') || params.get('c');
    const currencyParam = params.get('currency');

    if (countryParam) {
      const lower = countryParam.trim().toLowerCase();
      if (lower === 'ng' || lower === 'nigeria') return 'NG';
      if (lower === 'gb' || lower === 'uk' || lower === 'united kingdom' || lower === 'britain') return 'GB';
      if (lower === 'other' || lower === 'us' || lower === 'usa' || lower === 'usd') return 'OTHER';
    }

    if (currencyParam) {
      const lower = currencyParam.trim().toLowerCase();
      if (lower === 'ngn') return 'NG';
      if (lower === 'gbp') return 'GB';
      if (lower === 'usd') return 'OTHER';
    }
  } catch {
    // Ignore URL parse errors
  }

  // 2. LocalStorage override
  try {
    const saved = localStorage.getItem('ryf_country_code') as CountryCode;
    if (saved && (saved === 'NG' || saved === 'GB' || saved === 'OTHER')) {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }

  // 3. Browser timezone detection
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const tzLower = timeZone.toLowerCase();
    
    // Nigeria timezone check
    if (tzLower.includes('lagos') || tzLower === 'africa/lagos') {
      return 'NG';
    }

    // United Kingdom timezone check
    if (
      tzLower.includes('london') ||
      tzLower.includes('belfast') ||
      tzLower === 'europe/london' ||
      tzLower === 'europe/belfast' ||
      tzLower === 'gb' ||
      tzLower === 'utc' && (navigator.language || '').toLowerCase().includes('gb')
    ) {
      return 'GB';
    }
  } catch {
    // Ignore timezone detection errors
  }

  // 4. Browser navigator language check
  try {
    const languages = navigator.languages || [navigator.language || ''];
    for (const lang of languages) {
      const l = lang.toLowerCase();
      if (l.endsWith('-ng') || l === 'ng' || l.startsWith('yo-') || l.startsWith('ig-') || l.startsWith('ha-')) {
        return 'NG';
      }
      if (l.endsWith('-gb') || l.endsWith('-uk')) {
        return 'GB';
      }
    }
  } catch {
    // Ignore language detection errors
  }

  // Default to OTHER (USD reference)
  return 'OTHER';
}

/**
 * Returns the country pricing configuration for a given country code
 */
export function getPricingForCountry(code: CountryCode): CountryPricingTier {
  return COUNTRY_PRICING[code] || COUNTRY_PRICING.OTHER;
}
