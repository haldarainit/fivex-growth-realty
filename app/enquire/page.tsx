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

const steps = ['Personal Details', 'Investment Profile', 'Confirmation'];

export default function EnquirePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
  };

  const progressWidth = step === 1 ? '33%' : step === 2 ? '66%' : '100%';

  const inputClass =
    'w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm transition-all text-gray-900 placeholder:text-gray-400';

  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-20 min-h-screen flex-grow bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Page header */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Concierge Enquiry
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 leading-tight">
              Begin Your Journey
            </h1>
            <p className="text-gray-500 font-body text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Tell us about your vision. Our advisors will craft a bespoke property shortlist within 24 hours.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            {/* Step Labels */}
            <div className="flex justify-between mb-3">
              {steps.map((label, i) => (
                <span
                  key={label}
                  className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight text-center flex-1 ${
                    i + 1 <= step ? 'text-secondary' : 'text-gray-400'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
            {/* Bar */}
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full transition-all duration-700"
                style={{ width: progressWidth }}
              />
            </div>
            {/* Step dots */}
            <div className="flex justify-between mt-3">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all ${
                    i + 1 < step
                      ? 'bg-secondary border-secondary text-white'
                      : i + 1 === step
                      ? 'border-secondary text-secondary bg-white'
                      : 'border-gray-200 text-gray-400 bg-white'
                  }`}
                >
                  {i + 1 < step ? (
                    <span className="material-symbols-outlined text-xs">check</span>
                  ) : (
                    i + 1
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-12">

            {/* ─── Step 1: Personal Details ─── */}
            {step === 1 && (
              <form onSubmit={handleStep1} className="space-y-5">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">
                    Who are we speaking with?
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mb-6">
                    All information is kept strictly confidential.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Full Name
                  </label>
                  <input
                    required name="name" type="text" value={form.name} onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <input
                    required name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+91 98000 00000"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    required name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-white transition-all cursor-pointer shadow-sm mt-2 flex items-center justify-center gap-2"
                >
                  Continue
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </form>
            )}

            {/* ─── Step 2: Investment Profile ─── */}
            {step === 2 && (
              <form onSubmit={handleStep2} className="space-y-5">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">
                    What are you looking for?
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mb-6">
                    Help us tailor the perfect shortlist for you.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Property Interest
                  </label>
                  <select
                    required name="interest" value={form.interest} onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select interest…</option>
                    {propertyInterests.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Investment Budget
                  </label>
                  <select
                    required name="budget" value={form.budget} onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select budget range…</option>
                    {budgetRanges.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Investment Timeline
                  </label>
                  <input
                    name="timeline" type="text" value={form.timeline} onChange={handleChange}
                    placeholder="e.g. Within 3 months, Exploring options"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message" rows={3} value={form.message} onChange={handleChange}
                    placeholder="Any specific requirements or questions…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-200 text-gray-500 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-2 bg-primary text-white py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-white transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 flex-1"
                  >
                    Review Enquiry
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </form>
            )}

            {/* ─── Step 3: Review & Confirm ─── */}
            {step === 3 && !submitted && (
              <form onSubmit={handleFinalSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">
                    Review Your Enquiry
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mb-6">
                    Please confirm your details before submission.
                  </p>
                </div>

                {/* Summary cards */}
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Personal Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Name</p>
                        <p className="font-bold text-gray-900 text-sm">{form.name || '—'}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Phone</p>
                        <p className="font-bold text-gray-900 text-sm">{form.phone || '—'}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Email</p>
                        <p className="font-bold text-gray-900 text-sm">{form.email || '—'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Investment Profile</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Interest</p>
                        <p className="font-bold text-gray-900 text-sm">{form.interest || '—'}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Budget</p>
                        <p className="font-bold text-gray-900 text-sm">{form.budget || '—'}</p>
                      </div>
                      {form.timeline && (
                        <div>
                          <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Timeline</p>
                          <p className="font-bold text-gray-900 text-sm">{form.timeline}</p>
                        </div>
                      )}
                      {form.message && (
                        <div className="sm:col-span-2">
                          <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Message</p>
                          <p className="text-gray-700 text-sm">{form.message}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-gray-200 text-gray-500 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-white transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2"
                  >
                    Submit Enquiry
                    <span className="material-symbols-outlined text-base">send</span>
                  </button>
                </div>
              </form>
            )}

            {/* ─── Submitted: Confirmation ─── */}
            {submitted && (
              <div className="text-center py-6 sm:py-8 space-y-5">
                <div className="w-20 h-20 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center mx-auto">
                  <span
                    className="material-symbols-outlined text-4xl text-secondary"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    check_circle
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
                    Enquiry Received!
                  </h2>
                  <p className="text-gray-500 font-body text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-primary">{form.name || 'valued client'}</strong>. Our senior advisor will reach out within 24 hours with a curated shortlist.
                  </p>
                </div>

                {/* Summary recap */}
                <div className="bg-gray-50 rounded-2xl p-5 text-left space-y-2 max-w-sm mx-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Interest</span>
                    <span className="text-xs font-bold text-gray-900">{form.interest}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Budget</span>
                    <span className="text-xs font-bold text-secondary">{form.budget}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Link
                    href="/properties"
                    className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-white transition-all cursor-pointer shadow-sm text-center"
                  >
                    Browse Properties
                  </Link>
                  <Link
                    href="/"
                    className="border-2 border-gray-200 text-gray-600 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-all cursor-pointer text-center"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Trust micro-bar */}
          {!submitted && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">lock</span>
                100% Secure
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">verified</span>
                No Spam, Ever
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
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
