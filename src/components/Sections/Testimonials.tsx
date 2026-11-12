import classNames from 'classnames';
import type {StaticImageData} from 'next/image';
import {FC, memo, UIEventHandler, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {useLocale} from '../../contexts/LocaleContext';
import {SectionId, testimonialConfig} from '../../data/data';
import {Testimonial} from '../../data/dataDef';
import useInterval from '../../hooks/useInterval';
import useWindow from '../../hooks/useWindow';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';

const Testimonials: FC = memo(() => {
  const {messages} = useLocale();
  const testimonials = messages.testimonials.items;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const {width} = useWindow();

  const {imageSrc} = testimonialConfig;

  const resolveSrc = useMemo(() => {
    if (!imageSrc) {
      return undefined;
    }
    return typeof imageSrc === 'string' ? imageSrc : (imageSrc as StaticImageData).src;
  }, [imageSrc]);

  const backgroundStyle = useMemo(
    () => (resolveSrc ? {backgroundImage: `url(${resolveSrc})`} : undefined),
    [resolveSrc],
  );

  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  useEffect(() => {
    if (scrollContainer.current) {
      const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
      setActiveIndex(newIndex);
    }
  }, [itemWidth, scrollValue]);

  const setTestimonial = useCallback(
    (index: number) => () => {
      if (scrollContainer !== null && scrollContainer.current !== null) {
        scrollContainer.current.scrollLeft = itemWidth.current * index;
      }
    },
    [],
  );
  const next = useCallback(() => {
    if (activeIndex + 1 === testimonials.length) {
      setTestimonial(0)();
    } else {
      setTestimonial(activeIndex + 1)();
    }
  }, [activeIndex, setTestimonial, testimonials.length]);

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
    setScrollValue(event.currentTarget.scrollLeft);
  }, []);

  useInterval(next, 10000);

  if (!testimonials.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Testimonials}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !imageSrc},
        )}
        style={backgroundStyle}>
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            <div className="flex flex-col items-center gap-3 text-center">
              <h2 className="text-2xl font-bold text-white">{messages.testimonials.heading}</h2>
            </div>
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {testimonials.map((item, index) => {
                const isActive = index === activeIndex;
                return <TestimonialCard isActive={isActive} key={`${item.name}-${index}`} testimonial={item} />;
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(testimonials.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    aria-label={messages.testimonials.selectLabel.replace('{name}', testimonials[index].name)}
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setTestimonial(index)}
                    type="button"></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

const TestimonialCard: FC<{testimonial: Testimonial; isActive: boolean}> = memo(
  ({testimonial: {text, name, role, image}, isActive}) => (
    <div
      aria-hidden={!isActive}
      className="flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 sm:flex-row sm:gap-x-6">
      {image ? (
        <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
          <QuoteIcon className="absolute -left-2 -top-2 h-4 w-4 stroke-black text-white" />
          <img alt="" className="h-full w-full rounded-full" src={image} />
        </div>
      ) : (
        <QuoteIcon className="h-5 w-5 shrink-0 text-orange-500 sm:h-8 sm:w-8" />
      )}
      <div className="flex flex-col gap-y-4">
        <blockquote className="prose prose-sm font-medium italic text-white sm:prose-base">{text}</blockquote>
        <div className="flex flex-col gap-1">
          <p className="text-base font-bold text-white">{name}</p>
          {role && <p className="text-sm text-neutral-200">{role}</p>}
        </div>
      </div>
    </div>
  ),
);

export default Testimonials;
