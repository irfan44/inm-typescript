import type { ProjectsModel } from 'lib/models/project'

const projects: ProjectsModel = [
  {
    name: 'Sayakaya.id',
    description: 'Company website of PT SayaKaya Lahir Batin',
    isFeatured: true,
    type: 'Work',
    company: 'PT SayaKaya Lahir Batin',
    techStack: ['SvelteKit', 'TailwindCSS', 'Strapi'],
    url: 'https://sayakaya.id',
    overview:
      "SayaKaya is an investment apps for beginner investor with easy to use apps. SayaKaya enables investor to easily invest in various assets, such as mutual funds, SBN, and many more coming soon. This website act as SayaKaya's company website",
    date: 'Oct 2023 - Present',
    role: 'Frontend Engineer',
    responsibility: [
      'Handled development of several new pages such as Kamus Investasi, Karir, and Blog',
      'Handled improvement of the home page by implementing fixes from Lighthouse',
      'Handled integration to Strapi as CMS for blog and job listing',
      'Maintained previous codebase to a new updated design system',
      'Fix issues related to frontend after testing from QA team',
    ],
  },
  {
    name: 'Confidential Banking App',
    description:
      'A modern banking solution for wholesale customer of PT Bank Central Asia Tbk (BCA)',
    isFeatured: true,
    type: 'Work',
    company: 'PT Bank Central Asia Tbk (BCA)',
    techStack: ['Angular', 'Microfrontend', 'UI Components'],
    overview:
      'A modern banking solution to fulfill the digital banking needs of wholesale customers of PT Bank Central Asia Tbk (BCA). The largest project I have been involved in, with tens of separate teams both in business and IT',
    date: 'Feb - Aug 2023',
    role: 'Frontend Engineer',
    responsibility: [
      'Migrated existing microfrontend from Angular Material components to in-house UI component library',
      'Managed & developed new components for UI component library',
      'Fix issues related to frontend after User Acceptance Testing (UAT) by QA team ',
    ],
  },
  {
    name: 'MyBatch',
    description:
      'An Angular based application for batch management & update data using stored procedure',
    type: 'Work',
    company: 'PT Bank Central Asia Tbk (BCA)',
    techStack: ['Angular', 'Ant Design', 'Spring Boot', 'Oracle DB'],
    overview:
      'An Angular based application for batch management & update data using stored procedure. Developed as an internal web application for IT team at PT Bank Central Asia with the goal of making UAT testing more efficient',
    date: 'Jul - Aug 2023',
    role: 'Fullstack Engineer (Angular & Spring Boot)',
    responsibility: [
      'Developed & integrate new features to execute stored procedure in the Oracle DB',
      'Implemented Ant Design for Angular from previously basic UI',
      'Fixed UI bugs and errors',
      'Migrated Spring Boot backend to using Oracle DB from MySQL',
    ],
  },
  {
    name: 'irfannm.dev',
    description: 'My personal blog & website',
    isFeatured: true,
    type: 'Personal',
    techStack: ['NextJS', 'TailwindCSS', 'TypeScript'],
    url: 'https://irfannm.dev',
    sourceCode: 'https://github.com/irfan44/irfannm',
    overview:
      'My personal website & home in the internet, also a place for me to experiment :)',
    date: 'Jan 2022 - Present',
    role: 'Frontend Engineer',
    image: '/assets/projects/irfannm.png',
  },
  {
    name: 'FRFA Request Portal',
    description:
      'Web portal for FRFA request as business innovation for internal team use at PT Bank Mandiri (Persero) Tbk',
    isFeatured: true,
    type: 'Work',
    company: 'PT Bank Mandiri (Persero) Tbk',
    techStack: [
      'React',
      'Ant Design',
      'Express',
      'MySQL',
      'Google Cloud Platform',
    ],
    overview:
      "A request ticket management portal website was developed to manage FRFA requests to the NST team at the CISO group. Part of my team's business innovation during my internship at PT Bank Mandiri (Persero) Tbk",
    date: 'Sep - Dec 2022',
    role: 'Fullstack Engineer (React & Express)',
    responsibility: [
      'Developed React based frontend using Ant Design ',
      'Integrate backend to frontend using REST API',
      'Developed Express based backend REST API',
      'Collaborated with NST team members as the user of this portal to set software requirements',
      'Deployed the portal to a Google Cloud Platform virtual machince',
    ],
  },
  {
    name: 'EmoSync Dashboard',
    description:
      'Desktop & web based emotion recognition dashboard to show students emotion to teacher when synchronous learning',
    isFeatured: true,
    type: 'Personal',
    company: 'Thesis Project',
    techStack: [
      'React',
      'ElectronJS',
      'Face-api.js',
      'Figma',
      'User-Centered Design',
    ],
    url: 'https://emoview-v2.vercel.app',
    sourceCode: 'https://github.com/irfan44/emoview',
    overview:
      "An emotion recognition dashboard to enable teachers to monitor students' emotion when synchronous learning. EmoSync is a continuation of previous prototype called EmoView. This app developed as part of my bachelor degree thesis with focus on implementing User-Centered Design (UCD) design method to develop a better User Experience (UX) of the dashboard",
    date: 'Jan - Jul 2023',
    role: 'Frontend Engineer',
    image: '/assets/projects/emosync.png',
  },
  {
    name: 'Literanian',
    description:
      'Literanian is a digital literacy website aimed to improve reading interest among users in Indonesia',
    techStack: ['React', 'Firebase', 'TypeScript'],
    type: 'Personal',
    company: 'Generasi Gigih 2.0 Capstone Project',
    url: 'https://literanian.vercel.app',
    sourceCode: 'https://github.com/irfan44/literanian',
    overview:
      "Literanian is a digital literacy website aimed at improving users interest in reading by providing various articles and accompanied with a simple quiz to keep user engaged. Our study showed that with 50 users, almost 90% felt an increase in interest in reading. Highly praised for it's clean & attractive UI by mentors from Tokopedia",
    date: 'May - Jul 2022',
    role: 'Frontend Engineer',
    image: '/assets/projects/literanian.png',
  },
  {
    name: 'SocialTree',
    description: 'Linktree like web for my social media link sharing',
    techStack: ['React', 'Vite', 'TypeScript'],
    type: 'Personal',
    url: 'https://socialtree-irfannm.vercel.app',
    sourceCode: 'https://github.com/irfan44/socialtree',
    overview:
      'A simple website to show all of my social media links. Heavily inspired by Linktree',
    date: 'May 2022',
    role: 'Frontend Engineer',
    image: '/assets/projects/socialtree.png',
  },
  {
    name: 'Spotifie',
    description:
      'Spotify playlist creator using Spotify API for Generasi Gigih final project',
    techStack: ['React', 'Redux', 'TypeScript'],
    url: 'https://generasi-gigih-final.vercel.app',
    sourceCode: 'https://github.com/irfan44/spotifie',
    type: 'Personal',
    company: 'Generasi Gigih 2.0 Final Project',
    overview:
      'A simple Spotify playlist creator website, with integration to Spotify API. Built as part of Generasi Gigih 2.0 final project & one of the first project for me to use React with TypeScript',
    date: 'Apr 2022',
    role: 'Frontend Engineer',
    image: '/assets/projects/spotifie.png',
  },
  {
    name: 'Ramaniya.id',
    description:
      "Ramaniya's company website that i manage. Built using Wordpress and Divi theme.",
    techStack: ['Wordpress', 'Divi', 'PHP'],
    type: 'Work',
    company: 'Ramaniya',
    overview:
      "Ramaniya's current company website. Built using Wordpress and Divi theme",
    date: 'Sep - Dec 2021',
    role: 'Wordpress Developer',
    responsibility: [
      'Fixed content & information on the website to align with latest condition at the company',
      'Maintained the deployment of Wordpress in a hosting platform',
      'Collaborated with non IT staff to help them use Wordpress and add new contents',
    ],
  },
]

export default projects
