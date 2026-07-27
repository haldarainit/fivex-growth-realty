'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const footerLinks = {
  explore: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Properties', href: '/properties' },
    { label: 'Projects', href: '/projects' },
    { label: 'Locations', href: '/locations' },
  ],
  services: [
    { label: 'Real Estate Services', href: '/services' },
    { label: 'Market Insights (Blog)', href: '/blog' },
    { label: 'Client Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Enquire Now', href: '/enquire' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'RERA Disclosure', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Sitemap', href: '#' },
  ],
};

const contactDetails = [
  { icon: 'location_on', text: 'One World Centre, Mumbai, India' },
  { icon: 'call', text: '+91 22 4567 8900' },
  { icon: 'mail', text: 'concierge@fivexrealty.com' },
  { icon: 'schedule', text: 'Mon – Sat: 9:00 AM – 7:00 PM' },
];

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
      }, 4000);
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* ── Main Grid ── */}
      <div className="px-4 sm:px-6 lg:px-14 max-w-[1440px] mx-auto pt-14 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">

          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-1 font-display font-bold tracking-tight text-2xl leading-none">
              <span>FIVEX</span>
              <span className="text-secondary ml-1">GROWTH</span>
              <span className="ml-1">REALTY</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Premier real estate brokerage delivering unparalleled investment growth through strategic property acquisitions and bespoke advisory across India and global markets.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              {contactDetails.map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 flex-shrink-0">
                    {icon}
                  </span>
                  <span className="text-white/50 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: 'public', label: 'Website' },
                { icon: 'alternate_email', label: 'Email' },
                { icon: 'share', label: 'Social' },
              ].map(({ icon, label }) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary transition-all"
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-secondary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Resources */}
          <div className="space-y-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-secondary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Legal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">Market Insights</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Join 5,000+ investors receiving exclusive property market reports.
              </p>
              {subscribed ? (
                <p className="text-secondary text-xs font-bold">
                  ✓ Subscribed! Insights incoming.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    required
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 text-white rounded-l-lg focus:ring-0 focus:border-secondary/50 flex-1 px-4 text-xs py-3 outline-none placeholder:text-white/30"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-primary px-4 rounded-r-lg font-bold flex items-center justify-center hover:bg-secondary-fixed-dim transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">send</span>
                  </button>
                </form>
              )}
            </div>

            {/* Legal links */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-white/40 text-xs hover:text-secondary transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5 px-4 sm:px-6 lg:px-14 max-w-[1440px] mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-xs font-medium uppercase tracking-[0.15em]">
          © {new Date().getFullYear()} FIVEX GROWTH REALTY PVT LTD. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/contact" className="text-white/30 hover:text-secondary text-xs transition-colors">
            Contact Us
          </Link>
          <Link href="/faq" className="text-white/30 hover:text-secondary text-xs transition-colors">
            FAQ
          </Link>
          <Link href="/blog" className="text-white/30 hover:text-secondary text-xs transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
