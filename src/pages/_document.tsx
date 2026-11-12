import {type DocumentProps, Head, Html, Main, NextScript} from 'next/document';

import {localePreferenceBootstrap, resolveLocale} from '../i18n/preference';
import {DEFAULT_LOCALE} from '../i18n/types';

// next/document <Head /> vs next/head <Head />
//
// next/document Head is rendered once on the server. This is different from next/head which will
// rebuild the next/head fields each time it's called, and won't overwrite next/document's Head.

export default function Document({__NEXT_DATA__}: DocumentProps) {
  const locale = resolveLocale(__NEXT_DATA__.props.pageProps?.initialLocale) ?? DEFAULT_LOCALE;
  return (
    <Html lang={locale === 'zh' ? 'zh-CN' : 'en'}>
      <Head>
        <meta charSet="utf-8" />
        <script dangerouslySetInnerHTML={localePreferenceBootstrap} id="locale-preference" />
        {/* google translate breaks react:
          - https://github.com/facebook/react/issues/11538
          - https://bugs.chromium.org/p/chromium/issues/detail?id=872770 */}
        <meta content="notranslate" name="google" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
