import profilePic from '../assets/profile.png';
import aboutImage from '../assets/about.jpg';

export const heroData = {
  name: 'Ndubuisi Benedict',
  title: 'Full-Stack & Backend Engineer | UAV Pilot & GIS Analyst',
  description:
    'I build high-performance web applications, scalable backend APIs, and intelligent AI/NLP pipelines. Focused on shipping clean, reliable, and production-ready software.',
  actions: [
    { label: 'Download CV', href: '/legacy/old-site/Profile.pdf', style: 'primary' },
    { label: 'Hire Me', href: '/hire-me', style: 'secondary' },
    { label: "Let's Start a Sprint", href: '#contact', style: 'secondary' }
  ]
};

export const aboutData = {
  title: 'Turning ideas into working software',
  summary:
    "I'm a Full-Stack & Backend Engineer dedicated to building high-performance web applications, modern UI/UX, and intelligent AI tools. From custom APIs and database architectures to production-ready platforms, I focus on shipping clean, reliable, and scalable software.",
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
  { name: 'React / Next.js', level: 90 },
  { name: 'JavaScript / Node.js', level: 92 },
  { name: 'Python / Django / FastAPI', level: 88 },
  { name: 'PostgreSQL / MongoDB', level: 85 },
  { name: 'AI / NLP Pipelines', level: 80 },
  { name: 'GIS & UAV Flight Tools', level: 95 }
];

export const servicesData = [
  {
    title: 'Full-Stack Web Development',
    description: 'Modern, high-performance web applications and dashboards built with React, Node.js, Next.js, and Material UI/Tailwind CSS.'
  },
  {
    title: 'Backend APIs & Systems',
    description: 'Scalable backend architectures, RESTful APIs, microservices, and database optimization using Python, Express, and FastAPI.'
  },
  {
    title: 'AI, NLP & Automation',
    description: 'Custom machine learning data pipelines, Named Entity Recognition (NER) models, and automated web workflows.'
  },
  {
    title: 'GIS & UAV Flight Systems',
    description: 'Drone-enabled data capture, telemetry integration, and spatial GIS analytics for mapping and spatial planning.'
  }
];

export const portfolioData = [
  {
    title: 'CGS Novare Ltd',
    type: 'Full-Stack Architecture',
    description: 'Corporate platform featuring high-performance UI, industrial telemetry aesthetics, and architectural CAD-inspired components.',
    liveUrl: 'https://cgs-novare-ltd.vercel.app/',
    tags: ['React', 'Material UI', 'Node.js', 'Tailwind CSS']
  },
  {
    title: 'Storefront E-Commerce Platform',
    type: 'E-Commerce / Backend',
    description: 'High-throughput online storefront backend featuring real-time socket updates and multi-tenant database integration.',
    liveUrl: 'https://storefront-ecru-one.vercel.app/',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.io']
  },
  {
    title: 'Moodie Discovery Platform',
    type: 'Web Application',
    description: 'Interactive discovery and booking web application built for seamless consultation scheduling and client management.',
    liveUrl: 'https://frontend-liard-three-54.vercel.app/discover',
    tags: ['Next.js', 'FastAPI', 'Tailwind CSS', 'Django']
  },
  {
    title: 'Naija NER Entity Recognition',
    type: 'AI / NLP Pipeline',
    description: 'Specialized Named Entity Recognition system trained to automate entity extraction and classification for regional news text.',
    liveUrl: 'https://entity-recognition.vercel.app/',
    tags: ['Python', 'NLP', 'FastAPI', 'React']
  }
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/repos' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' }
];

export const sourceCodeData = [
  {
    id: 'browser-decryption',
    filename: 'Browser Decryption.zip',
    fileSize: '60 KB',
    title: 'Browser Decryption',
    description: 'Contains the source code for decrypting V20 browser cookies, including cookies stored in Google Chrome.',
    language: 'Python',
    priceUSD: 31,
    priceNGN: 42000,
    downloadUrl: '#'
  },
  {
    id: 'NLP-ai-agent',
    filename: 'NLP.zip',
    fileSize: '10.1 MB',
    title: 'MR Bayo Ai agent source code',
    description: 'Includes the complete Mr. Bayo AI Agent source code, project structure, setup requirements, and everything you need to run and understand the system.',
    language: 'Python',
    priceUSD: 31,
    priceNGN: 42000,
    downloadUrl: '#'
  }
];

export const profileImage = profilePic;

