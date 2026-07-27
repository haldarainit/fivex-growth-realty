import React from 'react';

const mapImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKtk2c_9CLmwgO3A3KGNtfhBv4eC21RnsDs135DYBQ_apag13o818nj4zQBx3mf8wjQBAwxYcf_XxebRzmzEa7zTaRfRYXj1R8yrV4j0ffF42EYCsozkx8vt67bmfRncr3IU4_vxs4MoAbHmH3BsfXTqSWQQ85fEKYCOrJRgsOe7Zjuh9yiqBI1nNoyZEm91sgJW3H4aOQ3T-pgOFGMogKuZvAkjODnqlj1BoDBmqZJRCdrPrH8-gXSqs7D2xxW9u3VRVC0PYDCXt6';

export const ContactMapHero: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden" style={{ height: 'clamp(260px, 50vw, 500px)' }}>
      <div className="absolute inset-0">
        <img
          src={mapImageUrl}
          alt="Global Headquarters location map"
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
        />
        {/* Top fade for header overlap on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
      {/* Badge overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-xl border border-white/40 whitespace-nowrap">
        <span className="material-symbols-outlined text-secondary text-xl">location_on</span>
        <span className="font-body text-sm font-bold uppercase tracking-widest text-primary">
          Global Headquarters
        </span>
      </div>
      {/* Top label */}
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
          Contact Our Experts | FIVEX GROWTH REALTY
        </span>
      </div>
    </section>
  );
};

export default ContactMapHero;
