import React from 'react';
import Link from 'next/link';
import { ongoingProjects } from '@/data/projectsData';

export const OngoingProjectsSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 max-w-container-max mx-auto mb-16 sm:mb-24 lg:mb-32 overflow-x-hidden" id="ongoing">
      <div className="flex items-end justify-between mb-8 sm:mb-12 border-b border-gray-200 pb-4 sm:pb-6">
        <div>
          <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-1 block">
            Premium Inventory
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-primary font-bold">
            Ongoing Developments
          </h2>
        </div>
        <div className="hidden md:block text-secondary/30 font-display text-4xl sm:text-5xl font-bold select-none">
          01
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {ongoingProjects.map((project) => (
          <div
            key={project.id}
            className="project-card transition-all duration-300 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 group border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-60 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap max-w-[85%]">
                  {project.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm"
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-7 space-y-3">
                <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl sm:text-2xl text-primary font-bold mb-1 group-hover:text-secondary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 flex items-center gap-1 text-xs sm:text-sm font-body truncate">
                      <span className="material-symbols-outlined text-sm text-secondary flex-shrink-0">
                        location_on
                      </span>
                      {project.location}
                    </p>
                  </div>
                  <div className="text-left xs:text-right flex-shrink-0">
                    <span className="font-bold text-lg sm:text-xl text-[#c5a059] block font-display">
                      {project.startingPrice}
                    </span>
                    <span className="text-gray-400 font-bold text-[10px] uppercase tracking-wider">
                      {project.yieldText}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 font-body text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="px-5 sm:px-7 pb-6 pt-1">
              <Link
                href="/properties/zenith-penthouse"
                className="w-full py-3.5 bg-black text-white font-extrabold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider shadow-sm text-center"
              >
                Get Project Details
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingProjectsSection;
