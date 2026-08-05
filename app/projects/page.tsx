'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import {
  unifiedProjects,
  getFilteredProjects,
  projectCityOptions,
  projectTypeOptions,
  projectStatusOptions,
  projectPriceRanges,
  projectSortOptions,
} from '@/data/projectsData';
import { UnifiedProject } from '@/types';
import CustomDropdown from '@/components/ui/CustomDropdown';

function ECommerceProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read initial filter values from URL params
  const initialCity = searchParams.get('city') || 'all';
  const initialType = searchParams.get('type') || 'All Types';
  const initialStatus = searchParams.get('status') || 'All Status';
  const initialPrice = searchParams.get('price') || 'all';
  const initialSort = searchParams.get('sort') || 'featured';
  const initialSearch = searchParams.get('q') || '';

  const [city, setCity] = useState(initialCity);
  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState(initialStatus);
  const [priceRange, setPriceRange] = useState(initialPrice);
  const [minLakhs, setMinLakhs] = useState('');
  const [maxLakhs, setMaxLakhs] = useState('');
  const [sort, setSort] = useState(initialSort);
  const [search, setSearch] = useState(initialSearch);

  // View Mode: 'grid' or 'list'
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Favorites tracking
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Sync state with URL params
  useEffect(() => {
    setCity(searchParams.get('city') || 'all');
    setType(searchParams.get('type') || 'All Types');
    setStatus(searchParams.get('status') || 'All Status');
    setPriceRange(searchParams.get('price') || 'all');
    setSort(searchParams.get('sort') || 'featured');
    setSearch(searchParams.get('q') || '');
  }, [searchParams]);

  // Helper to sync changes to URL
  const updateUrlFilters = (updated: {
    city?: string;
    type?: string;
    status?: string;
    price?: string;
    sort?: string;
    search?: string;
  }) => {
    const params = new URLSearchParams();

    const fCity = updated.city !== undefined ? updated.city : city;
    const fType = updated.type !== undefined ? updated.type : type;
    const fStatus = updated.status !== undefined ? updated.status : status;
    const fPrice = updated.price !== undefined ? updated.price : priceRange;
    const fSort = updated.sort !== undefined ? updated.sort : sort;
    const fSearch = updated.search !== undefined ? updated.search : search;

    if (fCity && fCity !== 'all') params.set('city', fCity);
    if (fType && fType !== 'All Types' && fType !== 'all') params.set('type', fType);
    if (fStatus && fStatus !== 'All Status' && fStatus !== 'all') params.set('status', fStatus);
    if (fPrice && fPrice !== 'all') params.set('price', fPrice);
    if (fSort && fSort !== 'featured') params.set('sort', fSort);
    if (fSearch && fSearch.trim() !== '') params.set('q', fSearch.trim());

    const queryString = params.toString();
    router.push(`/projects${queryString ? `?${queryString}` : ''}`, { scroll: false });
  };

  const handleResetFilters = () => {
    setCity('all');
    setType('All Types');
    setStatus('All Status');
    setPriceRange('all');
    setMinLakhs('');
    setMaxLakhs('');
    setSort('featured');
    setSearch('');
    router.push('/projects', { scroll: false });
  };

  const customMinNumeric = useMemo(() => {
    const val = parseFloat(minLakhs);
    return !isNaN(val) && val > 0 ? val * 100000 : undefined;
  }, [minLakhs]);

  const customMaxNumeric = useMemo(() => {
    const val = parseFloat(maxLakhs);
    return !isNaN(val) && val > 0 ? val * 100000 : undefined;
  }, [maxLakhs]);

  const filteredProjects: UnifiedProject[] = useMemo(() => {
    return getFilteredProjects({
      city,
      type,
      status,
      priceRange,
      customMinPrice: customMinNumeric,
      customMaxPrice: customMaxNumeric,
      sort,
      search,
    });
  }, [city, type, status, priceRange, customMinNumeric, customMaxNumeric, sort, search]);

  const activeFiltersCount =
    (city !== 'all' ? 1 : 0) +
    (type !== 'All Types' && type !== 'all' ? 1 : 0) +
    (status !== 'All Status' && status !== 'all' ? 1 : 0) +
    (priceRange !== 'all' ? 1 : 0) +
    (minLakhs || maxLakhs ? 1 : 0) +
    (search.trim() !== '' ? 1 : 0);

  return (
    <main className="pt-24 pb-20 bg-slate-50 min-h-screen">

      {/* Top Breadcrumb & E-Commerce Page Title Header */}
      <section className="bg-white border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
              <Link href="/" className="hover:text-secondary">Home</Link>
              <span>/</span>
              <span className="text-primary font-bold">Projects Directory</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
              Real Estate Projects &amp; Properties
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md">
            Browse through verified luxury residential, commercial, villa, and plot developments with live filters.
          </p>
        </div>
      </section>

      {/* E-Commerce Catalog Layout */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left E-Commerce Filter Sidebar (Desktop: 3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-6">

              {/* Sidebar Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">tune</span>
                  <h2 className="font-display font-extrabold text-base text-primary">Filter Projects</h2>
                </div>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-bold text-secondary hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Search Field */}
              <div>
                <label className="block text-xs font-extrabold text-primary mb-2 uppercase tracking-wider">
                  Search Keyword
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Title, location, keyword..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      updateUrlFilters({ search: e.target.value });
                    }}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs font-semibold text-primary outline-none focus:border-secondary transition-all"
                  />
                  {search && (
                    <button
                      onClick={() => {
                        setSearch('');
                        updateUrlFilters({ search: '' });
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* 1. Location / City Filter List */}
              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-3">
                  Locations &amp; Cities
                </h3>
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                  {projectCityOptions.map((opt) => {
                    const isSelected = city === opt.id;
                    const count = opt.id === 'all'
                      ? unifiedProjects.length
                      : unifiedProjects.filter((p) => p.cityId === opt.id).length;

                    return (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setCity(opt.id);
                          updateUrlFilters({ city: opt.id });
                        }}
                        className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-white font-bold shadow-sm'
                            : 'text-gray-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate pr-2">{opt.label}</span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            isSelected ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Project Type / Category Filter */}
              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-3">
                  Project Type
                </h3>
                <div className="space-y-1.5">
                  {projectTypeOptions.map((opt) => {
                    const isSelected = type === opt || (type === 'all' && opt === 'All Types');
                    return (
                      <button
                        key={opt}
                        onClick={() => {
                          setType(opt);
                          updateUrlFilters({ type: opt });
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-secondary text-white font-extrabold shadow-sm'
                            : 'text-gray-700 hover:bg-slate-100'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Budget Range */}
              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-3">
                  Budget Presets
                </h3>
                <div className="space-y-2">
                  {projectPriceRanges.map((opt) => {
                    const isChecked = priceRange === opt.id;
                    return (
                      <label
                        key={opt.id}
                        className={`flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                          isChecked ? 'bg-secondary text-white font-bold' : 'text-gray-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="priceRangeDesktop"
                          checked={isChecked}
                          onChange={() => {
                            setPriceRange(opt.id);
                            setMinLakhs('');
                            setMaxLakhs('');
                            updateUrlFilters({ price: opt.id });
                          }}
                          className="accent-secondary cursor-pointer"
                        />
                        <span>{opt.label}</span>
                      </label>
                    );
                  })}
                </div>

                {/* Custom Price Range Slider & Numeric Inputs in Lakhs */}
                <div className="mt-4 p-3.5 bg-slate-50 rounded-2xl border border-gray-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-primary uppercase tracking-wider">
                      Price Range Slider
                    </span>
                    <span className="text-[11px] font-extrabold text-secondary">
                      {minLakhs ? `₹${minLakhs}L` : '₹50L'} – {maxLakhs ? (parseFloat(maxLakhs) >= 1000 ? '₹10+ Cr' : parseFloat(maxLakhs) >= 100 ? `₹${(parseFloat(maxLakhs)/100).toFixed(1)} Cr` : `₹${maxLakhs}L`) : '₹10+ Cr'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[9px] text-gray-500 font-bold mb-0.5">
                        <span>Min: ₹{minLakhs || 50} Lakhs</span>
                      </div>
                      <input
                        type="range"
                        min={50}
                        max={1000}
                        step={25}
                        value={minLakhs || 50}
                        onChange={(e) => {
                          const val = e.target.value;
                          setMinLakhs(val === '50' ? '' : val);
                          setPriceRange('all');
                        }}
                        className="w-full accent-secondary cursor-pointer h-1.5 bg-gray-200 rounded-lg"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] text-gray-500 font-bold mb-0.5">
                        <span>Max: {maxLakhs ? (parseFloat(maxLakhs) >= 1000 ? '₹10+ Cr' : `₹${maxLakhs} Lakhs`) : '₹10+ Cr'}</span>
                      </div>
                      <input
                        type="range"
                        min={50}
                        max={1000}
                        step={25}
                        value={maxLakhs || 1000}
                        onChange={(e) => {
                          const val = e.target.value;
                          setMaxLakhs(val === '1000' ? '' : val);
                          setPriceRange('all');
                        }}
                        className="w-full accent-secondary cursor-pointer h-1.5 bg-gray-200 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <label className="text-[9px] text-gray-500 font-bold block mb-0.5">Min (Lakhs)</label>
                      <input
                        type="number"
                        placeholder="50"
                        value={minLakhs}
                        onChange={(e) => {
                          setMinLakhs(e.target.value);
                          setPriceRange('all');
                        }}
                        className="w-full px-2.5 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-bold text-primary outline-none focus:border-secondary"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] text-gray-500 font-bold block mb-0.5">Max (Lakhs)</label>
                      <input
                        type="number"
                        placeholder="1000"
                        value={maxLakhs}
                        onChange={(e) => {
                          setMaxLakhs(e.target.value);
                          setPriceRange('all');
                        }}
                        className="w-full px-2.5 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-bold text-primary outline-none focus:border-secondary"
                      />
                    </div>
                  </div>

                  {(minLakhs || maxLakhs) && (
                    <button
                      onClick={() => {
                        setMinLakhs('');
                        setMaxLakhs('');
                      }}
                      className="text-[10px] text-red-500 font-bold hover:underline block ml-auto cursor-pointer"
                    >
                      Reset Price Slider
                    </button>
                  )}
                </div>
              </div>

              {/* 4. Status Filter */}
              <div className="border-t border-gray-100 pt-5">
                <h3 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-3">
                  Status
                </h3>
                <div className="space-y-2">
                  {projectStatusOptions.map((opt) => {
                    const isChecked = status === opt;
                    return (
                      <label
                        key={opt}
                        className={`flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                          isChecked ? 'bg-primary/10 text-primary font-bold' : 'text-gray-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="statusDesktop"
                          checked={isChecked}
                          onChange={() => {
                            setStatus(opt);
                            updateUrlFilters({ status: opt });
                          }}
                          className="accent-primary cursor-pointer"
                        />
                        <span>{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>
          </aside>

          {/* Right Main Product Listing Area (Desktop: 9 cols) */}
          <div className="lg:col-span-9 space-y-6">

            {/* Top Toolbar: Results count, Active Pills, View Toggle & Sort */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

              <div className="flex flex-wrap items-center gap-3">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsMobileDrawerOpen(true)}
                  className="lg:hidden bg-primary text-white px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">tune</span>
                  <span>Filters ({activeFiltersCount})</span>
                </button>

                <span className="text-xs font-extrabold text-primary">
                  Showing <span className="text-secondary">{filteredProjects.length}</span> Projects
                </span>
              </div>

              {/* Right Bar Controls */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">

                {/* Sort By Custom Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 hidden sm:inline">Sort:</span>
                  <CustomDropdown
                    options={projectSortOptions}
                    selectedId={sort}
                    onSelect={(id) => {
                      setSort(id);
                      updateUrlFilters({ sort: id });
                    }}
                    variant="white"
                    className="w-44"
                  />
                </div>

                {/* View Switcher Buttons */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Grid View"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">grid_view</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    title="List View"
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">view_list</span>
                  </button>
                </div>

              </div>

            </div>

            {/* Active Filter Pills Bar */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 bg-white px-4 py-3 rounded-2xl border border-gray-100 text-xs font-bold">
                <span className="text-gray-400 uppercase text-[10px] tracking-wider">Active:</span>

                {city !== 'all' && (
                  <span className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px]">
                    City: {projectCityOptions.find((c) => c.id === city)?.label}
                    <button onClick={() => { setCity('all'); updateUrlFilters({ city: 'all' }); }} className="hover:text-secondary font-extrabold">×</button>
                  </span>
                )}

                {type !== 'All Types' && type !== 'all' && (
                  <span className="bg-secondary text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px]">
                    Type: {type}
                    <button onClick={() => { setType('All Types'); updateUrlFilters({ type: 'All Types' }); }} className="hover:text-red-600 font-extrabold">×</button>
                  </span>
                )}

                {priceRange !== 'all' && (
                  <span className="bg-emerald-700 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px]">
                    Budget: {projectPriceRanges.find((p) => p.id === priceRange)?.label}
                    <button onClick={() => { setPriceRange('all'); updateUrlFilters({ price: 'all' }); }} className="hover:text-secondary font-extrabold">×</button>
                  </span>
                )}

                {status !== 'All Status' && status !== 'all' && (
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px]">
                    Status: {status}
                    <button onClick={() => { setStatus('All Status'); updateUrlFilters({ status: 'All Status' }); }} className="hover:text-secondary font-extrabold">×</button>
                  </span>
                )}

                {search && (
                  <span className="bg-slate-200 text-primary px-3 py-1 rounded-full flex items-center gap-1.5 text-[11px]">
                    Search: &quot;{search}&quot;
                    <button onClick={() => { setSearch(''); updateUrlFilters({ search: '' }); }} className="hover:text-red-500 font-extrabold">×</button>
                  </span>
                )}

                <button
                  onClick={handleResetFilters}
                  className="text-secondary hover:underline ml-auto text-[11px]"
                >
                  Reset All
                </button>
              </div>
            )}

            {/* Catalog Grid / List */}
            {filteredProjects.length > 0 ? (
              viewMode === 'grid' ? (
                /* GRID VIEW */
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => {
                    const isFav = favorites.includes(project.id);
                    return (
                      <div
                        key={project.id}
                        className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          {/* Image & Overlay */}
                          <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                            <img
                              src={project.image}
                              alt={project.imageAlt || project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                            {/* Top Badges & Favorite Toggle */}
                            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                              <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                                {project.type}
                              </span>
                              <button
                                onClick={() => toggleFavorite(project.id)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer ${
                                  isFav ? 'bg-red-500 text-white shadow-md' : 'bg-black/30 text-white hover:bg-black/50'
                                }`}
                              >
                                <span className="material-symbols-outlined text-base">
                                  {isFav ? 'favorite' : 'favorite_border'}
                                </span>
                              </button>
                            </div>

                            {/* Bottom Price & City */}
                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <p className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
                                {project.cityName}
                              </p>
                              <p className="text-xl font-extrabold text-secondary drop-shadow">
                                {project.startingPrice}
                              </p>
                            </div>
                          </div>

                          {/* Body details */}
                          <div className="p-5 space-y-2.5">
                            <div className="flex items-center gap-1.5">
                              {project.badges.map((b, bIdx) => (
                                <span key={bIdx} className={`text-[9px] font-extrabold px-2 py-0.5 rounded uppercase ${b.style}`}>
                                  {b.label}
                                </span>
                              ))}
                            </div>

                            <h3 className="font-display font-extrabold text-base text-primary group-hover:text-secondary transition-colors line-clamp-1">
                              {project.title}
                            </h3>

                            <p className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                              <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
                              {project.location}
                            </p>

                            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                              {project.description}
                            </p>

                            {/* Quick Specs */}
                            {(project.bedrooms || project.sqft) && (
                              <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-gray-500 border-t border-gray-100">
                                {project.bedrooms && (
                                  <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-secondary text-sm">king_bed</span>
                                    {project.bedrooms} Beds
                                  </span>
                                )}
                                {project.sqft && (
                                  <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-secondary text-sm">square_foot</span>
                                    {project.sqft}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* CTA Footer Button */}
                        <div className="p-5 pt-0">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="w-full bg-slate-100 group-hover:bg-secondary group-hover:text-white text-primary py-3 rounded-2xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                          >
                            View Details
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ) : (
                /* LIST VIEW */
                <div className="space-y-4">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-stretch"
                    >
                      {/* Image Thumbnail */}
                      <div className="relative w-full md:w-72 h-56 md:h-auto flex-shrink-0 overflow-hidden bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.imageAlt || project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          {project.badges.map((b, bIdx) => (
                            <span key={bIdx} className={`text-[9px] font-extrabold px-2 py-0.5 rounded uppercase ${b.style}`}>
                              {b.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-[11px] font-extrabold uppercase text-secondary">
                              {project.cityName} • {project.type}
                            </span>
                            <span className="text-xl font-extrabold text-primary">
                              {project.startingPrice}
                            </span>
                          </div>

                          <h3 className="font-display font-extrabold text-lg text-primary group-hover:text-secondary transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-xs text-gray-500 flex items-center gap-1 mt-1 font-medium">
                            <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
                            {project.location}
                          </p>

                          <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Bottom Row */}
                        <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                            {project.bedrooms && <span>🛏️ {project.bedrooms} BHK</span>}
                            {project.sqft && <span>📏 {project.sqft}</span>}
                            {project.yieldText && <span className="text-emerald-700">✦ {project.yieldText}</span>}
                          </div>

                          <Link
                            href={`/projects/${project.slug}`}
                            className="bg-secondary text-white px-6 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-1.5"
                          >
                            Explore Project →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : (
              /* EMPTY RESULTS */
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-lg mx-auto my-8">
                <span className="material-symbols-outlined text-5xl text-gray-300 mb-3">filter_alt_off</span>
                <h3 className="font-display text-xl font-bold text-primary mb-2">No Matching Projects Found</h3>
                <p className="text-xs text-gray-500 mb-6">
                  Try adjusting your filter selection or clear all active filters to view all projects.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-secondary text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Mobile Slide-Over Filter Drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center lg:hidden">
          <div className="bg-white text-primary w-full rounded-t-3xl p-6 border-t border-gray-200 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">

            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">tune</span>
                <h3 className="font-display font-extrabold text-lg text-primary">Filter Projects</h3>
              </div>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1 text-gray-400 hover:text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Mobile Location Selector */}
            <CustomDropdown
              label="LOCATION / CITY"
              options={projectCityOptions}
              selectedId={city}
              onSelect={(id) => {
                setCity(id);
                updateUrlFilters({ city: id });
              }}
              variant="white"
              isInline={true}
            />

            {/* Mobile Type Selector */}
            <CustomDropdown
              label="PROJECT TYPE"
              options={projectTypeOptions.map((t) => ({ id: t, label: t }))}
              selectedId={type}
              onSelect={(id) => {
                setType(id);
                updateUrlFilters({ type: id });
              }}
              variant="white"
              isInline={true}
            />

            {/* Mobile Budget Selector */}
            <CustomDropdown
              label="BUDGET PRESETS"
              options={projectPriceRanges}
              selectedId={priceRange}
              onSelect={(id) => {
                setPriceRange(id);
                setMinLakhs('');
                setMaxLakhs('');
                updateUrlFilters({ price: id });
              }}
              variant="white"
              isInline={true}
            />

            {/* Mobile Custom Price Range (₹ Lakhs) */}
            <div className="bg-slate-100 p-3.5 rounded-2xl border border-gray-200 space-y-2">
              <span className="text-xs font-extrabold uppercase text-primary tracking-wider block">
                Custom Range (₹ Lakhs)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-gray-500 font-bold block mb-1">Min (Lakhs)</label>
                  <input
                    type="number"
                    placeholder="e.g. 50"
                    value={minLakhs}
                    onChange={(e) => setMinLakhs(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs font-bold text-primary outline-none focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 font-bold block mb-1">Max (Lakhs)</label>
                  <input
                    type="number"
                    placeholder="e.g. 300"
                    value={maxLakhs}
                    onChange={(e) => setMaxLakhs(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-xl text-xs font-bold text-primary outline-none focus:border-secondary"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={handleResetFilters}
                className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold text-xs rounded-xl"
              >
                Reset All
              </button>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="flex-1 py-3 bg-secondary text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md"
              >
                Apply Filters
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="min-h-screen pt-32 flex items-center justify-center text-primary font-bold">
          Loading Catalog...
        </div>
      }>
        <ECommerceProjectsContent />
      </Suspense>
      <Footer />
    </>
  );
}
