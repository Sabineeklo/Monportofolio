import bg from '../assets/bg-technos.png';
import { technologies } from '../data/content';

const Technologies = () => {
  return (
    <section className='relative py-32 text-center text-white'>
      {/* Background + overlay */}
      <div className='absolute inset-0'>
        <img
          src={bg}
          alt='Arrière-plan technologies'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-primary-500/95' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-5xl mx-auto px-6'>
        {/* Title */}
        <h2 className='lg:text-4xl text-3xl md:text-4xl font-bold mb-5'>
          Technologies que j'utilise
        </h2>

        <p className='text-primary-50 max-w-lg mx-auto mb-16 md:px-12'>
          Un ensemble de technologies modernes pour créer des applications
          performantes, évolutives et centrées sur l'expérience utilisateur.
        </p>

        {/* Icons */}
        <div className='flex justify-center gap-12 md:gap-16 flex-wrap'>
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className='relative group md:w-32 h-20 flex items-center justify-center'
            >
              {/* Icône */}
              <Icon
                size={52}
                className='
        text-secondary-500
        transition-opacity duration-300
        group-hover:opacity-30
      '
              />

              {/* Label hover */}
              <span
                className='
        absolute
        md:text-xl font-semibold
        text-secondary-100
        opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
        whitespace-nowrap
      '
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
