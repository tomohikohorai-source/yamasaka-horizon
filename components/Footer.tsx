
import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../siteContent';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-20 space-y-12 md:space-y-0">
          <div data-reveal className="text-center md:text-left">
            <Link 
              to="/"
              className="block text-3xl font-bold tracking-tighter mb-4 cursor-pointer"
            >
              {siteContent.brand.name} <span className="font-light">{siteContent.brand.nameAccent}</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed whitespace-pre-line">
              {siteContent.brand.description}
            </p>
          </div>

          <div data-reveal className="grid grid-cols-2 gap-20 text-center md:text-left">
            <div>
              <h5 className="text-[10px] tracking-[0.3em] font-bold text-slate-300 uppercase mb-6">Menu</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] tracking-[0.3em] font-bold text-slate-300 uppercase mb-6">Legal</h5>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link to="/specified-commercial-transactions" className="hover:text-white transition-colors">Specified Commercial Transactions</Link></li>
                <li><Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div data-reveal="fade" className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-600 text-[10px] tracking-widest font-medium">
          <div>© 2023 {siteContent.brand.name} {siteContent.brand.nameAccent} Co., Ltd. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-8">
            <Link to="/sitemap" className="cursor-pointer hover:text-white transition-colors">SITEMAP</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
