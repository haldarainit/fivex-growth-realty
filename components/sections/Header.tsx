'use client';

import React, { useEffect, useState } from 'react';
import { navItems } from '@/data/homeData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <a href="#" className="font-display text-xl lg:text-2xl font-bold text-primary tracking-tight">
          FIVEX GROWTH REALTY
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${
                item.active
                  ? 'text-secondary font-semibold border-b-2 border-secondary pb-1'
                  : 'text-primary/70 font-medium hover:text-secondary'
              } transition-colors`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="bg-primary text-white px-7 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/10 cursor-pointer">
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none"
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
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-base ${
                item.active ? 'text-secondary font-semibold' : 'text-primary/80 font-medium'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold mt-2"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
