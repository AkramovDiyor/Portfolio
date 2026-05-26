import React from 'react';
import TimelineItem from '../ui/TimelineItem';
import { experiences } from '../../data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="text-accent text-sm uppercase tracking-[3px]">Опыт</div>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Мой профессиональный путь</h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-transparent"></div>
          
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;