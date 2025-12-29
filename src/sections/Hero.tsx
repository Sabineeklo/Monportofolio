import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '../assets/heroImg.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  isVisible: boolean;
}

const Hero = ({ isVisible }: HeroProps) => {
  const scrollToSection = (id: 'projects' | 'contact') => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative overflow-hidden py-20 pt-40 md:py-24 bg-gradient-to-b from-[#E6F7FF] to-[#FFFFFF]'>
      <div className='relative z-10 max-w-6xl mx-auto px-6'>
        <div className='flex justify-center items-center'>
          {/* IMAGE WRAPPER */}
          <div className='relative md:block flex flex-col justify-center items-center'>
            
            {/* ================= IMAGE ================= */}
            <motion.img
              src={heroImage}
              alt='Sabine - Développeuse Front-end'
              className='w-[380px] sm:w-[420px] md:w-[480px] lg:w-[590px] object-cover'
              initial={{ opacity: 0, x: -80 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
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
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <div
                className='
                  relative
                  md:absolute -top-16 md:-left-1/3 md:top-2/3 md:-translate-y-1/2
                  bg-primary-500 text-white p-3 md:p-7
                  max-w-[300px] md:max-w-[400px]
                  shadow-lg transition-all duration-300
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

                <h2 className='text-2xl md:text-5xl font-medium mb-2'>Hi,</h2>
                <p className='text-base md:text-xl text-primary-100 leading-tight mb-4'>
                  Développeuse front-end qui aime créer des interfaces où chaque
                  interaction compte.
                </p>

                <Link to='/about'>
                  <Button
                    variant='nofill'
                    className='text-secondary-500 hover:border-secondary-500'
                    icon={<ArrowRight size={20} />}
                    iconPosition='right'
                  >
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* ================= RIGHT CARD ================= */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <div
                className='
                  absolute
                  left-1/2 -translate-x-1/2 -top-14
                  md:left-auto md:-translate-x-0 md:-right-1/3 md:top-[18%]
                  bg-white/90 p-3 px-8 md:p-7 md:shadow-md
                  transition-all duration-300
                  md:hover:-translate-y-3 md:hover:shadow-xl
                '
              >
                {/* Décor */}
                <span className='absolute -top-5 left-4 md:-top-[50px] md:-left-8 w-[40px] md:w-[75px] h-[38px] md:h-[70px] border-8 md:border-[14px] border-white backdrop-blur-xl' />

                <p className='text-[40px] md:text-5xl font-bold text-primary-500 leading-tight text-center md:text-left'>
                  Développeuse
                  <br />
                  <span className='font-medium'>Front-end</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <motion.div
          className='-mt-10 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 max-w-[300px] mx-auto'
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button variant='filled' fullOnMobile onClick={() => scrollToSection('projects')}>
            Mes projets
          </Button>

          <Button
            variant='nofill'
            border='primary'
            fullOnMobile
            onClick={() => scrollToSection('contact')}
          >
            Me contacter
          </Button>
        </motion.div>

        {/* ================= SCROLL DOWN ================= */}
        <motion.div
          className='mt-12 hidden md:flex justify-center'
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
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
            Défiler vers le bas <ChevronDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
