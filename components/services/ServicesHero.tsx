import React from 'react';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative h-[550px] lg:h-[614px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPcwel7ULViTplg-4AneDTx2Tdpefy7K5aUoKFdTzJAcxwNbga6hONW6mXW2rrc1TJibvUs52tBConMJV8pNIejwFbAB2zQRYkIlSs_zYwnXW1sc3Ku3nsEe5URjDbfKASc000BCyKhj2i6_zihSeEsTwG5gi9oKDGzK1pnN8X4JdPO09THshEuupi0sqBzDTxamYq98GCGHRf7NnI7jKU0zlQw-SXzG4M4_xzGucT5A2m0L4VXIMWB6lm80m_L08H6-92bN8tdvYY')`,
          }}
          aria-label="High-angle shot of a modern city skyline at golden hour"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto w-full text-white pt-16">
        <span className="inline-block px-4 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
          OUR EXPERTISE
        </span>
        <h1 className="font-display text-4xl lg:text-6xl max-w-2xl mb-6 font-bold leading-tight">
          Comprehensive Real Estate Solutions for the Modern Investor
        </h1>
        <p className="font-body text-white/90 text-lg max-w-xl leading-relaxed">
          From strategic residential sales to complex commercial portfolios, we provide end-to-end services tailored to your growth.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
