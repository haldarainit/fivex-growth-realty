'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/homeData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-2xl' : 'py-5'
      }`}
    >
      <div className="flex justify-between items-center px-margin-desktop max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-display text-xl lg:text-2xl font-bold text-primary tracking-tight"
        >
          FIVEX GROWTH REALTY
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && !item.href.includes('#') && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  isActive
                    ? 'text-secondary font-semibold border-b-2 border-secondary pb-1'
                    : 'text-primary/70 font-medium hover:text-secondary'
                } transition-colors`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/enquire"
            className="bg-primary text-white px-7 py-3 rounded-lg font-semibold hover:bg-secondary transition-all active:scale-95 shadow-lg shadow-primary/10 inline-block text-sm"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant/20 px-6 py-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && !item.href.includes('#') && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base ${
                  isActive ? 'text-secondary font-semibold' : 'text-primary/80 font-medium'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/enquire"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold mt-2 text-center text-sm hover:bg-secondary transition-all"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
