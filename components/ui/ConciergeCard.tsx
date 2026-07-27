import React from 'react';

interface ConciergeCardProps {
  onContact?: () => void;
}

export const ConciergeCard: React.FC<ConciergeCardProps> = ({ onContact }) => {
  return (
    <div className="p-6 bg-primary-container rounded-xl text-white relative overflow-hidden group border border-outline-variant/10 shadow-lg">
      <div className="relative z-10">
        <h4 className="font-display text-xl font-bold mb-2">Need Concierge Service?</h4>
        <p className="text-sm mb-6 opacity-80 leading-relaxed font-body">
          Connect with our dedicated advisors for a private viewing experience.
        </p>
        <button
          onClick={onContact}
          className="w-full py-3 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-bold hover:bg-secondary-fixed-dim transition-all cursor-pointer text-xs uppercase tracking-wider"
        >
          Contact Advisor
        </button>
      </div>
      <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[160px]">support_agent</span>
      </div>
    </div>
  );
};

export default ConciergeCard;
