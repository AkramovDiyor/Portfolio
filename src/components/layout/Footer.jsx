import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: '🐙', href: 'https://github.com/username', label: 'GitHub' },
    { icon: '💼', href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
    { icon: '💬', href: 'https://t.me/username', label: 'Telegram' },
    { icon: '🐦', href: 'https://twitter.com/username', label: 'Twitter' },
  ];

  return (
    <footer className="text-center py-12 px-6 border-t border-white/5">
      <div className="flex justify-center gap-4 mb-6">
        {socialLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-bg-card border border-white/10 flex items-center justify-center text-xl transition-all hover:border-accent hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,212,255,0.2)]"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-text-secondary text-sm">
        © 2025 Иван Петров. Создано с ❤️ и ☕
      </p>
    </footer>
  );
};

export default Footer;