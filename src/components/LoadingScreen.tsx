import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/content';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simule le chargement progressif
    const duration = 2500; // 2.5 secondes
    const interval = 20; // Update toutes les 20ms
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        
        // Attendre un peu avant de dire que c'est fini
        setTimeout(() => {
          onLoadingComplete();
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-[#E6F7FF] to-[#FFFFFF] flex flex-col items-center justify-center">
      {/* Nom */}
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-primary-500">
          {personalInfo.name}
        </h1>
      </div>

      {/* Barre de progression */}
      <div className="w-64 md:w-96">
        <div className="h-1 bg-primary-100 overflow-hidden">
          {/* Barre qui se remplit */}
          <div 
            className="h-full bg-primary-500 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Pourcentage */}
        <p className="text-center text-primary-400 text-sm mt-3">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;