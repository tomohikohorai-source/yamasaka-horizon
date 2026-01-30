
import React from 'react';
import { siteContent } from '../siteContent';

interface PortfolioProps {
  onSelect?: (title: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
        <div>
          <span className="text-xs tracking-[0.4em] font-bold text-slate-400 uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-slate-900">実績紹介</h2>
        </div>
        <button className="text-xs font-bold tracking-[0.2em] border-b border-blue-500 pb-2 text-blue-600 hover:text-blue-400 transition-colors uppercase">
          All Works
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {siteContent.portfolio.map((project, index) => (
          <div 
            key={index} 
            onClick={() => onSelect?.(project.title)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-sm mb-6 aspect-[16/9]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-blue-600 uppercase shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="px-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-slate-400">{project.year}</span>
              </div>
              <p className="text-xs text-blue-500 font-bold mb-3 tracking-wider">{project.jpTitle}</p>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
