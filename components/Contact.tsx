
import React, { useState } from 'react';
import { siteContent } from '../siteContent';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: '',
    position: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // -------------------------------------------------------------------------
    // 【設定済み】Web3Formsのアクセスキー
    // -------------------------------------------------------------------------
    const accessKey = '92f75e25-e48b-4a88-96fc-c16f9cea1dc8'; 

    const payload = {
      access_key: accessKey,
      subject: "ヤマサカホライズン公式サイト",
      from_name: "ヤマサカホライゾン 公式サイト",
      // メールの受信時に日本語で項目が表示されるようにキー名を日本語に設定
      "お名前": formData.name,
      "メールアドレス": formData.email,
      "会社・団体名": formData.company,
      "部署名": formData.department,
      "役職名": formData.position,
      "お問い合わせ内容": formData.message,
      // replytoを設定することで返信先をユーザーのアドレスに指定
      replyto: formData.email,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '', email: '', company: '', department: '', position: '', message: ''
        });
      } else {
        console.error("Web3Forms Error:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Network Error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Inputのname属性（小文字）をformDataのキーにマッピング
    setFormData(prev => ({ ...prev, [name.toLowerCase()]: value }));
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteContent.contact.address)}`;

  if (status === 'success') {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center animate-in fade-in zoom-in duration-500">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full mb-8 shadow-2xl shadow-blue-500/20">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold mb-4">送信が完了しました</h2>
        <p className="text-slate-400 mb-12">
          お問い合わせありがとうございます。内容を確認次第、担当者よりご連絡させていただきます。
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-12 py-4 border border-slate-700 text-xs font-bold tracking-widest hover:bg-white hover:text-slate-900 transition-all rounded-full"
        >
          BACK TO FORM / 戻る
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-xs tracking-[0.4em] font-bold text-slate-400 uppercase">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">お気軽にご相談ください</h2>
          <p className="text-slate-400 leading-relaxed mb-12 max-w-md">
            プロジェクトのご依頼、セミナーのご相談、採用についてなど、どんなことでもお気軽にお問い合わせください。<br/>
            <span className="text-[10px] text-blue-500 mt-4 block font-bold tracking-wider">※送信完了後、ご記入いただいたメールアドレスに通知が届きます。</span>
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <a href={`mailto:${siteContent.contact.email}`} className="text-slate-300 text-sm hover:text-blue-400 transition-colors">{siteContent.contact.email}</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-300 text-sm hover:text-blue-400 transition-colors border-b border-dotted border-slate-600 pb-0.5"
              >
                {siteContent.contact.address}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800/30 p-8 rounded-2xl relative border border-slate-700/50">
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-4 rounded-lg mb-4">
              送信エラーが発生しました。アクセスキーが正しいか、メールアドレスの認証が終わっているかご確認ください。
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="Name"
                required
                disabled={status === 'submitting'}
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg disabled:opacity-50" 
                placeholder="お名前" 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="Email"
                required
                disabled={status === 'submitting'}
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg disabled:opacity-50" 
                placeholder="メールアドレス" 
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Company</label>
            <input 
              type="text" 
              name="Company"
              disabled={status === 'submitting'}
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg disabled:opacity-50" 
              placeholder="所属企業・団体名" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Department</label>
              <input 
                type="text" 
                name="Department"
                disabled={status === 'submitting'}
                value={formData.department}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg disabled:opacity-50" 
                placeholder="部門名" 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Position</label>
              <input 
                type="text" 
                name="Position"
                disabled={status === 'submitting'}
                value={formData.position}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg disabled:opacity-50" 
                placeholder="役職名" 
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Message <span className="text-red-500">*</span></label>
            <textarea 
              rows={4} 
              name="Message"
              required
              disabled={status === 'submitting'}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg disabled:opacity-50 resize-none" 
              placeholder="お問い合わせ内容"
            ></textarea>
          </div>
          <button 
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 bg-blue-600 text-white text-xs font-bold tracking-[0.3em] hover:bg-blue-500 transition-all rounded-lg flex justify-center items-center space-x-2 disabled:bg-slate-700 shadow-xl shadow-blue-600/20"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>SENDING...</span>
              </>
            ) : (
              <span>SEND MESSAGE</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
