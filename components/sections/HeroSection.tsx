'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  heroStats,
  searchLocations,
  searchPropertyTypes,
  searchBudgets,
} from '@/data/homeData';
import { socialLinks } from '@/data/companyData';

const heroImages = [
  { src: '/hero.jpg', alt: 'Luxury Real Estate Hero 1' },
  { src: '/hero2.jpg', alt: 'Luxury Real Estate Hero 2' },
  { src: '/hero3.jpg', alt: 'Luxury Real Estate Hero 3' },
  { src: '/hero4.jpg', alt: 'Luxury Real Estate Hero 4' }
];

export const HeroSection: React.FC = () => {
  const [location, setLocation] = useState(searchLocations[0]);
  const [propertyType, setPropertyType] = useState(searchPropertyTypes[0]);
  const [budget, setBudget] = useState(searchBudgets[0]);
  const [transactionType, setTransactionType] = useState<'buy' | 'rent'>('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Auto-rotating Hero Background Images
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveBgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParam = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : '';
    window.location.href = `/properties?location=${encodeURIComponent(
      location
    )}&type=${encodeURIComponent(propertyType)}&budget=${encodeURIComponent(budget)}${queryParam}`;
  };

  return (
    <section className="relative min-h-[100svh] lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-primary">
      {/* Background Image Carousel with Smooth Cross-Fade */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out transform scale-105 ${
              idx === activeBgIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        {/* Radial Gold Tint Overlay */}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.22),transparent_45%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

        {/* High-End Dark Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-primary/20 via-primary/70 to-primary/80" />

        {/* Slideshow Progress Dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2.5">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBgIndex(idx)}
              title={`Switch to image ${idx + 1}`}
              className={`w-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeBgIndex ? 'h-8 bg-secondary shadow-lg shadow-secondary/50' : 'h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Left Social Icons Floating Strip - only inside hero */}
      <div className="hidden xl:flex flex-col items-center gap-5 absolute left-4 2xl:left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="w-px h-12 bg-secondary/40" />
        {socialLinks.map((s) => (
          <a
            key={s.platform}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.platform}
            className="pointer-events-auto inline-flex items-center justify-center w-8 h-8 transition-all hover:scale-110 group"
          >
            <img
              src={s.iconImg}
              alt={s.platform}
              className="w-5 h-5 2xl:w-6 2xl:h-6 object-contain opacity-95 group-hover:opacity-100 transition-all"
            />
          </a>
        ))}
        <div className="w-px h-12 bg-secondary/40" />
      </div>

      {/* Main Content Area - Center Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:pl-24 max-w-[1280px] mx-auto w-full pt-20 sm:pt-24 lg:pt-16 pb-2">
        <div className="max-w-3xl flex flex-col gap-3 sm:gap-4 mx-auto md:mx-0 items-center md:items-start text-center md:text-left">

          {/* Gold Badge Pill */}
          <div className="hero-fade-up inline-flex items-center justify-center gap-2 bg-[#f4e8c1] text-[#4a3b10] border border-[#c5a059] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg">
            <span
              className="material-symbols-outlined text-base text-[#8c6b1d]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              workspace_premium
            </span>
            <span>ELITE MASTERPIECE COLLECTION</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-fade-up-delay-1 font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-extrabold tracking-tight leading-[1.1] max-w-2xl drop-shadow-md">
            Redefining The Zenith of <span className="text-secondary">Luxury Living</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-fade-up-delay-2 font-body text-white/95 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-medium">
            Exclusive high-end residences, Grade-A commercial spaces, and curated investment assets for the world&apos;s most discerning Investors.
          </p>

          {/* Mobile Search */}
          <div className="hero-fade-up-delay-2 md:hidden w-full max-w-lg pt-1">
            <form onSubmit={handleSearch}>
              <div className="bg-white p-2.5 pl-4 rounded-2xl shadow-2xl flex items-center justify-between gap-2 border border-gray-100">
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <span className="material-symbols-outlined text-gray-400 text-lg flex-shrink-0">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Search locations or projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-gray-900 text-xs font-semibold outline-none placeholder:text-gray-400"
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

          {/* CTA Buttons */}
          <div className="hero-fade-up-delay-2 flex flex-col xs:flex-row items-center gap-3 w-full xs:w-auto pt-1">
            <Link
              href="/properties"
              className="bg-secondary text-primary px-7 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-gold transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-2 group cursor-pointer w-full xs:w-auto"
            >
              Explore Properties
              <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-7 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-white/20 transition-all text-center cursor-pointer w-full xs:w-auto flex justify-center"
            >
              Book Consultation
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="hero-fade-up-delay-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-white/15 w-full">
            {heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 p-2 rounded-xl"
              >
                <span
                  className="material-symbols-outlined text-secondary text-base flex-shrink-0"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {stat.icon}
                </span>
                <span className="text-white text-[11px] font-bold uppercase tracking-wide leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Bottom Search Container (Desktop) */}
      <div className="hidden md:block relative z-20 w-full px-4 sm:px-8 lg:px-16 xl:pl-24 max-w-[1280px] mx-auto pb-4 lg:pb-6 pt-1">
        <form
          onSubmit={handleSearch}
          className="glass-card bg-primary/75 backdrop-blur-2xl p-4 lg:p-5 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-stretch gap-3 border border-white/20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
            {/* Location Select */}
            <div className="flex flex-col gap-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 transition-all hover:bg-white/15">
              <label className="text-[9px] text-secondary font-extrabold uppercase tracking-widest">
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
                <span className="material-symbols-outlined text-secondary text-sm absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Property Type Select */}
            <div className="flex flex-col gap-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 transition-all hover:bg-white/15">
              <label className="text-[9px] text-secondary font-extrabold uppercase tracking-widest">
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
                <span className="material-symbols-outlined text-secondary text-sm absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Budget Select */}
            <div className="flex flex-col gap-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 transition-all hover:bg-white/15">
              <label className="text-[9px] text-secondary font-extrabold uppercase tracking-widest">
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
                <span className="material-symbols-outlined text-secondary text-sm absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Transaction Type Radio */}
            <div className="flex flex-col gap-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 transition-all hover:bg-white/15">
              <span className="text-[9px] text-secondary font-extrabold uppercase tracking-widest">
                TRANSACTION TYPE
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
            className="bg-secondary text-primary px-7 py-3 rounded-xl font-extrabold flex items-center justify-center gap-2 hover:bg-gold transition-all cursor-pointer shadow-xl active:scale-95 text-xs tracking-wider uppercase whitespace-nowrap self-stretch lg:self-end"
          >
            <span className="material-symbols-outlined text-base">search</span>
            <span>Search Properties</span>
          </button>
        </form>
      </div>

      {/* Mobile Quick Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center md:hidden p-0">
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
              className="mt-2 w-full bg-secondary text-primary py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-gold transition-all shadow-lg text-center cursor-pointer"
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
