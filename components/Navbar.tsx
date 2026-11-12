
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
  onSearchToggle?: () => void;
}

const navLinks = [
  { name: 'HOME', to: '/' },
  { name: 'SERVICES', to: '/services' },
  { name: 'PORTFOLIO', to: '/portfolio' },
  { name: 'ABOUT', to: '/about' },
  { name: 'NEWS', to: '/news' },
  { name: 'CONTACT', to: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, onSearchToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // 今いるページ（記事やサービス詳細では、その一覧のメニュー）を強調する
  const isCurrent = (to: string) => (to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`));

  // ページが変わったらメニューを閉じる
  useEffect(() => setIsOpen(false), [pathname]);

  // メニューの外をタップ／Esc キーで閉じる
  useEffect(() => {
    if (!isOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className={`yh-nav-in fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morphism py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <span className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors ${
            isScrolled ? 'text-slate-900' : 'text-slate-800'
          }`}>
            YAMASAKA <span className="font-light text-slate-400">HORIZON</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              aria-current={isCurrent(link.to) ? 'page' : undefined}
              className={`yh-navlink text-[10px] lg:text-xs font-bold tracking-[0.2em] transition-colors hover:text-blue-600 ${
                isCurrent(link.to) ? 'text-blue-600' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={onSearchToggle}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            aria-label="サイト内を検索"
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
            aria-label="サイト内を検索"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            className="text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            aria-controls="yh-mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="yh-mobile-menu" className="yh-drop md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              aria-current={isCurrent(link.to) ? 'page' : undefined}
              className={`text-sm font-medium tracking-widest py-2 border-b border-slate-50 last:border-none ${
                isCurrent(link.to) ? 'text-blue-600' : 'text-slate-900'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
