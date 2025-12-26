import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Briefcase, FileText, Phone, X } from 'lucide-react';
import { RiMenu3Fill } from 'react-icons/ri';
import { personalInfo } from '../data/content';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  /* ================= Disable scroll when menu open ================= */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* ================= Scroll logic ================= */
  const handleScroll = (targetId: 'projects' | 'contact') => {
    setOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-secondary-50 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-500">
            {personalInfo.name}
          </h1>

          {/* Desktop */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => handleScroll('projects')}
              className="flex items-center gap-2 text-primary-700 hover:text-secondary-600 transition"
            >
              <Briefcase size={20} />
              Projets
            </button>

            {/* CV PDF */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-700 hover:text-secondary-600 transition"
            >
              <FileText size={20} />
              CV
            </a>

            <button
              onClick={() => handleScroll('contact')}
              className="flex items-center gap-2 text-primary-700 hover:text-secondary-600 transition"
            >
              <Phone size={20} />
              Contact
            </button>
          </div>

          {/* Burger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-primary-700"
            aria-label="Ouvrir le menu"
          >
            <RiMenu3Fill size={28} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-50
          bg-primary-700/95 backdrop-blur-md
          transition-all duration-300
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto px-6 py-3 flex items-center justify-between bg-secondary-50">
          <span className="text-2xl font-bold text-primary-500">
            {personalInfo.name}
          </span>

          <button
            onClick={() => setOpen(false)}
            className="text-primary-700"
            aria-label="Fermer le menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile menu buttons */}
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-col gap-6 w-full max-w-sm px-6">
            <button
              onClick={() => handleScroll('projects')}
              className="w-full border border-white/70 py-4 flex items-center justify-center gap-3 text-white text-lg hover:bg-white/10 transition"
            >
              <Briefcase size={22} />
              Projets
            </button>

            {/* CV PDF */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full border border-white/70 py-4 flex items-center justify-center gap-3 text-white text-lg hover:bg-white/10 transition"
            >
              <FileText size={22} />
              CV
            </a>

            <button
              onClick={() => handleScroll('contact')}
              className="w-full border border-white/70 py-4 flex items-center justify-center gap-3 text-white text-lg hover:bg-white/10 transition"
            >
              <Phone size={22} />
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;