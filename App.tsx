
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

// --- Sub-Page Components ---

// Fix: Explicitly added children property to the props type for PageLayout to satisfy React 18+ typing requirements for React.FC
const PageLayout: React.FC<{ title: string, subtitle: string, onBack: () => void, children?: React.ReactNode }> = ({ children, title, subtitle, onBack }) => (
  <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
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

const NewsListPage = ({ onBack }: { onBack: () => void }) => (
  <PageLayout title="News List" subtitle="山坂ホライゾンの最新情報とお知らせ" onBack={onBack}>
    <div className="space-y-8">
      {siteContent.news.map((item, i) => (
        <div key={i} className="group border-b border-slate-100 pb-8 hover:bg-slate-50/50 transition-colors p-6 rounded-2xl cursor-pointer">
          <div className="flex items-center space-x-4 mb-3">
            <span className="text-xs font-mono text-slate-400">{item.date}</span>
            <span className="text-[10px] font-bold text-blue-500 border border-blue-500 px-2 py-0.5 rounded">{item.category}</span>
          </div>
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
        </div>
      ))}
    </div>
  </PageLayout>
);

const ServicesListPage = ({ onBack, onSelect }: { onBack: () => void, onSelect: (t: string) => void }) => (
  <PageLayout title="Our Services" subtitle="スポーツ・エンタメ界の課題を解決する3つのアプローチ" onBack={onBack}>
    <Services onSelect={onSelect} />
  </PageLayout>
);

const PortfolioListPage = ({ onBack, onSelect }: { onBack: () => void, onSelect: (t: string) => void }) => (
  <PageLayout title="Portfolio" subtitle="これまでに手掛けてきたプロジェクトの実績" onBack={onBack}>
    <Portfolio onSelect={onSelect} />
  </PageLayout>
);

const AboutPage = ({ onBack }: { onBack: () => void }) => (
  <PageLayout title="About Us" subtitle="熱狂を日常に、ワクワクを未来に。" onBack={onBack}>
    <About />
    <div className="mt-20 p-10 bg-slate-50 rounded-3xl text-slate-800">
      <h3 className="text-2xl font-bold mb-6">Company Profile</h3>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="border-b border-slate-200 pb-4"><dt className="text-slate-400 mb-1 font-medium">会社名</dt><dd className="font-bold">株式会社山坂ホライゾン</dd></div>
        <div className="border-b border-slate-200 pb-4"><dt className="text-slate-400 mb-1 font-medium">代表取締役社長</dt><dd className="font-bold">洞井 知彦</dd></div>
        <div className="border-b border-slate-200 pb-4"><dt className="text-slate-400 mb-1 font-medium">設立</dt><dd className="font-bold">2023年</dd></div>
        <div className="border-b border-slate-200 pb-4"><dt className="text-slate-400 mb-1 font-medium">所在地</dt><dd className="font-bold">大阪府大阪市東住吉区山坂5-15-12</dd></div>
        <div className="border-b border-slate-200 pb-4 md:col-span-2"><dt className="text-slate-400 mb-1 font-medium">事業内容</dt><dd className="font-bold">エンタメDXコンサルティング、ファンビジネス支援、新事業・テック支援、教育・セミナー</dd></div>
      </dl>
    </div>
  </PageLayout>
);

const ContactPage = ({ onBack }: { onBack: () => void }) => (
  <PageLayout title="Contact" subtitle="プロジェクトのご相談やお問い合わせはこちらから" onBack={onBack}>
    <Contact />
  </PageLayout>
);

const LegalPage: React.FC<{ title: string, content: React.ReactNode, onBack: () => void }> = ({ title, content, onBack }) => (
  <PageLayout title={title} subtitle="法的事項に関するご案内" onBack={onBack}>
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
      {content}
    </div>
  </PageLayout>
);

const DetailPage = ({ title, onBack }: { title: string, onBack: () => void }) => (
  <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen text-center">
    <button onClick={onBack} className="text-blue-600 font-bold text-xs tracking-widest mb-12 flex items-center justify-center group">
      <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      BACK TO HOME
    </button>
    <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">{title}</h1>
    <div className="aspect-video bg-slate-100 rounded-3xl mb-12 overflow-hidden shadow-2xl">
      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
    </div>
    <div className="text-left max-w-2xl mx-auto text-slate-600 leading-relaxed space-y-6">
      <p className="text-lg font-medium text-slate-900">エンタメ体験のデジタル・トランスフォーメーション</p>
      <p>こちらは「{title}」の詳細ページサンプルです。具体的なプロジェクトの背景、解決した課題、導入したテクノロジー、および得られた成果について詳しく記載されます。</p>
      <p>山坂ホライゾンでは、単なる技術導入に留まらず、ファンの心理に基づいた本質的なエンゲージメントの向上を目指しています。ファンが何を求め、どこに熱狂を感じるのかを深く理解し、それをデジタルの力で増幅させます。</p>
    </div>
  </div>
);

type ViewState = 'home' | 'news-list' | 'services-list' | 'portfolio-list' | 'about-page' | 'contact-page' | 'detail' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState<ViewState>('home');
  const [detailTitle, setDetailTitle] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (newView: string, title: string = '') => {
    setDetailTitle(title);
    setView(newView as ViewState);
    window.scrollTo(0, 0);
    setIsSearchOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
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
              <News onViewAll={() => navigate('news-list')} />
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

        {view === 'news-list' && <NewsListPage onBack={() => navigate('home')} />}
        {view === 'services-list' && <ServicesListPage onBack={() => navigate('home')} onSelect={(t) => navigate('detail', t)} />}
        {view === 'portfolio-list' && <PortfolioListPage onBack={() => navigate('home')} onSelect={(t) => navigate('detail', t)} />}
        {view === 'about-page' && <AboutPage onBack={() => navigate('home')} />}
        {view === 'contact-page' && <ContactPage onBack={() => navigate('home')} />}
        {view === 'detail' && <DetailPage title={detailTitle} onBack={() => navigate('home')} />}
        
        {view === 'privacy-policy' && (
          <LegalPage 
            title="Privacy Policy" 
            onBack={() => navigate('home')}
            content={
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. 個人情報の収集</h3>
                  <p>当社は、サービスの提供にあたり、お名前、メールアドレス等の個人情報を適切な手段で取得いたします。</p>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. 利用目的</h3>
                  <p>取得した個人情報は、お問い合わせへの回答、サービス向上、および関連情報のご案内のために利用します。</p>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. 第三者提供</h3>
                  <p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</p>
                </section>
              </div>
            }
          />
        )}
        {view === 'terms-of-service' && (
          <LegalPage 
            title="Terms of Service" 
            onBack={() => navigate('home')}
            content={
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">第1条（適用）</h3>
                  <p>本規約は、株式会社山坂ホライゾンが提供する本ウェブサイトの利用条件を定めるものです。</p>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">第2条（禁止事項）</h3>
                  <p>利用者は、本サービスの利用にあたり、法令または公序良俗に違反する行為を行ってはなりません。</p>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">第3条（免責）</h3>
                  <p>当社は、本サービスに起因して利用者に生じたあらゆる損害について、一切の責任を負わないものとします。</p>
                </section>
              </div>
            }
          />
        )}
        {view === 'cookie-policy' && (
          <LegalPage 
            title="Cookie Policy" 
            onBack={() => navigate('home')}
            content={
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">クッキーについて</h3>
                  <p>当サイトでは、利便性向上やアクセス解析のためにクッキー（Cookie）を使用しています。</p>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">使用目的</h3>
                  <p>ユーザーのブラウジング設定の保存、およびGoogle Analytics等による統計データの収集に使用されます。</p>
                </section>
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">設定変更</h3>
                  <p>ブラウザの設定によりクッキーを無効にすることができますが、一部の機能が利用できなくなる場合があります。</p>
                </section>
              </div>
            }
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
      
      <CookieBanner />
    </div>
  );
};

export default App;
