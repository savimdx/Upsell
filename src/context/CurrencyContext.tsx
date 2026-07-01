import React, { createContext, useContext, useState, useEffect } from 'react';

interface CurrencyContextType {
  currencyCode: string;
  currencySymbol: string;
  rate: number;
  isLoading: boolean;
  formatPrice: (usdPrice: number) => string;
  formatPriceNoSymbol: (usdPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Mapping of typical countries / locales to currencies and symbols
const defaultCurrencyMap: Record<string, { code: string; symbol: string }> = {
  MX: { code: 'MXN', symbol: '$' },
  BR: { code: 'BRL', symbol: 'R$' },
  ES: { code: 'EUR', symbol: '€' },
  PT: { code: 'EUR', symbol: '€' },
  AR: { code: 'ARS', symbol: '$' },
  CL: { code: 'CLP', symbol: '$' },
  CO: { code: 'COP', symbol: '$' },
  PE: { code: 'PEN', symbol: 'S/.' },
  UY: { code: 'UYU', symbol: '$U' },
  VE: { code: 'VES', symbol: 'Bs.S' },
  US: { code: 'USD', symbol: '$' },
  GB: { code: 'GBP', symbol: '£' },
};

// Simple helper to detect currency based on locale fallback
const detectCurrencyFromLocale = (): { code: string; symbol: string } => {
  const locale = navigator.language || '';
  const lowercaseLocale = locale.toLowerCase();

  if (lowercaseLocale.includes('br')) return { code: 'BRL', symbol: 'R$' };
  if (lowercaseLocale.includes('mx')) return { code: 'MXN', symbol: '$' };
  if (lowercaseLocale.includes('es') && !lowercaseLocale.includes('es-419')) {
    // Check if it's Spain specifically or default
    if (lowercaseLocale.includes('es-es')) return { code: 'EUR', symbol: '€' };
    return { code: 'USD', symbol: '$' }; // Many LatAm countries use USD-priced checkouts but let's default dynamically
  }
  if (lowercaseLocale.includes('ar')) return { code: 'ARS', symbol: '$' };
  if (lowercaseLocale.includes('cl')) return { code: 'CLP', symbol: '$' };
  if (lowercaseLocale.includes('co')) return { code: 'COP', symbol: '$' };
  if (lowercaseLocale.includes('pe')) return { code: 'PEN', symbol: 'S/.' };
  if (lowercaseLocale.includes('uy')) return { code: 'UYU', symbol: '$U' };
  if (lowercaseLocale.includes('ve')) return { code: 'VES', symbol: 'Bs.S' };
  if (lowercaseLocale.includes('gb') || lowercaseLocale.includes('uk')) return { code: 'GBP', symbol: '£' };

  return { code: 'USD', symbol: '$' };
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currencyCode, setCurrencyCode] = useState<string>('USD');
  const [currencySymbol, setCurrencySymbol] = useState<string>('$');
  const [rate, setRate] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;

    const fetchCurrencyAndRates = async () => {
      let detectedCode = 'USD';
      let detectedSymbol = '$';
      let fetchedRate = 1;

      try {
        // 1. Fetch user country and currency code from a free IP geolocation API
        const geoResponse = await fetch('https://ipapi.co/json/');
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          if (geoData.currency) {
            detectedCode = geoData.currency;
            
            // Determine symbol
            const mapEntry = Object.values(defaultCurrencyMap).find(m => m.code === detectedCode);
            detectedSymbol = mapEntry ? mapEntry.symbol : (geoData.currency_symbol || '$');
          }
        } else {
          throw new Error('IP geolocation failed');
        }
      } catch (e) {
        console.warn('Could not determine currency via IP, falling back to locale detection:', e);
        const fallback = detectCurrencyFromLocale();
        detectedCode = fallback.code;
        detectedSymbol = fallback.symbol;
      }

      try {
        // 2. Fetch live exchange rate from USD to the detected local currency
        if (detectedCode !== 'USD') {
          const rateResponse = await fetch('https://open.er-api.com/v6/latest/USD');
          if (rateResponse.ok) {
            const rateData = await rateResponse.json();
            if (rateData.rates && rateData.rates[detectedCode]) {
              fetchedRate = rateData.rates[detectedCode];
            }
          }
        }
      } catch (e) {
        console.warn('Could not fetch exchange rates, using 1:1 fallback:', e);
      }

      if (active) {
        setCurrencyCode(detectedCode);
        setCurrencySymbol(detectedSymbol);
        setRate(fetchedRate);
        setIsLoading(false);
      }
    };

    fetchCurrencyAndRates();

    return () => {
      active = false;
    };
  }, []);

  const formatPrice = (usdPrice: number): string => {
    const localPrice = usdPrice * rate;
    // Format nicely based on decimal requirements of the currency
    const formattedVal = localPrice.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `${currencySymbol}${formattedVal} ${currencyCode}`;
  };

  const formatPriceNoSymbol = (usdPrice: number): string => {
    const localPrice = usdPrice * rate;
    return localPrice.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <CurrencyContext.Provider
      value={{
        currencyCode,
        currencySymbol,
        rate,
        isLoading,
        formatPrice,
        formatPriceNoSymbol,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
