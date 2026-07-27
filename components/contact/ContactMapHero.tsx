import React from 'react';

const mapImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKtk2c_9CLmwgO3A3KGNtfhBv4eC21RnsDs135DYBQ_apag13o818nj4zQBx3mf8wjQBAwxYcf_XxebRzmzEa7zTaRfRYXj1R8yrV4j0ffF42EYCsozkx8vt67bmfRncr3IU4_vxs4MoAbHmH3BsfXTqSWQQ85fEKYCOrJRgsOe7Zjuh9yiqBI1nNoyZEm91sgJW3H4aOQ3T-pgOFGMogKuZvAkjODnqlj1BoDBmqZJRCdrPrH8-gXSqs7D2xxW9u3VRVC0PYDCXt6';

export const ContactMapHero: React.FC = () => {
  return (
    <section className="w-full h-[500px] relative overflow-hidden">
      <div className="absolute inset-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-700">
        <img
          src={mapImageUrl}
          alt="Global Headquarters location map"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full flex items-center gap-3 shadow-xl border border-white/20">
        <span className="material-symbols-outlined text-secondary text-xl">location_on</span>
        <span className="font-body text-sm font-bold uppercase tracking-widest text-primary">
          Global Headquarters
        </span>
      </div>
    </section>
  );
};

export default ContactMapHero;
