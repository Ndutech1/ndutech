// src/data/content.js
import uavDefensePlateau from '../assets/images/uav-defense-plateau.jpeg';
import uavDefensePlateau002 from '../assets/images/uav-defense-plateau-002.jpeg';
import uavDefensePlateau003 from '../assets/images/uav-defense-plateau-003.jpeg';
import uavDefenseNiger from '../assets/images/uav-defense-niger.jpeg';
import uavDefenseNiger002 from '../assets/images/uav-defense-niger-002.jpeg';
import uavDefenseNiger003 from '../assets/images/uav-defense-niger-003.jpeg';
import uavDefenseZamfara from '../assets/images/uav-defense-zamfara.jpeg';
import uavDefenseZamfara002 from '../assets/images/uav-defense-zamfara-002.jpeg';
import uavPipelineSurvey from '../assets/images/uav-pipeline-survey.jpeg';
import uavPipelineSurvey002 from '../assets/images/uav-pipeline-survey-002.jpeg';
import uavPipelineSurvey003 from '../assets/images/uav-pipeline-survey-003.jpeg';
import uavPipelineSurvey004 from '../assets/images/uav-pipeline-survey-004.jpeg';
import uavCampRecon from '../assets/images/uav-camp-recon.jpeg';
import uavCampRecon002 from '../assets/images/uav-camp-recon-002.jpeg';
import uavCampRecon003 from '../assets/images/uav-camp-recon-003.jpeg';
import uavCampRecon004 from '../assets/images/uav-camp-recon-004.jpeg';
import KP152_001 from '../assets/images/uav-camp-recon-KP152.jpeg';
import KP152_002 from '../assets/images/uav-camp-recon-KP152-002.jpeg';
import KP152_003 from '../assets/images/uav-camp-recon-KP152-003.jpeg';
import KP152_004 from '../assets/images/uav-camp-recon-KP152-004.jpeg';
import profilePic from '../assets/profile.png';
import aboutImage from '../assets/about.jpg';

export const heroData = {
  name: 'Ndubuisi Benedict',
  title: 'Full-Stack & Backend Engineer | UAV Pilot & GIS Analyst',
  description:
    'I build high-performance web applications, scalable backend APIs, and intelligent AI/NLP pipelines. Focused on shipping clean, reliable, and production-ready software.',
  actions: [
    { label: 'Download CV', href: '/legacy/old-site/Profile.pdf', style: 'primary' },
    { label: 'Hire Me', href: 'hire-me', style: 'secondary' },
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
    title: 'Ai agent source code',
    description: 'Includes the complete AI Agent source code, project structure, setup requirements, and everything you need to run and understand the system.',
    language: 'Python',
    priceUSD: 31,
    priceNGN: 42000,
    downloadUrl: '#'
  }
];

export const uavMetrics = {
  totalFlightHours: '6,625+',
  totalDistanceKm: '10,000+',
  totalMissions: '13,250+',
  incidentRate: '0%',
  primaryAircraft: 'DJI Matrice 350 RTK',
  specializations: [
    'Tactical Security & Reconnaissance',
    'Thermal & EO/IR Surveillance',
    'Pipeline Right-of-Way Monitoring',
    'GIS Mapping & Spatial Analytics',
    'Live Telemetry & OBS Feed Integration'
  ]
};

export const uavMissions = [
  {
    title: 'Tactical Reconnaissance & Area Surveillance',
    clientCategory: 'Defense & Security Operations',
    location: 'Plateau State, Nigeria',
    year: '2023',
    aircraft: ['ARSENIO UAV'],
    description: 'Deployed long-range fixed-wing and multirotor UAV systems for aerial perimeter monitoring, threat detection, and real-time situational awareness in high-risk zones.',
    images: [uavDefensePlateau, uavDefensePlateau002, uavDefensePlateau003,],
    tags: ['Counter-Insecurity', 'Tactical Recon', 'EO/IR Thermal', 'Fixed-Wing Flight']
  },
  {
    title: 'Counter-Insecurity Aerial Reconnaissance',
    clientCategory: 'Defense & Security Operations',
    location: 'Niger State, Nigeria',
    year: '2024',
    aircraft: ['DJI M30T', 'DJI M350 RTK', 'Fixed-Wing UAV'],
    description: 'Executed thermal surveillance flights and aerial perimeter mapping to track unauthorized operational activity and deliver live telemetry updates to ground personnel.',
    images: [uavDefenseNiger, uavDefenseNiger002, uavDefenseNiger003,],
    tags: ['Area Monitoring', 'Thermal Intelligence', 'Threat Detection', 'Fixed-Wing']
  },
  {
    title: 'Field Operations & Tactical ISR Deployment',
    clientCategory: 'Defense & Security Operations',
    location: 'Zamfara State, Nigeria',
    year: '2024',
    aircraft: ['XANDER UAV', 'BFLY UAV'],
    description: 'Conducted tactical Intelligence, Surveillance, and Reconnaissance (ISR) missions across extended corridors using payload thermal sensors and real-time flight tracking.',
    images: [uavDefenseZamfara, uavDefenseZamfara002 ],
    tags: ['Tactical ISR', 'Perimeter Patrol', 'Thermal Payload', 'Spatial Mapping']
  },
  {
    title: 'Pipeline Right-of-Way Aerial Surveillance',
    clientCategory: 'Energy & Critical Infrastructure',
    location: 'Kogi State (KP159–KP210 Corridors)',
    year: '2025',
    aircraft: ['DJI M30T', 'DJI M350 RTK', 'BFLY UAV'],
    description: 'Executed daily aerial reconnaissance and thermal inspections across 60+ km of pipeline Right-of-Way (KP151, KP159, KP167, KP184, KP205, KP210) to detect encroachment and structural anomalies.',
    images: [uavPipelineSurvey, uavPipelineSurvey002, uavPipelineSurvey003, uavPipelineSurvey004,],
    tags: ['Right-of-Way', 'Thermal Inspection', 'Infrastructure Security', 'Telemetry Logs']
  },
  {
    title: 'Pipeline Right-of-Way Aerial Surveillance',
    clientCategory: 'Energy & Critical Infrastructure',
    location: 'Kogi State (KP151–KP152 ROW )',
    year: '2026',
    aircraft: ['DJI M30T', 'DJI M350 RTK', 'Fixed-Wing UAV'],
    description: 'Executed daily aerial reconnaissance and thermal inspections across 60+ km of pipeline Right-of-Way (KP151, KP159, KP167, KP184, KP205, KP210) to detect encroachment and structural anomalies.',
    images: [KP152_001, KP152_002, KP152_003, KP152_004 ],
    tags: ['Right-of-Way', 'Thermal Inspection', 'Infrastructure Security', 'Telemetry Logs']
  },
  {
    title: 'Camp Logistics & Perimeter Reconnaissance',
    clientCategory: 'Facility & Operational Security',
    location: 'NNPC Bravo HQ, Kogi State',
    year: '2026',
    aircraft: ['DJI M30T'],
    description: 'Conducted automated aerial patrols for facility perimeter security, asset protection, and live HDMI telemetry streaming into central OBS monitoring consoles.',
    images: [uavCampRecon, uavCampRecon002, uavCampRecon003, uavCampRecon004,],
    tags: ['Perimeter Security', 'OBS Live Stream', 'Facility Oversight', 'Thermal Patrol']
  }
];

export const profileImage = profilePic;