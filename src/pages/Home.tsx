import React, { forwardRef } from 'react';
import Button from '../components/Button';
// import ProjectsSection from './ProjectsSection';
// import ContactSection from './ContactSection';
import {ArrowRight } from 'lucide-react';

interface HomeProps {
  projectsRef: React.Ref<HTMLDivElement>;
  contactRef: React.Ref<HTMLDivElement>;
}

const Home = forwardRef<HTMLDivElement, HomeProps>(
  ({ projectsRef, contactRef }) => {
    return (
      <div className='bg-gradient-to-b from-[#E6F7FF] to-[#FFFFFF] min-h-screen flex justify-center items-center'>
        <div>
          <Button variant="nofill">Read more</Button>
          <Button variant="nofill" size='large' border='primary' icon={<ArrowRight size={20}/>} iconPosition='right'>Read more</Button>
          <Button fullWidth disabled>Read more</Button>
          <Button icon={<ArrowRight className="w-5 h-5" />} iconPosition='right'>Read more</Button>
        </div>

        <div ref={projectsRef}>{/* <ProjectsSection /> */}</div>
        <div ref={contactRef}>{/* <ContactSection /> */}</div>
      </div>
    );
  }
);

export default Home;
