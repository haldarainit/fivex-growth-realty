'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/homeData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header background styling based on scroll state & current page
  const headerBgClass = isScrolled
    ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-outline-variant/15'
    : isHomePage
    ? 'bg-transparent py-5 border-b border-white/10'
    : 'bg-white/90 backdrop-blur-md shadow-sm py-4 border-b border-outline-variant/15';

  // Logo text colors
  const logoFivexClass = isScrolled || !isHomePage ? 'text-primary' : 'text-white';
  const logoRealtyClass = isScrolled || !isHomePage ? 'text-primary' : 'text-white/90';

  // Navigation link base colors
  const getNavLinkClass = (isActive: boolean) => {
    if (isScrolled || !isHomePage) {
      return isActive
        ? 'text-secondary font-bold border-b-2 border-secondary'
        : 'text-primary/80 font-medium hover:text-secondary';
    } else {
      return isActive
        ? 'text-secondary font-bold border-b-2 border-secondary'
        : 'text-white/90 font-medium hover:text-secondary';
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="flex items-center justify-between px-6 lg:px-14 max-w-[1440px] mx-auto">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex-shrink-0 flex items-center gap-1.5 font-display font-bold tracking-tight leading-none whitespace-nowrap"
        >
          <span className={`text-lg lg:text-xl ${logoFivexClass}`}>FIVEX</span>
          <span className="text-secondary text-lg lg:text-xl">GROWTH</span>
          <span className={`text-lg lg:text-xl hidden sm:inline ${logoRealtyClass}`}>REALTY</span>
        </Link>

        {/* ── Desktop Nav Links (Clean text links, no block/button background) ── */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 flex-1 justify-center">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && !item.href.includes('#') && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`py-1 text-sm tracking-wide transition-colors whitespace-nowrap ${getNavLinkClass(
                  isActive
                )}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA Button ── */}
        <div className="hidden lg:flex flex-shrink-0 items-center gap-3">
          <Link
            href="/enquire"
            className="bg-secondary text-primary px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-gold hover:brightness-110 transition-all active:scale-95 shadow-md whitespace-nowrap"
          >
            Enquire Now
          </Link>
        </div>

        {/* ── Mobile Hamburger Button ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 focus:outline-none cursor-pointer ${
            isScrolled || !isHomePage ? 'text-primary' : 'text-white'
          }`}
          aria-label="Toggle Navigation"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-xl border-t border-white/10 shadow-2xl text-white">
          <div className="px-6 py-6 flex flex-col gap-2 max-w-[1440px] mx-auto">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && !item.href.includes('#') && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'text-secondary font-bold bg-white/5 border-l-4 border-secondary'
                      : 'text-white/80 hover:text-secondary hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Extra Links */}
            <div className="border-t border-white/10 pt-3 mt-2 flex flex-col gap-1">
              <Link
                href="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 text-sm font-medium text-white/70 hover:text-secondary transition-all"
              >
                Testimonials
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 text-sm font-medium text-white/70 hover:text-secondary transition-all"
              >
                FAQ
              </Link>
            </div>

            <Link
              href="/enquire"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full bg-secondary text-primary py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-center hover:bg-gold transition-all shadow-lg"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
