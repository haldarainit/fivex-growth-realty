'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import LocationHero from '@/components/locations/LocationHero';
import LocationMarketStats from '@/components/locations/LocationMarketStats';
import LocationDestinationsSection from '@/components/locations/LocationDestinationsSection';
import LocationMapSection from '@/components/locations/LocationMapSection';
import LocationEmergingBento from '@/components/locations/LocationEmergingBento';

export default function LocationsPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20 flex-grow">
        <LocationHero />
        <LocationMarketStats />
        <LocationDestinationsSection />
        <LocationMapSection />
        <LocationEmergingBento />

        {/* Lead Gen Newsletter */}
        <section className="py-24 bg-surface-container-low">
          <div className="px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto bg-white/80 backdrop-blur-md p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/50 flex flex-col items-center text-center shadow-xl">
            <span className="material-symbols-outlined text-secondary text-4xl sm:text-5xl mb-4 sm:mb-6">
              mark_email_read
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 text-primary font-bold">
              Get Market Insights First
            </h2>
            <p className="font-body text-on-surface-variant text-base sm:text-lg mb-7 sm:mb-10 max-w-2xl leading-relaxed">
              Join 5,000+ investors receiving weekly data on price drops, new launches, and infrastructure updates across Delhi NCR.
            </p>

            {subscribed ? (
              <p className="text-secondary font-bold text-base">
                Thank you for subscribing to Market Insights!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row w-full max-w-xl gap-4"
              >
                <input
                  required
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-xl border-none bg-white shadow-inner focus:ring-2 focus:ring-secondary/20 text-primary text-sm font-body outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-secondary transition-all shadow-lg active:scale-95 text-xs cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-6 text-xs text-on-surface-variant/60 italic font-body">
              We respect your privacy. No spam, only data.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
