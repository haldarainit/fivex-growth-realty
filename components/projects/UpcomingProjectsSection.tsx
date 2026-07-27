import React from 'react';
import Link from 'next/link';
import { upcomingProjects } from '@/data/projectsData';

export const UpcomingProjectsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24 mb-16 sm:mb-24 lg:mb-32 overflow-x-hidden" id="upcoming">
      <div className="px-4 sm:px-8 max-w-container-max mx-auto">
        <div className="flex items-end justify-between mb-8 sm:mb-12 border-b border-gray-200 pb-4 sm:pb-6">
          <div>
            <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-1 block">
              Future Opportunities
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-primary font-bold">
              Upcoming Launches
            </h2>
          </div>
          <div className="hidden md:block text-secondary/30 font-display text-4xl sm:text-5xl font-bold select-none">
            02
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between border border-gray-100"
            >
              <div>
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm"
                    >
                      {project.badge.label}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl text-primary font-bold mb-1.5 group-hover:text-secondary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-tight line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-6 pt-1">
                <Link
                  href="/#contact"
                  className="text-primary font-bold flex items-center justify-between group-hover:text-secondary transition-colors text-xs uppercase tracking-wider cursor-pointer p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
                >
                  <span>Express Interest</span>
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
