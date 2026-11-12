import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../siteContent';

/**
 * 全ページのフッター直前に出す「ご相談」の帯（お問い合わせページでは出さない）。
 * フォーム本体はお問い合わせページ（/contact）にあります。
 */
export const ContactBand: React.FC = () => {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 bg-slate-900 text-white">
      <div className="yh-glow" data-active aria-hidden="true"></div>
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <span data-reveal className="inline-block text-xs tracking-[0.4em] font-bold text-slate-400 uppercase">Contact</span>
        <h2 data-reveal className="text-3xl md:text-5xl font-bold mt-4 mb-8 tracking-tighter">お気軽にご相談ください</h2>
        <p data-reveal className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-12">
          プロジェクトのご依頼、セミナーのご相談、採用についてなど、どんなことでもお気軽にお問い合わせください。
        </p>
        <div data-reveal className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <Link
            to="/contact"
            className="yh-shine inline-flex items-center whitespace-nowrap px-8 sm:px-12 py-5 bg-white text-slate-900 text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all rounded-full shadow-2xl shadow-blue-500/10"
          >
            CONTACT US / お問い合わせ
            <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="text-slate-300 text-sm hover:text-blue-400 transition-colors border-b border-dotted border-slate-600 pb-0.5"
          >
            {siteContent.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
};
