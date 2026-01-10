import type { Project, Technology, SocialLink } from '../types/index.ts';
import { FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa6';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
} from 'react-icons/si';
import devImg from '../assets/dev.jpeg';

// Informations personnelles
export const personalInfo = {
  name: 'Sabine EKLO',
  firstName: 'Sabine',
  lastName: 'EKLO',
  title: 'Développeuse Front-end',
  bio: "Je suis une développeuse front-end passionnée, spécialisée dans la création d'applications web belles, réactives et conviviales. Grâce à mon expertise dans les frameworks JavaScript modernes et mon regard attentif à la conception, je donne vie aux idées grâce à un code clair et efficace.",
  image: devImg,
};

// Projets
export const projects: Project[] = [
  {
    id: 'p1qg',
    title: 'Quote Generator',
    description: `Application de génération de citations développée en React.
Elle permet d'afficher des citations aléatoires via une API externe, de les ajouter en favoris et de les partager.
Mise en place d'une navigation entre pages, d'une gestion d'état locale et de la persistance des données via le LocalStorage.
Le projet met l'accent sur une interface responsive, une expérience utilisateur fluide et une architecture de composants réutilisables.`,
    image: '/projects/quote-generator.png',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
    link: 'https://quote-generator-react-omega.vercel.app/',
    github: 'https://github.com/Sabineeklo/quote-generator-react'
  },
  {
    id: 'p2pw',
    title: 'Portfolio',
    description: `Portfolio personnel développé en React afin de présenter mes projets, mon parcours et mes compétences.
Le site a été conçu comme une application front-end à part entière, avec une attention particulière portée à la clarté de l’information, à la performance et à l’expérience utilisateur.
Il évoluera progressivement avec l’ajout de nouveaux projets et de fonctionnalités.`,
    image: '/projects/portfolio.png',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
    github: 'https://github.com/Sabineeklo/Monportofolio',
  },
];

// Technologies
export const technologies: Technology[] = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Figma', icon: SiFigma },
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
];
