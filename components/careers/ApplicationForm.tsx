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
      setErrorMessage('Something went wrong. Please try again or email us directly at hr@fivexgrowthrealty.com.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center shadow-lg w-full"
      >
        <span className="material-symbols-outlined text-emerald-500 text-6xl mb-4 block" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
        <h3 className="font-display font-bold text-primary text-2xl mb-2">Application Submitted!</h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          Thank you for applying for <strong>{jobTitle}</strong>. Our HR talent team will review your profile and reach out within 3–5 business days.
        </p>
      </motion.div>
    );
  }

  const inputCls = "w-full min-w-full px-5 py-3.5 border border-gray-200 rounded-2xl text-base text-primary placeholder:text-gray-400 outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/15 transition-all bg-white font-medium shadow-xs";
  const labelCls = "block text-xs font-extrabold text-primary/80 mb-2 uppercase tracking-wider";

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-8 lg:p-10">
      <div className="border-b border-gray-100 pb-4 mb-2">
        <h3 className="font-display font-extrabold text-xl text-primary">
          Apply for {jobTitle}
        </h3>
        <p className="text-xs text-gray-500 mt-1 font-medium">
          Complete all required details below to submit your profile.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        <div className="w-full">
          <label className={labelCls}>Full Name *</label>
          <input required name="fullName" value={form.fullName} onChange={handleChange} placeholder="e.g. Rajesh Kumar" className={inputCls} />
        </div>
        <div className="w-full">
          <label className={labelCls}>Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your.name@domain.com" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        <div className="w-full">
          <label className={labelCls}>Phone Number *</label>
          <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputCls} />
        </div>
        <div className="w-full">
          <label className={labelCls}>Total Experience *</label>
          <select required name="experience" value={form.experience} onChange={handleChange} className={inputCls}>
            <option value="">Select experience</option>
            {['0-1 years', '1-2 years', '2-4 years', '4-6 years', '6-10 years', '10+ years'].map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full">
        <label className={labelCls}>Current Company / Employer</label>
        <input name="currentCompany" value={form.currentCompany} onChange={handleChange} placeholder="Current Organization name (or Fresher / Consultant)" className={inputCls} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        <div className="w-full">
          <label className={labelCls}>Current CTC (LPA)</label>
          <input name="currentCtc" value={form.currentCtc} onChange={handleChange} placeholder="e.g. 8.5 LPA" className={inputCls} />
        </div>
        <div className="w-full">
          <label className={labelCls}>Expected CTC (LPA) *</label>
          <input required name="expectedCtc" value={form.expectedCtc} onChange={handleChange} placeholder="e.g. 12 LPA" className={inputCls} />
        </div>
      </div>

      <div className="w-full">
        <label className={labelCls}>Notice Period *</label>
        <select required name="noticePeriod" value={form.noticePeriod} onChange={handleChange} className={inputCls}>
          <option value="">Select notice period</option>
          {['Immediate Joiner', '15 Days', '1 Month', '2 Months', '3 Months'].map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="w-full">
        <label className={labelCls}>Cover Letter / Brief Pitch</label>
        <textarea
          name="coverLetter"
          value={form.coverLetter}
          onChange={handleChange}
          rows={4}
          placeholder="Share relevant deals, achievements, or why you're a great fit for FIVEX..."
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Resume Upload */}
      <div className="w-full">
        <label className={labelCls}>
          Resume / CV * <span className="text-gray-400 font-medium normal-case tracking-normal">(PDF or DOCX, max 5MB)</span>
        </label>
        <div
          onClick={() => fileRef.current?.click()}
          className="border-2 border-dashed border-gray-200 rounded-2xl p-7 text-center cursor-pointer hover:border-secondary hover:bg-secondary/5 transition-all w-full"
        >
          <span className="material-symbols-outlined text-secondary text-4xl mb-2 block">upload_file</span>
          {resume ? (
            <p className="text-primary font-bold text-sm flex items-center justify-center gap-1.5">
              {resume.name} <span className="text-emerald-500 font-extrabold">✓</span>
            </p>
          ) : (
            <p className="text-gray-600 text-sm font-semibold">Click to upload your resume / CV document</p>
          )}
          <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
        </div>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-xs font-semibold bg-red-50 border border-red-100 rounded-xl px-4 py-3">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full min-w-full bg-primary text-white py-4 rounded-2xl font-extrabold text-sm uppercase tracking-wider hover:bg-secondary hover:text-primary transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
      >
        {status === 'submitting' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting Application...
          </>
        ) : (
          <>Submit Application <span className="material-symbols-outlined text-base">send</span></>
        )}
      </button>
    </form>
  );
}
