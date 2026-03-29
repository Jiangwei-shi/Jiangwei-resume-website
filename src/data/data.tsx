import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import porfolioImage1 from '../../public/assets/portfolio-1.jpg';
import porfolioImage2 from '../../public/assets/portfolio-2.jpg';
import porfolioImage3 from '../../public/assets/portfolio-3.jpg';
import porfolioImage4 from '../../public/assets/portfolio-4.jpg';
import porfolioImage5 from '../../public/assets/portfolio-5.jpg';
import porfolioImage6 from '../../public/assets/portfolio-6.jpg';
import porfolioImage7 from '../../public/assets/portfolio-7.jpg';
import porfolioImage8 from '../../public/assets/portfolio-8.jpg';
import porfolioImage9 from '../../public/assets/portfolio-9.jpg';
import porfolioImage10 from '../../public/assets/portfolio-10.jpg';
import porfolioImage11 from '../../public/assets/portfolio-11.jpg';
import BilibiliIcon from '../components/Icon/Bilibili';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {ContactSection, ContactType, Hero, Social} from './dataDef';

/**
 * Section anchors（URL hash，保持英文以便链接稳定）
 */
export const SectionId = {
  About: 'about',
  Contact: 'contact',
  Hero: 'hero',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const heroData: Hero = {
  actions: [
    {
      actionKey: 'resume' as const,
      href: '/assets/Resume.pdf',
      Icon: ArrowDownTrayIcon,
      primary: true,
    },
    {
      actionKey: 'contact' as const,
      href: `#${SectionId.Contact}`,
      primary: false,
    },
  ],
  imageSrc: heroImage,
};

export const aboutData = {
  profileImageSrc: profilepic,
};

/**
 * Portfolio：图片与链接来自此列表，标题与说明见 `src/i18n/translations.tsx`
 */
export const portfolioAssets = [
  {image: porfolioImage1, url: '/assets/portfolio-1.jpg'},
  {image: porfolioImage2, url: '/assets/portfolio-2.jpg'},
  {image: porfolioImage3, url: '/assets/portfolio-3.jpg'},
  {image: porfolioImage4, url: '/assets/portfolio-4.jpg'},
  {image: porfolioImage5, url: '/assets/portfolio-5.jpg'},
  {image: porfolioImage6, url: '/assets/portfolio-6.jpg'},
  {image: porfolioImage7, url: '/assets/portfolio-7.jpg'},
  {image: porfolioImage8, url: '/assets/portfolio-8.jpg'},
  {image: porfolioImage9, url: '/assets/portfolio-9.jpg'},
  {image: porfolioImage10, url: '/assets/portfolio-10.jpg'},
  {image: porfolioImage11, url: '/assets/portfolio-11.jpg'},
];

export const testimonialConfig = {
  imageSrc: testimonialImage,
};

/**
 * Contact：展示文案在 i18n；此处为不变字段（邮箱、链接等）
 */
export const contact: ContactSection = {
  description: '',
  headerText: '',
  items: [
    {
      href: 'mailto:Jiangweishi8@gmail.com',
      text: 'Jiangweishi8@gmail.com',
      type: ContactType.Email,
    },
    {
      href: 'https://www.google.ca/maps/place/Arcadia,+CA/@34.1334232,-118.0718985,13z',
      text: 'Arcadia LA, US',
      type: ContactType.Location,
    },
    {
      href: 'https://www.instagram.com/jiangwei_shi_1998/',
      text: '@Jiangwei Shi',
      type: ContactType.Instagram,
    },
    {
      href: 'https://github.com/Jiangwei-shi',
      text: 'Jiangwei Shi',
      type: ContactType.Github,
    },
  ],
};

export const socialLinks: Social[] = [
  {href: 'https://github.com/Jiangwei-shi', Icon: GithubIcon, id: 'github'},
  {href: 'https://www.linkedin.com/in/jiangwei-shi/', Icon: LinkedInIcon, id: 'linkedin'},
  {href: 'https://www.instagram.com/jiangwei_shi_1998/', Icon: InstagramIcon, id: 'instagram'},
  {href: 'https://space.bilibili.com/392344217?spm_id_from=333.1007.0.0', Icon: BilibiliIcon, id: 'bilibili'},
];
