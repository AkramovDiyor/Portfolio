import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-accent text-sm uppercase tracking-[3px]">Портфолио</div>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Мои проекты</h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;