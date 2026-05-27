import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { } from "react-icons/fa";
const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/AkramovDiyor', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/диор-акрамов-455b64365?utm_source=share_via&utm_content=profile&utm_medium=member_ios', label: 'LinkedIn' },
    { icon: <FaTelegram />, href: 'https://t.me/AkramovDiyo', label: 'Telegram' },
    { 
      icon: <CgMail />, 
      href: 'mailto:akramovdiyordev@gmail.com', 
      label: 'Gmail' 
    },
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
        © 2025 Акрамов Диёр. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;