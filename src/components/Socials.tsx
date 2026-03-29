import {FC, memo} from 'react';

import {useLocale} from '../contexts/LocaleContext';
import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  const {messages} = useLocale();

  return (
    <>
      {socialLinks.map(({id, Icon, href}) => {
        const label = messages.social[id as keyof typeof messages.social] ?? id;
        return (
          <a
            aria-label={label}
            className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3"
            href={href}
            key={id}>
            <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
          </a>
        );
      })}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
