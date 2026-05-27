import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Обо мне', href: '#about' },
    { name: 'Навыки', href: '#skills' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-bg-primary/95 backdrop-blur-md' : 'py-4 bg-bg-primary/80 backdrop-blur-md'
    } border-b border-white/5`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">
          &lt;AD /&gt;
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map(item => (
            <li key={item.name}>
              <a href={item.href} className="text-text-secondary hover:text-text-primary font-medium transition relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden flex flex-col gap-1.5 z-50" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile menu */}
        <div className={`fixed top-0 right-0 h-full w-3/4 bg-bg-secondary/95 backdrop-blur-lg border-l border-white/10 transition-transform duration-400 z-40 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-lg">
            {navItems.map(item => (
              <li key={item.name}>
                <a href={item.href} onClick={() => setMobileOpen(false)} className="text-text-secondary hover:text-text-primary transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;