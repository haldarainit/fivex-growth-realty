import React from 'react';
import { PropertyItem } from '@/types';
import Link from 'next/link';

interface PropertyCardProps {
  property: PropertyItem;
  onAction?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onAction }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-gold/30 border border-transparent transition-all duration-500 group flex flex-col justify-between">
      <div>
        <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className={`absolute top-4 left-4 ${property.badgeStyle} px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest`}>
            {property.reraId}
          </div>
          <div className="absolute bottom-4 right-4 glass-dark text-gold px-4 py-1.5 rounded-xl font-bold backdrop-blur-md border border-gold/20 text-sm">
            {property.price}
          </div>
        </div>

        <div className="p-5 sm:p-7 space-y-4">
          <div className="space-y-1">
            <h3 className="font-display text-lg md:text-xl text-primary font-bold group-hover:text-secondary transition-colors line-clamp-1">
              {property.title}
            </h3>
            <p className="text-primary/50 text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-base text-secondary">location_on</span>
              {property.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {property.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-surface-container px-2.5 py-1 rounded-lg font-semibold text-primary/60 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-between py-4 border-y border-outline-variant/20 text-xs font-bold text-primary/60 gap-2">
            {property.specs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-secondary">{spec.icon}</span>
                {spec.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-7 pb-6">
        <Link
          href={`/properties/${property.id}`}
          className="block w-full py-3.5 text-center border border-secondary/30 text-secondary font-bold rounded-xl hover:bg-secondary hover:text-white hover:border-transparent transition-all duration-300 text-sm cursor-pointer"
        >
          {property.actionText}
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
