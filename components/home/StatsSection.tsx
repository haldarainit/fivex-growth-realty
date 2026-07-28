'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { companyStats } from '@/data/companyStats';

const AnimatedValue: React.FC<{ value: string; isInView: boolean }> = ({ value, isInView }) => {
  const numericPart = value.match(/[\d.]+/)?.[0] || '';
  const prefix = value.match(/^[^\d]*/)?.[0] || '';
  const suffix = value.replace(numericPart, '').replace(prefix, '');
  const target = parseFloat(numericPart);

  const [displayed, setDisplayed] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || !target) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      setDisplayed(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  if (!target) {
    return <span>{value}</span>;
  }

  const formatNum = (n: number) => {
    if (target >= 1000) return Math.round(n).toLocaleString('en-IN');
    if (numericPart.includes('.')) return n.toFixed(1);
    return Math.round(n).toString();
  };

  return (
    <span>
      {prefix}{formatNum(displayed)}{suffix}
    </span>
  );
};

const StatCard: React.FC<{
  stat: typeof companyStats[0];
  index: number;
  isInView: boolean;
}> = ({ stat, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
  >
    {/* Gold accent top border */}
    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity" />

    {/* Icon */}
    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
      <span
        className="material-symbols-outlined text-secondary text-2xl"
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        {stat.icon}
      </span>
    </div>

    {/* Value */}
    <div className="font-display font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
      <AnimatedValue value={stat.value} isInView={isInView} />
    </div>

    {/* Label */}
    <p className="font-display font-bold text-sm text-primary/80 mt-1">{stat.label}</p>
    {stat.sublabel && (
      <p className="text-xs text-gray-400 mt-0.5">{stat.sublabel}</p>
    )}

    {/* Description (on hover) */}
    {stat.description && (
      <p className="text-xs text-gray-500 mt-3 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
        {stat.description}
      </p>
    )}

    {/* Background decoration */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
  </motion.div>
);

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-surface-container-low relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(197,160,89,0.06),transparent_60%),radial-gradient(circle_at_80%_50%,rgba(10,25,47,0.04),transparent_60%)]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-secondary text-xs font-extrabold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-secondary" />
            Our Track Record
            <span className="w-8 h-px bg-secondary" />
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight">
            Numbers That Speak
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Over a decade of delivering premium real estate outcomes — measured in trust, results, and client satisfaction.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {companyStats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
