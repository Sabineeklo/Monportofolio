import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '../assets/heroImg.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (id: 'projects' | 'contact') => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative overflow-hidden py-20 pt-40 md:py-24 bg-gradient-to-b from-[#E6F7FF] to-[#FFFFFF]'>
      <div className='relative z-10 max-w-6xl mx-auto px-6'>
        <div className='flex justify-center items-center'>
          {/* Image wrapper = référence principale */}
          <div className='relative md:block flex flex-col justify-center items-center'>
            <img
              src={heroImage}
              alt='Hero'
              className='w-[380px] sm:w-[420px] md:w-[480px] lg:w-[590px] object-cover'
            />
            {/* ================= TOP CARD ================= */}
            <div
              className='
                hidden md:block
                absolute -left-1/2 top-0 -translate-y-1/2
                border-4 border-white
                p-7 w-[380px] h-[460px] -z-10
              '
            />

            {/* ================= BOTTOM CARD ================= */}
            <div
              className='
                  hidden md:block
                  absolute -right-1/2 -bottom-[98%] -translate-y-1/2
                  border-4 border-secondary-50
                  p-7 w-[380px] h-[600px] -z-10
              '
            />

            {/* ================= LEFT CARD ================= */}
            <div
              className='
                relative
                md:absolute -top-16 md:-left-1/3 md:top-2/3 md:-translate-y-1/2
                bg-primary-500 text-white p-3 md:p-7 max-w-[300px] md:max-w-[400px] shadow-lg
                transition-all duration-300
                md:hover:-translate-y-[60%] md:hover:shadow-xl
              '
            >
              {/* Décor */}
              <span
                className='
                  absolute
                  -top-4 right-3
                  md:top-auto md:-bottom-6 md:-right-8
                  w-[40px] md:w-[75px]
                  h-[38px] md:h-[70px]
                  border-8 md:border-[14px]
                  border-white
                  backdrop-blur-lg
                '
              />

              <h2 className='text-2xl md:text-5xl font-medium mb-2'>Hi</h2>
              <p className='text-base md:text-xl text-primary-100 leading-tight mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum nunc dapibus ut etiam odio enim risus viverra.
              </p>

              <Link to='/about'>
                <Button
                  variant='nofill'
                  className='text-secondary-500 hover:bg-transparent'
                  icon={<ArrowRight size={20} />}
                  iconPosition='right'
                >
                  Read more
                </Button>
              </Link>
            </div>

            {/* ================= RIGHT CARD ================= */}
            <div
              className='
                absolute
                left-1/2 -translate-x-1/2 -top-14
                md:left-auto md:-translate-x-0 md:-right-1/3 md:top-[18%]
                bg-white/90 p-3 px-10 md:p-7 md:shadow-md
                transition-all duration-300
                md:hover:-translate-y-3 md:hover:shadow-xl
              '
            >
              {/* Décor */}
              <span className='absolute -top-5 left-4 md:-top-[50px] md:-left-8 w-[40px] md:w-[75px] h-[38px] md:h-[70px] border-8 md:border-[14px] border-white backdrop-blur-xl' />

              <p className='text-[45px] md:text-6xl font-bold text-primary-500 leading-tight text-center md:text-left'>
                Frontend
                <br />
                <span className='font-medium'>Developer</span>
              </p>
            </div>
          </div>
        </div>

        <div className='-mt-10 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-[300px] mx-auto'>
          <Button
            variant='filled'
            fullOnMobile
            onClick={() => scrollToSection('projects')}
          >
            See projects
          </Button>

          <Button
            variant='nofill'
            border='primary'
            fullOnMobile
            onClick={() => scrollToSection('contact')}
          >
            Contact me
          </Button>
        </div>

        {/* Scroll down */}
        <div className='mt-12 hidden md:flex justify-center'>
          <button
            onClick={() => scrollToSection('projects')}
            className='
              text-sm font-semibold text-primary-600
              flex items-center gap-2
              hover:text-secondary-600
              cursor-pointer  
              transition-all duration-300
            '
          >
            Scroll down <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
