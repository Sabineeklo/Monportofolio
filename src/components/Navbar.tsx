import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Briefcase, FileText, Phone } from 'lucide-react';
import { personalInfo } from '../data/content';

interface NavbarProps {
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToProjects, scrollToContact }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectsClick = () => {
    if (location.pathname !== '/') {
      navigate('/'); // aller à la page principale
      setTimeout(scrollToProjects, 100); // attendre le rendu de la page
    } else {
      scrollToProjects();
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 100);
    } else {
      scrollToContact();
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-secondary-50 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-500">{personalInfo.name}</h1>
        <div className="flex gap-8">
          <button
            onClick={handleProjectsClick}
            className="flex items-center gap-2 text-primary-700 hover:text-secondary-600 transition"
          >
            <Briefcase size={20} />
            <span>Projects</span>
          </button>

          <Link
            to="/cv"
            className="flex items-center gap-2 text-primary-700 hover:text-secondary-600 transition"
          >
            <FileText size={20} />
            <span>CV</span>
          </Link>

          <button
            onClick={handleContactClick}
            className="flex items-center gap-2 text-primary-700 hover:text-secondary-600 transition"
          >
            <Phone size={20} />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
