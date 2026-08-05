import profilePic from '../assets/profile.png';
import aboutImage from '../assets/about.jpg';
import project1 from '../assets/portfolio-1.jpg';
import project2 from '../assets/portfolio-2.jpg';
import project3 from '../assets/portfolio-3.jpg';
import project4 from '../assets/portfolio-4.jpg';

export const heroData = {
  name: 'Ndubuisi Benedict',
  title: 'Fullstack Developer, UAV Pilot & GIS Analyst',
  description:
    'I build motion-driven digital experiences with React, Tailwind, and modern web systems that scale from portfolio sites to enterprise apps.',
  actions: [
    { label: 'Download CV', href: '/legacy/old-site/Profile.pdf', style: 'primary' },
    { label: 'Hire Me', href: '#contact', style: 'secondary' }
  ]
};

export const aboutData = {
  title: 'About Me',
  summary:
    'Multidisciplinary engineer blending software craftsmanship with UAV and GIS expertise. I design accessible interfaces, automate workflows, and help organizations use map-driven insights to create better products.',
  fields: [
    { label: 'Name', value: 'Ndubuisi Benedict' },
    { label: 'Experience', value: '5+ Years' },
    { label: 'Email', value: 'chidubembenedict2019@gmail.com' },
    { label: 'Location', value: 'Abuja, Nigeria' },
    { label: 'Degree', value: 'B.Sc Computer Science' },
    { label: 'Freelance', value: 'Available' }
  ],
  image: aboutImage
};

export const skillsData = [
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'Python', level: 70 },
  { name: 'GIS', level: 80 },
  { name: 'UAV Pilot', level: 99 }
];

export const servicesData = [
  {
    title: 'Web Design',
    description: 'Modern landing pages and dashboard experiences designed for clarity, conversion, and speed.'
  },
  {
    title: 'App Development',
    description: 'Fullstack mobile and web applications using React, Node, and cloud-friendly architectures.'
  },
  {
    title: 'GIS & UAV Systems',
    description: 'Drone-enabled data capture and GIS analytics for mapping, planning, and field automation.'
  },
  {
    title: 'SEO & Growth',
    description: 'Performance-first websites built with discoverability and user retention in mind.'
  }
];

export const portfolioData = [
  {
    title: 'UAV Operations Dashboard',
    type: 'GIS + Flight Planning',
    image: project1
  },
  {
    title: 'Brand Experience Site',
    type: 'Custom Marketing',
    image: project2
  },
  {
    title: 'Analytics Portal',
    type: 'React SaaS Interface',
    image: project3
  },
  {
    title: 'Mobile Fleet App',
    type: 'Cross-platform UI',
    image: project4
  }
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/repos' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' }
];

export const profileImage = profilePic;
