import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Имитация отправки
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  const contactLinks = [
    { icon: '', label: 'Email', value: 'akramovdiyordev@gmail.com', href: 'akramovdiyordev@gmail.com' },
    { icon: '', label: 'Telegram', value: '@AkramovDiyor', href: 'https://t.me/AkramovDiyor' },
    { icon: '', label: 'GitHub', value: 'github.com/AkramovDiyor', href: 'https://github.com/AkramovDiyor' },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-accent text-sm uppercase tracking-[3px]">Контакты</div>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Давайте работать вместе</h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Левая колонка - контактная информация */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Есть проект? Напишите мне!</h3>
            <p className="text-text-secondary text-lg mb-8">
              Я всегда открыт к интересным предложениям и новым проектам. 
              Давайте обсудим, как я могу помочь вашему бизнесу.
            </p>
            
            <div className="space-y-4">
              {contactLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg-card border border-white/5 rounded-xl transition-all hover:border-accent/20 hover:translate-x-1"
                >
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-xl">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-text-secondary text-xs">{link.label}</div>
                    <div className="font-semibold">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Правая колонка - форма */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 bg-bg-card border border-white/10 rounded-xl text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <input
              type="email"
              placeholder="Ваш email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 bg-bg-card border border-white/10 rounded-xl text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <input
              type="text"
              placeholder="Тема"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full p-4 bg-bg-card border border-white/10 rounded-xl text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <textarea
              placeholder="Ваше сообщение..."
              required
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-4 bg-bg-card border border-white/10 rounded-xl text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-vertical"
            ></textarea>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-4 rounded-xl font-bold text-black transition-all ${
                status === 'sending'
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-primary hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,212,255,0.3)]'
              }`}
            >
              {status === 'sending' ? '⏳ Отправка...' : status === 'sent' ? '✅ Отправлено!' : '🚀 Отправить сообщение'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;