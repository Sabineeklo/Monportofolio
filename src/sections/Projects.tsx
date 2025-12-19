import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';
import bg from '../assets/bg-projects.png';

const Projects = () => {
  return (
    <div className='relative flex justify-center items-center py-16'>
      <div className='absolute inset-0'>
        <img src={bg} alt='Background' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-white/95'></div>
      </div>

      <div className='relative z-10 flex flex-wrap justify-center gap-16 px-6 py-16'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
