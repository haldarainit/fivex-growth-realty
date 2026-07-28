'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { partners } from '@/data/partnerData';

// Generate distinct pastel/muted brand color pairs for text-based logos
const colorPairs = [
  { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-100' },
  { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-100' },
  { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-100' },
  { bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-100' },
  { bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-100' },
  { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-100' },
  { bg: 'bg-orange-50', text: 'text-orange-800', border: 'border-orange-100' },
  { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-100' },
];

const PartnerLogo: React.FC<{ partner: typeof partners[0]; index: number }> = ({ partner, index }) => {
  const colors = colorPairs[index % colorPairs.length];
  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center w-36 h-16 rounded-xl border ${colors.border} ${colors.bg} mx-3 group hover:shadow-md transition-all`}
    >
      <span className={`font-display font-extrabold text-sm tracking-wider ${colors.text}`}>{partner.logo}</span>
    </div>
  );
};

export default function PartnersStrip() {
  // Duplicate the array for seamless loop
  const doubled = [...partners, ...partners];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between flex-wrap gap-4"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-secondary text-xs font-extrabold uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-secondary" />
              Our Partners
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary">
              Trusted by India&apos;s Best Developers & Banks
            </h2>
          </div>
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 border border-secondary text-secondary px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-secondary hover:text-primary transition-all"
          >
            View All Partners
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </motion.div>
      </div>

      {/* Infinite scroll marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((partner, i) => (
            <PartnerLogo key={`${partner.id}-${i}`} partner={partner} index={i % partners.length} />
          ))}
        </div>
      </div>

      {/* Second row going right to left */}
      <div className="marquee-wrapper mt-4">
        <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
          {[...doubled].reverse().map((partner, i) => (
            <PartnerLogo key={`${partner.id}-rev-${i}`} partner={partner} index={(i + 3) % partners.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
