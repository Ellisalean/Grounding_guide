
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import SlideRenderer from './components/SlideRenderer';

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="h-screen w-screen bg-slate-950 overflow-hidden print:overflow-visible print:h-auto relative select-none">
      {/* Header Info (No Print) */}
      <div className="absolute top-6 left-8 z-50 no-print flex items-center space-x-4">
        <div className="bg-indigo-600 px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">
          Pro Guide
        </div>
        <div className="text-white/60 text-sm font-medium">
          Grounding para Trauma
        </div>
      </div>

      {/* Download Button (No Print) */}
      <button 
        onClick={handleDownload}
        className="absolute top-6 right-8 z-50 no-print bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full border border-white/20 transition-all flex items-center space-x-2 font-medium group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Descargar PDF</span>
      </button>

      {/* Main Slides Content - Screen Only */}
      <div className="relative w-full h-full no-print">
        <div 
          className="flex h-full slide-transition" 
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div key={slide.id} className="min-w-full h-full">
              <SlideRenderer slide={slide} />
            </div>
          ))}
        </div>
      </div>

      {/* Print-Only Layout - Optimized for PDF Generation */}
      <div className="hidden print:block">
        {SLIDES.map((slide) => (
          <div key={`print-${slide.id}`} className="print-page">
             <SlideRenderer slide={slide} />
          </div>
        ))}
      </div>

      {/* Navigation Controls (No Print) */}
      <div className="absolute bottom-10 left-0 right-0 z-50 flex justify-between items-center px-12 no-print">
        <div className="flex space-x-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all"
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex space-x-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${activeSlide === idx ? 'w-10 bg-indigo-500' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-white/40 font-mono text-sm tracking-widest">
          {String(activeSlide + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default App;
