import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
// import CV from './pages/CV';

const App = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Router>
      <Navbar scrollToProjects={scrollToProjects} scrollToContact={scrollToContact} />
      <Routes>
        <Route path="/" element={<Home projectsRef={projectsRef} contactRef={contactRef} />} />
        {/* <Route path="/cv" element={<CV />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
