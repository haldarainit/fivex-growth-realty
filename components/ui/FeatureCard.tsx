import React from 'react';
import { FeatureItem } from '@/types';

interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="glass-card p-10 rounded-2xl hover:bg-white/10 transition-all group border-white/5 flex flex-col justify-start">
      <span
        className="material-symbols-outlined text-5xl text-secondary mb-8 block"
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        {feature.icon}
      </span>
      <h3 className="font-display text-xl font-bold mb-4 text-white">
        {feature.title}
      </h3>
      <p className="text-white/60 leading-relaxed font-body text-sm">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
