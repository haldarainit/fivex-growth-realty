'use client';

import React, { useState } from 'react';

export const ContactSidebar: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [callRequested, setCallRequested] = useState(false);

  const handleCallRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      setCallRequested(true);
      setPhone('');
      setTimeout(() => setCallRequested(false), 4000);
    }
  };

  return (
    <div className="lg:col-span-5 space-y-8">
      {/* Office Card */}
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl border-l-4 border-l-secondary shadow-sm border border-outline-variant/10">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-secondary-container/30 rounded-lg">
            <span className="material-symbols-outlined text-secondary">apartment</span>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-primary mb-2">The Executive Tower</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-body">
              Suite 1502, Level 15, Business Avenue<br />
              Downtown Financial District<br />
              Mumbai, India
            </p>
          </div>
        </div>
      </div>

      {/* Hours + Direct Contact */}
      <div className="bg-white p-8 rounded-xl border border-outline-variant/20 shadow-sm space-y-6">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-secondary">schedule</span>
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Working Hours</p>
            <p className="text-primary font-semibold text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-secondary">call</span>
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Direct Line</p>
            <p className="text-primary font-semibold text-sm">+91 22 4567 8900</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-secondary">mail</span>
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Enquiries</p>
            <p className="text-primary font-semibold text-sm">concierge@fivexrealty.com</p>
          </div>
        </div>
      </div>

      {/* Request Callback Card */}
      <div className="relative overflow-hidden bg-primary text-white p-8 rounded-xl shadow-xl group cursor-default">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
        <h4 className="font-display text-2xl font-bold mb-2 relative z-10">Prefer a Call?</h4>
        <p className="text-white/70 mb-6 relative z-10 text-sm leading-relaxed font-body">
          Leave your number and our lead consultant will contact you within 15 minutes.
        </p>
        {callRequested ? (
          <p className="text-secondary-fixed-dim font-bold text-sm relative z-10">
            ✓ We'll call you shortly!
          </p>
        ) : (
          <form onSubmit={handleCallRequest} className="flex gap-2 relative z-10">
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone"
              className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-lg px-4 py-3 focus:bg-white/20 focus:ring-0 transition-all text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-secondary-fixed-dim text-on-secondary-container px-4 py-3 rounded-lg font-bold hover:bg-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">call_made</span>
            </button>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 pt-2">
        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Connect:</span>
        <div className="flex gap-3">
          {['public', 'share', 'thumb_up'].map((icon) => (
            <a
              key={icon}
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-primary hover:bg-secondary hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
