'use client';

import React, { useState } from 'react';
import { DetailedProperty } from '@/types';

interface DetailedPropertyCardProps {
  property: DetailedProperty;
  onViewDetails?: () => void;
}

export const DetailedPropertyCard: React.FC<DetailedPropertyCardProps> = ({
  property,
  onViewDetails,
}) => {
  const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);

  return (
    <article className="property-card bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-outline-variant/10 flex flex-col justify-between">
      <div>
        <div className="relative h-72 overflow-hidden">
          <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap">
            {property.badges.map((badge, idx) => (
              <span
                key={idx}
                className={`${badge.style} px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          <div
            className="property-image w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${property.image}')` }}
            aria-label={property.imageAlt || property.title}
          />

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="Save Property"
            className={`absolute bottom-4 right-4 p-2 rounded-lg backdrop-blur-md transition-all cursor-pointer ${
              isFavorite
                ? 'bg-secondary text-white opacity-100'
                : 'bg-primary/80 text-white opacity-0 group-hover:opacity-100 hover:bg-secondary'
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: isFavorite ? '"FILL" 1' : '"FILL" 0' }}
            >
              favorite
            </span>
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="font-display font-semibold text-xl text-primary group-hover:text-secondary transition-colors">
              {property.title}
            </h3>
            <p className="font-display text-[22px] text-secondary font-bold whitespace-nowrap">
              {property.price}
            </p>
          </div>

          <p className="text-on-surface-variant text-sm mb-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px] text-secondary">
              location_on
            </span>
            {property.location}
          </p>

          <div className="flex items-center gap-6 py-4 border-t border-outline-variant/30 mb-6 text-sm text-primary">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">bed</span>
              <span className="font-bold">{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">bathtub</span>
              <span className="font-bold">{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">square_foot</span>
              <span className="font-bold">{property.sqft}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <button
          onClick={onViewDetails}
          className="w-full py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-lg active:scale-95 cursor-pointer text-xs"
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default DetailedPropertyCard;
