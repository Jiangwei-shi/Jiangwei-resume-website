import classNames from 'classnames';
import {FC, memo} from 'react';

import {useLocale} from '../contexts/LocaleContext';

const baseStyles =
  'rounded-full border border-white/20 bg-neutral-900/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-orange-400 hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900';

const LanguageToggle: FC<{className?: string}> = memo(({className}) => {
  const {locale, toggleLocale, messages} = useLocale();
  const label = locale === 'zh' ? '中文' : 'English';

  return (
    <button
      aria-label={messages.langToggle.ariaLabel}
      className={classNames(baseStyles, className)}
      onClick={toggleLocale}
      type="button">
      {label}
    </button>
  );
});

LanguageToggle.displayName = 'LanguageToggle';
export default LanguageToggle;
