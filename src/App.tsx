import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import MainLayout from './layouts/MainLayout';
import NoFooterLayout from './layouts/NoFooterLayout';
import LoadingScreen from './components/LoadingScreen';
import NotFound from './components/NotFound';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {    
    // Fade out du loading
    setIsLoading(false);
    
    // Après le fade out, montrer le contenu avec animations
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <BrowserRouter>
      {/* Loading Screen */}
      {isLoading && (
        <div 
          className={`
            fixed inset-0 z-[100]
            transition-opacity duration-500
            ${!isLoading ? 'opacity-0' : 'opacity-100'}
          `}
        >
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </div>
      )}

      {/* Main Content */}
      <div 
        className={`
          transition-opacity duration-500
          ${showContent ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home showAnimations={showContent} />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Route>

          <Route element={<NoFooterLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;