'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import AboutSidebar from '@/components/about/AboutSidebar';
import CertificatesSection from '@/components/about/CertificatesSection';
import { leadershipMembers } from '@/data/leadershipData';
import { teamMembers } from '@/data/teamData';
import { successStories } from '@/data/testimonialsData';
import { partners, ncrDevelopersList, gurgaonDevelopersList } from '@/data/partnerData';
import { faqItems, faqCategories } from '@/data/faqData';
import { FaqItem as FaqItemType } from '@/types';
import { aboutStatsMetrics } from '@/data/aboutData';
import { companyInfo, contactDetails, officeAddresses, companySearchLinks } from '@/data/companyData';

// ─── Full-Width Section Wrapper ────────────────────────────────────────────────
const Section: React.FC<{
  id: string;
  title: string;
  badge?: string;
  subtitle?: string;
  dark?: boolean;
  children: React.ReactNode;
}> = ({ id, title, badge, subtitle, dark, children }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-mt-32 sm:scroll-mt-36 w-full py-12 sm:py-14 lg:py-16 border-b border-gray-100 ${
        dark ? 'bg-primary text-white border-none rounded-3xl shadow-2xl my-6 p-6 sm:p-10' : 'bg-white text-primary'
      }`}
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-7 sm:mb-9"
        >
          {badge && (
            <span
              className={`inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest mb-3 ${
                dark ? 'text-secondary' : 'text-secondary'
              }`}
            >
              <span className="w-8 h-px bg-secondary" />
              {badge}
            </span>
          )}
          <h2
            className={`font-display font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight ${
              dark ? 'text-white' : 'text-primary'
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`mt-2.5 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl font-medium ${
                dark ? 'text-white/80' : 'text-gray-600'
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

// ─── Leadership Card ──────────────────────────────────────────────────────────
const LeaderCard: React.FC<{ member: typeof leadershipMembers[0]; index: number }> = ({
  member,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
          <img
            src={member.image}
            alt={member.imageAlt}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary bg-primary/80 px-3 py-1 rounded-full backdrop-blur-md border border-secondary/30">
              {member.department.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display font-extrabold text-xl text-primary">{member.name}</h3>
          <p className="text-secondary text-sm font-bold tracking-wide mt-1">
            {member.designation}
          </p>
          <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed line-clamp-3">
            {member.shortBio}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex gap-2">
            {member.whatsapp && (
              <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-green-200 bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"
                title="Connect on WhatsApp"
              >
                <span className="material-symbols-outlined text-base">chat</span>
              </a>
            )}
            <a
              href={`mailto:${member.email}`}
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary transition-all"
              title="Email"
            >
              <span className="material-symbols-outlined text-base">mail</span>
            </a>
          </div>
          <Link
            href={`/leadership/${member.id}`}
            className="text-xs font-extrabold text-primary border-2 border-primary/20 px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center gap-1"
          >
            View Full Profile
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
const FaqItem: React.FC<{ faq: FaqItemType; index: number }> = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.02, 0.2) }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="font-bold text-primary text-sm sm:text-base pr-4">{faq.question}</span>
        <span
          className={`material-symbols-outlined text-secondary font-bold text-xl flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          keyboard_arrow_down
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 whitespace-pre-line">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Journey Milestones ────────────────────────────────────────────────────────
const journeyMilestones = [
  {
    year: '2025',
    title: 'Incorporation of FIVEX Growth Realty Pvt Ltd',
    desc: 'Established on 26 June 2025 with CIN U68100UP2025PTC226865 to redefine real estate advisory through transparency and client-first ethics.',
  },
  {
    year: '13+ Yrs',
    title: '13+ Years Collective Industry Expertise',
    desc: 'Backed by a seasoned leadership team with over 13 years of real estate, plotted development, and commercial advisory experience.',
  },
  {
    year: '300+',
    title: '300+ Successful Property Transactions',
    desc: 'Closed landmark residential, commercial, authority plot, and industrial deals across North India.',
  },
  {
    year: '100+',
    title: '100+ High Appreciation Investments',
    desc: 'Delivered 30–60% capital appreciation for investors across Yamuna Expressway, Jewar Airport belt, and Noida.',
  },
  {
    year: '50+',
    title: '50+ Tier-1 Developer Partnerships',
    desc: 'Partnered with premier developer groups in Noida, Greater Noida, and Gurgaon for exclusive investor access.',
  },
];

interface AwardDetail {
  title: string;
  issuer: string;
  year: string;
  certificateId: string;
  description: string;
  image: string;
}

// ─── Main About Page ────────────────────────────────────────────────────────
export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('who-we-are');
  const [faqSearch, setFaqSearch] = useState('');
  const [faqCategory, setFaqCategory] = useState('all');

  const filteredFaqs = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory =
        faqCategory === 'all' || item.category === faqCategory;
      const matchesSearch =
        faqSearch === '' ||
        item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
        item.answer.toLowerCase().includes(faqSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqSearch, faqCategory]);

  const sectionIds = [
    'who-we-are',
    'leadership',
    'mission-vision',
    'certificates',
    'journey',
    'awards',
    'our-team',
    'our-services',
    'why-choose-us',
    'core-values',
    'faqs',
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-20% 0px -50% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const awardsList: AwardDetail[] = [
    {
      title: 'Top Real Estate Consultant - Yamuna Expressway Belt',
      issuer: 'NCR Realty Excellence Forum',
      year: '2024',
      certificateId: 'FIVEX-YEIDA-2024',
      description: 'Recognized for market authority and top-tier investor advisory in Yamuna Expressway Sectors 18, 20, 22D & Jewar Aerocity.',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
    },
    {
      title: 'High ROI Investment Advisory Recognition',
      issuer: 'North India Property Summit',
      year: '2023',
      certificateId: 'NIPS-ROI-2023',
      description: 'Awarded for delivering 30–60% capital appreciation across 100+ strategic investor acquisitions.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    },
    {
      title: 'Best Channel Partner Excellence',
      issuer: 'Leading Developer Association',
      year: '2023',
      certificateId: 'DEV-CP-2023',
      description: 'Honored for transparent channel partner services, project marketing, and customer satisfaction scores.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    },
  ];

  const founder = leadershipMembers.find((m) => m.id === 'syed-zeeshan-ahmad')!;

  return (
    <>
      <Header />
      <main className="flex-grow min-h-screen bg-white">

        {/* Full-Width Hero Banner with Background Image */}
        <div className="relative bg-primary pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-22 overflow-hidden w-full border-b border-white/10">
          {/* Background Image Layer */}
          <img
            src="/aboutus.jpg"
            alt="FiveX Growth Realty Corporate Headquarters"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,160,89,0.22),transparent_60%)]" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-secondary text-xs font-extrabold uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-secondary" />
                FiveX Growth Realty Private Limited
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08] max-w-4xl">
                Building Wealth Through <br />
                <span className="text-secondary">Real Estate Excellence</span>
              </h1>
              <p className="mt-4 text-white/88 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed font-medium">
                Established on 26 June 2025, FiveX Growth Realty Private Limited is a leading real estate consultancy and property advisory firm headquartered in Sector 132 Noida, backed by over 13 years of collective industry expertise.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-green-600"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Connect on WhatsApp
                </a>
                <a
                  href="#founder"
                  className="inline-flex items-center justify-center rounded-xl bg-secondary px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-all hover:brightness-110"
                >
                  Meet Our Founder
                </a>
                <a
                  href="#certificates"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/15"
                >
                  Corporate Info &amp; GSTIN
                </a>
              </div>
            </motion.div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-10">
              {aboutStatsMetrics.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 shadow-xl"
                >
                  <p className="font-display font-extrabold text-xl sm:text-2xl text-secondary">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-white/90 text-xs sm:text-sm font-semibold mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout Container with Sticky Sidebar */}
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-12 sm:pt-14 pb-20">
          <div className="lg:flex lg:gap-12 items-start">
            
            {/* Sticky Navigation Sidebar */}
            <AboutSidebar activeSection={activeSection} />

            {/* Main Content Container - standard flow */}
            <div className="flex-1 min-w-0 space-y-4">

              {/* 1. Who We Are */}
              <Section
                id="who-we-are"
                badge="About Us"
                title="FiveX Growth Realty Private Limited"
                subtitle="Building Wealth Through Real Estate with integrity, transparency, and market expertise."
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
                  <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                    <p>
                      <strong>FiveX Growth Realty Private Limited</strong> is a leading real estate consultancy and property advisory firm, dedicated to delivering exceptional residential and commercial real estate solutions. With a strong commitment to integrity, transparency, and customer satisfaction, we have established ourselves as a trusted partner for homebuyers, investors, and corporate clients.
                    </p>
                    <p>
                      Strategically headquartered in Noida, one of India&apos;s fastest-growing real estate destinations, we specialize in helping clients identify high-potential investment opportunities and premium properties that align perfectly with their financial goals and lifestyle aspirations.
                    </p>
                    <p>
                      Established on <strong>26 June 2025</strong>, FiveX Growth Realty Private Limited was founded with a vision to redefine the real estate experience through professionalism, trust, and market expertise. Backed by an experienced leadership team with over 13 years of collective industry expertise, the company has quickly emerged as a reliable name in the real estate sector.
                    </p>
                    <p>
                      Whether you are purchasing your dream home, expanding your business, or building a long-term investment portfolio, FiveX Growth Realty ensures a seamless and rewarding journey.
                    </p>
                  </div>

                  <div className="bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md space-y-6">
                    <h3 className="font-display font-extrabold text-xl text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">domain</span>
                      Corporate Information
                    </h3>
                    <div className="space-y-3.5 text-xs sm:text-sm">
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-500 font-medium">Company Name:</span>
                        <span className="font-extrabold text-primary text-right">{companyInfo.name}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-500 font-medium">Date of Incorporation:</span>
                        <span className="font-bold text-primary">{companyInfo.dateOfIncorporation}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-500 font-medium">CIN:</span>
                        <span className="font-mono font-bold text-secondary">{companyInfo.cin}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-500 font-medium">GSTIN:</span>
                        <span className="font-mono font-bold text-secondary">{companyInfo.gstin}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-500 font-medium">PAN:</span>
                        <span className="font-mono font-bold text-primary">{companyInfo.pan}</span>
                      </div>
                      <div className="py-2 space-y-1 border-b border-gray-200">
                        <span className="text-gray-500 font-medium block">Registered Office:</span>
                        <span className="font-semibold text-primary block leading-relaxed">{officeAddresses[0].address}</span>
                      </div>

                      {/* Corporate Directory / Search Links */}
                      <div className="pt-2">
                        <span className="text-gray-500 font-bold block mb-2 text-xs uppercase tracking-wider">Official Corporate Directory Profiles:</span>
                        <div className="space-y-1.5">
                          {companySearchLinks.map((link) => (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-xs text-primary font-semibold hover:text-secondary transition-colors group"
                            >
                              <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-0.5 transition-transform">open_in_new</span>
                              <span className="underline decoration-secondary/40 underline-offset-2">{link.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              {/* 2. Unified Leadership & Founder Section */}
              <Section
                id="leadership"
                badge="Leadership & Management"
                title="Leadership & Founder"
                subtitle="Combining visionary leadership, deep market insight, and an unwavering commitment to client success."
              >
                <div id="founder" className="scroll-mt-32 sm:scroll-mt-36 space-y-10">
                  {/* Founder Profile */}
                  <div className="bg-gradient-to-br from-primary via-primary to-primary/95 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-secondary/30 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Founder Card / Contact Details */}
                      <div className="lg:col-span-4 space-y-6">
                        <div className="relative rounded-2xl overflow-hidden border-2 border-secondary/40 shadow-2xl bg-gray-900 aspect-square">
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>

                        {/* Direct Connect & View Profile Buttons */}
                        <div className="space-y-3">
                          {/* 1. View Full Profile (FIRST) */}
                          <Link
                            href={`/leadership/${founder.id}`}
                            className="w-full bg-secondary hover:brightness-110 text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer"
                          >
                            View Full Profile
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                          </Link>

                          {/* 2. Direct Contact Action Icons (WhatsApp, Phone Call, Email) */}
                          <div className="grid grid-cols-3 gap-2.5 pt-1">
                            {/* WhatsApp Icon */}
                            <a
                              href={founder.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1 shadow-md transition-all cursor-pointer group"
                              title="Connect on WhatsApp"
                            >
                              <span className="material-symbols-outlined text-xl">chat</span>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider">WhatsApp</span>
                            </a>

                            {/* Direct Phone Call Icon */}
                            <a
                              href={`tel:${founder.phone}`}
                              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
                              title={`Call Direct: ${founder.phone}`}
                            >
                              <span className="material-symbols-outlined text-secondary text-xl">call</span>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">Call</span>
                            </a>

                            {/* Direct Email Icon */}
                            <a
                              href={`mailto:${founder.email}`}
                              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-2 rounded-xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
                              title={`Send Email: ${founder.email}`}
                            >
                              <span className="material-symbols-outlined text-secondary text-xl">mail</span>
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">Email</span>
                            </a>
                          </div>
                        </div>

                        {/* Founder Social & Professional Profiles */}
                        <div className="pt-2">
                          <p className="text-[11px] font-extrabold uppercase tracking-widest text-secondary mb-2">
                            Connect with Founder:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {founder.social.map((s) => (
                              <a
                                key={s.platform}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 hover:bg-secondary hover:text-white border border-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                              >
                                <span className="material-symbols-outlined text-xs">open_in_new</span>
                                {s.platform}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Detailed Bio & Headline */}
                      <div className="lg:col-span-8 space-y-6">
                        <div>
                          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                            {founder.name}
                          </h3>
                          <div className="mt-2.5">
                            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-secondary bg-secondary/15 px-3 py-1 rounded-full border border-secondary/30">
                              FOUNDER &amp; MANAGING DIRECTOR
                            </span>
                          </div>
                          <p className="text-secondary/90 text-xs sm:text-sm font-semibold mt-3 leading-relaxed text-justify">
                            {founder.headline}
                          </p>
                        </div>

                        <div className="space-y-4 text-white/85 text-xs sm:text-sm leading-relaxed font-medium text-justify border-t border-white/10 pt-5">
                          {founder.fullBio.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>

                        {/* Achievements Grid */}
                        <div className="pt-4 border-t border-white/10">
                          <h4 className="font-display font-bold text-sm text-secondary uppercase tracking-wider mb-3">
                            🏆 Achievements &amp; Highlights
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {founder.achievements.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                                <span className="material-symbols-outlined text-secondary text-sm flex-shrink-0 mt-0.5" style={{ fontVariationSettings: '"FILL" 1' }}>
                                  check_circle
                                </span>
                                <span className="text-white/90 text-xs font-semibold">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Areas Served */}
                        <div className="pt-2">
                          <h4 className="font-display font-bold text-sm text-secondary uppercase tracking-wider mb-2.5">
                            🌍 Key Areas Served
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {founder.areasServed?.map((area) => (
                              <span key={area} className="text-[11px] font-bold bg-white/10 text-white px-3 py-1 rounded-lg border border-white/15">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                  {/* Directors & Executive Leadership Cards (Excluding Founder duplicate) */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-display font-extrabold text-xl text-primary mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">groups</span>
                      Directors &amp; Executive Leadership
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {leadershipMembers.filter((m) => m.id !== 'syed-zeeshan-ahmad').map((member, i) => (
                        <LeaderCard key={member.id} member={member} index={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              {/* 4. Our Mission & Vision */}
              <Section
                id="mission-vision"
                badge="Our Purpose"
                title="Our Mission & Vision"
                subtitle="The foundational principles guiding every real estate transaction at FIVEX GROWTH REALTY."
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Mission */}
                  <div className="bg-gradient-to-br from-white to-surface-container-low p-8 rounded-3xl border border-gray-100 shadow-xl space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center border border-secondary/30">
                      <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                        target
                      </span>
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-secondary block">
                      OUR MISSION
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-primary">
                      Seamless, Transparent &amp; Professional Services
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                      To provide seamless, transparent, and professional real estate services, helping clients discover residential and commercial properties that perfectly match their aspirations, lifestyle, and investment objectives.
                    </p>
                    <div className="space-y-2.5 pt-3 border-t border-gray-200">
                      {[
                        'Complete Honesty & Clarity in Every Transaction',
                        'Client Aspirations & Satisfaction Always First',
                        'Verified Properties & RERA Compliance',
                      ].map((pillar) => (
                        <div key={pillar} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-primary">
                          <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                          {pillar}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vision */}
                  <div className="bg-primary p-8 rounded-3xl text-white shadow-2xl border border-secondary/20 space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                      <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                        visibility
                      </span>
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-secondary block">
                      OUR VISION
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      India&apos;s Most Respected Real Estate Organization
                    </h3>
                    <p className="text-white/85 text-sm sm:text-base leading-relaxed font-medium">
                      To become one of India&apos;s most respected real estate organizations, recognized for integrity, innovation, customer satisfaction, and excellence in every transaction.
                    </p>
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/15">
                      {[
                        { value: 'Integrity', label: 'Ethical Practices' },
                        { value: 'Innovation', label: 'Data & PropTech' },
                        { value: 'Excellence', label: 'Every Deal' },
                      ].map((item) => (
                        <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                          <p className="font-display font-extrabold text-secondary text-sm sm:text-base">{item.value}</p>
                          <p className="text-white/70 text-[10px] uppercase font-bold mt-0.5">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              {/* 5. Corporate Certificates Section */}
              <Section
                id="certificates"
                badge="Corporate Documents"
                title="Certificates & Government Registrations"
                subtitle="Official Government of India registration certificates, GSTIN, PAN, and corporate documents for FIVEX GROWTH REALTY PRIVATE LIMITED."
              >
                <CertificatesSection />
              </Section>

              {/* 6. Our Journey */}
              <Section
                id="journey"
                badge="Our Growth"
                title="Key Milestones"
                subtitle="Building trust and delivering high ROI investments."
              >
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-secondary/40 to-transparent hidden sm:block rounded-full" />
                  <div className="space-y-6">
                    {journeyMilestones.map((m, i) => (
                      <motion.div
                        key={m.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative flex gap-5 sm:gap-6"
                      >
                        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-secondary text-white font-extrabold text-xs flex items-center justify-center shadow-lg z-10 border-2 border-white">
                          ★
                        </div>
                        <div className="flex-1 bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-secondary font-extrabold text-base">
                              {m.year}
                            </span>
                            <h3 className="font-display font-extrabold text-primary text-base sm:text-lg">
                              {m.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Section>

              {/* 7. Awards */}
              <Section
                id="awards"
                badge="Recognition"
                title="Awards & Industry Recognition"
                subtitle="Recognized partner with top developers across North India."
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {awardsList.map((award, i) => (
                    <div
                      key={award.title}
                      className="bg-primary text-white rounded-2xl p-6 border border-secondary/20 shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary bg-secondary/15 px-3 py-1 rounded-full border border-secondary/30">
                          {award.year}
                        </span>
                        <h3 className="font-display font-bold text-base mt-3 text-white">
                          {award.title}
                        </h3>
                        <p className="text-white/70 text-xs mt-2 leading-relaxed font-medium">
                          {award.description}
                        </p>
                      </div>
                      <p className="text-secondary text-xs font-bold mt-4 pt-3 border-t border-white/10">
                        {award.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 8. Our Team */}
              <Section
                id="our-team"
                badge="The Team"
                title="Our Advisory Team"
                subtitle="RERA-certified real estate consultants with deep market expertise."
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {teamMembers.map((member, i) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm text-center"
                    >
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-4 border-secondary/30 mb-3 shadow-md">
                        <img
                          src={member.image}
                          alt={member.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-display font-extrabold text-primary text-sm sm:text-base truncate">
                        {member.name}
                      </p>
                      <p className="text-secondary text-[11px] sm:text-xs font-bold mt-0.5 truncate">{member.designation}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{member.location}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 11. Our Services */}
              <Section id="our-services" badge="Comprehensive Solutions" title="Our Services">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Residential Real Estate */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>home</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">Residential Real Estate</h3>
                    <ul className="space-y-2.5">
                      {[
                        'Premium Apartments',
                        'Luxury Villas',
                        'Ready-to-Move Homes',
                        'Investment Properties',
                        'Pre-Launch Opportunities',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Investment Advisory */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>trending_up</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">Investment Advisory</h3>
                    <ul className="space-y-2.5">
                      {[
                        'Real Estate Portfolio Planning',
                        'Wealth Creation Strategies',
                        'ROI-Focused Investments',
                        'Rental Income Opportunities',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Developer Solutions */}
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>apartment</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary">Developer Solutions</h3>
                    <ul className="space-y-2.5">
                      {[
                        'Project Marketing',
                        'Sales Management',
                        'Channel Partner Services',
                        'Strategic Market Positioning',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px] font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Section>

              {/* 12. Why Choose Us */}
              <Section id="why-choose-us" badge="Why Choose Us" title="Why Choose FIVEX GROWTH REALTY">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { icon: 'military_tech', title: 'Experienced Leadership Team', desc: 'Over 13 years of collective industry expertise delivering strategic property advice.' },
                    { icon: 'gavel', title: 'Transparent Business Practices', desc: 'Complete honesty, zero hidden fees, and verified legal title documentation.' },
                    { icon: 'person_heart', title: 'Customer-First Approach', desc: 'Customized solutions aligned strictly with your budget and lifestyle aspirations.' },
                    { icon: 'analytics', title: 'Extensive Market Knowledge', desc: 'Deep insights into Noida, Greater Noida, Yamuna Expressway, and Gurgaon corridors.' },
                    { icon: 'savings', title: 'Strategic Investment Solutions', desc: 'Data-driven real estate portfolio planning for maximum ROI and rental yield.' },
                    { icon: 'handshake', title: 'Strong Developer Relationships', desc: 'Direct tier-1 developer access across 50+ leading developer groups.' },
                    { icon: 'support_agent', title: 'End-to-End Support', desc: 'From initial site visits to loan processing, legal verification, and final registry.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>{item.icon}</span>
                      </div>
                      <h4 className="font-display font-bold text-primary text-base flex items-center gap-1.5">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 13. Our Core Values */}
              <Section id="core-values" badge="Our Philosophy" title="Our Core Values">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { title: 'Integrity', icon: 'verified' },
                    { title: 'Transparency', icon: 'visibility' },
                    { title: 'Excellence & Innovation', icon: 'lightbulb' },
                    { title: 'Customer Satisfaction', icon: 'sentiment_very_satisfied' },
                    { title: 'Long-Term Relationships', icon: 'groups' },
                  ].map((val) => (
                    <div key={val.title} className="bg-primary text-white p-5 rounded-2xl text-center border border-secondary/30 shadow-md">
                      <span className="material-symbols-outlined text-secondary text-3xl mb-2 block" style={{ fontVariationSettings: '"FILL" 1' }}>{val.icon}</span>
                      <p className="text-xs font-extrabold flex items-center justify-center gap-1">
                        <span className="text-secondary font-bold">✓</span> {val.title}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 12. FAQs */}
              <Section
                id="faqs"
                badge="Common Questions"
                title="Frequently Asked Questions"
                subtitle={`Browse our complete repository of ${faqItems.length} frequently asked questions covering real estate buying, investment insights, legal documentation, and NCR locations.`}
              >
                <div className="space-y-6 max-w-4xl">
                  {/* FAQ Search Bar */}
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                      search
                    </span>
                    <input
                      type="text"
                      value={faqSearch}
                      onChange={(e) => setFaqSearch(e.target.value)}
                      placeholder="Search across all 110 FAQs (e.g., RERA, loan, Noida, investment)..."
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-medium text-primary placeholder-gray-400 focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-inner"
                    />
                    {faqSearch && (
                      <button
                        onClick={() => setFaqSearch('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-bold"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2">
                    {faqCategories.map((cat) => {
                      const isActive = faqCategory === cat.id;
                      const count =
                        cat.id === 'all'
                          ? faqItems.length
                          : faqItems.filter((i) => i.category === cat.id).length;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setFaqCategory(cat.id)}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-primary text-secondary shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <span
                            className="material-symbols-outlined text-sm"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            {cat.icon}
                          </span>
                          {cat.label}
                          <span
                            className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-md ${
                              isActive ? 'bg-secondary/20 text-secondary' : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* FAQ Counter / Status */}
                  <div className="flex items-center justify-between text-xs text-gray-500 font-semibold px-1">
                    <span>
                      Showing {filteredFaqs.length} of {faqItems.length} questions
                    </span>
                    {(faqSearch || faqCategory !== 'all') && (
                      <button
                        onClick={() => {
                          setFaqSearch('');
                          setFaqCategory('all');
                        }}
                        className="text-secondary hover:underline font-bold"
                      >
                        Reset filters
                      </button>
                    )}
                  </div>

                  {/* FAQ List */}
                  {filteredFaqs.length === 0 ? (
                    <div className="bg-gray-50 rounded-2xl p-8 text-center border border-dashed border-gray-300 space-y-2">
                      <span className="material-symbols-outlined text-4xl text-gray-400">
                        search_off
                      </span>
                      <p className="font-bold text-primary text-sm">
                        No matching FAQs found for &quot;{faqSearch}&quot;
                      </p>
                      <p className="text-xs text-gray-500">
                        Try searching with different terms or select &quot;All Questions&quot;.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {filteredFaqs.map((faq, i) => (
                        <FaqItem key={faq.id || faq.question} faq={faq} index={i} />
                      ))}
                    </div>
                  )}
                </div>
              </Section>

            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

