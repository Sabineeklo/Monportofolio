import Button from '../components/Button';
import { socialLinks } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className='lg:py-40 py-20'>
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start'>
        {/* Left */}
        <div className='lg:text-left text-center'>
          <h2 className='text-4xl font-bold text-primary-500 mb-6 '>
            Let’s chat
          </h2>

          <p className='text-primary-900 lg:max-w-[250px] max-w-sm lg:mb-8 mb-4'>
            I will be happy to get in touch, feel free to reach out.
          </p>

          {/* Social icons */}
          <div className='flex gap-6 lg:justify-start justify-center'>
            {socialLinks.map(({ name, href, icon: Icon, external }) => (
              <a
                key={name}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={name}
                className='
            text-secondary-600
            transition-transform duration-200
            hover:scale-110
          '
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <form className='space-y-10'>
          <div className='relative'>
            <input
              type='text'
              id='name'
              placeholder=' '
              className='
      peer w-full bg-transparent
      border-b-2  border-primary-200
      focus:border-secondary-300
      outline-none py-2
    '
            />

            <label
              htmlFor='name'
              className='
      absolute left-0 top-2
      text-lg text-primary-900
      transition-opacity duration-200
      peer-focus:opacity-0
      peer-[&:not(:placeholder-shown)]:opacity-0
    '
            >
              Name
            </label>
          </div>

          <div className='relative'>
            <input
              type='email'
              id='email'
              placeholder=' '
              className='
      peer w-full bg-transparent
      border-b-2 border-primary-200
      focus:border-secondary-300
      outline-none py-2
    '
            />

            <label
              htmlFor='email'
              className='
      absolute left-0 top-2
      text-lg text-primary-900
      transition-opacity duration-200
      peer-focus:opacity-0
      peer-[&:not(:placeholder-shown)]:opacity-0
    '
            >
              Email
            </label>
          </div>

          <div className='relative'>
            <textarea
              id='message'
              rows={3}
              placeholder=' '
              className='
      peer w-full bg-transparent
      border-b-2 border-primary-200
      focus:border-secondary-300
      outline-none resize-none py-2
    '
            />

            <label
              htmlFor='message'
              className='
      absolute left-0 top-2
      text-lg text-primary-900
      transition-opacity duration-200
      peer-focus:opacity-0
      peer-[&:not(:placeholder-shown)]:opacity-0
    '
            >
              Your message
            </label>
          </div>

          <Button variant='filled' fullOnMobile>Get in touch</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
