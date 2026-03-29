import {ReactNode} from 'react';

export type Locale = 'zh' | 'en';

export const LOCALE_STORAGE_KEY = 'jiangwei-portfolio-locale';

export const SUPPORTED_LOCALES: Locale[] = ['zh', 'en'];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'zh' || value === 'en';
}

/** 可扩展为第三种语言时：在 Locale 联合类型与 translations 中增加条目即可 */
export type HeroSegment = { bold?: boolean; text: string};

export type HeroParagraph = HeroSegment[];

export interface AboutItemCopy {
  label: string;
  text: string;
}

export interface SkillItemCopy {
  level: number;
  name: string;
}

export interface SkillGroupCopy {
  name: string;
  skills: SkillItemCopy[];
}

export interface PortfolioItemCopy {
  description: string;
  title: string;
}

export interface TestimonialCopy {
  name: string;
  text: string;
}

export interface TimelineEntryCopy {
  content: ReactNode;
  date: string;
  location: string;
  title: string;
}

export interface SocialLinkCopy {
  href: string;
  id: string;
}
