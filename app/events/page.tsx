'use client';

import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { csrEvents } from '@/data/csrData';

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero */}
        <div className="bg-primary py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(197,160,89,0.15),transparent_60%)]" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">
                Events &amp; Corporate Gatherings
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mt-3 tracking-tight">
                FIVEX Events &amp; Community Drives
              </h1>
              <p className="text-white/80 text-base sm:text-xl mt-4 max-w-2xl leading-relaxed font-medium">
                Explore our corporate conventions, investor summits, developer launches, and community welfare initiatives across India.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {csrEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-extrabold uppercase tracking-widest text-primary bg-secondary px-3 py-1 rounded-full shadow-md">
                    {event.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-secondary text-base">calendar_today</span>
                      {event.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-secondary text-base">people</span>
                      {event.participants} Participants
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-primary text-xl mb-2 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                      Completed Event
                    </span>
                    <span className="material-symbols-outlined text-primary text-lg">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
