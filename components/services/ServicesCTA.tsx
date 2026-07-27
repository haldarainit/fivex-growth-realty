'use client';

import React, { useState } from 'react';

export const ServicesCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceInterest: 'Residential Sales',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        serviceInterest: 'Residential Sales',
      });
    }, 3000);
  };

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-primary rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px] absolute -right-20 -top-20 text-white">
              real_estate_agent
            </span>
          </div>

          <div className="relative z-10 p-8 sm:p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to scale your property portfolio?
              </h2>
              <p className="font-body text-white/80 text-lg mb-8 max-w-md leading-relaxed">
                Connect with our senior consultants for a private briefing on upcoming opportunities and strategic investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#callback-form"
                  className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  Get Expert Advice
                  <span className="material-symbols-outlined text-sm">call</span>
                </a>
                <button
                  onClick={() => alert('Market guide brochure download initiated!')}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all cursor-pointer text-center"
                >
                  Download Brochure
                </button>
              </div>
            </div>

            <div id="callback-form" className="bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-primary font-display text-2xl font-bold mb-6">
                Request a Callback
              </h4>
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <span className="material-symbols-outlined text-secondary text-5xl">
                    check_circle
                  </span>
                  <p className="font-bold text-primary text-base">Request Received!</p>
                  <p className="text-xs text-on-surface-variant">
                    Our senior consultant will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-secondary/20 text-primary text-sm outline-none"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-secondary/20 text-primary text-sm outline-none"
                    />
                  </div>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:ring-2 focus:ring-secondary/20 text-primary text-sm outline-none cursor-pointer"
                  >
                    <option value="Residential Sales">Residential Sales</option>
                    <option value="Commercial Property">Commercial Property</option>
                    <option value="Land & Plot Investment">Land & Plot Investment</option>
                    <option value="Project Booking">Project Booking</option>
                    <option value="Expert Consultation">Expert Consultation</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary transition-all cursor-pointer text-xs uppercase tracking-wider shadow-md"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
