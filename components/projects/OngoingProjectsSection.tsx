import React from 'react';
import Link from 'next/link';
import { ongoingProjects } from '@/data/projectsData';

export const OngoingProjectsSection: React.FC = () => {
  return (
    <section className="px-margin-desktop max-w-container-max mx-auto mb-32" id="ongoing">
      <div className="flex items-end justify-between mb-12 border-b border-outline-variant pb-6">
        <div>
          <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
            Premium Inventory
          </span>
          <h2 className="font-display text-3xl text-primary font-bold">
            Ongoing Developments
          </h2>
        </div>
        <div className="hidden md:block text-outline-gold font-display text-5xl font-bold opacity-30 select-none">
          01
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {ongoingProjects.map((project) => (
          <div
            key={project.id}
            className="project-card transition-all duration-500 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 group border border-outline-variant/10 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {project.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`${badge.style} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-primary font-bold mb-1 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant flex items-center gap-1 text-sm font-body">
                      <span className="material-symbols-outlined text-sm text-secondary">
                        location_on
                      </span>
                      {project.location}
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="font-bold text-xl text-primary block font-display">
                      {project.startingPrice}
                    </span>
                    <span className="text-secondary font-bold text-xs uppercase tracking-wider">
                      {project.yieldText}
                    </span>
                  </div>
                </div>

                <p className="text-on-surface-variant font-body text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-8 pb-8">
              <Link
                href="/properties/zenith-penthouse"
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider shadow-md"
              >
                Get Project Details
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingProjectsSection;
