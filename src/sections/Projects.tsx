import { useRef, useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import bg from '../assets/bg-project.png'
import { projects } from '../data/content'

const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const firstCardRef = useRef<HTMLDivElement>(null)
  const cardWidthRef = useRef(0)
  const [progress, setProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Scroll d'une card
  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const width = cardWidthRef.current
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    })
  }

  // Gestion du scroll pour barre et flèches
  const handleScroll = () => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    const maxScroll = scrollWidth - clientWidth

    setProgress((scrollLeft / maxScroll) * 100)
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < maxScroll - 1)
  }

  // Initialisation de la largeur de la première card et écoute du scroll
  useEffect(() => {
    if (firstCardRef.current && sliderRef.current) {
      const slider = sliderRef.current
      const style = getComputedStyle(slider)
      // Récupère le gap réel du flex container
      const gap = parseInt(style.gap) || 0
      cardWidthRef.current = firstCardRef.current.offsetWidth + gap
    }

    const slider = sliderRef.current
    slider?.addEventListener('scroll', handleScroll)
    handleScroll() // initialisation des flèches

    return () => slider?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative py-20 lg:py-32 px-5">
      {/* Background + overlay */}
      <div className="absolute inset-0">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/95" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
        {/* Texte à gauche*/}
        <div className="lg:col-span-1 lg:px-16 px-4 flex flex-col justify-center h-full">
          <h1 className="lg:text-4xl text-3xl font-semibold text-primary-600 mb-6">
            A selection of projects I worked on
          </h1>
          <p className="text-primary-900 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Elementum nunc dapibus ut etiam odio enim risus viverra
            adipiscing. Tristique.
          </p>
        </div>

        {/* Carousel */}
        <div className="lg:col-span-2 relative">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-16 overflow-x-auto scroll-smooth pb-20 lg:pb-32 scrollbar-hide"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                ref={index === 0 ? firstCardRef : undefined}
              />
            ))}
          </div>

          {/* Flèches */}
          <div className="absolute bottom-6 left-0 hidden lg:flex items-center gap-6">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 transition ${
                canScrollLeft
                  ? 'text-primary-500 hover:text-secondary-500'
                  : 'text-neutral-300 cursor-not-allowed'
              }`}
            >
              <ArrowLeft size={36} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 transition ${
                canScrollRight
                  ? 'text-primary-500 hover:text-secondary-500'
                  : 'text-neutral-300 cursor-not-allowed'
              }`}
            >
              <ArrowRight size={36} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="absolute -bottom-4 w-56 h-1 rounded-md bg-white">
            <div
              className="h-full bg-secondary-500 rounded-md transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
