import React from 'react';
import { personalInfo } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-2 text-center text-[12px] lg:text-sm">
      <div className="space-y-1">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Disponible pour un CDI.</p>
        <p className="text-primary-300 text-[10px] lg:text-xs">
          Développé avec React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;