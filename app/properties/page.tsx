'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import PropertyFilterBar from '@/components/properties/PropertyFilterBar';
import PropertySidebarFilter from '@/components/properties/PropertySidebarFilter';
import DetailedPropertyCard from '@/components/ui/DetailedPropertyCard';
import { detailedProperties } from '@/data/propertiesData';

export default function PropertiesPage() {
  const [sortOption, setSortOption] = useState('Price: High to Low');

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex-grow">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Exclusive Portfolios
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-lg font-body">
            Discover handpicked residential and commercial assets in global prime locations, curated for the discerning investor.
          </p>
        </header>

        {/* Quick Search & Filter Bar */}
        <PropertyFilterBar />

        {/* Main Content Area: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <PropertySidebarFilter />

          {/* Property Grid & Sorting */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <p className="text-on-surface-variant font-body">
                <span className="font-bold text-primary">124</span> Properties Found
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-outline uppercase tracking-wider">
                  Sort by:
                </span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 font-bold text-primary cursor-pointer text-sm"
                >
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Newest Listed">Newest Listed</option>
                </select>
              </div>
            </div>

            {/* Property Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedProperties.map((property) => (
                <DetailedPropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Load More Pagination */}
            <div className="mt-16 flex flex-col items-center gap-6">
              <p className="text-on-surface-variant text-sm italic">
                Showing 4 of 124 exclusive properties
              </p>
              <div className="w-64 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-1/12 rounded-full" />
              </div>
              <button className="group flex items-center gap-3 font-bold uppercase tracking-widest text-xs text-primary hover:text-secondary transition-all cursor-pointer">
                Load More Assets
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                  expand_more
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
