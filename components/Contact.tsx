
import React, { useState } from 'react';
import { siteContent } from '../siteContent';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: '',
    position: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, company, department, position, message } = formData;
    
    // Construct email body with new fields
    const subject = encodeURIComponent(`Contact from ${name}`);
    const bodyContent = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      department ? `Department: ${department}` : null,
      position ? `Position: ${position}` : null,
      '',
      'Message:',
      message
    ].filter(Boolean).join('\n');

    const mailtoLink = `mailto:support@yamasakahorizon.com?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
    
    // Open email client
    // Note: This relies on the user having a default email application configured.
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Map internal state keys to input name attributes (converted to lowercase)
    setFormData(prev => ({ ...prev, [name.toLowerCase()]: value }));
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteContent.contact.address)}`;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-xs tracking-[0.4em] font-bold text-slate-400 uppercase">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8">お気軽にご相談ください</h2>
          <p className="text-slate-400 leading-relaxed mb-12 max-w-md">
            プロジェクトのご依頼、セミナーのご相談、採用についてなど、どんなことでもお気軽にお問い合わせください。<br/>
            <span className="text-[10px] text-slate-500 mt-2 block italic">※「SEND MESSAGE」をクリックするとお使いのメールソフトが起動します。</span>
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

        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800/30 p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg" 
                placeholder="お名前" 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                name="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg" 
                placeholder="メールアドレス" 
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Company</label>
            <input 
              type="text" 
              name="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg" 
              placeholder="所属企業・団体名" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Department</label>
              <input 
                type="text" 
                name="Department"
                value={formData.department}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg" 
                placeholder="部門名" 
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block tracking-widest">Position</label>
              <input 
                type="text" 
                name="Position"
                value={formData.position}
                onChange={handleChange}
                className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg" 
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
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-900/50 border border-slate-700 p-4 text-white focus:border-blue-500 outline-none transition-colors rounded-lg" 
              placeholder="お問い合わせ内容"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-blue-600 text-white text-xs font-bold tracking-[0.3em] hover:bg-blue-500 transition-all rounded-lg"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
