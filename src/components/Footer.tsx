import React from 'react';
import { personalInfo } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-4 text-center text-[12px] lg:text-sm">
      <p>  © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;