import React from 'react';
import { completedProjects } from '@/data/projectsData';

export const CompletedProjectsSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 max-w-container-max mx-auto mb-16 sm:mb-24 lg:mb-32 overflow-x-hidden" id="completed">
      <div className="flex items-end justify-between mb-8 sm:mb-12 border-b border-gray-200 pb-4 sm:pb-6">
        <div>
          <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-1 block">
            Track Record
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-primary font-bold">
            Completed Masterpieces
          </h2>
        </div>
        <div className="hidden md:block text-secondary/30 font-display text-4xl sm:text-5xl font-bold select-none">
          03
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {completedProjects.map((project) => (
          <div
            key={project.id}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-square shadow-md"
          >
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 text-white pr-4">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-secondary">
                {project.completedYear}
              </p>
              <h4 className="font-display font-bold text-base sm:text-lg text-white line-clamp-1">{project.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompletedProjectsSection;
