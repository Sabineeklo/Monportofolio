import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Technologies from "../sections/Technologies";

interface HomeProps {
  showAnimations: boolean;
}

const Home = ({ showAnimations }: HomeProps) => {
  return (
    <div>
      <Hero isVisible={showAnimations} />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;