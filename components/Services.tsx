
import React from 'react';
import { siteContent } from '../siteContent';

interface ServicesProps {
  onSelect?: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <span className="text-xs tracking-[0.4em] font-bold text-slate-400 uppercase">Services</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-slate-900">私たちの事業</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {siteContent.services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => onSelect?.(service.id)}
            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 cursor-pointer flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden mb-8 rounded-xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
            <p className="text-xs text-blue-500 tracking-widest font-bold mb-4">{service.jpTitle}</p>
            <p className="text-slate-500 leading-relaxed text-sm flex-grow">
              {service.description}
            </p>
            <div className="mt-6 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
              VIEW DETAILS
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
