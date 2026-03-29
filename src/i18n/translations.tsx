import {type ReactNode} from 'react';

import {type Messages} from './messages';
import {type Locale} from './types';

function eduPaperZh(): ReactNode {
  return (
    <p>
      计算机科学硕士，方向为 Web 开发，以 Java 为主修语言，熟练使用 React 与 Spring Boot。研究方向为视觉–语言预训练（VLP），发表论文
      <b>
        <i>《Rate Pets’ Images and Find Their Pawpularity》</i>
      </b>
      。
    </p>
  );
}

function eduPaperEn(): ReactNode {
  return (
    <p>
      Majored in Computer Science with a focus on web development, specializing in Java as the main language. Experienced
      in React and Spring Boot. Conducted research on vision-language pre-training (VLP) and authored a paper titled{' '}
      <b>
        <i>Rate Pets’ Images and Find Their Pawpularity</i>
      </b>
      .
    </p>
  );
}

function eduBachelorZh(): ReactNode {
  return (
    <p>
      计算机科学学士，侧重算法与数据结构，以 Java 为主语言。研究自然语言处理（NLP），发表论文
      <b>
        <i>《BIAS in NLP》</i>
      </b>
      ，分析 NLP 模型中的偏差。
    </p>
  );
}

function eduBachelorEn(): ReactNode {
  return (
    <p>
      Majored in Computer Science, focusing on algorithms and data structures, with Java as main language. Researched
      Natural Language Processing (NLP) and authored a paper titled{' '}
      <b>
        <i>BIAS in NLP</i>
      </b>
      , analyzing biases in NLP models.
    </p>
  );
}

function expGdtZh(): ReactNode {
  return (
    <p>
      • 使用 <b>Java、Spring Boot、Spring MVC、JPA</b> 构建企业级应用，设计可扩展系统通信的 <b>RESTful 微服务</b>。
      <br />• 在 <b>敏捷 Scrum</b> 流程中端到端负责核心模块（登录、注册、工时、成员搜索），性能提升约 <b>40%</b>，并改善用户体验。
      <br />• 搭建分层后端架构（Controller、Service、Repository），通过 <b>JPA</b> 优化数据库访问，查询延迟降低约 <b>35%</b>。
      <br />• 搭建 <b>单元与集成测试流水线</b>，修复关键缺陷并提升发布可靠性。
      <br />
    </p>
  );
}

function expGdtEn(): ReactNode {
  return (
    <p>
      • Engineered enterprise-grade applications using <b>Java, Spring Boot, Spring MVC, and JPA</b>, designing{' '}
      <b>RESTful microservices</b> for scalable system communication.
      <br />• Led end-to-end development of core modules (Login, Signup, Timesheet, Member Search) in an{' '}
      <b>Agile Scrum</b> workflow, boosting performance by <b>40%</b> and enhancing UX.
      <br />• Architected a layered backend structure (Controller, Service, Repository), optimizing database access via{' '}
      <b>JPA</b>, which cut query latency by <b>35%</b>.<br />• Established <b>unit and integration testing pipelines</b>{' '}
      to resolve critical bugs and improve deployment reliability.
      <br />
    </p>
  );
}

function expOcgZh(): ReactNode {
  return (
    <p>
      • 带领 <b>10 人团队</b> 开发基于 <b>Java/JavaScript</b> 的作品集生成工具，使用户获得面试/工作的效率提升约 <b>60%</b>。
      <br />• 使用 <b>Spring MVC</b> 强化关注点分离，提高后端可维护性与模块化程度。
      <br />• 使用 <b>React</b> 与 <b>Mantine</b> 构建 <b>实时群聊</b>，提升团队沟通效率。
      <br />• 引入 <b>Async/Await</b> 模式梳理异步前端流程，提升响应体验。
      <br />
    </p>
  );
}

function expOcgEn(): ReactNode {
  return (
    <p>
      • Directed a <b>10-member team</b> to develop a <b>Java/JavaScript-based</b> portfolio generator, boosting users’
      job acquisition rates by <b>60%</b>.<br />• Applied <b>Spring MVC</b> to enforce separation of concerns, improving
      maintainability and modularity of the backend system.
      <br />• Built a <b>real-time group chat</b> using <b>React</b> and <b>Mantine</b>, enhancing internal team
      communication.
      <br />• Integrated <b>Async/Await</b> patterns to streamline asynchronous UI workflows and improve responsiveness.
      <br />
    </p>
  );
}

function expValiteeZh(): ReactNode {
  return (
    <p>
      • 使用 <b>TypeScript、React、MUI、Redux</b> 搭建互动式 <b>聊天功能</b>，用户参与度提升约 <b>30%</b>。
      <br />• 通过 <b>Socket.IO</b> 集成 <b>实时通信</b>，并以 <b>Redux-Saga</b> 管理副作用，提供顺滑体验。
      <br />• 设计 <b>模块化 UI 组件</b>（如聊天抽屉）以提升可访问性与界面清晰度。
      <br />
    </p>
  );
}

function expValiteeEn(): ReactNode {
  return (
    <p>
      • Built an interactive <b>chat feature</b> using <b>TypeScript, React, MUI, and Redux</b>, increasing user
      engagement by <b>30%</b>.<br />• Integrated <b>real-time communication</b> via <b>Socket.IO</b> and managed side
      effects using <b>Redux-Saga</b> for a seamless UX.
      <br />• Designed <b>modular UI components</b> (e.g., chat drawer) to enhance accessibility and improve interface
      clarity.
      <br />
    </p>
  );
}

const zh: Messages = {
  about: {
    aboutItems: [
      {label: '所在地', text: '加利福尼亚州洛杉矶阿卡迪亚'},
      {label: '年龄', text: '26'},
      {label: '国籍', text: '中国'},
      {label: '兴趣', text: '编程、电子游戏、动漫'},
      {label: '教育', text: '东北大学'},
      {label: '供职', text: 'Dlle Construction Inc'},
    ],
    description:
      '常驻洛杉矶的全栈工程师，擅长 Java、Spring Boot 与可扩展 Web 应用。在 Global Data Tek 期间构建核心后端与微服务模块，系统性能提升约 40%；曾在 One Community Global 带领 10 人团队开发作品集生成工具，使用户获得工作机会的比例提升约 60%。热爱整洁代码、稳健架构与有影响力的用户体验。',
    heading: '关于我',
  },
  common: {
    imageAltProfile: '个人头像',
  },
  contact: {
    description: '欢迎通过下方表单或联系方式与我沟通，我会尽快回复。',
    form: {
      configError: '联系表单未配置。请在环境中添加 NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY。',
      emailPlaceholder: '邮箱',
      messagePlaceholder: '留言',
      namePlaceholder: '姓名',
      networkError: '网络错误，请检查连接后重试。',
      send: '发送消息',
      sending: '发送中…',
      submitAria: '提交联系表单',
      success: '谢谢，消息已发送。',
      unknownError: '发生错误，请重试或使用邮箱链接直接联系。',
    },
    headerText: '取得联系',
    typeLabels: {
      Bilibili: '哔哩哔哩',
      Email: '邮箱',
      Facebook: 'Facebook',
      Github: 'GitHub',
      Instagram: 'Instagram',
      LinkedIn: '领英',
      Location: '地址',
      Phone: '电话',
      Twitter: 'Twitter',
    },
  },
  footer: {
    rightsLine: '© {year} 石江伟 · 保留所有权利',
  },
  header: {
    menuButtonAria: '打开菜单',
    openSidebarSr: '打开侧边导航',
  },
  hero: {
    actions: {
      contact: '联系我',
      resume: '下载简历',
    },
    imageAltSuffix: '主视觉',
    name: '我是石江伟。',
    paragraphs: [
      [
        {text: '我是一名常驻洛杉矶的 '},
        {bold: true, text: '全栈工程师'},
        {text: '，目前在 '},
        {bold: true, text: 'Global Data Tek'},
        {
          text: ' 工作，专注打造优秀的网页与互动站点。擅长 Java、Spring Boot 与现代 Web 开发，曾构建可扩展微服务、优化后端系统，并带领跨职能团队交付有价值的产品。在 ',
        },
        {bold: true, text: 'One Community Global'},
        {
          text: ' 期间，我主导开发作品集生成工具，帮助用户更快获得工作机会。我热衷编写清晰、可维护的代码，并以用户为中心解决问题。',
        },
      ],
      [
        {text: '工作之余，我喜欢 '},
        {bold: true, text: '写代码'},
        {text: '、游玩 '},
        {bold: true, text: '最终幻想 XIV'},
        {text: '，也会和朋友一起探索有趣的地方、品尝新的餐厅。'},
      ],
    ],
  },
  langToggle: {
    ariaLabel: '切换语言',
  },
  meta: {
    description: '石江伟 — 全栈工程师（洛杉矶）个人作品集与简历站点',
    title: '石江伟 | 全栈工程师',
  },
  nav: {
    about: '关于',
    contact: '联系',
    portfolio: '项目',
    resume: '履历',
    testimonials: '推荐',
  },
  portfolio: {
    heading: '部分作品',
    items: [
      {description: '', title: '我的桌面'},
      {description: '在此简要介绍你的项目。', title: '项目标题 2'},
      {description: '在此简要介绍你的项目。', title: '项目标题 3'},
      {description: '在此简要介绍你的项目。', title: '项目标题 4'},
      {description: '在此简要介绍你的项目。', title: '项目标题 5'},
      {description: '在此简要介绍你的项目。', title: '项目标题 6'},
      {description: '在此简要介绍你的项目。', title: '项目标题 7'},
      {description: '在此简要介绍你的项目。', title: '项目标题 8'},
      {description: '在此简要介绍你的项目。', title: '项目标题 9'},
      {description: '在此简要介绍你的项目。', title: '项目标题 10'},
      {description: '在此简要介绍你的项目。', title: '项目标题 11'},
    ],
  },
  resume: {
    education: [
      {
        content: eduPaperZh(),
        date: '2023 年 5 月',
        location: '波士顿，马萨诸塞州',
        title: '东北大学 — 硕士',
      },
      {
        content: eduBachelorZh(),
        date: '2021 年 5 月',
        location: '奥尔巴尼，纽约州',
        title: '纽约州立大学奥尔巴尼分校 — 学士',
      },
    ],
    experience: [
      {
        content: expGdtZh(),
        date: '2024 年 5 月 — 至今',
        location: 'Global Data Tek',
        title: '全栈工程师',
      },
      {
        content: expOcgZh(),
        date: '2023 年 5 月 — 2024 年 5 月',
        location: 'One Community Global',
        title: '软件工程师',
      },
      {
        content: expValiteeZh(),
        date: '2022 年 5 月 — 2022 年 8 月',
        location: 'Valitee',
        title: '前端开发实习生',
      },
    ],
    sectionEducation: '教育背景',
    sectionSkills: '技能',
    sectionSkillsIntro: '这里用一组技能快照向雇主展示你的强项',
    sectionWork: '工作经历',
  },
  skills: [
    {
      name: '口语',
      skills: [
        {level: 10, name: '普通话'},
        {level: 8, name: '英语'},
        {level: 2, name: '日语'},
      ],
    },
    {
      name: '前端开发',
      skills: [
        {level: 8, name: 'React'},
        {level: 8, name: 'TypeScript'},
        {level: 6, name: 'MUI'},
      ],
    },
    {
      name: '后端开发',
      skills: [
        {level: 8, name: 'Java'},
        {level: 6, name: 'Spring Boot'},
        {level: 6, name: 'Next.js'},
      ],
    },
    {
      name: '部署与数据库',
      skills: [
        {level: 8, name: 'Docker'},
        {level: 6, name: 'Kubernetes'},
        {level: 8, name: 'MySQL'},
      ],
    },
  ],
  social: {
    bilibili: '哔哩哔哩',
    github: 'GitHub',
    instagram: 'Instagram',
    linkedin: '领英',
  },
  testimonials: {
    items: [
      {
        name: 'John Doe',
        text: '可在此展示与他人合作的体验。高质量的推荐通常来自同事、主管或满意客户。',
      },
      {
        name: 'Jane Doe',
        text: '写下他人对你的具体评价，鼓励对方提到项目细节、交付质量或工作风格等亮点。',
      },
      {
        name: 'Someone else',
        text: '可以准备多条推荐语，保持更新，但更应聚焦高质量、能突出你技能与职业素养的内容。',
      },
    ],
  },
};

const en: Messages = {
  about: {
    aboutItems: [
      {label: 'Location', text: 'Arcadia, LA'},
      {label: 'Age', text: '26'},
      {label: 'Nationality', text: 'Chinese'},
      {label: 'Interests', text: 'Programming, video games, anime'},
      {label: 'Study', text: 'Northeastern University'},
      {label: 'Employment', text: 'Dlle Construction Inc'},
    ],
    description: `Full Stack Engineer based in Los Angeles with strong expertise in Java, Spring Boot, 
  and scalable web application development. At Global Data Tek, I built core backend modules and microservices 
  that improved system performance by 40%. Previously, I led a 10-member team at One Community Global to develop 
  a portfolio generator that increased user job acquisition rates by 60%. Passionate about clean code, thoughtful 
  architecture, and delivering impactful user experiences.`,
    heading: 'About me',
  },
  common: {
    imageAltProfile: 'Profile photo',
  },
  contact: {
    description:
      'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
    form: {
      configError: 'Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment.',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      namePlaceholder: 'Name',
      networkError: 'Network error. Check your connection and try again.',
      send: 'Send Message',
      sending: 'Sending…',
      submitAria: 'Submit contact form',
      success: 'Thanks — your message was sent.',
      unknownError: 'Something went wrong. Please try again or use the email link instead.',
    },
    headerText: 'Get in touch.',
    typeLabels: {
      Bilibili: 'Bilibili',
      Email: 'Email',
      Facebook: 'Facebook',
      Github: 'Github',
      Instagram: 'Instagram',
      LinkedIn: 'LinkedIn',
      Location: 'Location',
      Phone: 'Phone',
      Twitter: 'Twitter',
    },
  },
  footer: {
    rightsLine: '© {year} Jiangwei Shi · All rights reserved',
  },
  header: {
    menuButtonAria: 'Menu button',
    openSidebarSr: 'Open sidebar',
  },
  hero: {
    actions: {
      contact: 'Contact',
      resume: 'Resume',
    },
    imageAltSuffix: 'hero image',
    name: `I'm Jiangwei Shi.`,
    paragraphs: [
      [
        {text: "I'm a Los Angeles-based "},
        {bold: true, text: 'Full Stack Engineer'},
        {text: ', currently working at '},
        {bold: true, text: 'Global Data Tek'},
        {
          text: ', helping create stunning web pages and interactive websites. With strong expertise in Java, Spring Boot, and modern web development. I’ve built scalable microservices, optimized backend systems, and led cross-functional teams to deliver impactful products. At ',
        },
        {bold: true, text: 'One Community Global'},
        {
          text: ', I led the development of a portfolio generator that helped users land jobs 60% faster. My passion lies in building clean, maintainable code and user-focused solutions.',
        },
      ],
      [
        {text: 'In my free time, you can catch me '},
        {bold: true, text: 'programming'},
        {text: ', playing '},
        {bold: true, text: 'Final Fantasy XIV'},
        {text: ', or exploring interesting places and trying new restaurants with friends.'},
      ],
    ],
  },
  langToggle: {
    ariaLabel: 'Switch language',
  },
  meta: {
    description: "Jiangwei Shi — Full Stack Engineer portfolio and resume (Los Angeles)",
    title: 'Jiangwei Shi | Full Stack Engineer',
  },
  nav: {
    about: 'About',
    contact: 'Contact',
    portfolio: 'Portfolio',
    resume: 'Resume',
    testimonials: 'Testimonials',
  },
  portfolio: {
    heading: 'Check out some of my work',
    items: [
      {description: '', title: 'My desk table'},
      {description: 'Give a short description of your project here.', title: 'Project title 2'},
      {description: 'Give a short description of your project here.', title: 'Project title 3'},
      {description: 'Give a short description of your project here.', title: 'Project title 4'},
      {description: 'Give a short description of your project here.', title: 'Project title 5'},
      {description: 'Give a short description of your project here.', title: 'Project title 6'},
      {description: 'Give a short description of your project here.', title: 'Project title 7'},
      {description: 'Give a short description of your project here.', title: 'Project title 8'},
      {description: 'Give a short description of your project here.', title: 'Project title 9'},
      {description: 'Give a short description of your project here.', title: 'Project title 10'},
      {description: 'Give a short description of your project here.', title: 'Project title 11'},
    ],
  },
  resume: {
    education: [
      {
        content: eduPaperEn(),
        date: 'May 2023',
        location: 'Boston, MA',
        title: 'Northeastern University - Master',
      },
      {
        content: eduBachelorEn(),
        date: 'May 2021',
        location: 'Albany, NY',
        title: 'SUNY at Albany - Bachelor',
      },
    ],
    experience: [
      {
        content: expGdtEn(),
        date: 'May 2024 - Present',
        location: 'Global Data Tek',
        title: 'Full Stack Engineer',
      },
      {
        content: expOcgEn(),
        date: 'May 2023 - May 2024',
        location: 'One Community Global',
        title: 'Software Engineer',
      },
      {
        content: expValiteeEn(),
        date: 'May 2022 - Aug 2022',
        location: 'Valitee',
        title: 'Front End Web Developer Intern',
      },
    ],
    sectionEducation: 'Education',
    sectionSkills: 'Skills',
    sectionSkillsIntro: 'Here you can show a snapshot of your skills to show off to employers',
    sectionWork: 'Work',
  },
  skills: [
    {
      name: 'Spoken languages',
      skills: [
        {level: 10, name: 'Mandarin'},
        {level: 8, name: 'English'},
        {level: 2, name: 'Japanese'},
      ],
    },
    {
      name: 'Frontend development',
      skills: [
        {level: 8, name: 'React'},
        {level: 8, name: 'Typescript'},
        {level: 6, name: 'MUI'},
      ],
    },
    {
      name: 'Backend development',
      skills: [
        {level: 8, name: 'Java'},
        {level: 6, name: 'Spring Boot'},
        {level: 6, name: 'Next'},
      ],
    },
    {
      name: 'Deploy & Database',
      skills: [
        {level: 8, name: 'Docker'},
        {level: 6, name: 'Kubernetes'},
        {level: 8, name: 'MYSQL'},
      ],
    },
  ],
  social: {
    bilibili: 'Bilibili',
    github: 'Github',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
  },
  testimonials: {
    items: [
      {
        name: 'John Doe',
        text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      },
      {
        name: 'Jane Doe',
        text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      },
      {
        name: 'Someone else',
        text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      },
    ],
  },
};

export const translations: Record<Locale, Messages> = {
  en,
  zh,
};
