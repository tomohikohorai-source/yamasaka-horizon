
import React from 'react';
import { siteContent } from '../siteContent';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, view: string) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-20 space-y-12 md:space-y-0">
          <div className="text-center md:text-left">
            <div 
              className="text-3xl font-bold tracking-tighter mb-4 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              {siteContent.brand.name} <span className="font-light">{siteContent.brand.nameAccent}</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed whitespace-pre-line">
              {siteContent.brand.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20 text-center md:text-left">
            <div>
              <h5 className="text-[10px] tracking-[0.3em] font-bold text-slate-300 uppercase mb-6">Menu</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#hero" onClick={(e) => handleLink(e, 'home')} className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" onClick={(e) => handleLink(e, 'services-list')} className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" onClick={(e) => handleLink(e, 'portfolio-list')} className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#about" onClick={(e) => handleLink(e, 'about-page')} className="hover:text-white transition-colors">About</a></li>
                <li><a href="#news" onClick={(e) => handleLink(e, 'news-list')} className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] tracking-[0.3em] font-bold text-slate-300 uppercase mb-6">Legal</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" onClick={(e) => handleLink(e, 'privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'terms-of-service')} className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'cookie-policy')} className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" onClick={(e) => handleLink(e, 'sitemap')} className="hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-600 text-[10px] tracking-widest font-medium">
          <div>© 2024 {siteContent.brand.name} {siteContent.brand.nameAccent}. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-8">
            <span className="cursor-default">DOMAINS & HOSTING</span>
            <span className="cursor-pointer hover:text-white transition-colors" onClick={() => onNavigate('sitemap')}>SITEMAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
