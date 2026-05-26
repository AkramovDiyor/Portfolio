import React from 'react';
import SkillProgressBar from '../ui/SkillProgressBar';

const Skills = () => {
  const skillsData = [
    { name: 'React / Next.js', icon: '', percent: 92 },
    { name: 'TypeScript', icon: '', percent: 88 },
    { name: 'JavaScript', icon: '', percent: 90 },
    { name: 'Tailwind / CSS', icon: '', percent: 85 },
    { name: 'Node.js / Express', icon: '', percent: 78 },
    { name: 'Git / GitHub', icon: '', percent: 85 },
    { name: 'Redux / Zustand', icon: '', percent: 80 },
    { name: 'Jest / Testing', icon: '', percent: 75 },
  ];

  const statsData = [
    { value: 5, label: 'Завершённых проектов' },
    { value: 1, label: 'Года опыта' },
    { value: 12, label: 'Технологий' },
    { value: 8, label: 'Счастливых клиентов' },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-accent text-sm uppercase tracking-[3px]">Навыки</div>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Мой стек технологий</h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mb-12 border-y border-white/5">
          {statsData.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold gradient-text">{stat.value}+</div>
              <div className="text-text-secondary text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Прогресс-бары */}
        <div className=" mx-auto rounded-2xl p-6 md:p-8 border border-white/5">
          <h3 className="text-2xl font-bold mb-6 text-center">Профессиональные навыки</h3>
          {skillsData.map(skill => (
            <SkillProgressBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;