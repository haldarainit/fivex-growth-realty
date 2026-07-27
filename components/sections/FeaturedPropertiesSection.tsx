'use client';

import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import PropertyCard from '@/components/ui/PropertyCard';
import { featuredProperties } from '@/data/homeData';

export const FeaturedPropertiesSection: React.FC = () => {
  return (
    <SectionContainer id="properties" bgStyle="bg-surface-container/30">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="space-y-4">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">
            Curated Portfolio
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-primary font-bold">
            Featured Properties
          </h2>
        </div>
        <div className="flex gap-4">
          <button
            aria-label="Previous Properties"
            className="w-14 h-14 rounded-full border border-outline-variant hover:border-secondary hover:text-secondary transition-all flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            aria-label="Next Properties"
            className="w-14 h-14 rounded-full border border-outline-variant hover:border-secondary hover:text-secondary transition-all flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturedPropertiesSection;
