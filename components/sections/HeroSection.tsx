'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  heroStats,
  searchLocations,
  searchPropertyTypes,
  searchBudgets,
} from '@/data/homeData';

export const HeroSection: React.FC = () => {
  const [location, setLocation] = useState(searchLocations[0]);
  const [propertyType, setPropertyType] = useState(searchPropertyTypes[0]);
  const [budget, setBudget] = useState(searchBudgets[0]);
  const [transactionType, setTransactionType] = useState<'buy' | 'rent'>('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParam = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : '';
    window.location.href = `/properties?location=${encodeURIComponent(
      location
    )}&type=${encodeURIComponent(propertyType)}&budget=${encodeURIComponent(budget)}${queryParam}`;
  };

  return (
    <section className="relative h-screen min-h-[640px] lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-primary">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVN_s62XvE1DVTH7KzTCcrQo8gSV66mswAxVm8h-gRiJk_ec_RpesK3Y2y9yjRyNsg485PZYQxkvfoTSmGG6sWqKQxiG6xlIVcq13jysrO1sACo_A0zvhxma74Bx4e5gXNNuzW7hHHpoMKtG-vaIZ5qLKS9wLf3lqffA5G-JLgWSBu-ESfE9KgKk0_PRjV3cPCc8epos9KpqFJaEElw8ffk4o1P6XA4XKW3BRP7MR8O8eQTXC886KvfNpS1_AvcVIuBb8HsJB3AEXN"
          alt="Luxury Real Estate Background"
          className="w-full h-full object-cover object-center scale-105 md:scale-100"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.25),transparent_35%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Main Content Area - Center Section (Desktop & Mobile) */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 max-w-[1280px] mx-auto w-full pt-20 sm:pt-24 lg:pt-20 pb-4 lg:pb-2">
        <div className="max-w-2xl flex flex-col gap-3 sm:gap-4 lg:gap-4 mx-auto md:mx-0 items-center md:items-start text-center md:text-left">
          
          {/* Badge Pill - Matching Attached Image 1 */}
          <div className="hero-fade-up inline-flex items-center justify-center gap-2 bg-[#f4e8c1]/95 text-[#4a3b10] border border-[#c5a059]/70 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-md">
            <span
              className="material-symbols-outlined text-sm text-[#8c6b1d]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              workspace_premium
            </span>
            <span>ELITE MASTERPIECE COLLECTION</span>
          </div>

          {/* Main Headline - Fits cleanly on Desktop 1 screen & matches Image 1 */}
          <h1 className="hero-fade-up-delay-1 font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-extrabold tracking-tight leading-[1.08] max-w-xl">
            Redefining The Zenith of Luxury Living
          </h1>

          {/* Subtitle */}
          <p className="hero-fade-up-delay-2 font-body text-white/85 text-xs sm:text-sm md:text-base lg:text-base leading-relaxed max-w-lg">
            Exclusive high-end residences curated for the world's most discerning Investors.
          </p>

          {/* Desktop CTA Buttons */}
          <div className="hero-fade-up-delay-2 hidden md:flex items-center gap-3 pt-1">
            <Link
              href="/properties"
              className="bg-secondary text-primary px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gold transition-all shadow-xl shadow-secondary/20 flex items-center gap-2 group cursor-pointer"
            >
              Explore Properties
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/enquire"
              className="border border-white/20 bg-white/10 backdrop-blur-xl text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/15 transition-all text-center cursor-pointer flex"
            >
              Book Consultation
            </Link>
          </div>

          {/* Desktop Stats Bar */}
          <div className="hero-fade-up-delay-3 hidden md:grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 pt-3 mt-1 border-t border-white/15 w-full">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-secondary text-base lg:text-lg flex-shrink-0"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {stat.icon}
                </span>
                <span className="text-white/80 text-[10px] lg:text-[11px] font-bold uppercase tracking-wide leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Bottom Search Container */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-16 max-w-[1280px] mx-auto pb-5 sm:pb-6 lg:pb-8">
        
        {/* Mobile View Bottom Floating Search Input (Matching Attached Image 1) */}
        <div className="md:hidden w-full max-w-lg mx-auto">
          <form onSubmit={handleSearch}>
            <div className="bg-white/95 backdrop-blur-xl p-2 pl-4 rounded-2xl shadow-2xl flex items-center justify-between gap-2 border border-white/40">
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <span className="material-symbols-outlined text-gray-400 text-xl flex-shrink-0">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search locations or projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-gray-900 text-xs sm:text-sm font-semibold outline-none placeholder:text-gray-400"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(true)}
                className="bg-black text-white p-3 rounded-xl hover:bg-gray-900 transition-all flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md"
                aria-label="Filter Properties"
              >
                <span className="material-symbols-outlined text-lg">tune</span>
              </button>
            </div>
          </form>
        </div>

        {/* Desktop View Full Form Box (Fits cleanly on 1 screen desktop height) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex glass-card bg-primary/45 p-4 lg:p-5 rounded-2xl shadow-2xl flex-col lg:flex-row items-stretch gap-3 lg:gap-4"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
            <div className="flex flex-col gap-1 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 transition-all hover:bg-white/8">
              <label className="text-[9px] text-white/50 font-bold uppercase tracking-widest">
                LOCATION
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-4 focus:ring-0 text-xs font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchLocations.map((loc) => (
                    <option key={loc} value={loc} className="bg-[#0a192f] text-white">
                      {loc}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/40 text-sm absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 transition-all hover:bg-white/8">
              <label className="text-[9px] text-white/50 font-bold uppercase tracking-widest">
                PROPERTY TYPE
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-4 focus:ring-0 text-xs font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchPropertyTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0a192f] text-white">
                      {type}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/40 text-sm absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 transition-all hover:bg-white/8">
              <label className="text-[9px] text-white/50 font-bold uppercase tracking-widest">
                BUDGET
              </label>
              <div className="relative">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-4 focus:ring-0 text-xs font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchBudgets.map((b) => (
                    <option key={b} value={b} className="bg-[#0a192f] text-white">
                      {b}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/40 text-sm absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 transition-all hover:bg-white/8">
              <span className="text-[9px] text-white/50 font-bold uppercase tracking-widest">
                TRANSACTION
              </span>
              <div className="flex items-center gap-4 pt-0.5">
                <label className="inline-flex items-center text-white text-xs font-bold cursor-pointer gap-1.5">
                  <input
                    type="radio"
                    name="hero-transaction-desktop"
                    checked={transactionType === 'buy'}
                    onChange={() => setTransactionType('buy')}
                    className="accent-secondary w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>Buy</span>
                </label>
                <label className="inline-flex items-center text-white text-xs font-bold cursor-pointer gap-1.5">
                  <input
                    type="radio"
                    name="hero-transaction-desktop"
                    checked={transactionType === 'rent'}
                    onChange={() => setTransactionType('rent')}
                    className="accent-secondary w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>Rent</span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-secondary text-primary px-7 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold transition-all cursor-pointer shadow-lg active:scale-95 text-xs tracking-wide uppercase whitespace-nowrap lg:self-end"
          >
            <span className="material-symbols-outlined text-base">search</span>
            Search Properties
          </button>
        </form>
      </div>

      {/* Mobile Quick Filter Drawer / Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center md:hidden p-0 animate-fade-in">
          <div className="bg-[#0a192f] text-white w-full rounded-t-3xl p-6 border-t border-secondary/30 shadow-2xl flex flex-col gap-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">tune</span>
                <h3 className="font-display text-lg font-bold text-white">Filter Properties</h3>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-white/60 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 rounded-xl p-3 text-sm font-semibold text-white outline-none"
                >
                  {searchLocations.map((loc) => (
                    <option key={loc} value={loc} className="bg-[#0a192f] text-white">
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 rounded-xl p-3 text-sm font-semibold text-white outline-none"
                >
                  {searchPropertyTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0a192f] text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-white/10 border border-white/15 rounded-xl p-3 text-sm font-semibold text-white outline-none"
                >
                  {searchBudgets.map((b) => (
                    <option key={b} value={b} className="bg-[#0a192f] text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Transaction
                </span>
                <div className="flex items-center gap-6 pt-1">
                  <label className="inline-flex items-center text-white text-sm font-semibold cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="hero-transaction-mobile"
                      checked={transactionType === 'buy'}
                      onChange={() => setTransactionType('buy')}
                      className="accent-secondary w-4 h-4"
                    />
                    <span>Buy</span>
                  </label>
                  <label className="inline-flex items-center text-white text-sm font-semibold cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="hero-transaction-mobile"
                      checked={transactionType === 'rent'}
                      onChange={() => setTransactionType('rent')}
                      className="accent-secondary w-4 h-4"
                    />
                    <span>Rent</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                setIsMobileFilterOpen(false);
                handleSearch(e);
              }}
              className="mt-2 w-full bg-secondary text-primary py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-gold transition-all shadow-lg text-center"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
