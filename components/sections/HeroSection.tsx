'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { heroStats } from '@/data/homeData';
import { socialLinks } from '@/data/companyData';
import {
  unifiedProjects,
  projectCityOptions,
  projectTypeOptions,
  projectPriceRanges,
} from '@/data/projectsData';
import CustomDropdown from '@/components/ui/CustomDropdown';

const heroImages = [
  { src: '/hero.jpg', alt: 'Luxury Real Estate Hero 1' },
  { src: '/hero2.jpg', alt: 'Luxury Real Estate Hero 2' },
  { src: '/hero3.jpg', alt: 'Luxury Real Estate Hero 3' },
  { src: '/hero4.jpg', alt: 'Luxury Real Estate Hero 4' },
];

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [selectedCityId, setSelectedCityId] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('All Types');
  const [selectedPriceRangeId, setSelectedPriceRangeId] = useState<string>('all');
  const [transactionType, setTransactionType] = useState<'buy' | 'rent'>('buy');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(e.target as Node) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format type options for CustomDropdown
  const typeDropdownOptions = useMemo(() => {
    return projectTypeOptions.map((t) => ({ id: t, label: t }));
  }, []);

  // Auto-rotating Hero Background Images
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Compute live search suggestions based on searchQuery
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return unifiedProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.cityName.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)
    ).slice(0, 4);
  }, [searchQuery]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();

    if (selectedCityId && selectedCityId !== 'all') {
      params.set('city', selectedCityId);
    }

    if (selectedType && selectedType !== 'All Types' && selectedType !== 'all') {
      params.set('type', selectedType);
    }

    if (selectedPriceRangeId && selectedPriceRangeId !== 'all') {
      params.set('price', selectedPriceRangeId);
    }

    if (searchQuery.trim()) {
      params.set('q', searchQuery.trim());
    }

    const queryString = params.toString();
    setIsFocused(false);
    router.push(`/projects${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <section className="relative min-h-[100svh] lg:h-screen lg:max-h-screen flex flex-col justify-between bg-primary">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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

        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.22),transparent_45%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-primary/20 via-primary/70 to-primary/85" />

        {/* Dots */}
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

      {/* Social Strip */}
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

      {/* Main Hero Header */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:pl-24 max-w-[1280px] mx-auto w-full pt-20 sm:pt-24 lg:pt-16 pb-2">
        <div className="max-w-3xl flex flex-col gap-3 sm:gap-4 mx-auto md:mx-0 items-center md:items-start text-center md:text-left">

          <div className="hero-fade-up inline-flex items-center justify-center gap-2 bg-[#f4e8c1] text-[#4a3b10] border border-[#c5a059] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-lg">
            <span
              className="material-symbols-outlined text-base text-[#8c6b1d]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              workspace_premium
            </span>
            <span>ELITE MASTERPIECE COLLECTION</span>
          </div>

          <h1 className="hero-fade-up-delay-1 font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-extrabold tracking-tight leading-[1.1] max-w-2xl drop-shadow-md">
            Redefining The Zenith of <span className="text-secondary">Luxury Living</span>
          </h1>

          <p className="hero-fade-up-delay-2 font-body text-white/95 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-medium">
            Exclusive high-end residences, Grade-A commercial spaces, and curated investment assets for discerning Investors.
          </p>

          {/* Compact Mobile CTA Buttons */}
          <div className="flex flex-row items-center gap-2.5 w-full xs:w-auto pt-0.5">
            <Link
              href="/projects"
              className="bg-secondary text-primary px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-gold transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-1.5 group cursor-pointer flex-1 xs:flex-initial whitespace-nowrap"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-sm sm:text-base transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-white/20 transition-all text-center cursor-pointer flex-1 xs:flex-initial whitespace-nowrap"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Search Bar with Upward Suggestions */}
          <div className="md:hidden w-full max-w-lg pt-2 relative z-30" ref={mobileSearchRef}>
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
                    onFocus={() => setIsFocused(true)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-gray-900 text-xs font-semibold outline-none placeholder:text-gray-400"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="bg-secondary text-primary p-2.5 rounded-xl hover:brightness-110 transition-all flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md"
                  aria-label="Filter Projects"
                >
                  <span className="material-symbols-outlined text-lg">tune</span>
                </button>
              </div>
            </form>

            {/* Mobile Auto-Suggestions */}
            {isFocused && suggestions.length > 0 && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[80] text-left">
                <div className="p-2 text-[10px] font-extrabold uppercase text-gray-400 tracking-wider bg-slate-50 border-b border-gray-100 flex items-center justify-between">
                  <span>Matching Projects ({suggestions.length})</span>
                  <button onClick={() => setIsFocused(false)} className="text-gray-400 hover:text-primary">×</button>
                </div>
                <div className="divide-y divide-gray-100 max-h-56 overflow-y-auto">
                  {suggestions.map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.slug}`}
                      onClick={() => setIsFocused(false)}
                      className="flex items-center gap-3 p-2.5 hover:bg-slate-50 transition-colors"
                    >
                      <img src={p.image} alt={p.title} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-primary truncate">{p.title}</p>
                        <p className="text-[10px] text-gray-500 truncate">{p.location}</p>
                      </div>
                      <span className="text-xs font-bold text-secondary flex-shrink-0">{p.startingPrice}</span>
                    </Link>
                  ))}
                </div>

                {/* Explore All Projects CTA Button on Mobile */}
                <div className="p-2 bg-slate-50 border-t border-gray-100">
                  <Link
                    href={`/projects${searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : ''}`}
                    onClick={() => setIsFocused(false)}
                    className="w-full bg-secondary text-primary py-2 px-3 rounded-xl font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:brightness-110 transition-all block text-center"
                  >
                    <span>Explore All Projects</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t border-white/15 w-full">
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

      {/* Desktop Search Filter Bar with UPWARD Auto-Suggestions */}
      <div className="hidden md:block relative z-30 w-full px-4 sm:px-8 lg:px-16 xl:pl-24 max-w-[1280px] mx-auto pb-4 lg:pb-6 pt-1">
        <form
          onSubmit={handleSearch}
          className="glass-card bg-primary/85 backdrop-blur-2xl p-4 lg:p-5 rounded-2xl shadow-2xl flex flex-col gap-3 border border-white/20 relative"
        >
          {/* Search Keyword Input Container */}
          <div className="relative z-40" ref={desktopSearchRef}>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-xl">
              search
            </span>
            <input
              type="text"
              placeholder="Search by project name, location, developer, or keyword..."
              value={searchQuery}
              onFocus={() => setIsFocused(true)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-xs font-bold py-3 pl-12 pr-4 outline-none placeholder:text-gray-300 focus:border-secondary transition-all"
            />

            {/* Desktop Auto-Suggest Dropdown */}
            {isFocused && suggestions.length > 0 && (
              <div className="absolute bottom-full left-0 right-0 mb-2.5 bg-white text-primary rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[80] p-2 text-left">
                <div className="p-2 text-[11px] font-extrabold uppercase text-gray-400 tracking-wider bg-slate-50 border-b border-gray-100 flex items-center justify-between">
                  <span>Top Project Matches ({suggestions.length})</span>
                  <button onClick={() => setIsFocused(false)} className="text-gray-400 hover:text-primary font-bold">×</button>
                </div>
                <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
                  {suggestions.map((p) => (
                    <Link
                      key={p.id}
                      href={`/projects/${p.slug}`}
                      onClick={() => setIsFocused(false)}
                      className="flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors"
                    >
                      <img src={p.image} alt={p.title} className="w-12 h-10 rounded-lg object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-extrabold text-primary truncate">{p.title}</p>
                        <p className="text-[11px] text-gray-500 truncate">{p.location} • {p.type}</p>
                      </div>
                      <span className="text-xs font-extrabold text-secondary flex-shrink-0">{p.startingPrice}</span>
                    </Link>
                  ))}
                </div>

                {/* Explore All Projects CTA Button inside suggestions window */}
                <div className="p-2.5 bg-slate-50 border-t border-gray-100 mt-1 rounded-b-xl flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-500">Looking for all listings?</span>
                  <Link
                    href={`/projects${searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : ''}`}
                    onClick={() => setIsFocused(false)}
                    className="bg-secondary text-primary px-4 py-1.5 rounded-lg font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:brightness-110 transition-all shadow-sm"
                  >
                    <span>Explore All Projects</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Custom Floating Dropdowns Grid */}
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 flex-1">

              {/* 1. Custom Location Dropdown */}
              <CustomDropdown
                label="LOCATION"
                options={projectCityOptions}
                selectedId={selectedCityId}
                onSelect={(id) => setSelectedCityId(id)}
                variant="glass"
              />

              {/* 2. Custom Project Type Dropdown */}
              <CustomDropdown
                label="PROJECT TYPE"
                options={typeDropdownOptions}
                selectedId={selectedType}
                onSelect={(id) => setSelectedType(id)}
                variant="glass"
              />

              {/* 3. Custom Budget Range Dropdown */}
              <CustomDropdown
                label="BUDGET RANGE"
                options={projectPriceRanges}
                selectedId={selectedPriceRangeId}
                onSelect={(id) => setSelectedPriceRangeId(id)}
                variant="glass"
              />

              {/* 4. Purpose Radio */}
              <div className="flex flex-col gap-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2 transition-all hover:bg-white/15">
                <span className="text-[9px] text-secondary font-extrabold uppercase tracking-widest">
                  PURPOSE
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
                    <span>Invest</span>
                  </label>
                </div>
              </div>

            </div>

            <button
              type="submit"
              className="bg-secondary text-primary px-7 py-3 rounded-xl font-extrabold flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-xl active:scale-95 text-xs tracking-wider uppercase whitespace-nowrap self-stretch lg:self-end"
            >
              <span className="material-symbols-outlined text-base">search</span>
              <span>Search Projects</span>
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Quick Filter Drawer using Custom Dropdowns with isInline=true */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center md:hidden p-0">
          <div className="bg-[#0a192f] text-white w-full rounded-t-3xl p-6 border-t border-secondary/30 shadow-2xl flex flex-col gap-5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">tune</span>
                <h3 className="font-display text-lg font-bold text-white">Filter Projects</h3>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-white/60 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {/* Mobile Custom Location Dropdown */}
              <CustomDropdown
                label="LOCATION"
                options={projectCityOptions}
                selectedId={selectedCityId}
                onSelect={(id) => setSelectedCityId(id)}
                variant="glass"
                isInline={true}
              />

              {/* Mobile Custom Type Dropdown */}
              <CustomDropdown
                label="PROJECT TYPE"
                options={typeDropdownOptions}
                selectedId={selectedType}
                onSelect={(id) => setSelectedType(id)}
                variant="glass"
                isInline={true}
              />

              {/* Mobile Custom Budget Dropdown */}
              <CustomDropdown
                label="BUDGET RANGE"
                options={projectPriceRanges}
                selectedId={selectedPriceRangeId}
                onSelect={(id) => setSelectedPriceRangeId(id)}
                variant="glass"
                isInline={true}
              />

              <button
                onClick={() => {
                  setIsMobileFilterOpen(false);
                  handleSearch();
                }}
                className="w-full bg-secondary text-primary py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 cursor-pointer mt-2"
              >
                Apply &amp; Search Projects →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
