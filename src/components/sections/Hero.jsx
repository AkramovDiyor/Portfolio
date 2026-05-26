import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-3xl z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm mb-6 animate-fade-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></span>
          Открыт к предложениям
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-up [animation-delay:200ms]">
          Привет, я <span className="gradient-text">Акрамов Диор</span>
        </h1>
        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8 animate-fade-up [animation-delay:400ms]">
          Frontend-разработчик с 3+ годами опыта. Создаю быстрые, красивые и отзывчивые веб-приложения.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:600ms]">
          <a href="#projects" className="px-6 py-3 rounded-full font-semibold bg-gradient-primary text-black hover:shadow-[0_10px_40px_rgba(0,212,255,0.3)] transition-transform hover:-translate-y-1">
            Мои проекты
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full font-semibold border border-white/20 text-text-primary hover:border-accent hover:text-accent transition-transform hover:-translate-y-1">
            Связаться со мной
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <svg className="w-6 h-6 stroke-text-secondary" viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;