
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
import { AIConcierge } from './components/AIConcierge';
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
        BACK
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

const ServiceDetailPage = ({ id, onBack }: { id: string, onBack: () => void }) => {
  const service = siteContent.services.find(s => s.id === id || s.title === id);
  if (!service) return null;

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="text-blue-600 font-bold text-xs tracking-widest mb-12 flex items-center group">
        <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        BACK TO SERVICES
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
        <div>
          <span className="text-xs font-bold text-blue-500 tracking-[0.4em] uppercase mb-4 block">Service Details</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tighter">{service.title}</h1>
          <p className="text-lg font-bold text-blue-600/60 mb-8">{service.jpTitle}</p>
          
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p className="font-bold text-slate-900">{service.description}</p>
            <p className="whitespace-pre-line">{service.longDescription}</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="bg-slate-50 rounded-3xl p-10 md:p-16 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">支援内容の詳細</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <a href="#contact" onClick={() => onBack()} className="px-12 py-5 bg-slate-900 text-white text-xs font-bold tracking-[0.3em] hover:bg-blue-600 transition-all rounded-full shadow-2xl">
          CONTACT US / お問い合わせ
        </a>
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
    </div>
  </PageLayout>
);

const LegalPage = ({ title, content, onBack }: { title: string, content: string, onBack: () => void }) => (
  <PageLayout title={title} subtitle="Legal Information" onBack={onBack}>
    <div className="prose prose-slate max-w-none">
      <div className="whitespace-pre-line text-slate-600 leading-relaxed bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        {content}
      </div>
    </div>
  </PageLayout>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view: string, id?: string) => {
    setCurrentView(view);
    setSelectedId(id || null);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'news-list':
        return <NewsListPage onBack={() => setCurrentView('home')} onSelect={(id) => handleNavigate('news-detail', id)} />;
      case 'news-detail':
        return <NewsDetailPage id={selectedId || ''} onBack={() => setCurrentView('news-list')} onNavigate={handleNavigate} />;
      case 'service-detail':
        return <ServiceDetailPage id={selectedId || ''} onBack={() => setCurrentView('home')} />;
      case 'about-page':
        return <PageLayout title="About Us" subtitle="熱狂を日常に、ワクワクを未来に。" onBack={() => setCurrentView('home')}><About /></PageLayout>;
      case 'contact-page':
        return <PageLayout title="Contact" subtitle="プロジェクトのご相談はこちらから" onBack={() => setCurrentView('home')}><Contact /></PageLayout>;
      case 'services-list':
        return <PageLayout title="Services" subtitle="スポーツ・エンタメDXへの挑戦" onBack={() => setCurrentView('home')}><Services onSelect={(id) => handleNavigate('service-detail', id)} /></PageLayout>;
      case 'portfolio-list':
        return <PageLayout title="Portfolio" subtitle="これまでの主な実績" onBack={() => setCurrentView('home')}><Portfolio /></PageLayout>;
      case 'sitemap':
        return <SitemapPage onBack={() => setCurrentView('home')} onNavigate={handleNavigate} />;
      case 'privacy-policy':
        return <LegalPage title="Privacy Policy" content="ここにプライバシーポリシーの内容が入ります。" onBack={() => setCurrentView('home')} />;
      case 'terms-of-service':
        return <LegalPage title="Terms of Service" content="ここにサイト利用規約の内容が入ります。" onBack={() => setCurrentView('home')} />;
      case 'cookie-policy':
        return <LegalPage title="Cookie Policy" content="ここにクッキーポリシーの内容が入ります。" onBack={() => setCurrentView('home')} />;
      default:
        return (
          <main className="animate-in fade-in duration-1000">
            <section id="hero">
              <Hero />
            </section>
            
            <section id="news" className="py-24 bg-white">
              <News 
                onViewAll={() => handleNavigate('news-list')} 
                onSelect={(id) => handleNavigate('news-detail', id)} 
              />
            </section>

            <section id="services" className="py-32 bg-slate-50">
              <Services onSelect={(id) => handleNavigate('service-detail', id)} />
            </section>

            <section id="portfolio" className="py-32 bg-white">
              <Portfolio onViewAll={() => handleNavigate('portfolio-list')} />
            </section>

            <section id="about" className="py-32 bg-slate-50">
              <About />
            </section>

            <section id="contact" className="py-32 bg-slate-900 text-white">
              <Contact />
            </section>
          </main>
        );
    }
  };

  return (
    <div className="relative min-h-screen">
      <Navbar 
        isScrolled={isScrolled} 
        onNavigate={handleNavigate} 
        onSearchToggle={() => setIsSearchOpen(true)}
      />
      
      {renderContent()}

      <Footer onNavigate={handleNavigate} />
      
      <CookieBanner onNavigate={handleNavigate} />

      {isSearchOpen && (
        <SearchModal 
          onClose={() => setIsSearchOpen(false)} 
          onNavigate={(view, id) => {
            setIsSearchOpen(false);
            handleNavigate(view === 'detail' ? 'service-detail' : view, id);
          }}
        />
      )}

      <AIConcierge />
    </div>
  );
};

export default App;
