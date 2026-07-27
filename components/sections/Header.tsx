'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/homeData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const headerBgClass = isScrolled
    ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-200/60'
    : isHomePage
    ? 'bg-transparent py-4 sm:py-5 border-b border-white/10'
    : 'bg-white/95 backdrop-blur-md shadow-sm py-3 sm:py-4 border-b border-gray-200/40';

  const logoFivexClass = isScrolled || !isHomePage ? 'text-primary' : 'text-white';
  const logoRealtyClass = isScrolled || !isHomePage ? 'text-primary' : 'text-white/90';
  const hamburgerColor = isScrolled || !isHomePage ? 'text-primary' : 'text-white';

  const getNavLinkClass = (isActive: boolean) => {
    const base = 'py-1 text-sm tracking-wide transition-colors whitespace-nowrap';
    if (isScrolled || !isHomePage) {
      return `${base} ${isActive ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-primary/80 font-medium hover:text-secondary'}`;
    }
    return `${base} ${isActive ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-white/90 font-medium hover:text-secondary'}`;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 xl:px-14 max-w-[1440px] mx-auto">
        
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex-shrink-0 flex items-center gap-1 sm:gap-1.5 font-display font-bold tracking-tight leading-none whitespace-nowrap"
        >
          <span className={`text-base sm:text-lg xl:text-xl ${logoFivexClass}`}>FIVEX</span>
          <span className="text-secondary text-base sm:text-lg xl:text-xl">GROWTH</span>
          <span className={`text-base sm:text-lg xl:text-xl hidden sm:inline ${logoRealtyClass}`}>REALTY</span>
        </Link>

        {/* ── Desktop Nav — only visible at xl+ ── */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-10 flex-1 justify-center">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && !item.href.includes('#') && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={getNavLinkClass(isActive)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Right side: CTA + Hamburger ── */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Enquire CTA — visible on desktop */}
          <Link
            href="/enquire"
            className="hidden xl:inline-flex bg-secondary text-primary px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all active:scale-95 shadow-md whitespace-nowrap"
          >
            Enquire Now
          </Link>

          {/* Compact Enquire CTA for tablet (md–xl) */}
          <Link
            href="/enquire"
            className="hidden md:inline-flex xl:hidden bg-secondary text-primary px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-wider hover:brightness-110 transition-all active:scale-95 whitespace-nowrap shadow-sm"
          >
            Enquire
          </Link>

          {/* Hamburger — visible below xl */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
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

      {/* ── Slide-down Drawer (Mobile + Tablet) ── */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-primary backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="px-4 sm:px-6 py-5 max-w-[1440px] mx-auto">

            {/* Grid nav on tablet, list on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 mb-4">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && !item.href.includes('#') && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all text-center ${
                      isActive
                        ? 'text-secondary font-bold bg-white/10 border border-secondary/30'
                        : 'text-white/80 hover:text-secondary hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Extra links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mb-4 pt-3 border-t border-white/10">
              {[
                { href: '/testimonials', label: 'Testimonials' },
                { href: '/faq', label: 'FAQ' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 px-4 text-sm font-medium text-white/60 hover:text-secondary transition-all text-center rounded-xl hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Full CTA */}
            <Link
              href="/enquire"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-secondary text-primary py-3.5 rounded-2xl font-extrabold text-sm uppercase tracking-wider text-center hover:brightness-110 transition-all shadow-lg"
            >
              Begin Your Enquiry →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
