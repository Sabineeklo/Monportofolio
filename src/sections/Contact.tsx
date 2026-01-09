import { useRef, useState } from 'react';
import Button from '../components/Button';
import { socialLinks } from '../data/content';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message envoyé avec succès ! Je vous réponds au plus vite.")
          setSending(false);
          formRef.current?.reset();
        },
        () => {
          toast.error("Échec de l'envoi du message. Veuillez réessayer.")
          setSending(false);
        }
      );
  };

  return (
    <section id='contact' className='md:py-40 py-20'>
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-start'>
        {/* Left */}
        <div className='md:text-left text-center'>
          <h2 className='text-4xl font-bold text-primary-500 mb-6 '>
            Travaillons ensemble
          </h2>

          <p className='text-primary-900 md:max-w-[300px] max-w-sm md:mb-8 mb-4'>
            Je serais ravie d'échanger avec vous sur vos projets. Je suis
            actuellement en recherche d'un{' '}
            <span className='text-primary-500 font-semibold'>
              CDI, disponible immédiatement
            </span>{' '}
            et mobile sur toute la France pour démarrer une nouvelle aventure.
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
                className='text-secondary-600 transition-transform duration-200 hover:scale-110'
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className='space-y-10'>
          <div className='relative'>
            <input type='text' name='name' id='name' placeholder=' ' className='peer w-full bg-transparent border-b-2 border-primary-200 focus:border-secondary-300 outline-none py-2' required />
            <label htmlFor='name' className='absolute left-0 top-2 text-lg text-primary-900 transition-opacity duration-200 peer-focus:opacity-0 peer-[&:not(:placeholder-shown)]:opacity-0'>
              Nom
            </label>
          </div>

          <div className='relative'>
            <input type='email' name='email' id='email' placeholder=' ' aria-required className='peer w-full bg-transparent border-b-2 border-primary-200 focus:border-secondary-300 outline-none py-2' required />
            <label htmlFor='email' className='absolute left-0 top-2 text-lg text-primary-900 transition-opacity duration-200 peer-focus:opacity-0 peer-[&:not(:placeholder-shown)]:opacity-0'>
              Email
            </label>
          </div>

          <div className='relative'>
            <textarea name='message' id='message' rows={3} placeholder=' ' aria-required className='peer w-full bg-transparent border-b-2 border-primary-200 focus:border-secondary-300 outline-none resize-none py-2' required />
            <label htmlFor='message' className='absolute left-0 top-2 text-lg text-primary-900 transition-opacity duration-200 peer-focus:opacity-0 peer-[&:not(:placeholder-shown)]:opacity-0'>
              Votre message
            </label>
          </div>

          <Button type='submit' variant='filled' fullOnMobile disabled={sending}>
            {sending ? 'Envoi...' : 'Envoyer'}
          </Button>

          
        </form>
      </div>
    </section>
  );
};

export default Contact;
