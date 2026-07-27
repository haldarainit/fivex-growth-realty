import React from 'react';

export const AboutHero: React.FC = () => {
  return (
    <header className="relative h-[750px] lg:h-[819px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center animate-zoom"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPvU9xmlHBOmUbiDrzA9eHiEzc8klET2jSZQlRB5Y5K4BSFpJe0HTOe8AuAAkrc_UJ2mL26EBfKSCWZscKzRF1eSjDF9KaZ2sc7tdtb9Xv3jxcTvyBfyjkxfZH1GsQ_nyVrsIvr0vpMsyKHSE2i9HM8bUSm_wBSzPCyuVyptZxqVBXza-b9R60QHevTg3PGLNaaHK4LSURrI_tKD34qc64WmRJXfV8FPs494udHtMjoqAZU2574NlmExORi3tgs9ajWrYnTqX8giry')`,
          }}
          aria-label="Modern luxury villa with infinity pool at twilight"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-16 max-w-container-max mx-auto">
        <div className="max-w-2xl text-white pt-16">
          <span className="inline-block px-4 py-1.5 bg-secondary-fixed/20 backdrop-blur-md border border-secondary-fixed/30 rounded-full text-secondary-fixed text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Redefining Excellence
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Crafting Legacies in <span className="text-secondary-fixed-dim italic">Real Estate</span>
          </h1>
          <p className="font-body text-surface-variant/90 text-lg mb-10 max-w-xl leading-relaxed">
            FIVEX GROWTH REALTY is a premier brokerage dedicated to delivering unparalleled investment growth through strategic property acquisitions and bespoke real estate solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/properties"
              className="bg-secondary-fixed-dim text-on-secondary-fixed px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer shadow-lg"
            >
              Our Portfolio
            </a>
            <a
              href="#purpose"
              className="border border-white/40 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
