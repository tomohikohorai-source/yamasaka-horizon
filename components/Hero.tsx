
import React from 'react';
import { siteContent } from '../siteContent';

export const Hero: React.FC = () => {
  const { hero } = siteContent;
  
  return (
    <div className="relative h-[72vh] md:h-[85vh] flex items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <img 
          src={hero.image} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] tracking-[0.3em] font-bold mb-6 rounded-full border border-blue-100">
            {hero.tag}
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 leading-[1.3] mb-8 tracking-tighter">
            {hero.titleLine1}<br />
            <span className="flex items-center flex-wrap">
              <span className="inline-block py-2 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 italic drop-shadow-sm">{hero.titleAccent}</span>
              <span className="inline-block whitespace-nowrap">{hero.titleLine2}</span>
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-light whitespace-pre-line">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#services" 
              className="px-10 py-4 bg-slate-900 text-white text-xs font-bold tracking-[0.2em] hover:bg-blue-600 transition-all text-center rounded-sm shadow-xl shadow-slate-900/10"
            >
              SERVICES
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 border border-slate-200 text-slate-900 text-xs font-bold tracking-[0.2em] hover:border-slate-900 transition-all text-center rounded-sm"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="flex items-center space-x-6">
          <div className="h-[1px] w-24 bg-slate-200"></div>
          <span className="text-[10px] tracking-[0.4em] font-medium text-slate-300 rotate-90 origin-right">
            FAN CENTRIC
          </span>
        </div>
      </div>
    </div>
  );
};
