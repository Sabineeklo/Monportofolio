import heroImage from '../assets/heroImg.png';
import { personalInfo } from '../data/content';

const About = () => {
  return (
    <div className='w-full h-full flex justify-center py-20 gap-16'>
      <div className='flex-1 text-primary-900 font-medium text-xl max-w-lg px-6 space-y-4'>
        <span>Hi,</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nullam
          enim justo tincidunt purus odio posuere ut. In leo dictum nunc tellus.
          Mollis mi, turpis aenean tincidunt ut diam quam. Ullamcorper felis
          elit phasellus at.
        </p>
           <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nullam
          enim justo tincidunt purus odio posuere ut. In leo dictum nunc tellus.
          Mollis mi, turpis aenean tincidunt ut diam quam. Ullamcorper felis
          elit phasellus at.
        </p>
           <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nullam
          enim justo tincidunt purus odio posuere ut. In leo dictum nunc tellus.
          Mollis mi, turpis aenean tincidunt ut diam quam. Ullamcorper felis
          elit phasellus at.
        </p>
           <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nullam
          enim justo tincidunt purus odio posuere ut. In leo dictum nunc tellus.
          Mollis mi, turpis aenean tincidunt ut diam quam. Ullamcorper felis
          elit phasellus at.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img className='max-w-[500px] object-cover' src={heroImage} alt="About image" />
        <h2 className='text-neutral-300 font-semibold text-3xl'><span className='text-primary-900'>{personalInfo.name}, </span>{personalInfo.title}</h2>
      </div>
    </div>
  );
};

export default About;
