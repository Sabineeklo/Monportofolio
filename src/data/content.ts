import type { Project, Technology, SocialLink } from '../types/index.ts';
import { FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiFigma
} from 'react-icons/si'




// Informations personnelles
export const personalInfo = {
  name: "Sabine EKLO",
  firstName: "Sabine",
  lastName: "EKLO",
  title: "Développeuse Front-end",
  bio: "Je suis une développeuse front-end passionnée, spécialisée dans la création d'applications web belles, réactives et conviviales. Grâce à mon expertise dans les frameworks JavaScript modernes et mon regard attentif à la conception, je donne vie aux idées grâce à un code clair et efficace.",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
};

// Projets
export const projects: Project[] = [
  {
    id: "p1",
    title: "Quote Generation",
    description: "A dynamic quote generator that displays random proverbs and inspirational quotes. Features smooth animations and an intuitive interface for discovering wisdom.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/quote-generation",
    github: "https://github.com/example/quote-generation"
  },
  {
    id: "p2",
    title: "Enterprise Dashboard",
    description: "Real-time analytics dashboard for business operations. Handles 10k+ concurrent users with live data visualization and performance monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    id: "p3",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with product catalog, shopping cart, and secure payment integration. Built for scalability and performance.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    technologies: ["React", "MongoDB", "Node.js"],
  },
  {
    id: "p4",
    title: "Quote Generation",
    description: "A dynamic quote generator that displays random proverbs and inspirational quotes. Features smooth animations and an intuitive interface for discovering wisdom.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "p5",
    title: "Enterprise Dashboard",
    description: "Real-time analytics dashboard for business operations. Handles 10k+ concurrent users with live data visualization and performance monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    id: "p6",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with product catalog, shopping cart, and secure payment integration. Built for scalability and performance.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    technologies: ["React", "MongoDB", "Node.js"],
  },
];

// Technologies
export const technologies: Technology[] = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
  { name: "Figma", icon: SiFigma },
];


// Liens sociaux
export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eklo-afi-sabine/',
    icon: FaLinkedinIn,
    external: true,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Sabineeklo',
    icon: FaGithub,
    external: true,
  },
  {
    name: 'Email',
    href: 'mailto:ekloafisabine@gmail.com',
    icon: FaEnvelope,
  },
]