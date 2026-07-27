import React from 'react';
import { completedProjects } from '@/data/projectsData';

export const CompletedProjectsSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto mb-32" id="completed">
      <div className="flex items-end justify-between mb-12 border-b border-outline-variant pb-6">
        <div>
          <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
            Track Record
          </span>
          <h2 className="font-display text-3xl text-primary font-bold">
            Completed Masterpieces
          </h2>
        </div>
        <div className="hidden md:block text-outline-gold font-display text-5xl font-bold opacity-30 select-none">
          03
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
        {completedProjects.map((project) => (
          <div
            key={project.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square shadow-md"
          >
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-80">
                {project.completedYear}
              </p>
              <h4 className="font-display font-bold text-lg">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompletedProjectsSection;
