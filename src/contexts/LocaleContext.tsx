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
import {saveLocalePreference} from '../i18n/preference';
import {translations} from '../i18n/translations';
import {DEFAULT_LOCALE, type Locale} from '../i18n/types';

export type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LocaleProvider: FC<PropsWithChildren<{initialLocale?: Locale}>> = memo(
  ({children, initialLocale = DEFAULT_LOCALE}) => {
    const [locale, setLocaleState] = useState<Locale>(initialLocale);

    useEffect(() => {
      saveLocalePreference(locale);
      document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    }, [locale]);

    const setLocale = useCallback((next: Locale) => {
      saveLocalePreference(next);
      setLocaleState(next);
    }, []);

    const toggleLocale = useCallback(() => {
      setLocale(locale === 'zh' ? 'en' : 'zh');
    }, [locale, setLocale]);

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
  },
);

LocaleProvider.displayName = 'LocaleProvider';

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
