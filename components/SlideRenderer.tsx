
import React from 'react';
import { SlideContent } from '../types';

interface SlideRendererProps {
  slide: SlideContent;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  const renderContent = () => {
    switch (slide.type) {
      case 'hero':
        return (
          <div className="flex flex-col items-center justify-center text-center h-full text-white p-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">{slide.title}</h1>
            <p className="text-xl md:text-2xl font-light mb-12 text-slate-200">{slide.subtitle}</p>
            <div className="space-y-4 max-w-3xl">
              {slide.points?.map((p, i) => (
                <div key={i} className="flex items-center space-x-3 justify-center">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                  <p className="text-lg text-slate-100 italic">{p}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <p className="text-xl font-medium">{slide.author}</p>
              <p className="text-sm uppercase tracking-widest mt-2 opacity-70">{slide.footer}</p>
            </div>
          </div>
        );

      case 'grid':
      case 'list':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center p-8">
            <div className="text-white z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h2>
              <p className="text-lg text-slate-200 mb-8">{slide.description}</p>
              {slide.subtitle && <p className="text-xl font-semibold mb-4 text-indigo-300">{slide.subtitle}</p>}
            </div>
            <div className="grid grid-cols-1 gap-4 z-10">
              {slide.steps?.map((step, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <span className="text-indigo-400 font-bold text-lg block mb-1">{step.num}</span>
                  <p className="text-white text-lg">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="flex flex-col justify-center h-full p-8 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl">{slide.description}</p>
            <div className="overflow-hidden bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
              <table className="w-full text-left">
                <thead className="bg-white/20">
                  <tr>
                    {slide.tableData?.headers.map((h, i) => (
                      <th key={i} className="px-6 py-5 text-sm font-black uppercase tracking-widest text-white border-b border-white/10">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {slide.tableData?.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className="px-6 py-4 text-base text-white/90 font-medium">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'exercise':
        return (
          <div className="flex flex-col justify-center h-full p-8 text-white max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h2>
            <p className="text-xl text-indigo-300 mb-8 font-medium">{slide.subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-100 leading-relaxed">{slide.description}</p>
                {slide.points && (
                  <ul className="space-y-4">
                    {slide.points.map((p, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="mt-2 w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></span>
                        <span className="text-lg">{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="space-y-3">
                {slide.steps?.map((step, i) => (
                  <div key={i} className="bg-indigo-600/40 p-4 rounded-xl border border-indigo-400/30 flex items-center space-x-4">
                    <span className="text-3xl font-bold text-indigo-300">{step.num}</span>
                    <p className="text-base">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {slide.footer && (
              <p className="mt-12 text-center text-xl italic font-light text-slate-300 border-t border-white/10 pt-6">
                {slide.footer}
              </p>
            )}
          </div>
        );

      case 'resources':
        return (
          <div className="flex flex-col justify-center h-full p-8 text-white items-center text-center">
             <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
             <p className="text-xl text-indigo-300 mb-12">{slide.subtitle}</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
               {slide.points?.map((p, i) => (
                 <div key={i} className="bg-slate-900/40 border border-slate-700 p-6 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform">
                   <p className="text-xl font-medium">{p}</p>
                 </div>
               ))}
             </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="flex flex-col items-center justify-center text-center h-full text-white p-8 max-w-4xl mx-auto">
             <h2 className="text-6xl font-bold mb-8 italic">"{slide.title}"</h2>
             <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-slate-100">
               {slide.description}
             </p>
             <div className="w-24 h-1 bg-indigo-500 mb-12"></div>
             <p className="text-xl font-semibold text-indigo-300 uppercase tracking-widest leading-loose">
               {slide.footer}
             </p>
          </div>
        );

      default:
        return <div>Contenido no disponible</div>;
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear scale-105"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className={`absolute inset-0 ${slide.overlayColor || 'bg-slate-950/70'}`} />
      
      {/* Content Layer */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default SlideRenderer;
