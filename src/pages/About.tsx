import heroImage from '../assets/heroImg.png';
import { personalInfo } from '../data/content';

const About = () => {
  return (
    <section className='w-full pt-24 pb-20'>
      <div
        className='
          max-w-6xl mx-auto px-6
          md:px-8
          flex flex-col-reverse lg:flex-row
          gap-16
          items-center
        '
      >
        <div className='flex-1 text-primary-900 text-xl leading-[1.9] max-w-lg space-y-6'>
          <span className='block text-2xl font-semibold text-primary-600'>Hi 👋</span>

          <p className='font-medium text-lg'>
            Je suis Sabine, développeuse front-end passionnée par la création 
            d'interfaces modernes et accessibles.
          </p>

          <p className='text-lg'>
            <span className='italic text-primary-600 font-semibold'>Ce que j'aime dans le front-end ?</span><br /> 
            L'impact direct sur l'utilisateur. Chaque bouton, chaque interface que 
            je code, des milliers de personnes vont l'utiliser au quotidien. Cette 
            connexion entre mon code et l'usage réel donne du sens à mon travail.
          </p>

          <p className='text-lg'>
            Curieuse et rigoureuse, j'accorde une grande importance aux 
            <span className='font-semibold text-primary-600'> détails</span>, à
            la <span className='font-semibold text-primary-600'>performance</span> et à
            la <span className='font-semibold text-primary-600'>collaboration</span> avec 
            les équipes design et produit.
          </p>

          <p className='font-semibold text-lg pt-2 text-primary-600'>
            Aujourd'hui, je cherche à travailler sur des projets à fort impact, 
            où chaque interaction compte.
          </p>
        </div>

        <div className='flex flex-col items-center gap-4 md:pl-14 pt-3'>
          <img
            src={heroImage}
            alt='About'
            className='w-[380px] sm:w-[380px] md:w-[480px] object-cover rounded-lg shadow-xl'
          />

          <h2 className='text-2xl font-semibold text-neutral-400 text-left md:text-center'>
            <span className='text-primary-900'>{personalInfo.name}, </span>
            {personalInfo.title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;