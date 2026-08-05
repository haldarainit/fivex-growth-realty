import React from 'react';
import Link from 'next/link';

export const TestimonialsCTA: React.FC = () => {
  return (
    <div className="mt-20 px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto">
      <div className="glass-card bg-white/60 backdrop-blur-xl p-8 sm:p-12 rounded-2xl text-center border border-secondary/20 relative overflow-hidden shadow-xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <h2 className="font-display text-3xl md:text-4xl text-primary font-bold mb-6 relative z-10">
          Join Our Circle of Success
        </h2>
        <p className="font-body text-on-surface-variant text-lg max-w-xl mx-auto mb-10 leading-relaxed relative z-10">
          Experience the bespoke advisory service that our clients rave about. Your next legacy property awaits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link
            href="/#contact"
            className="bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-secondary hover:text-white transition-all cursor-pointer text-xs uppercase tracking-wider shadow-md text-center"
          >
            Schedule a Consultation
          </Link>
          <button
            onClick={() => alert('Portfolio brochure download initiated!')}
            className="border-2 border-secondary text-secondary px-10 py-4 rounded-lg font-bold hover:bg-secondary hover:text-white transition-all cursor-pointer text-xs uppercase tracking-wider"
          >
            Download Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCTA;
