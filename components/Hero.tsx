
import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../siteContent';
import { HeroNetwork } from './HeroNetwork';

/** 見出しを1文字ずつ浮かび上がらせるための分割（読み上げ用には元の文を別に置いています） */
const Chars: React.FC<{ text: string; start?: number }> = ({ text, start = 0 }) => (
  <>
    {Array.from(text).map((c, i) => (
      <span key={i} className="yh-char" style={{ '--i': start + i } as React.CSSProperties}>
        {c}
      </span>
    ))}
  </>
);

const delay = (s: string) => ({ '--yh-d': s } as React.CSSProperties);

export const Hero: React.FC = () => {
  const { hero } = siteContent;
  const line1Len = Array.from(hero.titleLine1).length;

  return (
    <div className="relative h-[70vh] md:h-[85vh] flex items-center overflow-hidden bg-slate-50 pt-20 md:pt-32" data-active>
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt="Hero Background"
          className="yh-hero-bg w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-slate-50"></div>
      </div>

      <HeroNetwork />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <div className="yh-hero-in inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] tracking-[0.3em] font-bold mb-6 rounded-full border border-blue-100" style={delay('0.1s')}>
            {hero.tag}
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 leading-[1.3] mb-8 tracking-tighter">
            <span className="sr-only">{hero.titleLine1}{hero.titleAccent}{hero.titleLine2}</span>
            <span aria-hidden="true">
              <Chars text={hero.titleLine1} /><br />
              <span className="flex items-center flex-wrap">
                <span className="yh-shimmer inline-block py-2 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 italic drop-shadow-sm">{hero.titleAccent}</span>
                <span className="inline-block whitespace-nowrap"><Chars text={hero.titleLine2} start={line1Len + 3} /></span>
              </span>
            </span>
          </h1>
          <p className="yh-hero-in text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-light whitespace-pre-line" style={delay('1.15s')}>
            {hero.description}
          </p>
          <div className="yh-hero-in flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6" style={delay('1.35s')}>
            <a
              href="#services"
              className="yh-shine px-10 py-4 bg-slate-900 text-white text-xs font-bold tracking-[0.2em] hover:bg-blue-600 transition-all text-center rounded-full shadow-xl shadow-slate-900/10"
            >
              SERVICES
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-4 py-4 text-slate-900 text-xs font-bold tracking-[0.2em] hover:text-blue-600 transition-colors"
            >
              CONTACT
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="flex items-center space-x-6">
          <div className="yh-line-grow h-[1px] w-24 bg-slate-200"></div>
          <span className="yh-hero-in text-[10px] tracking-[0.4em] font-medium text-slate-300 rotate-90 origin-right" style={delay('1.6s')}>
            FAN CENTRIC
          </span>
        </div>
      </div>
    </div>
  );
};
