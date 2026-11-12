import {isLocale, type Locale, LOCALE_COOKIE_KEY, LOCALE_STORAGE_KEY} from './types';

const cookieMaxAge = 60 * 60 * 24 * 365;

export function saveLocalePreference(locale: Locale): void {
  try {
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${LOCALE_COOKIE_KEY}=${locale}; Path=/; Max-Age=${cookieMaxAge}; SameSite=Lax${secure}`;
  } catch {
    // Keep the language toggle usable when cookie access is restricted.
  }

  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Cookie persistence still works when localStorage is unavailable.
  }
}

export function resolveLocale(value: unknown): Locale | undefined {
  return typeof value === 'string' && isLocale(value) ? value : undefined;
}

// Migrate existing localStorage-only preferences before the body can paint.
// A valid server-readable cookie always takes precedence. If cookies are blocked,
// do not reload: the page must remain visible and must not enter a reload loop.
export const localePreferenceBootstrap = {
  __html: `
(function () {
  try {
    var key = ${JSON.stringify(LOCALE_COOKIE_KEY)};
    function readCookie() {
      var parts = document.cookie.split(';');
      for (var i = 0; i < parts.length; i++) {
        var part = parts[i].trim();
        if (part.slice(0, key.length + 1) === key + '=') {
          try { return decodeURIComponent(part.slice(key.length + 1)); } catch (_) { return null; }
        }
      }
      return null;
    }
    var cookie = readCookie();
    if (cookie === 'zh' || cookie === 'en') return;
    var stored = localStorage.getItem(${JSON.stringify(LOCALE_STORAGE_KEY)});
    if (stored !== 'zh' && stored !== 'en') return;
    document.cookie = key + '=' + stored + '; Path=/; Max-Age=${cookieMaxAge}; SameSite=Lax' +
      (window.location.protocol === 'https:' ? '; Secure' : '');
    if (readCookie() !== stored) return;
    if (document.documentElement.lang !== (stored === 'zh' ? 'zh-CN' : 'en')) {
      document.documentElement.style.visibility = 'hidden';
      window.location.reload();
    }
  } catch (_) {}
})();`,
};
