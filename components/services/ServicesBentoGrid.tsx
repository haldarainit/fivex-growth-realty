import React from 'react';
import Link from 'next/link';
import { servicesDataList } from '@/data/servicesData';

export const ServicesBentoGrid: React.FC = () => {
  const residential = servicesDataList.find((s) => s.id === 'serv-res')!;
  const commercial = servicesDataList.find((s) => s.id === 'serv-comm')!;
  const land = servicesDataList.find((s) => s.id === 'serv-land')!;
  const booking = servicesDataList.find((s) => s.id === 'serv-booking')!;
  const consult = servicesDataList.find((s) => s.id === 'serv-consult')!;

  return (
    <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl text-primary font-bold mb-4">
            Core Real Estate Services
          </h2>
          <p className="text-on-surface-variant font-body text-base leading-relaxed">
            We combine deep market intelligence with a personalized approach to ensure every transaction is a milestone in your wealth creation journey.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="p-4 rounded-full border border-outline-variant text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary text-2xl">
              trending_up
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Residential Sales (Large 8 cols) */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">
                {residential.category}
              </span>
              <h3 className="font-display text-2xl text-primary font-bold mb-4">
                {residential.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                {residential.description}
              </p>
              <ul className="space-y-3 mb-8">
                {residential.features?.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-primary font-body font-semibold">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/properties"
                className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all text-xs uppercase tracking-wider"
              >
                Explore Properties
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </Link>
            </div>
            <div className="md:w-1/2 min-h-[300px] relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${residential.image}')` }}
                aria-label={residential.imageAlt}
              />
            </div>
          </div>
        </div>

        {/* Commercial Property (Dark 4 cols) */}
        <div className="md:col-span-4 bg-primary text-white p-8 sm:p-10 rounded-xl flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
          <div>
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-2xl">
                {commercial.icon}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">{commercial.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed mb-6 font-body">
              {commercial.description}
            </p>
          </div>
          <div className="border-t border-white/10 pt-6 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider">
              {commercial.badgeText}
            </span>
            <span className="material-symbols-outlined">north_east</span>
          </div>
        </div>

        {/* Land/Plot Investment (Glass 4 cols) */}
        <div className="md:col-span-4 glass-card bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-outline-variant/20 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">
                {land.icon}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              {land.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              {land.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {land.features?.map((f, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-surface-container-high rounded text-xs font-bold text-primary uppercase"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Project Booking (Light 4 cols) */}
        <div className="md:col-span-4 bg-white p-8 sm:p-10 rounded-xl shadow-md border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-lg bg-surface-container-lowest border border-outline-variant flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">
                {booking.icon}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              {booking.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              {booking.description}
            </p>
          </div>
          <Link
            href="/projects"
            className="w-full py-3 border border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-all text-center block text-xs uppercase tracking-wider cursor-pointer"
          >
            View New Launches
          </Link>
        </div>

        {/* Expert Consultation (Image 4 cols) */}
        <div className="md:col-span-4 relative group overflow-hidden rounded-xl shadow-md min-h-[350px] flex flex-col justify-end hover:shadow-xl transition-all">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('${consult.image}')` }}
            aria-label={consult.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
          <div className="relative h-full p-8 sm:p-10 flex flex-col justify-end text-white z-10">
            <h3 className="font-display text-2xl font-bold mb-2">{consult.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{consult.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBentoGrid;
