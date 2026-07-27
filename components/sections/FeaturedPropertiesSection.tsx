'use client';

import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import PropertyCard from '@/components/ui/PropertyCard';
import { featuredProperties } from '@/data/homeData';
import Link from 'next/link';

export const FeaturedPropertiesSection: React.FC = () => {
  return (
    <SectionContainer id="properties" bgStyle="bg-surface-container/30">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-20 gap-6">
        <div className="space-y-3">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">
            Curated Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary font-bold">
            Featured Properties
          </h2>
        </div>

        {/* View All & Nav Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            href="/properties"
            className="border border-secondary text-secondary px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-primary transition-all whitespace-nowrap"
          >
            View All Properties
          </Link>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturedPropertiesSection;
