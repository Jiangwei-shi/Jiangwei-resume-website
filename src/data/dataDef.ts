import {StaticImageData} from 'next/image';
import {FC, ForwardRefExoticComponent, type ReactNode, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';
import {type Locale} from '../i18n/types';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Hero section（文案在 i18n；此处仅存资源与链接）
 */
export interface Hero {
  actions: HeroActionItem[];
  imageSrc: string;
}

interface HeroActionItem {
  actionKey: 'contact' | 'resume';
  href: string | Record<Locale, string>;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * About section
 */
export interface About {
  profileImageSrc?: string;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */

export interface Skill {
  name: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Portfolio section
 */
export type PortfolioCategory = 'projects' | 'research' | 'algorithms';

export type PortfolioItemId = 'snowball' | 'dungeon' | 'yuanyuting' | 'wms' | 'luxeaf' | 'leetcode' | 'pawpularity' | 'bias';

export type PortfolioLinkType = 'source' | 'website' | 'paper' | 'profile';

export interface PortfolioAsset {
  category: PortfolioCategory;
  id: PortfolioItemId;
  image: string;
  imagePosition?: string;
  kind: PortfolioLinkType;
  tags: string[];
  url: string;
}

export interface PortfolioItem extends PortfolioAsset {
  title: string;
  description: string;
  role: string;
}

/**
 * Resume section
 */
export interface TimelineItem {
  content: ReactNode;
  date: string;
  location: string;
  title: string;
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  name: string;
  role?: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
  Bilibili: 'Bilibili',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  Icon: FC<IconProps>;
  href: string;
  /** 与 `messages.social` 中的键一致，用于无障碍标签 */
  id: string;
}
