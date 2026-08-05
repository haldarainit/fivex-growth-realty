'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { jobListings, jobDepartments, careerBenefits, whyJoinUs } from '@/data/careerData';

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All');

  const filtered = activeDept === 'All'
    ? jobListings
    : jobListings.filter((j) => j.department === activeDept);

  return (
    <>
      <Header />
      <main className="flex-grow min-h-screen">
        {/* Hero */}
        <div className="relative bg-primary pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
          <img
            src="/careers.jpg"
            alt="FiveX Careers"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Join the Team</span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 tracking-tight leading-tight max-w-3xl">
                Build Your Career at<br /><span className="text-secondary">FiveX Growth Realty</span>
              </h1>
              <p className="text-white/70 text-sm sm:text-base mt-5 max-w-xl leading-relaxed">
                Join India&apos;s most respected premium real estate team. We&apos;re looking for driven, ethical, and talented professionals to grow with us.
              </p>
              <div className="flex gap-4 mt-8">
                <a href="#openings" className="bg-secondary text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all">
                  View Open Positions
                </a>
                <Link href="/contact" className="border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm hover:border-secondary/50 hover:text-secondary transition-all">
                  Contact HR
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Join Us */}
        <section className="py-16 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Why Join Us</span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary mt-3 mb-5">More Than a Job — A Career</h2>
                <ul className="space-y-3">
                  {whyJoinUs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: '"FILL" 1' }}>check</span>
                      </span>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div className="relative rounded-2xl overflow-hidden h-72">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="Team at FIVEX" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="text-center mb-12">
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Perks & Benefits</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary mt-3">What We Offer</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {careerBenefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>{b.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-primary text-base mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section id="openings" className="py-16 bg-white scroll-mt-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Openings</span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary mt-2">Current Positions</h2>
              </div>
              <div className="flex gap-2 flex-wrap">
                {jobDepartments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveDept(dept)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                      activeDept === dept ? 'bg-primary text-secondary' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filtered.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display font-bold text-primary text-lg">{job.title}</h3>
                        {job.isHot && (
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-secondary px-2.5 py-1 rounded-full">Hot</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{job.shortDescription}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <span className="material-symbols-outlined text-secondary text-sm">apartment</span>{job.department}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <span className="material-symbols-outlined text-secondary text-sm">location_on</span>{job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <span className="material-symbols-outlined text-secondary text-sm">work</span>{job.type.replace('-', ' ')}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <span className="material-symbols-outlined text-secondary text-sm">timeline</span>{job.experience}
                        </span>
                        {job.salary && (
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <span className="material-symbols-outlined text-secondary text-sm">currency_rupee</span>{job.salary}
                          </span>
                        )}
                      </div>
                    </div>
                    <Link
                      href={`/careers/${job.slug}`}
                      className="flex-shrink-0 flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-secondary hover:text-white transition-all"
                    >
                      Apply Now <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-gray-300 text-6xl">work_off</span>
                <p className="text-gray-400 mt-4">No openings in this department right now.</p>
                <p className="text-gray-400 text-sm mt-2">Send your CV to <a href="mailto:hr@fivexgrowthrealty.com" className="text-secondary">hr@fivexgrowthrealty.com</a></p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
