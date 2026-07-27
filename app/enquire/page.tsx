'use client';

import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

const propertyInterests = [
  'Luxury Residential',
  'Commercial Office Space',
  'Land & Plots',
  'Pre-Launch Bookings',
  'NRI Investment Advisory',
  'Property Management',
];

const budgetRanges = [
  'Under ₹50 Lakhs',
  '₹50L – ₹1 Crore',
  '₹1Cr – ₹3 Crore',
  '₹3Cr – ₹10 Crore',
  'Above ₹10 Crore',
  'International / USD Budget',
];

export default function EnquirePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone && form.email) setStep(2);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.interest && form.budget) setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    // Mark as "submitted" — no backend needed for demo
  };

  const progressWidth = step === 1 ? '33%' : step === 2 ? '66%' : '100%';

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen flex-grow">
        <div className="max-w-2xl mx-auto px-margin-mobile md:px-0">

          {/* Page header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Concierge Enquiry
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              Begin Your Journey
            </h1>
            <p className="text-on-surface-variant font-body text-base leading-relaxed max-w-lg mx-auto">
              Tell us about your vision. Our advisors will craft a bespoke property shortlist within 24 hours.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between mb-3">
              {(['Personal Details', 'Investment Profile', 'Confirmation'] as const).map(
                (label, i) => (
                  <span
                    key={label}
                    className={`text-xs font-bold uppercase tracking-wider ${
                      i + 1 <= step ? 'text-secondary' : 'text-on-surface-variant'
                    }`}
                  >
                    {label}
                  </span>
                )
              )}
            </div>
            <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full transition-all duration-700"
                style={{ width: progressWidth }}
              />
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-outline-variant/10 p-8 sm:p-12">
            {/* Step 1 */}
            {step === 1 && (
              <form onSubmit={handleStep1} className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-primary mb-2">
                  Who are we speaking with?
                </h2>
                <p className="text-on-surface-variant text-sm mb-6">
                  All information is kept strictly confidential.
                </p>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                  <input
                    required name="name" type="text" value={form.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 outline-none text-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Phone Number</label>
                  <input
                    required name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+91 98000 00000"
                    className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 outline-none text-sm transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                  <input
                    required name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 outline-none text-sm transition-all"
                  />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-all cursor-pointer shadow-md">
                  Continue →
                </button>
              </form>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <form onSubmit={handleStep2} className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-primary mb-2">
                  What are you looking for?
                </h2>
                <p className="text-on-surface-variant text-sm mb-6">
                  Help us tailor the perfect shortlist for you.
                </p>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Property Interest</label>
                  <select
                    required name="interest" value={form.interest} onChange={handleChange}
                    className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 outline-none text-sm transition-all cursor-pointer"
                  >
                    <option value="">Select interest…</option>
                    {propertyInterests.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Investment Budget</label>
                  <select
                    required name="budget" value={form.budget} onChange={handleChange}
                    className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 outline-none text-sm transition-all cursor-pointer"
                  >
                    <option value="">Select budget range…</option>
                    {budgetRanges.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Investment Timeline</label>
                  <input
                    name="timeline" type="text" value={form.timeline} onChange={handleChange}
                    placeholder="e.g. Within 3 months, Exploring options"
                    className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 outline-none text-sm transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Additional Message (Optional)</label>
                  <textarea
                    name="message" rows={3} value={form.message} onChange={handleChange}
                    placeholder="Any specific requirements or questions…"
                    className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border border-outline-variant text-on-surface-variant py-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-surface-container-high transition-all cursor-pointer">
                    ← Back
                  </button>
                  <button type="submit" className="flex-1 bg-primary text-white py-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-all cursor-pointer shadow-md">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 – Confirmation */}
            {step === 3 && (
              <div className="text-center py-8 space-y-6">
                <div className="w-20 h-20 rounded-full bg-secondary-fixed flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                    check_circle
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold text-primary">
                  Enquiry Received!
                </h2>
                <p className="text-on-surface-variant font-body text-base max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{form.name || 'valued client'}</strong>. Our senior advisor will reach out within 24 hours with a curated shortlist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link
                    href="/properties"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-all cursor-pointer shadow-md text-center"
                  >
                    Browse Properties
                  </Link>
                  <Link
                    href="/"
                    className="border border-secondary text-secondary px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-secondary/5 transition-all cursor-pointer text-center"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Trust micro-bar */}
          {step !== 3 && (
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">lock</span>
                100% Secure
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">verified</span>
                No Spam, Ever
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                Response in 24h
              </span>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
