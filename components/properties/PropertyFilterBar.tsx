'use client';

import React, { useState } from 'react';
import {
  propertyTypesOptions,
  budgetOptions,
  statusOptions,
} from '@/data/propertiesData';

interface PropertyFilterBarProps {
  onSearch?: (filters: {
    location: string;
    propertyType: string;
    budget: string;
    status: string;
  }) => void;
}

const mobilePillFilters = [
  'Under ₹5 Cr',
  'Ready to Move',
  '4 BHK',
  'Villa',
  'Penthouse',
  'Commercial',
  'South Mumbai',
  'Noida',
];

export const PropertyFilterBar: React.FC<PropertyFilterBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState(propertyTypesOptions[0]);
  const [budget, setBudget] = useState(budgetOptions[0]);
  const [status, setStatus] = useState(statusOptions[0]);
  const [activePill, setActivePill] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ location, propertyType, budget, status });
    }
  };

  const handlePillClick = (pill: string) => {
    const nextPill = activePill === pill ? '' : pill;
    setActivePill(nextPill);
    if (onSearch) {
      onSearch({
        location: nextPill.includes('Noida') || nextPill.includes('Mumbai') ? nextPill : location,
        propertyType: nextPill.includes('Villa') || nextPill.includes('Commercial') ? nextPill : propertyType,
        budget: nextPill.includes('Cr') ? nextPill : budget,
        status: nextPill.includes('Ready') ? nextPill : status,
      });
    }
  };

  return (
    <section className="mb-8">
      {/* Mobile Horizontal Filter Pill Bar (Matching Image 2) */}
      <div className="space-y-3 mb-6">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
            search
          </span>
          <input
            type="text"
            placeholder="Location, Project, or Developer"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-100/90 border border-gray-200/80 rounded-2xl focus:bg-white focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none text-xs sm:text-sm font-semibold text-gray-900 placeholder:text-gray-400"
          />
        </div>

        {/* Horizontal Left-Right Scroll Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-full font-extrabold text-xs flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-sm hover:bg-gray-800 transition-all"
          >
            <span className="material-symbols-outlined text-sm">tune</span>
            <span>Filters</span>
          </button>

          {mobilePillFilters.map((pill) => {
            const isActive = activePill === pill;
            return (
              <button
                key={pill}
                onClick={() => handlePillClick(pill)}
                className={`px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-secondary text-primary font-extrabold shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Detailed Multi-Select Form Bar */}
      <form
        onSubmit={handleSubmit}
        className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-primary/5 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-outline-variant/30 shadow-sm"
      >
        <div className="flex flex-col gap-2 rounded-2xl bg-white px-4 py-3.5 shadow-sm border border-outline-variant/20">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
            Location
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              location_on
            </span>
            <input
              type="text"
              placeholder="City, Area or Zip"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none text-xs font-body text-primary"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl bg-white px-4 py-3.5 shadow-sm border border-outline-variant/20">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
            Property Type
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              apartment
            </span>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary appearance-none transition-all outline-none text-xs font-body text-primary cursor-pointer"
            >
              {propertyTypesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl bg-white px-4 py-3.5 shadow-sm border border-outline-variant/20">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
            Budget
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              payments
            </span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary appearance-none transition-all outline-none text-xs font-body text-primary cursor-pointer"
            >
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl bg-white px-4 py-3.5 shadow-sm border border-outline-variant/20">
          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
            Status
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              verified
            </span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-outline-variant/40 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary appearance-none transition-all outline-none text-xs font-body text-primary cursor-pointer"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-secondary flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-lg">search</span>
            Find Properties
          </button>
        </div>
      </form>

      {/* Mobile Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl space-y-5 animate-fade-in border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-black">tune</span>
                <h3 className="font-display font-bold text-lg text-gray-900">All Filters</h3>
              </div>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 outline-none"
                >
                  {propertyTypesOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Budget Range
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 outline-none"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-gray-100 border border-gray-200 rounded-xl p-3 text-xs font-bold text-gray-900 outline-none"
                >
                  {statusOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={(e) => {
                setIsFilterModalOpen(false);
                handleSubmit(e);
              }}
              className="w-full py-3.5 bg-black text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-800 transition-all text-center cursor-pointer shadow-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyFilterBar;
