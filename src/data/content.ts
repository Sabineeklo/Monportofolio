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
  SiJest,
  SiTestinglibrary,
} from 'react-icons/si';
import devImg from '../assets/dev.jpeg';
import { TbApi } from 'react-icons/tb';

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
    id: 'pprbt',
    title: 'Espaces à contenus dédiés - B.tv+',
    description: `Projet réalisé au sein de Bouygues Telecom visant à développer des espaces à contenus dédiés intégrés à l'application B.tv+.
J'ai participé à l'implémentation des interfaces front-end en React et Tailwind CSS, à la connexion des API back-end et à la mise en place d'une modélisation de données permettant une architecture évolutive.
Le projet incluait l'écriture de tests unitaires, l'amélioration de la qualité du code (SonarQube) ainsi que la présentation du travail lors des InnoDays 2025.`,
    image: '/projects/ppro1.png',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Jest', icon: SiJest },
      { name: 'Ract Testing Library', icon: SiTestinglibrary },
      { name: 'API Rest', icon: TbApi },

    ],
    type: 'professional',
  },
  {
    id: 'pprzs',
    title: 'Plateforme de digitalisation des analyses biomédicales',
    description: `Projet professionnel visant la digitalisation complète du processus de gestion et de consultation des analyses biomédicales à travers plusieurs applications web et mobiles.
Le projet comprenait une application web pour les techniciens, des applications mobiles pour les patients et la création de comptes, ainsi qu'une application de support (help desk).
J'ai contribué au développement des interfaces web et mobiles, à l'intégration des API et à des travaux côté back-end, participant à un projet full-stack à fort impact métier.`,
    image: '/projects/ppro2.png',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'React Native', icon: SiTailwindcss },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node js', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'API Rest', icon: TbApi },
    ],
    type: 'professional',
  },
  {
    id: 'pprpt',
    title: 'Plateforme métier - Administration publique',
    description: `Projet professionnel portant sur le développement d'une plateforme interne destinée aux agents des administrations publiques pour le traitement des demandes du service public.
J'ai travaillé sur l'implémentation des interfaces front-end en React et CSS, en tenant compte des contraintes d'ergonomie et d'usage liées à un outil métier utilisé quotidiennement.
Cette expérience m'a permis de renforcer mes compétences en intégration d'interfaces et en structuration de composants dans un environnement professionnel.`,
    image: '/projects/ppro3.png',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
    type: 'professional',
  },

  {
    id: 'ppeqg',
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
    github: 'https://github.com/Sabineeklo/quote-generator-react',
    type: 'personal',
  },
  {
    id: 'ppepw',
    title: 'Portfolio',
    description: `Portfolio personnel développé en React afin de présenter mes projets, mon parcours et mes compétences.
Le site a été conçu comme une application front-end à part entière, avec une attention particulière portée à la clarté de l'information, à la performance et à l'expérience utilisateur.
Il évoluera progressivement avec l'ajout de nouveaux projets et de fonctionnalités.`,
    image: '/projects/portfolio.png',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
    github: 'https://github.com/Sabineeklo/Monportofolio',
    type: 'personal',
    isCurrent: true,

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
