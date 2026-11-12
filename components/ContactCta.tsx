import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * スマホ用：少しスクロールすると画面下に出る「お問い合わせ」ボタン。
 * お問い合わせページ・トップのお問い合わせ欄・フッターが見えている間と、
 * Cookie の同意バナーが出ている間は隠れます（重なり防止）。
 */
export const ContactCta: React.FC = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (pathname === '/contact') {
      setShow(false);
      return;
    }
    const onScreen = (el: Element | null) => {
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    const update = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.6;
      setShow(scrolled && !onScreen(document.getElementById('contact')) && !onScreen(document.querySelector('footer')));
    };
    // スクロールイベントはブラウザが1コマに1回にまとめて送るので、そのまま判定して問題ない
    const onScroll = update;
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  return (
    <div
      className={`yh-cta-bar lg:hidden fixed inset-x-4 sm:inset-x-auto sm:right-6 sm:w-[22rem] z-40 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
      aria-hidden={!show}
    >
      <Link
        to="/contact"
        tabIndex={show ? 0 : -1}
        className="yh-shine flex items-center justify-center w-full py-4 rounded-full bg-slate-900/95 backdrop-blur text-white text-xs font-bold tracking-[0.2em] shadow-2xl shadow-slate-900/30"
      >
        CONTACT / ご相談・お問い合わせ
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
};
