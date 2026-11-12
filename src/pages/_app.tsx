import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo} from 'react';

import {LocaleProvider} from '../contexts/LocaleContext';
import type {Locale} from '../i18n/types';

const MyApp = memo(({Component, pageProps}: AppProps<{initialLocale?: Locale}>): JSX.Element => {
  return (
    <LocaleProvider initialLocale={pageProps.initialLocale}>
      <Component {...pageProps} />
    </LocaleProvider>
  );
});

export default MyApp;
