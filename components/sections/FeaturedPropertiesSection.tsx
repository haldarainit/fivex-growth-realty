'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import SectionContainer from '@/components/ui/SectionContainer';
import { unifiedProjects } from '@/data/projectsData';

const filterPillOptions = [
  'All',
  'Under ₹3 Cr',
  'Noida Expressway',
  'Gurugram',
  'Luxury Villas',
  'Commercial',
  'Delhi NCR',
];

export const FeaturedPropertiesSection: React.FC = () => {
  const [activePill, setActivePill] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const featuredList = useMemo(() => {
    return unifiedProjects.filter((project) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          project.title.toLowerCase().includes(q) ||
          project.location.toLowerCase().includes(q) ||
          project.cityName.toLowerCase().includes(q) ||
          project.type.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      // Pill filter logic
      if (activePill === 'All') return true;
      if (activePill === 'Under ₹3 Cr') return project.priceNumeric <= 30000000;
      if (activePill === 'Noida Expressway') return project.cityId === 'noida-expressway' || project.cityId === 'noida-sectors';
      if (activePill === 'Gurugram') return project.cityId === 'gurugram';
      if (activePill === 'Luxury Villas') return project.type.toLowerCase().includes('villa');
      if (activePill === 'Commercial') return project.type.toLowerCase().includes('commercial');
      if (activePill === 'Delhi NCR') return project.cityId === 'delhi-ncr';

      return true;
    });
  }, [activePill, searchQuery]);

  return (
    <SectionContainer id="projects" bgStyle="bg-surface-container/30">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="text-secondary text-xs uppercase font-extrabold tracking-widest bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
            Featured Projects Portfolio
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary font-extrabold tracking-tight">
            Flagship Masterpiece Projects
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl">
            Curated high-yield developments and luxury architectural landmarks across prime growth corridors.
          </p>
        </div>

        <Link
          href="/projects"
          className="hidden sm:inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md cursor-pointer whitespace-nowrap"
        >
          View All Projects
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>

      {/* Search & Pills Bar */}
      <div className="mb-8 space-y-3">
        <div className="relative w-full max-w-full">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
            search
          </span>
          <input
            type="text"
            placeholder="Search by Location, Project Title, or Category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-100/80 border border-gray-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none text-xs sm:text-sm font-semibold text-gray-900 placeholder:text-gray-400"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="bg-primary text-white px-4 py-2 rounded-full font-extrabold text-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-sm hover:bg-gray-800 transition-all"
          >
            <span className="material-symbols-outlined text-sm">tune</span>
            <span>Filters</span>
          </button>

          {filterPillOptions.map((pill) => {
            const isActive = activePill === pill;
            return (
              <button
                key={pill}
                onClick={() => setActivePill(pill)}
                className={`px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-secondary text-primary shadow-sm font-extrabold'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {featuredList.length > 0 ? (
          featuredList.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.badges.map((b, bIdx) => (
                        <span key={bIdx} className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase ${b.style}`}>
                          {b.label}
                        </span>
                      ))}
                    </div>
                    <span className="bg-white/90 text-primary text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-sm">
                      {project.type}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold text-white/80 uppercase tracking-wider">{project.cityName}</p>
                    <p className="text-xl font-extrabold text-secondary drop-shadow">{project.startingPrice}</p>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-display font-extrabold text-base text-primary group-hover:text-secondary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                    <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
                    {project.location}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full bg-slate-100 group-hover:bg-secondary text-primary py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  View Details
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-white rounded-3xl border border-gray-100 p-8">
            <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">search_off</span>
            <p className="text-gray-500 font-bold text-sm">No projects match your filter criteria.</p>
            <button
              onClick={() => {
                setActivePill('All');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA Button */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-xl active:scale-95 cursor-pointer"
        >
          View All Projects Directory →
        </Link>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl space-y-5 border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                <h3 className="font-display font-bold text-lg text-primary">Select Project Filter</h3>
              </div>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
              {filterPillOptions.map((pill) => (
                <button
                  key={pill}
                  onClick={() => {
                    setActivePill(pill);
                    setIsFilterModalOpen(false);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    activePill === pill
                      ? 'bg-primary text-white'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span>{pill}</span>
                  {activePill === pill && (
                    <span className="material-symbols-outlined text-sm text-secondary">check</span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsFilterModalOpen(false)}
              className="w-full py-3 bg-secondary text-primary font-extrabold text-xs uppercase tracking-wider rounded-xl hover:brightness-110 transition-all text-center cursor-pointer shadow-md"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default FeaturedPropertiesSection;
