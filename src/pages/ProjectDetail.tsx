import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';
import ProgressCircle from '../components/ProgressCircle';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((project) => project.id === id);

  const project = projects[currentIndex];

  if (!project) {
    return (
      <div className='pt-40 text-center text-2xl text-primary-500'>
        Projet introuvable
      </div>
    );
  }

  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <main>
      {/* ================= HERO IMAGE ================= */}
      <section className='relative'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full max-h-[350px] object-cover'
        />

        {/* ===== Banner ===== */}
        <div
          className='
            absolute
            left-1/2
            -translate-x-1/2
            -bottom-12
            w-[90%] md:w-[70%]
            bg-primary-500
           text-white
            px-6 md:px-10
            py-2 md:py-5
            flex
            flex-col-reverse
            md:flex-row
            gap-2 md:gap-0
            items-center
            justify-between
            shadow-xl
          '
        >
          <h1 className='text-xl md:text-3xl font-semibold text-secondary-300'>
            {project.title}
          </h1>

          <div className='flex items-center gap-40 md:gap-6 text-sm py-2'>
            <ProgressCircle
              current={currentIndex + 1}
              total={projects.length}
            />

            <div className='flex gap-4'>
              <button
                onClick={() => navigate(`/projects/${prevProject.id}`)}
                disabled={!prevProject}
                className={`${
                  prevProject
                    ? 'text-white hover:text-secondary-500'
                    : 'text-white/50 cursor-not-allowed'
                }`}
                aria-label='Projet précédent'
              >
                <ArrowLeft size={24} />
              </button>

              <button
                onClick={() => navigate(`/projects/${nextProject.id}`)}
                disabled={!nextProject}
                className={`${
                  nextProject
                    ? 'text-white hover:text-secondary-500'
                    : 'text-white/50 cursor-not-allowed'
                }`}
                aria-label='Projet suivant'
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className='max-w-4xl mx-auto px-6 pt-24 space-y-12'>
        {/* Description */}
        <div>
          <h2 className='text-primary-700 text-xl md:text-3xl font-bold mb-5'>
            Description
          </h2>

          <p className='text-primary-900 text-lg md:text-xl leading-relaxed'>
            {project.description}
          </p>
        </div>

        {/* Stack */}
        {project.technologies?.length > 0 && (
          <div>
            <h3 className='text-primary-700 text-lg md:text-2xl font-bold mb-4'>
              Technologies utilisées
            </h3>

            <ul className='flex flex-wrap gap-3'>
              {project.technologies.map((tech) => (
                <li
                  key={tech.name}
                  className='
                    px-4
                    py-2
                    border
                    border-primary-500
                    text-primary-500
                    text-sm
                    font-medium
                    rounded-full
                    hover:bg-secondary-600
                    hover:text-white
                    hover:border-secondary-600
                    transition
                  '
                >
                  {tech.icon && <tech.icon className='inline-block mr-2' />}
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        {(project.link || project.github) && (
          <div className='flex flex-wrap gap-5 mx-auto'>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='
                  inline-flex
                  items-center
                  gap-2
                  w-full sm:w-auto
                  justify-center
                  px-6
                  py-3
                  bg-primary-500
                  text-white
                  font-medium
                  hover:bg-secondary-600
                  transition
                '
              >
                <ExternalLink size={18} />
                Voir le projet
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  w-full sm:w-auto
                  justify-center
                  border
                  border-primary-500
                  text-primary-500
                  font-medium
                  hover:border-secondary-500
                  hover:text-secondary-500
                  transition
                '
              >
                <FiGithub size={18} />
                Code source
              </a>
            )}
          </div>
        )}
      </section>

      {/* ================= OTHER PROJECTS ================= */}
      <section className='max-w-6xl mx-auto px-7 md:py-32 py-20'>
        <h2 className='text-xl md:text-3xl text-primary-900 font-semibold mb-12'>
          Autres projets
        </h2>

        <div className='grid mx-7 md:mx-0 gap-16 sm:grid-cols-2'>
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className='!w-full pb-12'
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
