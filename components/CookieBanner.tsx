
import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
  onNavigate?: (view: string) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    // もし同意の選択がまだなされていない場合は、バナーを表示する
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    
    // すでに拒否されている場合は非機能クッキーを無効にする処理などを実行
    if (consent === 'declined') {
      disableNonEssentialCookies();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    disableNonEssentialCookies();
  };

  const disableNonEssentialCookies = () => {
    (window as any).disableTracking = true;
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        if (name.trim().startsWith('_')) {
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[420px] bg-white border border-slate-100 shadow-2xl rounded-2xl p-6 z-[100] animate-in slide-in-from-bottom-10 duration-500">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-slate-900 mb-2">COOKIE利用の同意</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
            当サイトでは、サービスの向上、およびユーザー体験の最適化のためにクッキーを使用しています。
            <button 
              onClick={() => onNavigate?.('cookie-policy')}
              className="text-blue-600 hover:underline font-bold mx-1"
            >
              詳細は当社クッキーポリシーをご確認ください。
            </button>
            同意いただける場合は「同意する」を、拒否される場合は「拒否する」を選択してください。
          </p>
          <div className="flex space-x-3">
            <button 
              onClick={handleAccept}
              className="px-6 py-2 bg-slate-900 text-white text-[10px] font-bold tracking-widest rounded-lg hover:bg-blue-600 transition-colors"
            >
              同意する
            </button>
            <button 
              onClick={handleDecline}
              className="px-6 py-2 border border-slate-200 text-slate-500 text-[10px] font-bold tracking-widest rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors"
            >
              拒否する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
