import type {ContactType} from '../data/dataDef';
import type {
  AboutItemCopy,
  HeroParagraph,
  PortfolioItemCopy,
  SkillGroupCopy,
  TestimonialCopy,
  TimelineEntryCopy,
} from './types';

export interface Messages {
  about: {
    aboutItems: AboutItemCopy[];
    description: string;
    heading: string;
  };
  common: {
    imageAltProfile: string;
  };
  contact: {
    description: string;
    form: {
      configError: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      namePlaceholder: string;
      networkError: string;
      send: string;
      sending: string;
      submitAria: string;
      success: string;
      unknownError: string;
    };
    headerText: string;
    typeLabels: Record<ContactType, string>;
  };
  footer: {
    rightsLine: string;
  };
  header: {
    menuButtonAria: string;
    openSidebarSr: string;
  };
  hero: {
    actions: {
      contact: string;
      resume: string;
    };
    imageAltSuffix: string;
    name: string;
    paragraphs: HeroParagraph[];
  };
  langToggle: {
    ariaLabel: string;
  };
  meta: {
    description: string;
    title: string;
  };
  nav: {
    about: string;
    contact: string;
    portfolio: string;
    resume: string;
    testimonials: string;
  };
  portfolio: {
    heading: string;
    items: PortfolioItemCopy[];
  };
  resume: {
    education: TimelineEntryCopy[];
    experience: TimelineEntryCopy[];
    sectionEducation: string;
    sectionSkills: string;
    sectionSkillsIntro: string;
    sectionWork: string;
  };
  skills: SkillGroupCopy[];
  social: {
    bilibili: string;
    github: string;
    instagram: string;
    linkedin: string;
  };
  testimonials: {
    items: TestimonialCopy[];
  };
}
