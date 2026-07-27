import React from 'react';
import Link from 'next/link';
import { upcomingProjects } from '@/data/projectsData';

export const UpcomingProjectsSection: React.FC = () => {
  return (
    <section className="bg-surface-container py-24 mb-32" id="upcoming">
      <div className="px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-outline pb-6">
          <div>
            <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
              Future Opportunities
            </span>
            <h2 className="font-display text-3xl text-primary font-bold">
              Upcoming Launches
            </h2>
          </div>
          <div className="hidden md:block text-outline-gold font-display text-5xl font-bold opacity-30 select-none">
            02
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between border border-outline-variant/10"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${project.badge.style} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider`}
                    >
                      {project.badge.label}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl text-primary font-bold mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs font-bold uppercase tracking-tight mb-4">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href="/#contact"
                  className="text-primary font-bold flex items-center gap-2 group-hover:text-secondary transition-colors text-xs uppercase tracking-wider cursor-pointer"
                >
                  Express Interest
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjectsSection;
