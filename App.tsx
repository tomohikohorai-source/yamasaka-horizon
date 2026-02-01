
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { News } from './components/News';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { SearchModal } from './components/SearchModal';
import { siteContent } from './siteContent';

// --- Utils ---
const isWithinLastMonth = (dateStr: string) => {
  const date = new Date(dateStr.replace(/\./g, '/'));
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 30;
};

// --- Sub-Page Components ---

const PageLayout: React.FC<{ title: string, subtitle: string, onBack: () => void, children?: React.ReactNode }> = ({ children, title, subtitle, onBack }) => (
  <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-in fade-in duration-700">
    <div className="max-w-4xl mx-auto">
      <button onClick={onBack} className="text-blue-600 font-bold text-xs tracking-widest mb-12 flex items-center group">
        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        BACK TO HOME
      </button>
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">{title}</h1>
        <p className="text-slate-400 font-light tracking-wide">{subtitle}</p>
        <div className="h-1 w-12 bg-blue-500 mt-6"></div>
      </div>
      {children}
    </div>
  </div>
);

const NewsListPage = ({ onBack, onSelect }: { onBack: () => void, onSelect: (id: string) => void }) => (
  <PageLayout title="News List" subtitle="山坂ホライゾンの最新情報とお知らせ" onBack={onBack}>
    <div className="space-y-8">
      {siteContent.news.map((item, i) => {
        const isNew = isWithinLastMonth(item.date);
        return (
          <div key={i} onClick={() => onSelect(item.id)} className="group border-b border-slate-100 pb-8 hover:bg-slate-50/50 transition-colors p-6 rounded-2xl cursor-pointer relative">
            <div className="flex items-center space-x-4 mb-3">
              <span className="text-xs font-mono text-slate-400">{item.date}</span>
              <span className="text-[10px] font-bold text-blue-500 border border-blue-500 px-2 py-0.5 rounded uppercase">{item.category}</span>
              {isNew && (
                <span className="bg-pink-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse">NEW</span>
              )}
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
          </div>
        );
      })}
    </div>
  </PageLayout>
);

const NewsDetailPage = ({ id, onBack, onNavigate }: { id: string, onBack: () => void, onNavigate: (view: string, titleOrId?: string) => void }) => {
  const currentIndex = siteContent.news.findIndex(n => n.id === id);
  const news = siteContent.news[currentIndex];
  
  if (!news) return null;

  const prevArticle = siteContent.news[currentIndex + 1]; 
  const nextArticle = siteContent.news[currentIndex - 1]; 

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="text-blue-600 font-bold text-xs tracking-widest mb-12 flex items-center group">
        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        BACK TO NEWS
      </button>
      
      <div className="mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-sm font-mono text-slate-400">{news.date}</span>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase">{news.type}</span>
          {isWithinLastMonth(news.date) && (
            <span className="bg-pink-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse">NEW</span>
          )}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter text-slate-900 leading-tight">{news.title}</h1>
      </div>

      <div className="aspect-video bg-slate-100 rounded-3xl mb-12 overflow-hidden shadow-2xl">
        <img src={news.image} className="w-full h-full object-cover" alt={news.title} />
      </div>

      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
          {news.content}
        </p>
      </div>
      
      <div className="mt-20 pt-12 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {prevArticle ? (
            <button 
              onClick={() => onNavigate('news-detail', prevArticle.id)}
              className="group p-6 bg-slate-50 hover:bg-white border border-slate-100 rounded-2xl transition-all text-left"
            >
              <div className="text-[10px] font-bold text-slate-400 tracking-widest mb-2 flex items-center">
                <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                PREVIOUS
              </div>
              <div className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">{prevArticle.title}</div>
            </button>
          ) : <div className="hidden md:block"></div>}

          {nextArticle ? (
            <button 
              onClick={() => onNavigate('news-detail', nextArticle.id)}
              className="group p-6 bg-slate-50 hover:bg-white border border-slate-100 rounded-2xl transition-all text-right"
            >
              <div className="text-[10px] font-bold text-slate-400 tracking-widest mb-2 flex items-center justify-end">
                NEXT
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <div className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">{nextArticle.title}</div>
            </button>
          ) : <div className="hidden md:block"></div>}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onBack}
            className="px-10 py-4 bg-slate-900 text-white text-xs font-bold tracking-[0.2em] hover:bg-blue-600 transition-all rounded-full shadow-xl"
          >
            NEWS LIST / 一覧に戻る
          </button>
        </div>
      </div>
    </div>
  );
};

const SitemapPage = ({ onBack, onNavigate }: { onBack: () => void, onNavigate: (view: string, titleOrId?: string) => void }) => (
  <PageLayout title="Sitemap" subtitle="サイト構成・主要ページ一覧" onBack={onBack}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="space-y-6">
        <h3 className="text-xl font-bold border-b border-slate-100 pb-2">Main Content</h3>
        <ul className="space-y-3 text-slate-600 text-sm">
          <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition-colors text-left w-full">ホーム</button></li>
          <li><button onClick={() => onNavigate('about-page')} className="hover:text-blue-600 transition-colors text-left w-full">私たちについて (About)</button></li>
          <li><button onClick={() => onNavigate('services-list')} className="hover:text-blue-600 transition-colors text-left w-full">事業内容 (Services)</button></li>
          <li><button onClick={() => onNavigate('portfolio-list')} className="hover:text-blue-600 transition-colors text-left w-full">実績紹介 (Portfolio)</button></li>
          <li><button onClick={() => onNavigate('news-list')} className="hover:text-blue-600 transition-colors text-left w-full">最新情報 (News)</button></li>
          <li><button onClick={() => onNavigate('contact-page')} className="hover:text-blue-600 transition-colors text-left w-full">お問い合わせ (Contact)</button></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h3 className="text-xl font-bold border-b border-slate-100 pb-2">Information</h3>
        <ul className="space-y-3 text-slate-600 text-sm">
          <li><button onClick={() => onNavigate('terms-of-service')} className="hover:text-blue-600 transition-colors text-left w-full">サイト利用条件</button></li>
          <li><button onClick={() => onNavigate('privacy-policy')} className="hover:text-blue-600 transition-colors text-left w-full">プライバシーポリシー</button></li>
          <li><button onClick={() => onNavigate('cookie-policy')} className="hover:text-blue-600 transition-colors text-left w-full">クッキーポリシー</button></li>
          <li><button onClick={() => onNavigate('sitemap')} className="hover:text-blue-600 transition-colors font-bold text-blue-600 text-left w-full">サイトマップ</button></li>
        </ul>
      </div>
      <div className="space-y-6">
        <h3 className="text-xl font-bold border-b border-slate-100 pb-2">External Links</h3>
        <ul className="space-y-3 text-slate-600 text-sm">
          <li><a href="https://www.yamasakahorizon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors block">オフィシャルサイト</a></li>
        </ul>
      </div>
    </div>
  </PageLayout>
);

const LegalPage: React.FC<{ title: string, content: React.ReactNode, onBack: () => void }> = ({ title, content, onBack }) => (
  <PageLayout title={title} subtitle="法的事項に関するご案内" onBack={onBack}>
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-sm md:text-base">
      {content}
    </div>
  </PageLayout>
);

const DetailPage = ({ title, onBack }: { title: string, onBack: () => void }) => (
  <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen text-center animate-in fade-in duration-700">
    <button onClick={onBack} className="text-blue-600 font-bold text-xs tracking-widest mb-12 flex items-center justify-center group">
      <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      BACK TO HOME
    </button>
    <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">{title}</h1>
    <div className="aspect-video bg-slate-100 rounded-3xl mb-12 overflow-hidden shadow-2xl">
      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt={title} />
    </div>
    <div className="text-left max-w-2xl mx-auto text-slate-600 leading-relaxed space-y-6">
      <p className="text-lg font-medium text-slate-900">エンタメ体験のデジタル・トランスフォーメーション</p>
      <p>こちらは「{title}」の詳細ページサンプルです。具体的なプロジェクトの背景、解決した課題、導入したテクノロジー、および得られた成果について詳しく記載されます。</p>
      <p>山坂ホライゾンでは、単なる技術導入に留まらず、ファンの心理に基づいた本質的なエンゲージメントの向上を目指しています。ファンが何を求め、どこに熱狂を感じるのかを深く理解し、それをデジタルの力で増幅させます。</p>
    </div>
  </div>
);

type ViewState = 'home' | 'news-list' | 'news-detail' | 'services-list' | 'portfolio-list' | 'about-page' | 'contact-page' | 'detail' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy' | 'sitemap';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState<ViewState>('home');
  const [activeId, setActiveId] = useState('');
  const [detailTitle, setDetailTitle] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (newView: string, titleOrId: string = '') => {
    if (newView === 'news-detail') {
      setActiveId(titleOrId);
    } else {
      setDetailTitle(titleOrId);
    }
    setView(newView as ViewState);
    window.scrollTo(0, 0);
    setIsSearchOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <Navbar 
        isScrolled={isScrolled} 
        onNavigate={(v) => navigate(v)} 
        onSearchToggle={() => setIsSearchOpen(true)}
      />
      
      <main>
        {view === 'home' && (
          <>
            <section id="hero">
              <Hero />
            </section>

            <section id="news" className="py-12 bg-white border-b border-slate-50 relative z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.03)]">
              <News 
                onViewAll={() => navigate('news-list')} 
                onSelect={(id) => navigate('news-detail', id)}
              />
            </section>
            
            <section id="services" className="py-20 bg-slate-50/50">
              <Services onSelect={(t) => navigate('detail', t)} />
            </section>
            
            <section id="portfolio" className="py-20 bg-white">
              <Portfolio 
                onSelect={(t) => navigate('detail', t)} 
                onViewAll={() => navigate('portfolio-list')}
              />
            </section>
            
            <section id="about" className="py-20 bg-slate-50/30">
              <About />
            </section>
            
            <section id="contact" className="py-20 bg-slate-900 text-white">
              <Contact />
            </section>
          </>
        )}

        {view === 'news-list' && <NewsListPage onBack={() => navigate('home')} onSelect={(id) => navigate('news-detail', id)} />}
        {view === 'news-detail' && <NewsDetailPage id={activeId} onBack={() => navigate('news-list')} onNavigate={navigate} />}
        {view === 'services-list' && <PageLayout title="Our Services" subtitle="スポーツ・エンタメ界の課題を解決する3つのアプローチ" onBack={() => navigate('home')}><Services onSelect={(t) => navigate('detail', t)} /></PageLayout>}
        {view === 'portfolio-list' && <PageLayout title="Portfolio" subtitle="これまでに手掛けてきたプロジェクトの実績" onBack={() => navigate('home')}><Portfolio onSelect={(t) => navigate('detail', t)} onViewAll={() => {}} /></PageLayout>}
        {view === 'about-page' && <PageLayout title="About Us" subtitle="熱狂を日常に、ワクワクを未来に。" onBack={() => navigate('home')}><About /></PageLayout>}
        {view === 'contact-page' && <PageLayout title="Contact" subtitle="プロジェクトのご相談やお問い合わせはこちらから" onBack={() => navigate('home')}><Contact /></PageLayout>}
        {view === 'detail' && <DetailPage title={detailTitle} onBack={() => navigate('home')} />}
        {view === 'sitemap' && <SitemapPage onBack={() => navigate('home')} onNavigate={navigate} />}
        
        {(view === 'privacy-policy' || view === 'terms-of-service' || view === 'cookie-policy') && (
           <LegalPage 
             title={view === 'privacy-policy' ? "プライバシーポリシー" : view === 'terms-of-service' ? "サイト利用条件" : "クッキーポリシー"}
             onBack={() => navigate('home')}
             content={<div className="text-slate-600">法的文書のコンテンツがここに表示されます。</div>}
           />
        )}
      </main>

      <Footer onNavigate={(v) => navigate(v)} />
      
      {isSearchOpen && (
        <SearchModal 
          onClose={() => setIsSearchOpen(false)} 
          onNavigate={navigate}
        />
      )}
      
      <CookieBanner onNavigate={navigate} />
    </div>
  );
};

export default App;
