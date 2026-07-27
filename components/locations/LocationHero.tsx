import React from 'react';

export const LocationHero: React.FC = () => {
  return (
    <section className="relative h-[550px] lg:h-[614px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrl5bvqsqhxvvmLIGSCfjgCryecOoMNPEbqHBeQTNpASuE87fqROOs2HFrvQWXIXZHvoznlcZQJde0wEBHg61y2lpZ6lMG6CQ_uUu4stEUSEhnu1e_giYNOBQeZFjNoPZ0tBnL1k0cN5o5-ZJW7oBsMboyGiME_0k4JwJxus3h6jGcSUgRKTy1-SWEZy5OmLXecBfDZoBwAYGN_ymH8K6euSiU14OgHLPzIju32Pn239UuvgvP-caIAUylH13pKsrpMHFvs0EH9hTl')`,
          }}
          aria-label="High altitude aerial view of metropolitan growth corridor"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
      </div>
      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full pt-16">
        <div className="max-w-2xl text-white">
          <span className="inline-block py-1 px-4 bg-secondary-fixed-dim text-on-secondary-fixed rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            Investment Portfolios
          </span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Strategic Growth <br />
            Corridors of NCR
          </h1>
          <p className="font-body text-white/80 text-lg mb-8 max-w-xl leading-relaxed">
            Identify and capitalize on the high-yield real estate markets across Delhi NCR. Data-driven insights for the sophisticated investor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
