import React from 'react';

const ProjectCard = ({ title, description, icon, technologies, demoLink, githubLink }) => {
  return (
    <div className="group bg-bg-card border border-white/5 rounded-xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-accent/20 hover:shadow-2xl">
      <div className="relative h-56 bg-gradient-to-br from-bg-secondary to-bg-card flex items-center justify-center overflow-hidden">
        <span className="text-6xl opacity-30">{icon}</span>
        <div className="absolute inset-0 bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 bg-gradient-primary text-black rounded-full font-semibold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Подробнее →
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map(tech => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {demoLink && <a href={demoLink} className="text-accent text-sm hover:opacity-70 transition-opacity flex items-center gap-1">🔗 Live Demo</a>}
          {githubLink && <a href={githubLink} className="text-accent text-sm hover:opacity-70 transition-opacity flex items-center gap-1">📂 GitHub</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;