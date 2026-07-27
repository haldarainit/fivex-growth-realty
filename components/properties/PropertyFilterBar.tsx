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

export const PropertyFilterBar: React.FC<PropertyFilterBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState(propertyTypesOptions[0]);
  const [budget, setBudget] = useState(budgetOptions[0]);
  const [status, setStatus] = useState(statusOptions[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ location, propertyType, budget, status });
    }
  };

  return (
    <section className="bg-surface-container-low p-6 rounded-xl shadow-sm mb-12 border border-outline-variant/30">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Location
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              location_on
            </span>
            <input
              type="text"
              placeholder="City, Area or Zip"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none text-sm font-body text-primary"
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Property Type
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              apartment
            </span>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary appearance-none transition-all outline-none text-sm font-body text-primary cursor-pointer"
            >
              {propertyTypesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Budget
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              payments
            </span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary appearance-none transition-all outline-none text-sm font-body text-primary cursor-pointer"
            >
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            Status
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              verified
            </span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary appearance-none transition-all outline-none text-sm font-body text-primary cursor-pointer"
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-secondary flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
            Find Properties
          </button>
        </div>
      </form>
    </section>
  );
};

export default PropertyFilterBar;
