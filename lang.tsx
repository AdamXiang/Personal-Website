import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { L, Lang } from './data/content';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string };
const LangContext = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: (s) => s.en });

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'zh') return saved;
  } catch {
    /* storage unavailable: fall through to the browser language */
  }
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: (s) => s[lang] }}>{children}</LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
