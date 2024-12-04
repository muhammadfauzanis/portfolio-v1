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
  },
  {
    title: 'Jardin Resto App',
    description: `Jardin app allows customers to scan the barcode at their table to view the menu, place orders, and make notes. After completing their order, customers can press the 'order' button, and the order will be received by the restaurant.`,
    tags: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS', 'Express.js'],
    imageUrl: '/jardin-app.png',
    link: 'https://www.google.com',
    working_duration: 'Oct 2023 - Des 2023',
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
