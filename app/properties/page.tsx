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
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-20 px-4 sm:px-8 max-w-container-max mx-auto flex-grow w-full overflow-x-hidden">
        {/* Page Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-3">
            Exclusive Portfolios
          </h1>
          <p className="text-gray-600 max-w-2xl text-sm sm:text-base md:text-lg font-body leading-relaxed">
            Discover handpicked residential and commercial assets in global prime locations, curated for the discerning investor.
          </p>
        </header>

        {/* Quick Search & Mobile Horizontal Scroll Filter Bar */}
        <PropertyFilterBar />

        {/* Main Content Area: Sidebar (Desktop) + Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Sidebar Filters - Desktop Only */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <PropertySidebarFilter />
          </div>

          {/* Property Grid & Sorting */}
          <div className="flex-1 w-full min-w-0">
            <div className="flex flex-row justify-between items-center mb-6 sm:mb-8 gap-4 pb-3 border-b border-gray-100">
              <p className="text-gray-600 text-xs sm:text-sm font-body">
                <span className="font-bold text-primary">124</span> Properties Found
              </p>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                  Sort by:
                </span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 font-bold text-primary cursor-pointer text-xs sm:text-sm outline-none"
                >
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Newest Listed">Newest Listed</option>
                </select>
              </div>
            </div>

            {/* Property Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {detailedProperties.map((property) => (
                <DetailedPropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Load More Pagination */}
            <div className="mt-12 sm:mt-16 flex flex-col items-center gap-5">
              <p className="text-gray-500 text-xs sm:text-sm italic">
                Showing 4 of 124 exclusive properties
              </p>
              <div className="w-48 sm:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-1/12 rounded-full" />
              </div>
              <button className="group flex items-center gap-2 font-bold uppercase tracking-widest text-xs text-primary hover:text-secondary transition-all cursor-pointer py-2">
                Load More Assets
                <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">
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
