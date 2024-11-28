import { Link, ProjectInfo } from './types';

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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: [
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'TailwindCSS',
      'Express.JS',
      'TypeScript',
    ],
    imageUrl: '/image1.png',
    link: 'https://www.google.com',
  },
  {
    title: 'FurniScan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: [
      'Express.js',
      'JavaScript',
      'Google Cloud Platform',
      'PostgreSQL',
      'Cloud SQL',
      'Cloud Run',
      'Tensorflow JS',
    ],
    imageUrl: '/image2.png',
    link: 'https://www.google.com',
  },
  {
    title: 'Jardin Resto App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS', 'Express.js'],
    imageUrl: '/image3.png',
    link: 'https://www.google.com',
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
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux Toolkit',
  'Express',
  'Framer Motion',
];
