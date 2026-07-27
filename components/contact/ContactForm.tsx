'use client';

import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="lg:col-span-7">
      <div className="mb-12">
        <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4 text-primary leading-tight">
          Get in Touch
        </h1>
        <p className="text-on-surface-variant font-body text-lg max-w-2xl leading-relaxed">
          Our advisors are ready to help you find your next premium investment. Connect with us for a curated real estate experience.
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-16 bg-surface-container rounded-xl border border-outline-variant/20 text-center gap-4">
          <span className="material-symbols-outlined text-5xl text-secondary">check_circle</span>
          <h3 className="font-display text-2xl font-bold text-primary">Message Sent!</h3>
          <p className="text-on-surface-variant font-body text-base">
            Our concierge team will respond within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 focus:ring-0 transition-all placeholder:text-outline/50 text-sm outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98000 00000"
                className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 focus:ring-0 transition-all placeholder:text-outline/50 text-sm outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 focus:ring-0 transition-all placeholder:text-outline/50 text-sm outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Your Message
            </label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your property interests..."
              className="w-full px-4 py-4 rounded-lg bg-surface-container-low border border-transparent focus:border-secondary/50 focus:ring-0 transition-all placeholder:text-outline/50 text-sm outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-12 py-5 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-3 cursor-pointer text-xs uppercase tracking-wider"
          >
            Send Message
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
