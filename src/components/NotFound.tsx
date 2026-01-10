import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (targetId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 150);
    } else {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
        
      <div className="max-w-lg text-center">
        <p className="text-7xl font-extrabold text-primary-500 mb-6">404</p>

        <h2 className="text-2xl md:text-3xl font-semibold text-primary-900 mb-4">
          Projet introuvable
        </h2>

        <p className="text-primary-600 text-lg mb-8">
          Le projet que vous cherchez n’existe pas ou a été déplacé.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigateToSection('projects')}
            className="px-6 py-3 bg-primary-500 text-white hover:bg-secondary-600 transition"
          >
            Voir les projets
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-primary-500 text-primary-500 hover:border-secondary-600 hover:text-secondary-600 transition"
          >
            Retour
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
