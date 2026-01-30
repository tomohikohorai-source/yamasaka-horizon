
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (view: string) => void;
  onSearchToggle?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate, onSearchToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', view: 'home', href: '#hero' },
    { name: 'SERVICES', view: 'services-list', href: '#services' },
    { name: 'PORTFOLIO', view: 'portfolio-list', href: '#portfolio' },
    { name: 'ABOUT', view: 'about-page', href: '#about' },
    { name: 'NEWS', view: 'news-list', href: '#news' },
    { name: 'CONTACT', view: 'contact-page', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, view: string) => {
    if (view === 'home') {
      onNavigate('home');
    } else {
      e.preventDefault();
      onNavigate(view);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <span className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors ${
            isScrolled ? 'text-slate-900' : 'text-slate-800'
          }`}>
            YAMASAKA <span className="font-light text-slate-400">HORIZON</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.view)}
              className={`text-[10px] lg:text-xs font-bold tracking-[0.2em] transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-700' : 'text-slate-700'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={onSearchToggle}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={onSearchToggle}
            className="p-2 text-slate-600"
            aria-label="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            className="text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest text-slate-900 py-2 border-b border-slate-50 last:border-none"
              onClick={(e) => handleLinkClick(e, link.view)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
