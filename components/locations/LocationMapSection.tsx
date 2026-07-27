import React from 'react';

export const LocationMapSection: React.FC = () => {
  return (
    <section className="bg-primary py-24 text-white">
      <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-8">
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Visualizing the <span className="text-secondary-fixed-dim italic">Future</span>
          </h2>
          <p className="font-body text-white/70 text-lg leading-relaxed">
            Our interactive growth map tracks real-time development across the National Capital Region, marking zones for high-capital appreciation.
          </p>
          <div className="space-y-6">
            <div className="glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl flex items-center gap-6 group hover:bg-white/10 transition-colors border border-white/10">
              <div className="w-12 h-12 bg-secondary-fixed-dim/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-fixed-dim transition-colors flex-shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed-dim group-hover:text-primary text-2xl">
                  hub
                </span>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Multi-Modal Connectivity</h4>
                <p className="text-xs text-white/60">Integrating Metro, Road, and Air networks.</p>
              </div>
            </div>

            <div className="glass-card bg-white/5 backdrop-blur-md p-6 rounded-xl flex items-center gap-6 group hover:bg-white/10 transition-colors border border-white/10">
              <div className="w-12 h-12 bg-secondary-fixed-dim/20 rounded-lg flex items-center justify-center group-hover:bg-secondary-fixed-dim transition-colors flex-shrink-0">
                <span className="material-symbols-outlined text-secondary-fixed-dim group-hover:text-primary text-2xl">
                  show_chart
                </span>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Data-Backed Insights</h4>
                <p className="text-xs text-white/60">10 years of historical price movement data.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map Image Column */}
        <div className="lg:col-span-7 relative h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUjUsUit0w4wmBWFOXxPfZ9Buq5DBq79V0i8r3sKJtzaSsowAG6Bdb9C33AJVfhked7tkLG9HhHr2wZjiP1W9ROIGx2aduGwZN4GIHgv89P5lJvMLxcT25_SEIuDO1n020jQ11ntUpBC1TjIcXk0hOz0JxSxehNJX7kPheodERIRsX4II8KywLij4NVBFhvcUSiYjPN0QA-9JO71vRZBJQItpSf-XXEME0UKbSTn7nn60JsZh6mbMiocF4yto3VAJGlDQVYvsqzfIF"
            alt="Delhi NCR Region Growth Map"
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

          {/* Floating Data Badges */}
          <div className="absolute top-1/4 left-1/3 glass-card bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white text-xs border border-white/30 animate-pulse">
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Greater Noida West: +12% YoY
            </div>
          </div>

          <div className="absolute bottom-1/3 right-1/4 glass-card bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-white text-xs border border-white/30">
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-2 h-2 bg-secondary-fixed-dim rounded-full" />
              Gurgaon Sec 80: High Demand
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMapSection;
