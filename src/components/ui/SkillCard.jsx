import React from 'react';

const SkillCard = ({ icon, title, description, tags }) => {
  return (
    <div className="group bg-bg-card border border-white/5 rounded-xl p-6 transition-all duration-400 hover:-translate-y-1 hover:border-accent/20 hover:shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/20 text-accent">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;