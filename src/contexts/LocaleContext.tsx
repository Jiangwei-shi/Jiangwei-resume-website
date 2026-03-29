import {
  createContext,
  type FC,
  memo,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {type Messages} from '../i18n/messages';
import {translations} from '../i18n/translations';
import {isLocale, type Locale,LOCALE_STORAGE_KEY} from '../i18n/types';

export type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleProvider: FC<PropsWithChildren> = memo(({children}) => {
  const [locale, setLocaleState] = useState<Locale>('zh');
  const [storageHydrated, setStorageHydrated] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(raw)) {
      setLocaleState(raw);
    }
    setStorageHydrated(true);
  }, []);

  useEffect(() => {
    if (!storageHydrated) {
      return;
    }
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale, storageHydrated]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState(prev => (prev === 'zh' ? 'en' : 'zh'));
  }, []);

  const messages = translations[locale];

  const value = useMemo(
    (): LocaleContextValue => ({
      locale,
      messages,
      setLocale,
      toggleLocale,
    }),
    [locale, messages, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
});

LocaleProvider.displayName = 'LocaleProvider';

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
