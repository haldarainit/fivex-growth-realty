import React from 'react';
import Link from 'next/link';

export const FaqStillNeedHelp: React.FC = () => {
  return (
    <section className="mt-20 px-margin-desktop max-w-container-max mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-secondary/10 p-8 sm:p-12 text-center shadow-xl">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary-fixed-dim/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <h3 className="font-display text-3xl text-primary font-bold mb-4 relative z-10">
          Still Have Questions?
        </h3>
        <p className="font-body text-on-surface-variant text-lg mb-8 max-w-xl mx-auto leading-relaxed relative z-10">
          If you couldn't find the answer you were looking for, our luxury real estate consultants are ready to assist you with personalized advice.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <Link
            href="/#contact"
            className="bg-primary text-white px-10 py-4 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            Contact Us
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <a
            href="tel:+919800000000"
            className="border border-secondary text-secondary px-10 py-4 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-secondary/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            Request a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqStillNeedHelp;
