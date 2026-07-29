'use client';

import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import { companyInfo, companySearchLinks, coreValues, officeAddresses } from '@/data/companyData';

export const CorporateDirectorySection: React.FC = () => {
  return (
    <SectionContainer bgStyle="bg-slate-900 text-white relative overflow-hidden py-16">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto space-y-12">
        
        {/* Section Header */}
        <SectionHeader
          badge="Verified Corporate Entity"
          title="Official Corporate Directory Profiles"
          subtitle="FiveX Growth Realty Private Limited is officially registered under MCA India. Access our verified corporate directory profiles below."
          centered={true}
          lightTheme={true}
        />

        {/* Corporate Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {companySearchLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 hover:bg-white/10 border border-white/15 hover:border-secondary/50 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-lg group-hover:translate-x-1 transition-transform">
                    open_in_new
                  </span>
                </div>
                <h4 className="font-display font-extrabold text-white text-base group-hover:text-secondary transition-colors">
                  {link.name}
                </h4>
                <p className="text-white/60 text-xs mt-2 leading-relaxed">
                  Verified corporate data &amp; MCA records for {companyInfo.cin}.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-secondary text-xs font-bold">
                <span>View Legal Profile</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </div>
            </a>
          ))}
        </div>

        {/* Corporate Credential Ribbon */}
        <div className="bg-gradient-to-r from-primary via-slate-800 to-primary rounded-2xl p-6 border border-secondary/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="text-secondary text-xs font-extrabold uppercase tracking-widest block">Corporate Identification</span>
            <p className="font-display font-extrabold text-lg text-white">{companyInfo.name}</p>
            <p className="text-white/70 text-xs">{officeAddresses[0].address}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 text-xs">
            <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 font-mono">
              <span className="text-white/60 mr-1.5">CIN:</span>
              <span className="text-secondary font-bold">{companyInfo.cin}</span>
            </div>
            <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 font-mono">
              <span className="text-white/60 mr-1.5">GSTIN:</span>
              <span className="text-secondary font-bold">{companyInfo.gstin}</span>
            </div>
            <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 font-mono">
              <span className="text-white/60 mr-1.5">PAN:</span>
              <span className="text-white font-bold">{companyInfo.pan}</span>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">Our Foundation</span>
            <h3 className="font-display font-extrabold text-2xl text-white mt-1">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((val) => (
              <div
                key={val}
                className="bg-white/5 border border-white/10 hover:border-secondary/40 rounded-2xl p-5 text-center transition-all hover:bg-white/10 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary mx-auto flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                    verified
                  </span>
                </div>
                <p className="font-display font-extrabold text-white text-xs sm:text-sm">{val}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionContainer>
  );
};

export default CorporateDirectorySection;
