
import React from 'react';
import { siteContent } from '../siteContent';

interface NewsProps {
  onViewAll?: () => void;
}

export const News: React.FC<NewsProps> = ({ onViewAll }) => {
  // Show only first 3 on top page
  const displayNews = siteContent.news.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-20">
        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">News</h2>
          <p className="text-[10px] text-blue-500 font-bold tracking-widest mt-1 uppercase">Updates</p>
          <div className="h-1 w-8 bg-blue-500 mt-4"></div>
        </div>
        <div className="flex-grow">
          <div className="space-y-4 mb-8">
            {displayNews.map((item, index) => (
              <div key={index} className="group flex flex-col sm:flex-row sm:items-center border-b border-slate-100 pb-4 hover:border-blue-200 transition-colors cursor-pointer">
                <span className="text-xs font-mono text-slate-400 w-32">{item.date}</span>
                <span className="text-[10px] font-bold text-blue-500 border border-blue-500 px-2 py-0.5 rounded sm:mr-6 w-fit my-2 sm:my-0">{item.category}</span>
                <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button 
              onClick={onViewAll}
              className="inline-flex items-center text-xs font-bold tracking-widest text-slate-400 hover:text-blue-600 transition-colors group"
            >
              VIEW ALL / もっと見る
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
