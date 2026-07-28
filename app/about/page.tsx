'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import AboutSidebar from '@/components/about/AboutSidebar';
import { leadershipMembers } from '@/data/leadershipData';
import { teamMembers, TeamMemberProfile } from '@/data/teamData';
import { successStories } from '@/data/testimonialsData';
import { partners } from '@/data/partnerData';
import { faqs } from '@/data/homeData';
import { aboutStatsMetrics } from '@/data/aboutData';

// ─── Full-Width Section Wrapper (Extends Edge-to-Edge) ─────────────────────────
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
      className={`scroll-mt-32 sm:scroll-mt-36 w-full py-16 sm:py-20 lg:py-24 border-b border-gray-100 ${
        dark ? 'bg-primary text-white border-none' : 'bg-white text-primary'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
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
            className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight ${
              dark ? 'text-white' : 'text-primary'
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`mt-4 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl font-medium ${
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
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-secondary hover:border-secondary transition-all"
            >
              <span className="material-symbols-outlined text-base">mail</span>
            </a>
          </div>
          <Link
            href={`/leadership/${member.id}`}
            className="text-xs font-extrabold text-primary border-2 border-primary/20 px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center gap-1"
          >
            View Details
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
const FaqItem: React.FC<{ faq: typeof faqs[0]; index: number }> = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="font-bold text-primary text-base sm:text-lg pr-4">{faq.question}</span>
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
        <div className="px-6 pb-5 text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Journey Milestones ────────────────────────────────────────────────────────
const journeyMilestones = [
  {
    year: '2010',
    title: 'Founded',
    desc: 'FIVEX Growth Realty established with a vision to redefine premium real estate advisory in India.',
  },
  {
    year: '2012',
    title: '50 Transactions',
    desc: 'Crossed 50 successful transactions, establishing trust among HNI clients in Delhi NCR.',
  },
  {
    year: '2015',
    title: 'Gurgaon Expansion',
    desc: 'Opened the Gurgaon office to serve the growing luxury corridor demand.',
  },
  {
    year: '2018',
    title: 'RERA Certified',
    desc: 'Became one of the first brokerages to fully comply with RERA in UP, Haryana and Maharashtra.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    desc: 'Launched virtual property tours and digital advisory, serving NRI clients globally during the pandemic.',
  },
  {
    year: '2022',
    title: 'Mumbai Office',
    desc: 'Expanded to Mumbai, entering India\'s most competitive luxury real estate market.',
  },
  {
    year: '2024',
    title: '1200+ Clients',
    desc: 'Surpassed 1,200 happy clients with ₹2,500 Cr+ in managed portfolio value.',
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
  const [selectedAward, setSelectedAward] = useState<AwardDetail | null>(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMemberProfile | null>(null);

  const sectionIds = [
    'who-we-are',
    'leadership',
    'vision',
    'mission',
    'journey',
    'awards',
    'developer-partners',
    'our-team',
    'testimonials',
    'why-choose-us',
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
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const awardsList: AwardDetail[] = [
    {
      title: 'Real Estate CEO of the Year 2023',
      issuer: 'CREDAI National Awards',
      year: '2023',
      certificateId: 'CREDAI-2023-EXC-094',
      description: 'Recognized for exemplary leadership in building India\'s most transparent luxury real estate advisory firm.',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
    },
    {
      title: 'Top 50 Real Estate Leaders in India',
      issuer: 'Economic Times Real Estate Summit',
      year: '2022',
      certificateId: 'ET-RE-2022-881',
      description: 'Awarded for pioneering multi-city portfolio management standards and HNI investor advisory excellence.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    },
    {
      title: 'Best Brokerage Leadership Award',
      issuer: 'NAREDCO National Convention',
      year: '2021',
      certificateId: 'NAREDCO-2021-BLA',
      description: 'Honored for zero-litigation track record and instituting the 42-Point Property Verification standard.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    },
    {
      title: 'Commercial Dealmaker of the Year',
      issuer: 'PropTiger Realty Excellence',
      year: '2023',
      certificateId: 'PROPTIGER-2023-COM',
      description: 'Awarded for closing over ₹800 Cr in Grade-A commercial acquisitions across Delhi NCR & Mumbai.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    },
    {
      title: 'Entrepreneur of the Year – Real Estate',
      issuer: 'ASSOCHAM India',
      year: '2022',
      certificateId: 'ASSOCHAM-2022-ENT',
      description: 'Recognized for outstanding business growth, corporate governance, and community impact.',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
    },
    {
      title: 'Power Women in Real Estate',
      issuer: 'Times Property Awards',
      year: '2020',
      certificateId: 'TIMES-2020-PWR',
      description: 'Celebrating female leadership and vision in transforming traditional real estate brokerage models.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow pt-20 sm:pt-24">
        {/* Full-Width Hero Banner */}
        <div className="bg-primary py-20 sm:py-28 relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(197,160,89,0.18),transparent_60%)]" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-secondary text-xs font-extrabold uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-secondary" />
                About FIVEX Growth Realty
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight max-w-4xl">
                India&apos;s Most Trusted <br />
                <span className="text-secondary">Real Estate Partner</span>
              </h1>
              <p className="mt-6 text-white/90 text-base sm:text-xl max-w-3xl leading-relaxed font-medium">
                Since 2010, FIVEX Growth Realty has been at the forefront of premium property advisory — combining deep market intelligence, 42-point property verification, and dedicated client advisory to deliver unmatched real estate outcomes.
              </p>
            </motion.div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-14">
              {aboutStatsMetrics.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 shadow-xl"
                >
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
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

        {/* Desktop Layout Container with Sticky Sidebar alongside Full-Width Sections */}
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-12 sm:pt-14">
          <div className="lg:flex lg:gap-12 items-start">
            {/* Sticky Navigation Sidebar */}
            <AboutSidebar activeSection={activeSection} />

            {/* Main Full-Width Content Container */}
            <div className="flex-1 min-w-0 space-y-0">

              {/* 1. Who We Are */}
              <Section
                id="who-we-are"
                badge="About Us"
                title="Who We Are"
                subtitle="We are more than a brokerage — we are your long-term real estate growth partner."
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                    <p>
                      FIVEX Growth Realty was founded with a singular vision: to bring the highest standards of international real estate advisory to Indian buyers and investors. What started as a boutique consultancy in Noida has grown into one of India&apos;s most respected premium real estate brokerages.
                    </p>
                    <p>
                      We specialize in helping HNIs, NRIs, and institutional investors navigate the complex landscape of Indian real estate — from luxury residences and Grade-A commercial assets to strategic land acquisitions and investment portfolio management.
                    </p>
                    <p>
                      Our proprietary 42-point verification process, deep developer relationships, and dedicated advisory team ensure that every FIVEX client receives an unparalleled concierge experience — from first consultation to final registration and beyond.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        { icon: 'verified', text: '42-Point Verification' },
                        { icon: 'handshake', text: 'Developer Partnerships' },
                        { icon: 'support_agent', text: 'Dedicated Advisors' },
                        { icon: 'gavel', text: 'Legal Advisory' },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-3 bg-surface-container-low p-3.5 rounded-xl border border-gray-100">
                          <span
                            className="material-symbols-outlined text-secondary text-xl flex-shrink-0"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            {item.icon}
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-primary">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative rounded-3xl overflow-hidden h-80 lg:h-full min-h-[340px] shadow-xl border border-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                      alt="FIVEX Headquarters"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 text-white">
                      <p className="font-extrabold text-lg">HQ Sector 62, Noida</p>
                      <p className="text-white/80 text-xs font-semibold">Established 2010</p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* 2. Leadership */}
              <Section
                id="leadership"
                badge="Our Leaders"
                title="Leadership Team"
                subtitle="Seasoned professionals with decades of combined expertise in Indian and global real estate markets."
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {leadershipMembers.map((member, i) => (
                    <LeaderCard key={member.id} member={member} index={i} />
                  ))}
                </div>
              </Section>

              {/* 3. Vision */}
              <Section id="vision" badge="Our Vision" title="Where We're Headed" dark>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                      <span
                        className="material-symbols-outlined text-secondary text-3xl"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        visibility
                      </span>
                    </div>
                    <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white leading-relaxed italic border-l-4 border-secondary pl-5">
                      &quot;To be India&apos;s most trusted and admired real estate partner — empowering every client to make informed, confident, and profitable property decisions.&quot;
                    </blockquote>
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                      By 2030, we aim to be present in 15 major Indian cities, manage portfolios worth ₹10,000 Cr+, and serve 10,000 satisfied clients — while maintaining the personal touch that defines the FIVEX experience.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-2">
                      {[
                        { value: '15', label: 'Cities by 2030' },
                        { value: '₹10K Cr', label: 'Portfolio Target' },
                        { value: '10,000+', label: 'Client Goal' },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center"
                        >
                          <p className="font-display font-extrabold text-secondary text-xl sm:text-2xl">
                            {item.value}
                          </p>
                          <p className="text-white/70 text-xs font-semibold mt-1">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden h-80 shadow-2xl border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                      alt="Vision"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  </div>
                </div>
              </Section>

              {/* 4. Mission */}
              <Section
                id="mission"
                badge="Our Mission"
                title="What Drives Us"
                subtitle="Every decision at FIVEX is guided by our mission to deliver uncompromising value to clients."
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: 'verified_user',
                      title: 'Investment Security',
                      desc: 'Protect every rupee of client investment through our rigorous 42-point verification process.',
                    },
                    {
                      icon: 'insights',
                      title: 'Market Intelligence',
                      desc: 'Deliver data-driven insights that help clients buy at the right time, at the right price.',
                    },
                    {
                      icon: 'handshake',
                      title: 'Lifelong Partnership',
                      desc: 'Build relationships that extend beyond transactions — through resale, rental, and portfolio reviews.',
                    },
                    {
                      icon: 'gavel',
                      title: 'Legal Integrity',
                      desc: 'Ensure complete legal clarity in every transaction, so clients never face post-purchase surprises.',
                    },
                    {
                      icon: 'diversity_3',
                      title: 'Inclusive Excellence',
                      desc: 'Serve buyers across all budgets with the same level of dedication and expertise.',
                    },
                    {
                      icon: 'eco',
                      title: 'Sustainable Realty',
                      desc: 'Promote eco-conscious, LEED-certified, and green developments in our advisory.',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                        <span
                          className="material-symbols-outlined text-secondary text-2xl"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-primary text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* 5. Our Journey */}
              <Section
                id="journey"
                badge="Our Story"
                title="Our Journey"
                subtitle="From a boutique Noida office to a pan-India premium brokerage — the FIVEX story."
              >
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-secondary/40 to-transparent hidden sm:block rounded-full" />
                  <div className="space-y-8">
                    {journeyMilestones.map((m, i) => (
                      <motion.div
                        key={m.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative flex gap-6 sm:gap-8"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-primary font-extrabold text-sm flex items-center justify-center shadow-lg z-10 border-2 border-white">
                          {m.year.slice(2)}
                        </div>
                        <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-secondary font-extrabold text-base">
                              {m.year}
                            </span>
                            <h3 className="font-display font-extrabold text-primary text-lg">
                              {m.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Section>

              {/* 6. Awards & Recognition with Certificate PDF/Image Popup Preview */}
              <Section
                id="awards"
                badge="Recognition & Certificates"
                title="Awards & Recognition"
                subtitle="Click any award card below to view full certificate details and official verification."
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {awardsList.map((award, i) => (
                    <motion.div
                      key={`${award.title}-${i}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => setSelectedAward(award)}
                      className="group bg-gradient-to-br from-primary via-primary-container to-primary/95 rounded-2xl p-6 text-white relative overflow-hidden shadow-md hover:shadow-2xl cursor-pointer hover:-translate-y-1 transition-all border border-secondary/20"
                    >
                      {/* Certificate Mockup Thumbnail */}
                      <div className="relative h-40 rounded-xl overflow-hidden mb-4 border border-white/20 bg-white/10">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex items-end p-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-primary/90 px-2.5 py-1 rounded-md border border-secondary/30">
                            {award.issuer}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg leading-snug text-white">
                        {award.title}
                      </h3>
                      <p className="text-white/70 text-xs mt-1 font-medium">{award.issuer}</p>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary bg-secondary/15 px-3 py-1 rounded-full">
                          {award.year}
                        </span>
                        <span className="text-xs font-bold text-secondary flex items-center gap-1 group-hover:underline">
                          Preview Certificate
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* 7. Developer Partners */}
              <Section
                id="developer-partners"
                badge="Partnerships"
                title="Developer Partners"
                subtitle="We work exclusively with India's most trusted and RERA-compliant developers."
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {partners
                    .filter((p) => p.category === 'developer')
                    .map((partner, i) => (
                      <motion.div
                        key={partner.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all text-center"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/10 transition-colors">
                          <span className="font-display font-extrabold text-primary text-xl">
                            {partner.logo}
                          </span>
                        </div>
                        <p className="font-extrabold text-primary text-sm sm:text-base">
                          {partner.name}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">{partner.dealsCount}+ deals</p>
                      </motion.div>
                    ))}
                </div>
              </Section>

              {/* 8. Our Team (With Full Details Popup Modal) */}
              <Section
                id="our-team"
                badge="The Team"
                title="Our Team"
                subtitle="Click any team member to view complete contact details and advisor profile."
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member, i) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      onClick={() => setSelectedTeamMember(member)}
                      className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-center"
                    >
                      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-secondary/30 group-hover:border-secondary transition-colors mb-3 shadow-md">
                        <img
                          src={member.image}
                          alt={member.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-display font-extrabold text-primary text-base">
                        {member.name}
                      </p>
                      <p className="text-secondary text-xs font-bold mt-0.5">{member.designation}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{member.location} · {member.experience}y exp</p>
                      <div className="mt-3 flex items-center justify-center gap-2">
                        <span className="text-[11px] font-bold text-primary hover:text-secondary flex items-center gap-1">
                          View Details
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* 9. Testimonials */}
              <Section id="testimonials" badge="Client Stories" title="What Clients Say" dark>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {successStories.slice(0, 4).map((story, i) => (
                    <motion.div
                      key={story.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/10 rounded-2xl p-7 border border-white/15 hover:border-secondary/40 transition-all"
                    >
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: story.stars }).map((_, j) => (
                          <span
                            key={j}
                            className="material-symbols-outlined text-secondary text-base"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <p className="text-white/90 text-base leading-relaxed italic font-medium">
                        {story.quoteHeadline}
                      </p>
                      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/15">
                        {story.image ? (
                          <img
                            src={story.image}
                            alt={story.author}
                            className="w-11 h-11 rounded-full object-cover border border-secondary"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-secondary/30 flex items-center justify-center text-secondary font-bold text-sm">
                            {story.initials}
                          </div>
                        )}
                        <div>
                          <p className="text-white font-extrabold text-sm">{story.author}</p>
                          <p className="text-white/60 text-xs">{story.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* 10. Why Choose Us (Large Desktop Typography & Icons) */}
              <Section
                id="why-choose-us"
                badge="Why FIVEX"
                title="Why Choose Us"
                subtitle="The FIVEX difference — measurable, trusted, and experienced."
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: 'verified',
                      title: '42-Point Verification',
                      desc: 'Every property undergoes our proprietary multi-step verification before we recommend it.',
                    },
                    {
                      icon: 'support_agent',
                      title: 'Dedicated Advisor',
                      desc: 'You get a single point of contact throughout your entire property journey.',
                    },
                    {
                      icon: 'history_edu',
                      title: '15+ Years Experience',
                      desc: 'Proven track record since 2010 with 500+ successful transactions.',
                    },
                    {
                      icon: 'currency_exchange',
                      title: 'Best Price Guarantee',
                      desc: 'Leveraging developer relationships for exclusive pre-launch pricing.',
                    },
                    {
                      icon: 'account_balance',
                      title: 'Loan Assistance',
                      desc: 'Seamless home loan facilitation through our banking partner network.',
                    },
                    {
                      icon: 'gavel',
                      title: 'Legal Support',
                      desc: 'Expert legal advisory for registration, title clearance, and documentation.',
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <span
                          className="material-symbols-outlined text-secondary text-2xl sm:text-3xl"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-primary text-base sm:text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>

              {/* 11. FAQs */}
              <Section
                id="faqs"
                badge="FAQ"
                title="Frequently Asked Questions"
                subtitle="Answers to the most common questions about working with FIVEX."
              >
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <FaqItem key={faq.id} faq={faq} index={i} />
                  ))}
                </div>
              </Section>
            </div>
          </div>
        </div>
      </main>

      {/* Award Certificate Modal Preview */}
      <AnimatePresence>
        {selectedAward && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-gray-100 text-left relative"
            >
              <div className="bg-primary p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-secondary text-3xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    verified
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      Verified Award Certificate
                    </h3>
                    <p className="text-xs text-white/60">ID: {selectedAward.certificateId}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAward(null)}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="border-4 border-double border-secondary/40 p-6 rounded-2xl bg-surface-container-low/50 relative overflow-hidden text-center space-y-3">
                  <span
                    className="material-symbols-outlined text-secondary text-5xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    workspace_premium
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Official Recognition
                  </p>
                  <h2 className="font-display font-extrabold text-2xl text-primary">
                    {selectedAward.title}
                  </h2>
                  <p className="text-sm font-bold text-secondary">
                    Presented by {selectedAward.issuer} ({selectedAward.year})
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 italic max-w-md mx-auto leading-relaxed pt-2">
                    &quot;{selectedAward.description}&quot;
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <a
                    href={selectedAward.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-primary transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">download</span>
                    Download Certificate (PDF)
                  </a>
                  <button
                    onClick={() => setSelectedAward(null)}
                    className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all text-center cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Team Member Full Contact Modal */}
      <AnimatePresence>
        {selectedTeamMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl border border-gray-100 text-left relative p-6 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="font-display font-extrabold text-lg text-primary">Team Member Profile</h3>
                <button
                  onClick={() => setSelectedTeamMember(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={selectedTeamMember.image}
                  alt={selectedTeamMember.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-secondary/40"
                />
                <div>
                  <h4 className="font-display font-extrabold text-lg text-primary">{selectedTeamMember.name}</h4>
                  <p className="text-secondary text-xs font-bold">{selectedTeamMember.designation}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{selectedTeamMember.location} · {selectedTeamMember.experience} Years Exp</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl">
                {selectedTeamMember.shortBio}
              </p>

              <div className="space-y-3 pt-2">
                <a href={`tel:${selectedTeamMember.phone}`} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-lg">call</span>
                  <span className="text-sm font-bold text-primary">{selectedTeamMember.phone}</span>
                </a>
                <a href={`mailto:${selectedTeamMember.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-secondary/10 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-lg">mail</span>
                  <span className="text-sm font-bold text-primary truncate">{selectedTeamMember.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href={`/team/${selectedTeamMember.id}`}
                  onClick={() => setSelectedTeamMember(null)}
                  className="w-full bg-primary text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-secondary hover:text-primary transition-all"
                >
                  View Full Profile &amp; Bio
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
