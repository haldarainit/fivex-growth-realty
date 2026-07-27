'use client';

import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-primary pt-24 pb-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-margin-desktop max-w-container-max mx-auto mb-20">
        {/* Brand Column */}
        <div className="space-y-8 md:col-span-1">
          <div className="font-display text-2xl font-bold tracking-tight">
            FIVEX <br />
            <span className="text-secondary">GROWTH REALTY</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Empowering investors and homebuyers through trust, strategy, and premium property solutions across India.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Website"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary transition-all"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a
              href="#"
              aria-label="Email"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary transition-all"
            >
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="flex flex-col gap-4 text-white/40 text-sm">
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Home Overview
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-secondary transition-colors">
                About Our Vision
              </a>
            </li>
            <li>
              <a href="#properties" className="hover:text-secondary transition-colors">
                Premium Properties
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-secondary transition-colors">
                Knowledge Base
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">
            Legal
          </h4>
          <ul className="flex flex-col gap-4 text-white/40 text-sm">
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Engagement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary transition-colors">
                RERA Disclosure
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-secondary transition-colors">
                Client FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Market Insights / Newsletter */}
        <div className="space-y-6">
          <h4 className="text-white font-bold text-sm uppercase tracking-widest">
            Market Insights
          </h4>
          <p className="text-white/40 text-sm leading-relaxed">
            Join 5,000+ investors receiving exclusive property reports.
          </p>

          {subscribed ? (
            <p className="text-secondary text-xs font-semibold">
              Thank you for subscribing to Market Insights!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-0 group">
              <input
                required
                type="email"
                placeholder="Professional Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border border-white/10 text-white rounded-l-xl focus:ring-0 focus:border-secondary/50 w-full px-4 text-xs py-3"
              />
              <button
                type="submit"
                className="bg-secondary text-primary px-5 rounded-r-xl font-bold flex items-center justify-center hover:bg-gold transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 px-margin-desktop max-w-container-max mx-auto text-center">
        <p className="text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} FIVEX GROWTH REALTY PVT LTD. EXCELLENCE IN REAL ESTATE.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
