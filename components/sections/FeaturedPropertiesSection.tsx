'use client';

import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import PropertyCard from '@/components/ui/PropertyCard';
import { featuredProperties } from '@/data/homeData';
import Link from 'next/link';

export const FeaturedPropertiesSection: React.FC = () => {
  return (
    <SectionContainer id="properties" bgStyle="bg-surface-container/30">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-6">
        <div className="space-y-3 max-w-2xl">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">
            Curated Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary font-bold">
            Featured Properties
          </h2>
          <p className="text-primary/60 text-sm sm:text-base leading-relaxed max-w-xl">
            Handpicked listings with strong appreciation potential, polished for a faster decision on mobile and desktop.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Link
            href="/properties"
            className="border border-secondary/30 bg-white text-secondary px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-primary transition-all whitespace-nowrap shadow-sm"
          >
            View All Properties
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturedPropertiesSection;
