import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const badgeConfig = {
  professional: {
    label: 'Projet professionnel',
    className: 'bg-primary-100 text-primary-700',
  },
  personal: {
    label: 'Projet personnel',
    className: 'bg-secondary-100 text-secondary-700',
  },
};

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, className = '' }, ref) => {
    const { id, title, description, image, type, isCurrent } = project;
    const displayedTechs = project.technologies.slice(0, 3);
    const badge = badgeConfig[type];

    return (
      <div
        ref={ref}
        className={`project-card flex-shrink-0 lg:w-[500px] w-[315px] ${className}`}
      >
        <Link
          to={`/projects/${id}`}
          className="relative group block cursor-pointer focus:outline-none"
        >
          {/* Image */}
          <div className="border-[16px] border-secondary-50 relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="lg:h-[550px] h-[340px] w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Badge type */}
            <div
              className={`
                absolute
                top-3
                left-2
                z-20
                px-3
                py-1
                text-xs
                font-semibold
                rounded-full
                shadow
                ${badge.className}
              `}
            >
              {badge.label}
            </div>

            {/* Badge "Vous êtes ici" */}
            {isCurrent && (
              <div
                className="
                  absolute
                  top-3
                  right-2
                  z-20
                  flex
                  items-center
                  gap-2
                  bg-white/90
                  text-primary-700
                  px-2
                  py-1
                  text-xs
                  font-semibold
                  rounded-full
                  shadow
                "
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-secondary-500" />
                </span>
                Vous êtes ici
              </div>
            )}
          </div>

          {/* Card contenu */}
          <div
            className="
              absolute
              lg:-bottom-8 
              -bottom-12
              left-6
              w-full
              bg-primary-500
              text-white
              lg:p-6
              p-4
              shadow-lg
              transition-all
              duration-300
              group-hover:-translate-y-1
              z-10
            "
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>

            <p className="text-lg text-primary-100 leading-relaxed mb-6 line-clamp-3">
              {description}
            </p>

            <div className="flex gap-3 text-white/80 mb-4">
              {displayedTechs.map((tech) => (
                <span key={tech.name} title={tech.name}>
                  {tech.icon && <tech.icon />}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 border-2 border-white px-4 py-3 text-lg">
              En savoir plus <ArrowRight size={24} />
            </span>
          </div>
        </Link>
      </div>
    );
  }
);

export default ProjectCard;
