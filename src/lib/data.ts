import { ExperienceInfo, Link, ProjectInfo } from './types';

export const links: Link[] = [
  {
    nameEng: 'Home',
    hash: '#home',
  },
  {
    nameEng: 'About',
    hash: '#about',
  },
  {
    nameEng: 'Experiences',
    hash: '#experiences',
  },
  {
    nameEng: 'Projects',
    hash: '#projects',
  },
  {
    nameEng: 'Skills',
    hash: '#skills',
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: 'Swap Device',
    description: `Swap Device is a dedicated consignment platform designed to connect buyers and sellers of pre-owned Apple devices. Whether you're looking to sell your Apple products, or you're in the market for high-quality second-hand devices, Swap Device provides a seamless, secure, and user-friendly experience.`,
    tags: [
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'TailwindCSS',
      'Express.JS',
      'TypeScript',
    ],
    imageUrl: '/Swap-device.png',
    link: 'https://www.google.com',
    working_duration: 'Coming Soon',
    projectUrl: '',
  },
  {
    title: 'FurniScan',
    description:
      'FurniScan is an app designed for furniture business owners to enhance the customer experience when shopping in offline stores. With FurniScan, customers can obtain detailed information about products by scanning them.',
    tags: [
      'Express.js',
      'JavaScript',
      'Google Cloud Platform',
      'PostgreSQL',
      'Cloud SQL',
      'Cloud Run',
      'Tensorflow JS',
    ],
    imageUrl: '/FurniScan.png',
    link: 'https://www.google.com',
    working_duration: 'May 2024 - Jun 2024',
    projectUrl:
      'https://drive.google.com/file/d/1pkKeDZNiynDq_b6dkvaLF4XqEa3OdcLq/view?usp=sharing',
  },
  {
    title: 'Jardin Resto App',
    description: `Jardin app allows customers to scan the barcode at their table to view the menu, place orders, and make notes. After completing their order, customers can press the 'order' button, and the order will be received by the restaurant.`,
    tags: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS', 'Express.js'],
    imageUrl: '/jardin-app.png',
    link: 'https://www.google.com',
    working_duration: 'Oct 2023 - Des 2023',
    projectUrl: 'https://jardin-resto-app.vercel.app/',
  },
];

export const experiencesData: ExperienceInfo[] = [
  {
    position: 'Tech Cloud',
    company: 'GITS Indonesia',
    description: `Monitored and maintained infrastructure-related devices and systems to ensure operational reliability and contributed to the creation of deployment documentation and daily operational support reports.
`,
    duration: 'Apr 2025 - Present',
  },
  {
    position: 'Front-End & Back-End Cohort',
    company: 'Coding Camp powered by DBS Foundation',
    description: `Coding Camp is a place to learn technology, powered by DBS Foundation. In this program, I chose the Front-End and Back-End Developer learning path because I have a strong interest in this area.`,
    duration: 'Feb 2025 - Present',
  },
  {
    position: 'Cloud Computing Cohort',
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    description: `Bangkit Academy is a place to upgrade skills in tech and enhance
              soft skills. There are three learning paths at Bangkit, but I
              chose Cloud Computing. This program offers online courses and
              classes about cloud computing, as well as online classes to
              enhance soft skills and English speaking skills. After following
              this program for about 5 months, I graduated from Bangkit Academy
              with the precious title of Cloud Computing Distinction Graduate.
              This achievement places me in the top 10% of the cohort,
              recognizing my dedication and excellence in the field. In this
              program, I learned a lot about how to manage a team, be a leader
              of a project team, and also gained technical skills such as
              frontend development, backend development, and cloud computing. At
              the end of this program, my team and I created an app called
              FurniScan. We took one and a half months to complete this app. In
              this project, I developed the backend and managed the cloud
              environment.`,
    duration: 'Feb 2024 - Jul 2024',
  },
];

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'Nest.js',
  'Prisma ORM',
  'PostgreSQL',
  'mySQL',
  'Cloud Computing',
  'Google Cloud Platform',
  'MongoDB',
  'Git',
  'Tailwind CSS',
];
