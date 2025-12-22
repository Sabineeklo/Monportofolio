import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, className = '' }, ref) => {
    const { id, title, description, image } = project;

    return (
      <div
        ref={ref}
        className={`project-card flex-shrink-0 lg:w-[500px] w-[300px] ${className}`}
      >
        <Link
          to={`/projects/${id}`}
          className="relative group block cursor-pointer focus:outline-none"
        >
          {/* Image avec bordure */}
          <div className="border-[16px] border-secondary-50 relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="lg:h-[550px] h-[340px] w-full object-cover"
            />

            {/* Overlay blanc semi-transparent */}
            <div className="absolute inset-0 bg-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          {/* Card superposée */}
          <div
            className="
              absolute
              lg:-bottom-8 
              -bottom-12
              lg:mt-2
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

            {/* Description tronquée à 3 lignes */}
            <p className="text-lg text-primary-100 leading-relaxed mb-6 line-clamp-4">
              {description}
            </p>

            {/* bouton */}
            <span
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                border-2
                border-white
                px-4
                py-3
                text-lg
                transition-all
                duration-300
              "
            >
              Read more <ArrowRight size={24} />
            </span>
          </div>
        </Link>
      </div>
    );
  }
);

export default ProjectCard;
