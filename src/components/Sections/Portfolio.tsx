import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useMemo, useState} from 'react';

import {useLocale} from '../../contexts/LocaleContext';
import {portfolioAssets, SectionId} from '../../data/data';
import {type PortfolioCategory, type PortfolioItem, type PortfolioLinkType} from '../../data/dataDef';
import Section from '../Layout/Section';

const filters = ['all', 'projects', 'research', 'algorithms'] as const;

const Portfolio: FC = memo(() => {
  const {messages} = useLocale();
  const {portfolio} = messages;
  const [filter, setFilter] = useState<'all' | PortfolioCategory>('all');
  const items = useMemo(
    (): PortfolioItem[] =>
      portfolioAssets
        .filter(asset => filter === 'all' || asset.category === filter)
        .map(asset => ({...asset, ...portfolio.items[asset.id]})),
    [filter, portfolio.items],
  );

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{portfolio.heading}</h2>
          <p className="text-sm leading-6 text-neutral-300 sm:text-base">{portfolio.description}</p>
        </div>
        <div aria-label={portfolio.heading} className="flex flex-wrap justify-center gap-2" role="group">
          {filters.map(value => (
            <button
              aria-controls="portfolio-items"
              aria-pressed={filter === value}
              className={classNames(
                'rounded-full border px-4 py-2 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800',
                filter === value
                  ? 'border-orange-500 bg-orange-500 text-white'
                  : 'border-neutral-600 text-neutral-200 hover:border-orange-500 hover:text-white',
              )}
              key={value}
              onClick={() => setFilter(value)}
              type="button">
              {portfolio.filters[value]}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2" id="portfolio-items">
          {items.map(item => (
            <PortfolioCard
              actions={portfolio.actions}
              categoryLabel={portfolio.filters[item.category]}
              item={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';

const PortfolioCard: FC<{
  actions: Record<PortfolioLinkType, string>;
  categoryLabel: string;
  item: PortfolioItem;
}> = memo(({actions, categoryLabel, item}) => {
  const imageStyle = useMemo(() => ({objectPosition: item.imagePosition ?? 'center'}), [item.imagePosition]);

  return (
    <a
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900 transition-colors hover:border-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800"
      href={item.url}
      rel="noopener noreferrer"
      target="_blank">
      <div className="relative aspect-video overflow-hidden bg-neutral-100">
        <Image
          alt=""
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(min-width: 768px) 500px, 100vw"
          src={item.image}
          style={imageStyle}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400">{categoryLabel}</span>
        <h3 className="text-xl font-bold leading-snug text-white">{item.title}</h3>
        <p className="text-sm font-medium text-orange-300">{item.role}</p>
        <p className="text-sm leading-6 text-neutral-300">{item.description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {item.tags.map(tag => (
            <li className="rounded-full border border-neutral-600 px-2.5 py-1 text-xs text-neutral-200" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-2 flex items-center gap-2 text-sm font-bold text-orange-400">
          {actions[item.kind]}
          <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

export default Portfolio;
