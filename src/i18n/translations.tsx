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

function expVisteonZh(): ReactNode {
  return (
    <p>
      • 使用 <b>agosense</b> 维护企业间（B2B）的 <b>Jira 集成</b>，同步两家公司之间的项目与工作项数据。
      <br />• 维护数据映射与同步流程，排查集成异常，保障跨公司信息的一致性与协作效率。
      <br />• 维护并优化 <b>CI/CD 流水线</b>，支持自动化构建、测试与部署，保障项目持续交付。
      <br />• 支持日常 <b>DevOps 运维</b>、环境配置与故障排查，协同开发团队解决交付过程中的问题。
      <br />
    </p>
  );
}

function expVisteonEn(): ReactNode {
  return (
    <p>
      • Maintain <b>B2B Jira integrations</b> using <b>agosense</b> to synchronize project and work item data between
      two companies.
      <br />• Maintain data mappings and synchronization workflows, troubleshooting integration issues to support data
      consistency and cross-company collaboration.
      <br />• Maintain and improve <b>CI/CD pipelines</b> for automated builds, testing, and deployment to support
      reliable project delivery.
      <br />• Support daily <b>DevOps operations</b>, environment configuration, and troubleshooting, collaborating with
      development teams to resolve delivery issues.
      <br />
    </p>
  );
}

function expAmexZh(): ReactNode {
  return (
    <p>
      • 使用 <b>Spring Boot、MySQL 和 Redis</b> 设计分布式后端系统，通过微服务架构支持高并发场景。
      <br />• 通过 <b>MySQL 索引优化、查询调优与 Redis 缓存</b> 降低延迟并提升系统吞吐量。
      <br />• 实现基于 <b>Kafka</b> 的事件驱动架构，解耦服务并提升系统的可扩展性与容错能力。
      <br />• 使用 <b>Redis 分布式锁与乐观锁</b> 保障高并发场景下的数据一致性。
      <br />• 构建企业级系统（<b>WMS / 交易抽象</b>），对复杂业务流程进行建模。
      <br />• 使用 <b>Docker</b> 将服务部署至 <b>AWS EC2</b>，并集成 <b>S3</b> 实现安全存储。
      <br />• 将库存抽象为余额模型，设计类金融系统，支持借记、贷记与转账操作。
      <br />
    </p>
  );
}

function expAmexEn(): ReactNode {
  return (
    <p>
      • Designed distributed backend systems using <b>Spring Boot, MySQL, and Redis</b>, supporting high-concurrency
      scenarios with microservices architecture.
      <br />• Optimized database performance via <b>MySQL indexing, query tuning, and Redis caching</b>, reducing
      latency and improving throughput.
      <br />• Implemented <b>event-driven architecture (Kafka-based design)</b> to decouple services and enhance
      scalability and fault tolerance.
      <br />• Ensured data consistency under high concurrency using{' '}
      <b>Redis distributed locks and optimistic locking</b>.
      <br />• Built enterprise-grade systems (<b>WMS / transaction abstraction</b>) and modeled complex business
      workflows.
      <br />• Deployed services on <b>AWS EC2</b> with <b>Docker</b> and integrated <b>S3</b> for secure storage.
      <br />• Designed financial-like systems by abstracting inventory into balance models, supporting debit, credit,
      and transfer operations.
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
      {label: '供职', text: 'Amex express'},
    ],
    description:
      '曾在 Amex 从事数据库管理工作，之后回国创业。创业期间，与中国科学技术大学及华中科技大学开展合作，并与 Luxe AF 联合开发了 WMS 仓储管理系统。',
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
    rightsLine: '© {year} 石江玮 · 保留所有权利',
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
    name: '我是石江玮',
    paragraphs: [
      [
        {text: '我是一名 '},
        {bold: true, text: '全栈工程师'},
        {text: '，曾在 '},
        {bold: true, text: 'Amex'},
        {
          text: ' 从事数据库管理工作，之后回国创业。创业期间，与中国科学技术大学及华中科技大学开展合作，并与 Luxe AF 联合开发了 WMS 仓储管理系统。',
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
    description: '石江玮 — 全栈工程师（洛杉矶）个人作品集与简历站点',
    title: '石江玮 | 全栈工程师',
  },
  nav: {
    about: '关于',
    contact: '联系',
    portfolio: '项目',
    resume: '履历',
    testimonials: '推荐',
  },
  portfolio: {
    actions: {
      paper: '阅读论文（PDF）',
      profile: '查看 LeetCode',
      source: '查看 GitHub',
      website: '访问网站',
    },
    description: '从商业系统、独立网站到游戏开发、机器学习研究与算法实践。',
    filters: {all: '全部', algorithms: '算法', projects: '项目', research: '研究'},
    heading: '项目与研究',
    items: {
      bias: {
        description: '通过词嵌入与余弦相似度，分析不同语义领域中的性别偏差，探索 NLP 数据集的偏差识别方法。',
        role: '团队研究 · 纽约州立大学奥尔巴尼分校',
        title: 'BIAS in NLP — 自然语言处理偏差研究',
      },
      dungeon: {
        description:
          '使用 Java 与 Swing 构建地牢探索游戏，通过 Kruskal 算法生成迷宫，支持路径探索、宝物收集与怪物战斗。',
        role: 'Java 游戏开发',
        title: 'Dungeon Maze — 地牢探索',
      },
      leetcode: {
        description: '以 Java 为主进行数据结构与算法练习，覆盖动态规划、图搜索与回溯，并练习 SQL 查询。',
        role: '算法与问题求解',
        title: 'LeetCode — wuliangcc',
      },
      luxeaf: {
        description: '面向二手奢侈品交易的电商网站，负责整个项目的架构设计，连接商品展示与线上购物体验。',
        role: '项目架构负责人',
        title: 'True Luxe AF — 二手奢侈品商城',
      },
      pawpularity: {
        description: '利用预训练 VGG16 提取宠物图像特征，对比多种回归方法，预测宠物照片的受欢迎程度。',
        role: '共同作者 · 东北大学',
        title: 'Rate Pets’ Images and Find Their Pawpularity',
      },
      snowball: {
        description:
          '基于 Unity 与 C# 开发的移动端跑酷游戏，控制雪球收集金币与雪花，躲避火焰和障碍，体验体积变化机制。',
        role: 'Unity 游戏开发',
        title: 'Snow-ball — 雪球跑酷',
      },
      wms: {
        description: '为 Luxe AF 构建的仓储管理系统，参与库存模型设计，支持库存数据的组织与仓库业务管理。',
        role: '库存模型设计',
        title: 'Luxe AF — 仓储管理系统',
      },
      yuanyuting: {
        description: '独立开发的个人网站，用来记录我与女朋友的日常生活，珍藏共同经历的点滴与回忆。',
        role: '独立开发',
        title: 'yuanyuting.cc — 我们的日常',
      },
    },
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
        content: expVisteonZh(),
        date: '2026 年 11 月 — 至今',
        location: 'Visteon | 湖北',
        title: '高级 DevOps 工程师',
      },
      {
        content: expAmexZh(),
        date: '2024 年 5 月 — 2026 年 1 月',
        location: 'American Express | 加利福尼亚州',
        title: '后端软件工程师',
      },
      {
        content: expOcgZh(),
        date: '2023 年 5 月 — 2024 年 5 月',
        location: 'One Community Global | 纽约',
        title: '软件工程师',
      },
      {
        content: expValiteeZh(),
        date: '2022 年 5 月 — 2022 年 8 月',
        location: 'Valitee | 波士顿',
        title: '前端开发实习生',
      },
    ],
    sectionEducation: '教育背景',
    sectionSkills: '技能',
    sectionWork: '工作经历',
  },
  skills: [
    {
      name: '后端与架构',
      skills: [{name: 'Java'}, {name: 'Spring Boot'}, {name: 'MVC 设计模式'}],
    },
    {
      name: '前端开发',
      skills: [{name: 'React'}, {name: 'TypeScript'}, {name: 'Next.js'}, {name: 'Vue'}],
    },
    {
      name: '数据库与消息系统',
      skills: [{name: 'MySQL'}, {name: 'Redis'}, {name: 'Kafka'}],
    },
    {
      name: 'DevOps 与云平台',
      skills: [
        {name: 'Docker'},
        {name: 'Linux'},
        {name: 'GitHub Actions'},
        {name: 'AWS EC2'},
        {name: 'S3'},
      ],
    },
    {
      name: 'AI 辅助开发',
      skills: [{name: 'OpenAI Codex'}],
    },
    {
      name: '口语',
      skills: [{name: '普通话'}, {name: '英语'}],
    },
  ],
  social: {
    bilibili: '哔哩哔哩',
    github: 'GitHub',
    instagram: 'Instagram',
    linkedin: '领英',
  },
  testimonials: {
    heading: '推荐语',
    items: [
      {
        name: 'Michael',
        text: '江玮善于将复杂需求梳理成清晰、务实的解决方案。他关注边界情况，也愿意深入细节，让最终交付的功能可靠且易于维护。',
      },
      {
        name: 'Akash',
        role: 'American Express · 软件工程师',
        text: '江玮在后端开发中兼顾系统设计与落地细节。他能将接口设计、数据建模和并发控制联系起来，构建清晰、可扩展的服务，并认真对待性能与数据一致性。',
      },
      {
        name: 'Xianhua',
        role: 'Amazon · 软件工程师',
        text: '江玮能有条理地拆解难题，并清楚说明设计中的取舍。他乐于听取反馈、主动解决问题，始终关注从方案设计到项目交付的整体质量。',
      },
    ],
    selectLabel: '查看 {name} 的推荐语',
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
      {label: 'Employment', text: 'Amex express'},
    ],
    description:
      'Previously worked in database administration at Amex before returning to China to start a business. During this entrepreneurial venture, I collaborated with the University of Science and Technology of China and Huazhong University of Science and Technology, and co-developed a WMS (Warehouse Management System) with Luxe AF.',
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
        {text: "I'm a "},
        {bold: true, text: 'Full Stack Engineer'},
        {text: ' who previously worked in database administration at '},
        {bold: true, text: 'Amex'},
        {
          text: ' before returning to China to start a business. During this entrepreneurial venture, I collaborated with the University of Science and Technology of China and Huazhong University of Science and Technology, and co-developed a WMS (Warehouse Management System) with Luxe AF.',
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
    actions: {
      paper: 'Read paper (PDF)',
      profile: 'View LeetCode',
      source: 'View GitHub',
      website: 'Visit website',
    },
    description: 'Business systems, personal websites, games, machine learning research, and algorithm practice.',
    filters: {all: 'All work', algorithms: 'Algorithms', projects: 'Projects', research: 'Research'},
    heading: 'Selected Work & Research',
    items: {
      bias: {
        description:
          'Investigated gender bias across semantic domains using word embeddings and cosine similarity to identify bias in NLP datasets.',
        role: 'Team research · University at Albany, SUNY',
        title: 'BIAS in NLP',
      },
      dungeon: {
        description:
          'A Java and Swing dungeon exploration game with Kruskal-based maze generation, treasure collection, navigation, and monster encounters.',
        role: 'Java game development',
        title: 'Dungeon Maze',
      },
      leetcode: {
        description:
          'Data structures and algorithms practice primarily in Java, covering dynamic programming, graph search, and backtracking, alongside SQL problems.',
        role: 'Algorithms & problem solving',
        title: 'LeetCode — wuliangcc',
      },
      luxeaf: {
        description:
          'A pre-owned luxury marketplace. Responsible for the architecture of the entire project, connecting product discovery with the online shopping experience.',
        role: 'Project architecture',
        title: 'True Luxe AF — Luxury Resale',
      },
      pawpularity: {
        description:
          'Extracted pet image features with pretrained VGG16 and compared regression methods to predict the popularity of pet photographs.',
        role: 'Co-author · Northeastern University',
        title: 'Rate Pets’ Images and Find Their Pawpularity',
      },
      snowball: {
        description:
          'A Unity and C# mobile runner featuring coin collection, snowflakes that grow the snowball, and flames and obstacles to avoid.',
        role: 'Unity game development',
        title: 'Snow-ball Mobile Game',
      },
      wms: {
        description:
          'A warehouse management system for Luxe AF. Contributed to inventory model design to support inventory data organization and warehouse operations.',
        role: 'Inventory model design',
        title: 'Luxe AF — Warehouse Management',
      },
      yuanyuting: {
        description:
          'An independently built personal website to document everyday life with my girlfriend and preserve our shared stories and memories.',
        role: 'Independent development',
        title: 'yuanyuting.cc — Our Everyday',
      },
    },
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
        content: expVisteonEn(),
        date: 'Nov 2026 - Present',
        location: 'Visteon | Hubei',
        title: 'Senior DevOps Engineer',
      },
      {
        content: expAmexEn(),
        date: 'May 2024 - Jan 2026',
        location: 'American Express | California',
        title: 'Backend Software Engineer',
      },
      {
        content: expOcgEn(),
        date: 'May 2023 - May 2024',
        location: 'One Community Global | New York',
        title: 'Software Engineer',
      },
      {
        content: expValiteeEn(),
        date: 'May 2022 - Aug 2022',
        location: 'Valitee | Boston',
        title: 'Front End Web Developer Intern',
      },
    ],
    sectionEducation: 'Education',
    sectionSkills: 'Skills',
    sectionWork: 'Work',
  },
  skills: [
    {
      name: 'Backend & Architecture',
      skills: [{name: 'Java'}, {name: 'Spring Boot'}, {name: 'MVC Design Pattern'}],
    },
    {
      name: 'Frontend Development',
      skills: [{name: 'React'}, {name: 'TypeScript'}, {name: 'Next.js'}, {name: 'Vue'}],
    },
    {
      name: 'Databases & Messaging',
      skills: [{name: 'MySQL'}, {name: 'Redis'}, {name: 'Kafka'}],
    },
    {
      name: 'DevOps & Cloud',
      skills: [
        {name: 'Docker'},
        {name: 'Linux'},
        {name: 'GitHub Actions'},
        {name: 'AWS EC2'},
        {name: 'S3'},
      ],
    },
    {
      name: 'AI-Assisted Development',
      skills: [{name: 'OpenAI Codex'}],
    },
    {
      name: 'Spoken Languages',
      skills: [{name: 'Mandarin'}, {name: 'English'}],
    },
  ],
  social: {
    bilibili: 'Bilibili',
    github: 'Github',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
  },
  testimonials: {
    heading: 'Testimonials',
    items: [
      {
        name: 'Michael',
        text: 'Jiangwei turns complex requirements into clear, practical solutions. He pays attention to edge cases and follows through on the details, delivering features that are reliable and easy to maintain.',
      },
      {
        name: 'Akash',
        role: 'Software Engineer · American Express',
        text: 'Jiangwei brings a thoughtful approach to backend engineering. He connects API design, data modeling, and concurrency control to build clear, scalable services, with careful attention to performance and data consistency.',
      },
      {
        name: 'Xianhua',
        role: 'Software Engineer · Amazon',
        text: 'Jiangwei breaks down difficult problems methodically and explains design tradeoffs clearly. He welcomes feedback, takes initiative in resolving issues, and stays focused on quality from design through delivery.',
      },
    ],
    selectLabel: 'View testimonial from {name}',
  },
};

export const translations: Record<Locale, Messages> = {
  en,
  zh,
};
