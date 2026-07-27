import React from 'react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section id="purpose" className="py-24 px-6 md:px-16 max-w-container-max mx-auto">
      <div className="grid md:grid-cols-12 gap-16 items-center">
        {/* Left Text Column */}
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[2px] bg-secondary" />
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                  Our Purpose
                </span>
              </div>
              <h2 className="font-display text-4xl text-primary font-bold mb-6">
                Mission
              </h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                To empower our clients with data-driven insights and exclusive opportunities, transforming real estate transactions into long-term wealth creation engines. We bridge the gap between architectural aspiration and financial prosperity.
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl text-primary font-bold mb-6">
                Vision
              </h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                To become the global gold standard for luxury real estate brokerage, recognized for our unwavering integrity, technological innovation, and localized expertise across premium global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Showcase Column */}
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transition-transform duration-500 group-hover:scale-105" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfDeII08Qmu1tNf_r80M6nBTQLScFJBOuV_DZfIkqOuk-8vcmeZIFoDq4OB1rk6jKfs9mAuAF311dRdcQ_suBp5aaRQmQpQb8JZ9ylfI-mcEO3hYDp0dFWgY_CU86T7Xk9aBlMJ-5jF-SJfMkht_g68VWsncNPq-SADzjgTwnHyc7dDgGEIY1r6KaHpEHUeIDFI1-ydGXcLXgD_f4Dkt61pwzA2prdA-j7V99MfWgPyxF4NUSSSEiHp_SpL-A35pfd-lDDo5WxMy63')`,
                }}
                aria-label="High-end corporate meeting room with urban skyline"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass-card bg-white/90 backdrop-blur-md p-6 rounded-xl hidden lg:block max-w-xs shadow-lg border border-white/40">
              <p className="italic text-on-surface-variant text-sm leading-relaxed">
                "In every square foot, we see a story of growth and a future of prosperity."
              </p>
              <p className="mt-4 font-bold text-primary text-xs uppercase tracking-wider">
                — Founder, FIVEX GROWTH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
