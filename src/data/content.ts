import type { Project, Technology, SocialLink } from '../types/index.ts';
import { FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa6";
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
  title: "Front end Developer",
  bio: "I'm a passionate front-end developer specializing in creating beautiful, responsive, and user-friendly web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through clean and efficient code.",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
};

// Projets
export const projects: Project[] = [
  {
    id: 1,
    title: "Quote Generation",
    description: "A dynamic quote generator that displays random proverbs and inspirational quotes. Features smooth animations and an intuitive interface for discovering wisdom.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Enterprise Dashboard",
    description: "Real-time analytics dashboard for business operations. Handles 10k+ concurrent users with live data visualization and performance monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with product catalog, shopping cart, and secure payment integration. Built for scalability and performance.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    technologies: ["React", "MongoDB", "Node.js"],
  },
  {
    id: 4,
    title: "Quote Generation",
    description: "A dynamic quote generator that displays random proverbs and inspirational quotes. Features smooth animations and an intuitive interface for discovering wisdom.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Enterprise Dashboard",
    description: "Real-time analytics dashboard for business operations. Handles 10k+ concurrent users with live data visualization and performance monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 6,
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
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "Email", url: "mailto:sabine@example.com", icon: "mail" },
  { name: "Phone", url: "tel:+33123456789", icon: "phone" },
];