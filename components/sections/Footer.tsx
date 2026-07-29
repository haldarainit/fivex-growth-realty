'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { footerData, companyInfo, contactDetails, socialLinks, officeAddresses } from '@/data/companyData';
import SocialIconLink from '@/components/ui/SocialIconLink';

const FooterSection: React.FC<{ title: string; links: { label: string; href: string }[] }> = ({ title, links }) => (
  <div className="space-y-4">
    <h4 className="text-white font-extrabold text-xs uppercase tracking-widest border-b border-white/10 pb-2">{title}</h4>
    <ul className="space-y-2.5">
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link href={href} className="text-white/70 text-sm hover:text-secondary transition-colors font-medium">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Animated Total Site Visits Counter
  const TARGET_TOTAL_VISITS = 184925;
  const [totalVisits, setTotalVisits] = useState(0);

  useEffect(() => {
    // Smooth Count Up Animation from 0 to TARGET_TOTAL_VISITS on mount
    let startTimestamp: number | null = null;
    const duration = 2200; // 2.2s smooth deceleration

    const animateCount = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic ease-out curve for count up
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOutProgress * TARGET_TOTAL_VISITS);
      
      setTotalVisits(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    const animFrame = requestAnimationFrame(animateCount);

    // Periodic increment after animation completes
    const visitIncrementInterval = setInterval(() => {
      setTotalVisits((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 6000);

    return () => {
      cancelAnimationFrame(animFrame);
      clearInterval(visitIncrementInterval);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => { setSubscribed(false); setEmail(''); }, 4000);
    }
  };

  // Dynamically formatted digits array - scales to 7, 8, 9+ digits automatically
  const formattedDigits = totalVisits.toLocaleString('en-IN').split('');

  return (
    <footer className="bg-primary text-white pt-16 border-t border-white/10 relative">
      {/* Main Footer Container */}
      <div className="px-4 sm:px-6 lg:px-14 max-w-[1440px] mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-1 font-display font-extrabold tracking-tight text-2xl leading-none">
              <span className="text-white">FIVEX</span>
              <span className="text-secondary ml-1">GROWTH</span>
              <span className="text-white ml-1">REALTY</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>

            <div className="space-y-3 pt-2">
              <a href={`tel:${contactDetails.primaryPhone}`} className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">call</span>
                <span className="text-sm font-semibold">{contactDetails.primaryPhone}</span>
              </a>
              <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0">mail</span>
                <span className="text-sm font-semibold">{contactDetails.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0 mt-0.5">location_on</span>
                <span className="text-white/70 text-xs sm:text-sm leading-relaxed">{officeAddresses[0].address}</span>
              </div>
            </div>

          </div>

          {/* Col 2: Navigation & Company Links */}
          <div className="grid grid-cols-2 gap-6">
            <FooterSection title="Company" links={footerData.company} />
            <FooterSection title="Quick Links" links={footerData.quickLinks} />
          </div>

          {/* Col 3: Projects & Property Types */}
          <div className="grid grid-cols-2 gap-6">
            <FooterSection title="Projects" links={footerData.projects} />
            <FooterSection title="Properties" links={footerData.propertyTypes} />
          </div>

          {/* Col 4: Newsletter + Socials + Dynamic Box Counter Widget */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-white font-extrabold text-xs uppercase tracking-widest">Market Insights</h4>
              <p className="text-white/70 text-xs leading-relaxed">
                Subscribe for exclusive pre-launch pricing and real estate reports.
              </p>
              {subscribed ? (
                <p className="text-secondary text-xs font-bold flex items-center gap-2 bg-secondary/10 p-2.5 rounded-lg border border-secondary/30">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Subscribed! Insights incoming.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    required
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white rounded-xl focus:border-secondary flex-1 px-3.5 py-2.5 text-xs outline-none placeholder:text-white/40"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-primary px-4 rounded-xl font-extrabold flex items-center justify-center hover:bg-gold transition-colors cursor-pointer text-xs uppercase"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>

            {/* Follow Us Section */}
            <div className="space-y-3 border-t border-white/10 pt-4">
              <h5 className="text-white/85 text-[11px] font-extrabold uppercase tracking-[0.22em]">
                Follow Us
              </h5>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <SocialIconLink
                    key={s.platform}
                    platform={s.platform}
                    url={s.url}
                    iconImg={s.iconImg}
                    className="opacity-90 hover:opacity-100"
                    iconClassName="h-5 w-5 lg:h-6 lg:w-6"
                  />
                ))}
              </div>
            </div>

            {/* 📊 Clean Professional Dynamic Digit-Box Site Visit Counter (Placed directly under Follow Us) */}
            <div className="space-y-2.5 border-t border-white/10 pt-4">
              <h5 className="text-white/85 text-[11px] font-extrabold uppercase tracking-[0.22em]">
                Total Site Visits
              </h5>

              {/* Dynamic Auto-Expanding Digit Boxes Container */}
              <div className="bg-black/40 border border-white/15 p-3 rounded-2xl backdrop-blur-md shadow-inner">
                <div className="flex flex-wrap items-center gap-1.5 py-0.5">
                  {formattedDigits.map((char, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center font-mono font-extrabold text-sm rounded-lg select-none transition-all ${
                        char === ','
                          ? 'w-2.5 h-8 text-secondary text-xs font-bold bg-transparent'
                          : 'w-7 h-8 bg-gradient-to-b from-white/20 to-white/10 border border-white/25 text-white shadow-[0_2px_4px_rgba(0,0,0,0.4)]'
                      }`}
                    >
                      {char}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* RERA & Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-black/30 py-6">
        <div className="px-4 sm:px-6 lg:px-14 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center lg:text-left">
            <p className="text-white/60 text-xs font-semibold">
              © 2026 {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1 pt-1">
              <span className="text-white/50 text-[11px]">UP RERA: {companyInfo.rera.up}</span>
              <span className="text-white/50 text-[11px]">Haryana RERA: {companyInfo.rera.haryana}</span>
              <span className="text-white/50 text-[11px]">Maharashtra RERA: {companyInfo.rera.maharashtra}</span>
              <span className="text-white/50 text-[11px]">GSTIN: {companyInfo.gstin}</span>
            </div>
          </div>

          <div className="flex gap-5 flex-wrap justify-center">
            {footerData.legal.map(({ label, href }) => (
              <Link key={href} href={href} className="text-white/60 hover:text-secondary text-xs transition-colors font-medium">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
