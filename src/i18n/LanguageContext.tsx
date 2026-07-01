import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'es';

interface LanguageContextValue {
  lang: Lang;
  fading: boolean;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const LANG_SWITCH_MS = 150;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [fading, setFading] = useState(false);

  const setLang = useCallback((next: Lang) => {
    setLangState((current) => {
      if (current === next) return current;
      setFading(true);
      window.setTimeout(() => {
        setLangState(next);
        setFading(false);
      }, LANG_SWITCH_MS);
      return current;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, fading, setLang }), [lang, fading, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
