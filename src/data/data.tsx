import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import TwitterIcon from '../components/Icon/TwitterIcon';
import BilibiliIcon from '../components/Icon/Bilibili';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jiangwei Shi.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Los Angeles-based <strong className="text-stone-100">Project Manager</strong>, currently working
        at <strong className="text-stone-100">Dlle Construction INC</strong>, building beautiful commercial buildings and personal homes,
        while also helping create stunning web pages and interactive websites.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me <strong className="text-stone-100">Programing</strong>,
        playing <strong className="text-stone-100">Final Fantasy XIV</strong>, or exploring interesting places
        and trying new restaurants with friends.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi there! I'm Jiangwei Shi, a Project Manager based in Los Angeles, currently working at 
  Dlle Construction INC. At work, I help lead the development of stunning commercial buildings and personal homes, 
  and I’m also involved in creating beautiful websites and interactive web experiences. When I'm not working on 
  architectural projects or web design, you can catch me coding, diving into the world of Final Fantasy XIV, 
  or exploring new places and tasting food at unique restaurants with my friends. With a strong background in full-stack 
  development and project management, I’m always looking for ways to innovate and make an impact, both in construction 
  and in the digital world`,
  aboutItems: [
    {label: 'Location', text: 'Arcadia, LA', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Programing, Video game, Anime', Icon: SparklesIcon},
    {label: 'Study', text: 'Northeastern University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Dlle Construction Inc', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Mandarin',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Japanese',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'MUI',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Spring Boot',
        level: 6,
      },
      {
        name: 'Next',
        level: 6,
      },
    ],
  },
  {
    name: 'Deploy & Database',
    skills: [
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 6,
      },
      {
        name: 'MYSQL',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-1.jpg',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-2.jpg',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-3.jpg',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-4.jpg',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-5.jpg',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-6.jpg',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-7.jpg',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-8.jpg',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-9.jpg',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-10.jpg',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: '/assets/portfolio-11.jpg',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2023',
    location: 'Boston, MA',
    title: 'Northeastern University - Master',
    content: <p>Majored in Computer Science with a focus on web development, specializing in Java as the main language.
      Experienced in React and Spring Boot. Conducted research on vision-language pre-training (VLP) and authored a
      paper titled <b><i>Rate Pets’ Images and Find Their Pawpularity</i></b>.</p>,
  },
  {
    date: 'May 2021',
    location: 'Albany, NY',
    title: 'SUNY at Albany - Bachelor',
    content: <p>Majored in Computer Science, focusing on algorithms and data structures, with Java as main
      language. Researched Natural Language Processing (NLP) and authored a paper titled <b><i>BIAS in NLP</i></b>,
      analyzing biases in NLP models.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2025 - Present',
    location: 'Dlle Construction Inc',
    title: 'Project Manager',
    content: (
      <p>
        • Use <b>Microsoft Project</b> to schedule and track project progress, ensuring smooth execution.<br />
        • Communicate with the owner to provide updates on project status.<br />
        • Coordinate with the city to schedule inspections and ensure the project passes all required inspections.<br />
      </p>
    ),
  },
  {
    date: 'Feb 2024 - Jan 2025',
    location: 'Global Data Tek',
    title: 'Full Stack Engineer ',
    content: (
      <p>
        • Designed and developed enterprise applications using <b>Core Java, Spring MVC, JPA, and web
        services</b>, delivering robust, scalable solutions that meet complex business requirements.<br />
        • Collaborated closely with the <b>Agile Scrum</b> team on requirement analysis, technical design, and
        development, ensuring the timely delivery of high-quality software.<br />
        • Spearheaded the development of key modules, including the Login/Signup, Timesheet, and Member
        Search functionalities, resulting in enhanced system efficiency and a more intuitive user experience.<br />
        • Crafted and maintained business logic, Controller, and Service layers, facilitating seamless
        integration and data flow between diverse application components.<br />
        • Leveraged JPA in the Entity layer for optimized data access and manipulation within a <b>MySQL</b>
        database, improving query performance and reducing latency.<br />
        • Performed rigorous <b>unit testing</b> and swiftly resolved bugs, significantly boosting application stability
        and reliability.<br />
        • Engineered <b>RESTful Web Services</b> and microservices using <b>Spring Boot</b>, ensuring seamless
        and reliable communication across distributed systems.<br />
      </p>
    ),
  },
  {
    date: 'July 2023 - Feb 2024',
    location: 'Keelworks Foundation',
    title: 'Software engineer ',
    content: (
      <p>
        • Led a team of 10 in developing a portfolio generator using <b>Java</b> and <b>JavaScript</b>, significantly improving
        professional presentation for job seekers.<br />
        • Employed the <b>Mantine</b> framework in <b>React</b> to create a front-end group chat drawer, enhancing team communication
        and collaboration.<br />
        • Implemented the <b>MVC</b> design pattern within the <b>Spring framework</b> to effectively segregate data from logic,
        ensuring streamlined application functionality.<br />
        • Utilized <b>Async/Await</b> in React for efficient asynchronous handling, ensuring seamless user interactions.<br />
        • Contributed directly to a <b>60%</b> increase in job acquisition rates among users with the portfolio generator,
        demonstrating a significant impact on employment outcomes.<br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'Jiangweishi8@gmail.com',
      href: 'mailto:Jiangweishi8@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Arcadia LA, US',
      href: 'https://www.google.ca/maps/place/Arcadia,+CA/@34.1334232,-118.0718985,13z',
    },
    {
      type: ContactType.Instagram,
      text: '@Jiangwei Shi',
      href: 'https://www.instagram.com/jiangwei_shi_1998/',
    },
    {
      type: ContactType.Github,
      text: 'Jiangwei Shi',
      href: 'https://github.com/Jiangwei-shi',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Jiangwei-shi'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jiangwei-shi/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jiangwei_shi_1998/'},
  {label: 'BilibiliIcon', Icon: BilibiliIcon, href: 'https://space.bilibili.com/392344217?spm_id_from=333.1007.0.0'},
];
