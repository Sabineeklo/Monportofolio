import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { id, title, description, image } = project

  return (
<Link
  to={`/projects/${id}`}
  className="relative max-w-md group block cursor-pointer focus:outline-none"
>
  {/* Image avec bordure */}
  <div className="border-[16px] border-secondary-50 relative overflow-hidden">
    <img
      src={image}
      alt={title}
      className="h-[550px] w-full object-cover"
    />

    {/* Overlay blanc semi-transparent */}
    <div className="absolute inset-0 bg-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  </div>

  {/* Card superposée (même largeur que l'image, mais décalée) */}
  <div
    className="
      absolute
      -bottom-8         
      mt-2             
      left-6      
      w-full           
      bg-primary-500
      text-white
      p-6
      shadow-lg
      transition-all
      duration-300
      group-hover:-translate-y-1
      z-10
    "
  >
    <h3 className="text-xl font-semibold mb-3">{title}</h3>

    <p className="text-lg text-primary-100 leading-relaxed mb-6">
      {description}
    </p>

    {/* Faux bouton (visuel uniquement) */}
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

  )
}

export default ProjectCard
