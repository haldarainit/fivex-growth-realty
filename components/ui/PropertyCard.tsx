import React from 'react';
import { PropertyItem } from '@/types';

interface PropertyCardProps {
  property: PropertyItem;
  onAction?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onAction }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-gold/30 border border-transparent transition-all duration-500 group flex flex-col justify-between">
      <div>
        <div className="relative h-80 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute top-6 left-6 ${property.badgeStyle} px-4 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest`}>
            {property.reraId}
          </div>
          <div className="absolute bottom-6 right-6 glass-dark text-gold px-5 py-2 rounded-lg font-bold backdrop-blur-md border border-gold/20">
            {property.price}
          </div>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="font-display text-xl text-primary font-bold group-hover:text-secondary transition-colors">
              {property.title}
            </h3>
            <p className="text-primary/50 text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-lg text-secondary">location_on</span>
              {property.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {property.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-surface-container px-2 py-1 rounded font-semibold text-primary/60 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between py-5 border-y border-outline-variant/20 text-xs font-bold text-primary/60">
            {property.specs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-secondary">
                  {spec.icon}
                </span>
                {spec.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-8 pb-8">
        <button
          onClick={onAction}
          className="w-full py-4 border border-secondary/30 text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
        >
          {property.actionText}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
