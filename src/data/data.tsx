import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import BilibiliIcon from '../components/Icon/Bilibili';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {ContactSection, ContactType, Hero, type PortfolioAsset, Social} from './dataDef';

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
      href: {
        en: '/assets/Resume.pdf',
        zh: '/assets/Resume-zh.pdf',
      },
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
export const portfolioAssets: PortfolioAsset[] = [
  {
    category: 'projects',
    id: 'luxeaf',
    image: '/assets/work/true-luxeaf.png',
    kind: 'website',
    tags: ['E-commerce', 'System Architecture'],
    url: 'https://trueluxeaf.com/us',
  },
  {
    category: 'projects',
    id: 'wms',
    image: '/assets/work/luxeaf-wms.png',
    kind: 'website',
    tags: ['WMS', 'Inventory Modeling'],
    url: 'https://luxeafinv.com/login',
  },
  {
    category: 'projects',
    id: 'yuanyuting',
    image: '/assets/work/yuanyuting.png',
    kind: 'website',
    tags: ['Personal Website', 'Independent Project'],
    url: 'https://www.yuanyuting.cc',
  },
  {
    category: 'projects',
    id: 'snowball',
    image: '/assets/work/snow-ball.jpg',
    imagePosition: '50% 85%',
    kind: 'source',
    tags: ['Unity', 'C#', 'Mobile Game'],
    url: 'https://github.com/Jiangwei-shi/Snow-ball-mobile-game',
  },
  {
    category: 'projects',
    id: 'dungeon',
    image: '/assets/work/dungeon-maze.jpg',
    kind: 'source',
    tags: ['Java', 'Swing', 'Kruskal'],
    url: 'https://github.com/Jiangwei-shi/Dungeon-maze',
  },
  {
    category: 'research',
    id: 'pawpularity',
    image: '/assets/work/pawpularity.jpg',
    imagePosition: 'top',
    kind: 'paper',
    tags: ['Computer Vision', 'VGG16', 'Regression'],
    url: '/assets/papers/pawpularity.pdf',
  },
  {
    category: 'research',
    id: 'bias',
    image: '/assets/work/bias-in-nlp.jpg',
    imagePosition: 'top',
    kind: 'paper',
    tags: ['NLP', 'Word Embeddings', 'Bias Analysis'],
    url: '/assets/papers/bias-in-nlp.pdf',
  },
  {
    category: 'algorithms',
    id: 'leetcode',
    image: '/assets/work/leetcode.png',
    kind: 'profile',
    tags: ['Java', 'SQL', 'Data Structures & Algorithms'],
    url: 'https://leetcode.com/u/wuliangcc/',
  },
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
      href: 'https://www.google.com/maps/search/?api=1&query=Wuhan%2C%20Hubei%2C%20China',
      text: 'Wuhan, Hubei, China',
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
