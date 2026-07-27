'use client';

import React, { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { contactInfos } from '@/data/homeData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    interest: 'Residential Apartment',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        interest: 'Residential Apartment',
        message: '',
      });
    }, 3000);
  };

  return (
    <SectionContainer id="contact" bgStyle="bg-white">
      <div className="grid lg:grid-cols-2 gap-24">
        {/* Left Column: Direct Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl lg:text-6xl text-primary font-bold leading-tight">
              Ready to Find Your <br />
              Dream Property?
            </h2>
            <p className="text-primary/60 text-lg leading-relaxed">
              Get in touch with our expert advisors today for a personalized real estate consultation.
            </p>
          </div>

          <div className="space-y-10">
            {contactInfos.map((info, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center transition-all group-hover:bg-gold/10 group-hover:scale-110">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    {info.icon}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] text-primary/40 font-bold uppercase tracking-widest mb-1">
                    {info.label}
                  </p>
                  <p className="font-display font-bold text-xl text-primary">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="bg-surface-container/50 p-8 sm:p-12 rounded-3xl border border-outline-variant/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <span className="material-symbols-outlined text-secondary text-6xl">
                check_circle
              </span>
              <h3 className="font-display text-2xl font-bold text-primary">
                Inquiry Submitted!
              </h3>
              <p className="text-primary/60 text-sm">
                Thank you for contacting FIVEX GROWTH REALTY. Our team will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary/50 uppercase tracking-widest px-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-white border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary py-4 px-6 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary/50 uppercase tracking-widest px-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 99999 99999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary py-4 px-6 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary/50 uppercase tracking-widest px-1">
                  Property Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  className="w-full bg-white border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary py-4 px-6 text-sm appearance-none cursor-pointer"
                >
                  <option value="Residential Apartment">Residential Apartment</option>
                  <option value="Commercial Office">Commercial Office</option>
                  <option value="Retail Shop">Retail Shop</option>
                  <option value="Investment Plot">Investment Plot</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary/50 uppercase tracking-widest px-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary py-4 px-6 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
