'use client';

import React, { useState, useMemo } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import PropertyCard from '@/components/ui/PropertyCard';
import { featuredProperties } from '@/data/homeData';
import Link from 'next/link';

const filterPillOptions = [
  'All',
  'Under ₹5 Cr',
  'Ready to Move',
  '4 BHK',
  'Villa',
  'Noida Sector 150',
  'Commercial',
  'South Mumbai',
];

export const FeaturedPropertiesSection: React.FC = () => {
  const [activePill, setActivePill] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    return featuredProperties.filter((property) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          property.title.toLowerCase().includes(q) ||
          property.location.toLowerCase().includes(q) ||
          property.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      // Pill filter logic
      if (activePill === 'All') return true;
      if (activePill === 'Under ₹5 Cr') return true; // all featured are under or around 5Cr
      if (activePill === 'Ready to Move') return true;
      if (activePill === '4 BHK') {
        return property.specs.some((s) => s.label.includes('4 BHK'));
      }
      if (activePill === 'Villa') {
        return property.title.toLowerCase().includes('villa') || property.specs.some((s) => s.label.toLowerCase().includes('villa'));
      }
      if (activePill === 'Noida Sector 150') {
        return property.location.includes('Sector 150');
      }
      if (activePill === 'Commercial') {
        return property.specs.some((s) => s.label.toLowerCase().includes('office')) || property.title.toLowerCase().includes('commercial');
      }
      return true;
    });
  }, [activePill, searchQuery]);

  return (
    <SectionContainer id="properties" bgStyle="bg-surface-container/30">
      {/* Top Header - Matching Attached Image 2 */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-extrabold tracking-tight">
            Premium Properties
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl">
            Curated luxury listings for the discerning investor.
          </p>
        </div>

      </div>

      {/* Mobile Search & Horizontal Scroll Filter Bar - Matching Attached Image 2 */}
      <div className="mb-8 space-y-3">
        {/* Search Bar Input */}
        <div className="relative w-full max-w-full">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
            search
          </span>
          <input
            type="text"
            placeholder="Location, Project, or Developer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-100/80 border border-gray-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none text-xs sm:text-sm font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-normal"
          />
        </div>

        {/* Horizontal Scroll Filter Pills Row (Scrolls Left-Right on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          {/* First Pill: Filters Button */}
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-full font-extrabold text-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-sm hover:bg-gray-800 transition-all"
          >
            <span className="material-symbols-outlined text-sm">tune</span>
            <span>Filters</span>
          </button>

          {/* Filter Option Pills */}
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

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-white rounded-3xl border border-gray-100 p-8">
            <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">
              search_off
            </span>
            <p className="text-gray-500 font-bold text-sm">No properties match your filter criteria.</p>
            <button
              onClick={() => {
                setActivePill('All');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-black text-white text-xs font-bold rounded-xl hover:bg-gray-800 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-start sm:justify-end">
        <Link
          href="/properties"
          className="inline-flex w-full sm:w-auto justify-center border border-secondary/40 bg-white text-secondary px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-white transition-all whitespace-nowrap shadow-sm"
        >
          View More Properties
        </Link>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl space-y-5 animate-fade-in border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-black">tune</span>
                <h3 className="font-display font-bold text-lg text-gray-900">Select Filter</h3>
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
                      ? 'bg-black text-white'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <span>{pill}</span>
                  {activePill === pill && (
                    <span className="material-symbols-outlined text-sm">check</span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsFilterModalOpen(false)}
              className="w-full py-3 bg-secondary text-primary font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-gold transition-all text-center cursor-pointer shadow-md"
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
