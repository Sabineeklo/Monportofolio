import type { IconType } from 'react-icons'

export type ProjectType = 'professional' | 'personal';
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  link?: string;
  github?: string;
  type: ProjectType;
  isCurrent?: boolean;
}

export interface Technology {
  name: string;
  icon: IconType;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string
  href: string
  icon: IconType
  external?: boolean
}