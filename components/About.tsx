
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

      <div className="animate-in fade-in slide-in-from-right duration-700">
        <span className="text-xs tracking-[0.4em] font-bold text-slate-400 uppercase">Vision</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-slate-900">{about.title}</h2>
        <div className="space-y-6 text-slate-600 leading-relaxed mb-10">
          <p>{about.description1}</p>
          <p>{about.description2}</p>
        </div>

        {/* Company Profile Section */}
        {about.companyProfile && (
          <div className="mb-12 pt-8 border-t border-slate-100">
            <h3 className="text-[10px] tracking-[0.3em] font-bold text-slate-400 uppercase mb-6">Company Profile / 会社概要</h3>
            <div className="space-y-4">
              {about.companyProfile.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row border-b border-slate-50 pb-3 sm:pb-2">
                  <span className="text-[11px] font-bold text-slate-400 w-full sm:w-40 mb-1 sm:mb-0">{item.label}</span>
                  <span className="text-sm text-slate-700 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

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
