import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const About = () => {
  const { register } = useScrollReveal();

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-accent text-sm uppercase tracking-[3px]">Обо мне</div>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Узнайте меня ближе</h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Левая колонка с изображением */}
          <div className="relative" ref={register}>
            <div className="relative aspect-[4/5] rounded-2xl bg-bg-card border border-white/5 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-7xl bg-gradient-to-br from-bg-card to-bg-secondary">
                <img src="./assets/img.png" alt="" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-bg-card border border-white/10 rounded-xl p-4 backdrop-blur-md">
              <div className="text-3xl font-extrabold gradient-text">1+</div>
              <div className="text-text-secondary text-sm">Лет опыта</div>
            </div>
          </div>

          {/* Правая колонка с текстом */}
          <div ref={register}>
            <h3 className="text-3xl font-bold mb-4">Frontend Developer</h3>
            <p className="text-text-secondary text-lg mb-4">
              Я специализируюсь на создании современных веб-приложений с 
              использованием React, TypeScript и Next.js. Умею превращать 
              дизайн-макеты в pixel-perfect код с высокой производительностью.
            </p>
            <p className="text-text-secondary text-lg mb-6">
              Мой подход — это чистый код, продуманная архитектура и 
              внимание к деталям. Я верю, что отличный UI/UX — это не роскошь, 
              а необходимость для успешного продукта.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-text-secondary text-xs uppercase tracking-wider">Город</div>
                <div className="font-semibold">Казань, Россия</div>
              </div>
              <div>
                <div className="text-text-secondary text-xs uppercase tracking-wider">Занятость</div>
                <div className="font-semibold">Полная / Фриланс</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;