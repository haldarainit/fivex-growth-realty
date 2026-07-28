'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { companyInfo, officeAddresses, contactDetails, socialLinks } from '@/data/companyData';
import { faqs } from '@/data/homeData';
import SocialIconLink from '@/components/ui/SocialIconLink';

const inquiryTypes = ['General Inquiry', 'Property Purchase', 'Investment Advisory', 'NRI Services', 'Commercial Leasing', 'Home Loan', 'Careers', 'Feedback'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', inquiryType: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '', inquiryType: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-primary placeholder:text-gray-400 outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/10 transition-all bg-white";
  const labelCls = "block text-xs font-bold text-primary/70 mb-1.5 uppercase tracking-wide";

  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero */}
        <div className="bg-primary py-14">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Get in Touch</span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight">Contact Us</h1>
              <p className="text-white/60 text-lg mt-4 max-w-xl leading-relaxed">
                Our experts are ready to help you find the perfect property or answer any questions. Reach out — we respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Quick contact strip */}
        <div className="bg-secondary">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-4">
            <div className="flex flex-wrap gap-6">
              <a href={`tel:${contactDetails.primaryPhone}`} className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>call</span>
                <span className="font-bold text-sm">{contactDetails.primaryPhone}</span>
              </a>
              <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>mail</span>
                <span className="font-bold text-sm">{contactDetails.email}</span>
              </a>
              <span className="flex items-center gap-2 text-primary/80">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: '"FILL" 1' }}>schedule</span>
                <span className="text-sm">{contactDetails.workingHours.weekdays}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            {/* Left: Contact Form */}
            <div>
              <h2 className="font-display font-bold text-2xl text-primary mb-6">Send Us a Message</h2>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
                >
                  <span className="material-symbols-outlined text-green-500 text-5xl mb-3 block" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                  <h3 className="font-display font-bold text-primary text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours. Check your inbox for a confirmation email.</p>
                  <button onClick={() => setStatus('idle')} className="mt-4 text-secondary text-sm font-semibold hover:underline cursor-pointer">Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                  <div>
                    <label className={labelCls}>Type of Inquiry</label>
                    <select name="inquiryType" value={form.inquiryType} onChange={handleChange} className={inputCls}>
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Your Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} placeholder="Rajesh Kumar" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Email Address *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Subject</label>
                      <input name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Looking for 3BHK in Noida" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Your Message *</label>
                    <textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your requirements..." className={`${inputCls} resize-none`} />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-4 py-2">Something went wrong. Please try again or call us directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-secondary hover:text-primary transition-all disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <>Send Message <span className="material-symbols-outlined text-base">send</span></>
                    )}
                  </button>
                </form>
              )}

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64">
                <iframe
                  src={officeAddresses[0].mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FIVEX Noida HQ"
                />
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
              {/* Office cards */}
              {officeAddresses.map((office) => (
                <div key={office.id} className={`rounded-2xl p-6 border ${office.isPrimary ? 'bg-primary border-primary text-white' : 'bg-white border-gray-100 shadow-sm'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    {office.isPrimary && <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">Headquarters</span>}
                    <h3 className={`font-display font-bold text-base ${office.isPrimary ? 'text-white' : 'text-primary'}`}>{office.label}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className={`text-sm leading-relaxed ${office.isPrimary ? 'text-white/60' : 'text-gray-500'}`}>{office.address}</p>
                    <a href={`tel:${office.phone}`} className={`flex items-center gap-2 text-sm ${office.isPrimary ? 'text-white/70 hover:text-secondary' : 'text-gray-500 hover:text-secondary'} transition-colors`}>
                      <span className="material-symbols-outlined text-secondary text-sm">call</span>{office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className={`flex items-center gap-2 text-sm ${office.isPrimary ? 'text-white/70 hover:text-secondary' : 'text-gray-500 hover:text-secondary'} transition-colors`}>
                      <span className="material-symbols-outlined text-secondary text-sm">mail</span>{office.email}
                    </a>
                  </div>
                </div>
              ))}

              {/* Working hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-primary text-base mb-4">Working Hours</h3>
                <div className="space-y-2">
                  {Object.entries(contactDetails.workingHours).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                      <span className="text-gray-500 text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RERA & GSTIN */}
              <div id="rera" className="bg-surface-container-low rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display font-bold text-primary text-base mb-4">Regulatory Information</h3>
                <div className="space-y-2">
                  <div><p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">UP RERA</p><p className="text-primary text-sm font-mono">{companyInfo.rera.up}</p></div>
                  <div><p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Haryana RERA</p><p className="text-primary text-sm font-mono">{companyInfo.rera.haryana}</p></div>
                  <div><p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Maharashtra RERA</p><p className="text-primary text-sm font-mono">{companyInfo.rera.maharashtra}</p></div>
                  <div><p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">GSTIN</p><p className="text-primary text-sm font-mono">{companyInfo.gstin}</p></div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-primary text-base mb-4">Follow Us</h3>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((s) => (
                    <SocialIconLink key={s.platform} platform={s.platform} url={s.url} iconImg={s.iconImg} className="border-gray-200 bg-white text-gray-600 hover:border-secondary/50 hover:text-secondary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-10">
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">FAQ</span>
              <h2 className="font-display font-bold text-3xl text-primary mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.slice(0, 6).map((faq) => (
                <div key={faq.id} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-primary text-sm pr-4">{faq.question}</span>
                    <span className={`material-symbols-outlined text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
