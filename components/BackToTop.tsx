import React, { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../lib/motion';

/**
 * PC 用：ページの先頭へ戻るボタン（右下）。1画面分スクロールすると現れます。
 * スマホ・タブレットは画面下にお問い合わせボタンがあるので出しません。
 */
export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="ページの先頭へ戻る"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}
      className={`yh-totop hidden lg:flex fixed right-8 bottom-8 z-40 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-slate-200 text-slate-700 shadow-lg hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};
