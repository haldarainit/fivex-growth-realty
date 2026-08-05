import React from 'react';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-8 bg-gray-50 pt-20">
        <div className="max-w-2xl w-full text-center py-20">
          {/* Decorative number */}
          <div className="relative mb-8 select-none">
            <p
              className="font-display font-extrabold text-[120px] sm:text-[180px] lg:text-[220px] leading-none"
              style={{ color: '#f0f0f0', letterSpacing: '-0.05em' }}
            >
              404
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontSize: '56px', fontVariationSettings: '"FILL" 1' }}
                >
                  location_off
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-5">
            Page Not Found
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight">
            This Property Doesn't Exist
          </h1>
          <p className="text-gray-500 font-body text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed">
            The page you're looking for has been moved, removed, or never existed. 
            Let our advisors guide you to the right destination.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">home</span>
              Return Home
            </Link>
            <Link
              href="/properties"
              className="border-2 border-primary text-primary px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">villa</span>
              Browse Properties
            </Link>
          </div>

          {/* Quick links */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
              Explore Our Site
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: '/projects', icon: 'apartment', label: 'Projects' },
                { href: '/locations', icon: 'map', label: 'Locations' },
                { href: '/blog', icon: 'article', label: 'Blog' },
                { href: '/contact', icon: 'call', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-100 hover:border-secondary hover:shadow-md transition-all group"
                >
                  <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform text-xl">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold text-primary">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
