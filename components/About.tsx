
import React from 'react';
import { siteContent } from '../siteContent';

export const About: React.FC = () => {
  const { about } = siteContent;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="aspect-square bg-white rounded-full overflow-hidden shadow-2xl p-4">
          <img 
            src={about.image} 
            alt="Vision" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div>
        <span className="text-xs tracking-[0.4em] font-bold text-slate-400 uppercase">Vision</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-slate-900">{about.title}</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          {about.description1}
        </p>
        <p className="text-slate-600 leading-relaxed mb-10">
          {about.description2}
        </p>
        <div className="flex space-x-12 pt-8 border-t border-slate-200">
          {about.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.label}</div>
              <div className="text-xs tracking-widest text-slate-400 font-bold uppercase">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
