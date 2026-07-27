import React from 'react';

interface PropertyInvestmentInsightProps {
  title: string;
  description: string;
  trendLabel: string;
}

export const PropertyInvestmentInsight: React.FC<PropertyInvestmentInsightProps> = ({
  title,
  description,
  trendLabel,
}) => {
  return (
    <div className="bg-primary-container text-white p-8 rounded-2xl shadow-xl">
      <h3 className="font-display text-xl font-bold mb-4">{title}</h3>
      <p className="font-body text-sm text-white/80 mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 text-secondary-fixed-dim font-bold text-xs">
        <span className="material-symbols-outlined text-lg">trending_up</span>
        <span>{trendLabel}</span>
      </div>
    </div>
  );
};

export default PropertyInvestmentInsight;
