'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  megaMenuCities,
  megaMenuPropertyTypes,
  megaMenuProjects,
  CityOption,
  PropertyTypeOption,
} from '@/data/megaMenuData';

// ─── Mega Menu Dropdown (Updated with Client Specified Order & Titles) ──────

const MegaMenu: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const [selectedCity, setSelectedCity] = useState<CityOption>(megaMenuCities[0]); // Default Delhi NCR
  const [selectedType, setSelectedType] = useState<PropertyTypeOption>(megaMenuPropertyTypes[0]); // Default All Services

  // Filter projects by city and property type
  const filteredProjects = megaMenuProjects.filter((project) => {
    const matchesCity = project.cityId === selectedCity.id;
    const matchesType =
      selectedType.id === 'all' ||
      project.typeName.toLowerCase() === selectedType.name.toLowerCase();
    return matchesCity && matchesType;
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[960px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-left"
        >
          <div className="grid grid-cols-12 min-h-[460px]">
            {/* Column 1: Areas We Serve (width: 4 cols) */}
            <div className="col-span-4 bg-surface-container-low/40 p-4 border-r border-gray-100 flex flex-col">
              <div className="flex items-center gap-1.5 mb-3 px-2">
                <span className="text-base">🌍</span>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-primary">
                  Areas We Serve
                </p>
              </div>
              <div className="space-y-1 overflow-y-auto max-h-[390px] pr-1 scrollbar-thin">
                {megaMenuCities.map((city) => {
                  const isSelected = selectedCity.id === city.id;
                  return (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-secondary text-primary shadow-md font-bold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="truncate pr-2">{city.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0 ${
                          isSelected
                            ? 'bg-primary/20 text-primary'
                            : 'bg-gray-200/70 text-gray-600'
                        }`}
                      >
                        {city.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Our Services (width: 3.5 cols) */}
            <div className="col-span-3 lg:col-span-3 p-4 border-r border-gray-100 flex flex-col">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-gray-500 mb-3 px-2 flex items-center gap-1">
                <span className="text-secondary font-extrabold">✦</span> Our Services
              </p>
              <div className="space-y-1 overflow-y-auto max-h-[390px] pr-1">
                {megaMenuPropertyTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-secondary/15 text-secondary font-bold border-l-2 border-secondary'
                          : 'text-gray-600 hover:bg-secondary/5 hover:text-primary'
                      }`}
                    >
                      {type.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Properties Showcase (width: 5 cols) */}
            <div className="col-span-5 p-5 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-primary truncate pr-2">
                    Projects in {selectedCity.name}
                  </h4>
                  <Link
                    href={`/projects?city=${selectedCity.id}${selectedType.id !== 'all' ? `&type=${encodeURIComponent(selectedType.name)}` : ''}`}
                    onClick={onClose}
                    className="text-xs font-bold text-secondary hover:underline flex items-center gap-1 flex-shrink-0"
                  >
                    View All
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[330px] pr-1 no-scrollbar">
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                      <Link
                        key={project.id}
                        href={project.href}
                        onClick={onClose}
                        className="group flex gap-3 p-2 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all"
                      >
                        <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-display font-bold text-xs text-primary truncate group-hover:text-secondary transition-colors">
                            {project.title}
                          </h5>
                          <p className="text-[11px] text-gray-500 truncate mt-0.5">
                            {project.location}
                          </p>
                          <p className="text-xs font-bold text-secondary mt-1">
                            {project.price}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="py-12 text-center text-gray-400 text-xs">
                      No matching projects in {selectedCity.name} for {selectedType.name}.
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span>Top projects in {selectedCity.name}</span>
                <Link
                  href="/projects"
                  onClick={onClose}
                  className="font-bold text-primary hover:text-secondary flex items-center gap-1"
                >
                  Browse All Projects →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Header Component ────────────────────────────────────────────────────────

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const pathname = usePathname();

  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const moreMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  const onSurface = isScrolled || !isHomePage;

  const headerBg = onSurface
    ? 'bg-white/95 backdrop-blur-xl shadow-md py-3 border-b border-gray-200/60'
    : 'bg-primary/20 backdrop-blur-2xl py-4 sm:py-5 border-b border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.08)]';

  const logoColor = onSurface ? 'text-primary' : 'text-white';
  const hamburgerColor = onSurface ? 'text-primary' : 'text-white';

  const getNavLinkClass = (isActive: boolean) => {
    const base = 'relative py-1 text-xs xl:text-[13px] tracking-wide transition-colors whitespace-nowrap group font-semibold';
    if (onSurface) {
      return `${base} ${isActive ? 'text-secondary font-bold' : 'text-primary/85 hover:text-secondary'}`;
    }
    return `${base} ${isActive ? 'text-secondary font-bold' : 'text-white/90 hover:text-secondary'}`;
  };

  const handleMegaEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };
  const handleMegaLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  const handleMoreEnter = () => {
    if (moreMenuTimeout.current) clearTimeout(moreMenuTimeout.current);
    setMoreDropdownOpen(true);
  };
  const handleMoreLeave = () => {
    moreMenuTimeout.current = setTimeout(() => setMoreDropdownOpen(false), 150);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 xl:px-12 max-w-[1440px] mx-auto">

        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink items-center gap-1 sm:gap-1.5 font-display font-bold tracking-tight leading-none whitespace-nowrap min-w-0 flex"
        >
          <span className={`text-xs sm:text-base xl:text-lg ${logoColor} transition-colors font-extrabold`}>FIVEX</span>
          <span className="text-secondary text-xs sm:text-base xl:text-lg font-black">GROWTH</span>
          <span className={`text-xs sm:text-base xl:text-lg ${logoColor} transition-colors font-extrabold`}>REALTY</span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 flex-1 justify-center">
          {/* Home */}
          <Link href="/" className={getNavLinkClass(pathname === '/')}>
            Home
            <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          {/* About Us */}
          <Link href="/about" className={getNavLinkClass(pathname.startsWith('/about'))}>
            About Us
            <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${pathname.startsWith('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          {/* Projects Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <button
              className={`${getNavLinkClass(pathname.startsWith('/projects'))} flex items-center gap-0.5 cursor-pointer bg-transparent border-none`}
              onClick={() => setMegaMenuOpen((prev) => !prev)}
              aria-expanded={megaMenuOpen}
              aria-haspopup="true"
            >
              Projects
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${pathname.startsWith('/projects') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
            <MegaMenu visible={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
          </div>

          {/* Careers */}
          <Link href="/careers" className={getNavLinkClass(pathname.startsWith('/careers'))}>
            Careers
            <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${pathname.startsWith('/careers') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          {/* Gallery */}
          <Link href="/gallery" className={getNavLinkClass(pathname.startsWith('/gallery'))}>
            Gallery
            <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${pathname.startsWith('/gallery') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          {/* Blog */}
          <Link href="/blog" className={getNavLinkClass(pathname.startsWith('/blog'))}>
            Blog
            <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${pathname.startsWith('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          {/* CSR */}
          <Link href="/csr" className={getNavLinkClass(pathname.startsWith('/csr'))}>
            CSR
            <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary rounded-full transition-all duration-300 ${pathname.startsWith('/csr') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          {/* More Dropdown (Mission & Vision, Events, Awards) */}
          <div
            className="relative"
            onMouseEnter={handleMoreEnter}
            onMouseLeave={handleMoreLeave}
          >
            <button
              className={`${getNavLinkClass(false)} flex items-center gap-0.5 cursor-pointer bg-transparent border-none`}
              onClick={() => setMoreDropdownOpen((prev) => !prev)}
            >
              More
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
            </button>

            <AnimatePresence>
              {moreDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 p-1.5 text-left"
                >
                  <Link
                    href="/about#certificates"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-primary/80 hover:text-secondary hover:bg-secondary/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">workspace_premium</span>
                    Certificates &amp; Compliance
                  </Link>
                  <Link
                    href="/about#mission-vision"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-primary/80 hover:text-secondary hover:bg-secondary/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">visibility</span>
                    Mission &amp; Vision
                  </Link>
                  <Link
                    href="/about#awards"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-primary/80 hover:text-secondary hover:bg-secondary/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">emoji_events</span>
                    Awards &amp; Recognition
                  </Link>
                  <Link
                    href="/csr#events"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-primary/80 hover:text-secondary hover:bg-secondary/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">event</span>
                    Events &amp; CSR Drives
                  </Link>
                  <Link
                    href="/team"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-primary/80 hover:text-secondary hover:bg-secondary/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">groups</span>
                    Our Team
                  </Link>
                  <Link
                    href="/partners"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-primary/80 hover:text-secondary hover:bg-secondary/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">handshake</span>
                    Developer Partners
                  </Link>
                  <Link
                    href="/testimonials"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-primary/80 hover:text-secondary hover:bg-secondary/5 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">format_quote</span>
                    Testimonials
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right side: Contact Us CTA + Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className="bg-secondary text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold text-[11px] uppercase tracking-wider hover:brightness-110 transition-all active:scale-95 shadow-md whitespace-nowrap"
          >
            Contact Us
          </Link>

          {/* Hamburger Menu for mobile */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`xl:hidden p-2 rounded-lg focus:outline-none cursor-pointer transition-colors hover:bg-white/10 ${hamburgerColor}`}
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden"
          >
            <div className="bg-primary/98 backdrop-blur-2xl border-t border-white/10 shadow-2xl">
              <div className="px-3 py-4 max-w-[1440px] mx-auto max-h-[calc(100svh-4rem)] overflow-y-auto scrollbar-thin">

                {/* Clean 2-Column Grid for Mobile Menu Items */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'About Us', href: '/about' },
                    { label: 'Projects', href: '/projects' },
                    { label: 'Services', href: '/services' },
                    { label: 'Certificates', href: '/about#certificates' },
                    { label: 'Mission & Vision', href: '/about#mission-vision' },
                    { label: 'CSR Drives', href: '/csr' },
                    { label: 'Careers', href: '/careers' },
                    { label: 'Gallery', href: '/gallery' },
                    { label: 'Blog', href: '/blog' },
                    { label: 'Awards', href: '/about#awards' },
                    { label: 'Partners', href: '/partners' },
                    { label: 'Our Team', href: '/team' },
                    { label: 'Testimonials', href: '/testimonials' },
                  ].map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`py-2.5 px-3 rounded-xl text-xs text-center font-semibold transition-all border ${
                          isActive
                            ? 'bg-secondary text-primary border-secondary font-bold shadow-sm'
                            : 'bg-white/5 text-white/90 border-white/10 hover:bg-white/15 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Quick City Links in Clean 2 Columns */}
                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  {megaMenuCities.slice(0, 6).map((city) => (
                    <Link
                      key={city.id}
                      href={`/projects?city=${city.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-black/20 hover:bg-white/10 border border-white/5 text-[11px] text-white/80 transition-all"
                    >
                      <span className="truncate font-medium">{city.name}</span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-secondary font-bold">
                        {city.count}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Contact CTA */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full bg-secondary text-primary py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider text-center hover:brightness-110 active:scale-[0.99] transition-all shadow-lg"
                >
                  Contact Us →
                </Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
