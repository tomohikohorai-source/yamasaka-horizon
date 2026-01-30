
import React, { useState, useMemo } from 'react';
import { siteContent } from '../siteContent';

interface SearchModalProps {
  onClose: () => void;
  onNavigate: (view: string, title?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    const matches: { title: string, category: string, view: string, extra?: string }[] = [];

    // Search News
    siteContent.news.forEach(item => {
      if (item.title.toLowerCase().includes(q)) {
        matches.push({ title: item.title, category: 'NEWS', view: 'news-list' });
      }
    });

    // Search Services
    siteContent.services.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.jpTitle.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
        matches.push({ title: item.title, category: 'SERVICE', view: 'detail', extra: item.title });
      }
    });

    // Search Portfolio
    siteContent.portfolio.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.jpTitle.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)) {
        matches.push({ title: item.title, category: 'PORTFOLIO', view: 'detail', extra: item.title });
      }
    });

    // About match
    if (siteContent.about.title.toLowerCase().includes(q) || siteContent.about.description1.toLowerCase().includes(q)) {
      matches.push({ title: 'About Us', category: 'ABOUT', view: 'about-page' });
    }

    return matches;
  }, [query]);

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center pt-[10vh] px-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-100 flex items-center">
          <svg className="w-5 h-5 text-slate-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            autoFocus
            type="text"
            placeholder="サイト内を検索... (サービス、実績、ニュースなど)"
            className="flex-1 bg-transparent border-none outline-none text-lg text-slate-800 placeholder-slate-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              「{query}」に一致する結果は見つかりませんでした。
            </div>
          )}

          {!query && (
            <div className="py-8 px-4">
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                {['DX', 'セミナー', '事例', '実績', 'コンサル'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-full text-sm transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-2">
              {results.map((res, i) => (
                <button
                  key={i}
                  onClick={() => onNavigate(res.view, res.extra)}
                  className="w-full text-left p-4 hover:bg-slate-50 rounded-xl flex items-center group transition-colors"
                >
                  <div className="mr-4">
                    <span className="text-[9px] font-bold text-blue-500 border border-blue-500 px-2 py-0.5 rounded uppercase">
                      {res.category}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-medium group-hover:text-blue-600 transition-colors">{res.title}</h4>
                  </div>
                  <svg className="w-4 h-4 ml-auto text-slate-200 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 tracking-widest">
          <span>{results.length} RESULTS FOUND</span>
          <div className="flex items-center space-x-2">
            <kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">ESC</kbd>
            <span>TO CLOSE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
