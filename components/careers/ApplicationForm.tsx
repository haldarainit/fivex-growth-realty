'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  jobTitle: string;
  jobSlug: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  currentCompany: string;
  currentCtc: string;
  expectedCtc: string;
  noticePeriod: string;
  coverLetter: string;
}

const initialForm: FormData = {
  fullName: '', email: '', phone: '', experience: '',
  currentCompany: '', currentCtc: '', expectedCtc: '',
  noticePeriod: '', coverLetter: '',
};

export default function ApplicationForm({ jobTitle, jobSlug }: Props) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('Resume file must be under 5MB.');
        return;
      }
      setResume(file);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) { setErrorMessage('Please attach your resume.'); return; }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      fd.append('resume', resume);
      fd.append('jobTitle', jobTitle);
      fd.append('jobSlug', jobSlug);

      const res = await fetch('/api/careers/apply', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm(initialForm);
      setResume(null);
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
      >
        <span className="material-symbols-outlined text-green-500 text-6xl mb-4 block" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
        <h3 className="font-display font-bold text-primary text-2xl mb-2">Application Submitted!</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Thank you for applying for <strong>{jobTitle}</strong>. Our HR team will review your application and get back to you within 3–5 working days.
        </p>
      </motion.div>
    );
  }

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-primary placeholder:text-gray-400 outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/10 transition-all bg-white";
  const labelCls = "block text-xs font-bold text-primary/70 mb-1.5 uppercase tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input required name="fullName" value={form.fullName} onChange={handleChange} placeholder="Rajesh Kumar" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Phone Number *</label>
          <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Total Experience *</label>
          <select required name="experience" value={form.experience} onChange={handleChange} className={inputCls}>
            <option value="">Select years</option>
            {['0-1 years', '1-2 years', '2-4 years', '4-6 years', '6-10 years', '10+ years'].map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Current Company</label>
        <input name="currentCompany" value={form.currentCompany} onChange={handleChange} placeholder="Company name (or Fresher)" className={inputCls} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Current CTC (LPA)</label>
          <input name="currentCtc" value={form.currentCtc} onChange={handleChange} placeholder="e.g. 8 LPA" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Expected CTC (LPA) *</label>
          <input required name="expectedCtc" value={form.expectedCtc} onChange={handleChange} placeholder="e.g. 12 LPA" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Notice Period *</label>
        <select required name="noticePeriod" value={form.noticePeriod} onChange={handleChange} className={inputCls}>
          <option value="">Select notice period</option>
          {['Immediate', '15 days', '1 month', '2 months', '3 months'].map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelCls}>Cover Letter</label>
        <textarea
          name="coverLetter"
          value={form.coverLetter}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us why you're the perfect fit for this role..."
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Resume Upload */}
      <div>
        <label className={labelCls}>Resume / CV * <span className="text-gray-400 font-normal normal-case tracking-normal">(PDF or DOCX, max 5MB)</span></label>
        <div
          onClick={() => fileRef.current?.click()}
          className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-secondary/50 hover:bg-secondary/5 transition-all"
        >
          <span className="material-symbols-outlined text-gray-400 text-4xl mb-2 block">upload_file</span>
          {resume ? (
            <p className="text-primary font-semibold text-sm">{resume.name} <span className="text-green-500">✓</span></p>
          ) : (
            <p className="text-gray-500 text-sm">Click to upload your resume</p>
          )}
          <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
        </div>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-4 py-2">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-secondary hover:text-primary transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
      >
        {status === 'submitting' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>Submit Application <span className="material-symbols-outlined text-base">send</span></>
        )}
      </button>
    </form>
  );
}
