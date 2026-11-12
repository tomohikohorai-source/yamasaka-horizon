
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../siteContent';
import { preloadImage } from '../lib/preload';


const isWithinLastMonth = (dateStr: string) => {
  const date = new Date(dateStr.replace(/\./g, '/'));
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 30;
};

export const News: React.FC = () => {
  // 日付の新しい順にソートし、最初の3件のみ表示
  const sortedNews = [...siteContent.news].sort((a, b) => {
    return new Date(b.date.replace(/\./g, '/')).getTime() - new Date(a.date.replace(/\./g, '/')).getTime();
  });
  const displayNews = sortedNews.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex justify-between items-end mb-8 md:mb-10">
        <div>
          <h2 data-reveal className="text-2xl font-bold tracking-tighter text-slate-900 uppercase">News</h2>
          <p data-reveal className="text-[10px] text-blue-500 font-bold tracking-widest mt-1 uppercase">Updates</p>
          <div data-reveal="bar" className="h-1 w-8 bg-blue-500 mt-4"></div>
        </div>
        <Link
          data-reveal
          to="/news"
          className="inline-flex items-center text-xs font-bold tracking-widest text-slate-400 hover:text-blue-600 transition-colors group"
        >
          VIEW ALL<span className="hidden sm:inline">&nbsp;/ もっと見る</span>
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* 最新3件を写真付きカードで */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {displayNews.map((item) => {
          const isNew = isWithinLastMonth(item.date);
          return (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              onPointerEnter={() => preloadImage(item.image)}
              onPointerDown={() => preloadImage(item.image)}
              data-reveal
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 aspect-[16/10] mb-5 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <NewsThumb src={item.image} alt={item.title} />
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-xs font-mono text-slate-400">{item.date}</span>
                <span className="text-[10px] font-bold text-blue-500 border border-blue-500 px-2 py-0.5 rounded uppercase whitespace-nowrap">
                  {item.category}
                </span>
                {isNew && (
                  <span className="bg-pink-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse">NEW</span>
                )}
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-800 leading-relaxed line-clamp-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

/**
 * ニュースのサムネイル。写真はトリミングして枠いっぱいに、
 * 横長のロゴ画像・正方形に近いロゴやポスター・会社ロゴ（写真のない記事用）は、切れないよう全体を収めて表示する。
 */
const LOGO_IMAGE_ID = '1ymeWJOGXCIcLXDeK8I3DzgL5DxL-rVJm';
const NewsThumb: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [fit, setFit] = useState<'cover' | 'contain'>(src.includes(LOGO_IMAGE_ID) ? 'contain' : 'cover');
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={(e) => {
        const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
        if (h && (w / h > 2.2 || w / h < 1.25)) setFit('contain');
        setLoaded(true);
      }}
      onError={() => setLoaded(true)}
      className={`w-full h-full transition-[opacity,transform] duration-700 group-hover:scale-105 ${
        fit === 'contain' ? 'object-contain p-8 bg-white' : 'object-cover'
      } ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};
