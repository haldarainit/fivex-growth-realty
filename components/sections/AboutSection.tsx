import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { aboutPillars } from '@/data/homeData';

export const AboutSection: React.FC = () => {
  return (
    <SectionContainer id="about" bgStyle="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Column: Image Showcase */}
        <div className="relative group">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-secondary/30 hidden md:block" />
          <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] h-[320px] sm:h-[420px] lg:h-[600px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwie3Yis0_DedQ8neA4Y31-wI_eAAuON9zB0s3Uoh-jUM3FCIyn8bOMxHa2W84WVfR3fyPQ_NwpPYVI8-lB1nLzEiEm8dngVTollSyy7m0NA5Tghri-Ckx6eYpaTJFuqD96pJ5AxjPUCInOsalGv1QbFtPKAk-3cWs6guRpCAbQZL5BjGrjaJ5_umocX2xZpmbcghc0ZHlC1hn-7Go19DxlAzkWAiScc15QgOg-jo9Gk1KGAVP50cLcprx6NQMQRDnKjdZ_aXcOp8R"
              alt="Elite Office Interior"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 glass-dark p-8 rounded-tl-3xl border-gold/20">
              <p className="font-display text-4xl text-secondary mb-1">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                Years of Luxury Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Story & Pillars */}
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em]">
              Our Legacy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary font-bold">
              Redefining Real Estate{' '}
              <span className="block">Consultancy in India</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mt-6" />
          </div>

          <p className="font-body text-primary/70 text-lg leading-relaxed">
            At FIVEX GROWTH REALTY PVT LTD, our mission is to simplify the property journey through a foundation of trust and meticulous attention to detail. We don't just sell property; we curate investment legacies.
          </p>

          <div className="grid gap-8">
            {aboutPillars.map((pillar, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-gold/10">
                  <span className="material-symbols-outlined text-secondary">
                    {pillar.icon}
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-primary text-lg">{pillar.title}</h4>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href="/about" className="text-primary font-bold flex items-center gap-3 group pt-4 cursor-pointer hover:text-secondary transition-colors">
            <span>Learn More About Our Story</span>
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-secondary">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
