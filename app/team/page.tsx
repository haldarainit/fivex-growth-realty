'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { teamMembers, departments } from '@/data/teamData';

export default function TeamPage() {
  const [activeDept, setActiveDept] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = teamMembers.filter((m) => {
    const matchesDept = activeDept === 'all' || m.department === activeDept;
    const matchesSearch =
      !search ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.designation.toLowerCase().includes(search.toLowerCase()) ||
      m.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero */}
        <div className="bg-primary py-16">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Our People</span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight">Meet the Team</h1>
              <p className="text-white/60 text-lg mt-4 max-w-2xl leading-relaxed">
                The passionate professionals who make FIVEX the trusted name it is — experts in their craft, dedicated to your success.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">search</span>
              <input
                type="text"
                placeholder="Search by name or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-primary placeholder:text-gray-400 outline-none focus:border-secondary/50 transition-colors bg-white"
              />
            </div>

            {/* Department filter */}
            <div className="flex gap-2 flex-wrap">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                    activeDept === dept.id
                      ? 'bg-primary text-secondary'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {dept.label}
                </button>
              ))}
            </div>
          </div>

          {/* Team grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-gray-300 text-6xl">person_search</span>
              <p className="text-gray-400 mt-4">No team members found for your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img src={member.image} alt={member.imageAlt} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-secondary bg-primary/70 px-2 py-1 rounded-full backdrop-blur-sm">
                      {member.department}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-primary text-base">{member.name}</h3>
                    <p className="text-secondary text-xs font-semibold mt-0.5">{member.designation}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{member.location} · {member.experience}y exp</p>
                    <p className="text-gray-500 text-xs mt-3 leading-relaxed line-clamp-2">{member.shortBio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {member.skills.slice(0, 2).map((s) => (
                        <span key={s} className="text-[10px] px-2 py-0.5 bg-secondary/10 text-secondary rounded-full font-medium">{s}</span>
                      ))}
                      {member.skills.length > 2 && (
                        <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full font-medium">+{member.skills.length - 2}</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                      <a href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/40 transition-all">
                        <span className="material-symbols-outlined text-sm">mail</span>
                      </a>
                      <a href={`tel:${member.phone}`}
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/40 transition-all">
                        <span className="material-symbols-outlined text-sm">call</span>
                      </a>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary/40 transition-all">
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      <Link
                        href={`/team/${member.id}`}
                        className="ml-auto text-xs font-bold text-primary border border-primary/20 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all"
                      >
                        Profile →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
