'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DetailedProperty } from '@/types';

interface DetailedPropertyCardProps {
  property: DetailedProperty;
}

export const DetailedPropertyCard: React.FC<DetailedPropertyCardProps> = ({
  property,
}) => {
  const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);

  return (
    <article className="property-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between">
      <div>
        {/* Card Image Area */}
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <div className="absolute top-3.5 left-3.5 z-10 flex gap-1.5 flex-wrap">
            <span className="bg-[#fceba2] text-[#694f03] px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              FOR SALE
            </span>
            <span className="bg-black text-white px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              NEW
            </span>
          </div>

          <div
            className="property-image w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${property.image}')` }}
            aria-label={property.imageAlt || property.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

          {/* Heart Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label="Save Property"
            className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/70 hover:bg-white backdrop-blur-md text-gray-700 hover:text-red-500 transition-all shadow-sm cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-lg block"
              style={{
                fontVariationSettings: isFavorite ? '"FILL" 1' : '"FILL" 0',
                color: isFavorite ? '#ef4444' : 'inherit',
              }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Card Details Area */}
        <div className="p-5 sm:p-6 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 group-hover:text-secondary transition-colors">
                <Link href={`/properties/${property.id}`}>{property.title}</Link>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-base text-secondary flex-shrink-0">
                  location_on
                </span>
                <span className="line-clamp-1">{property.location}</span>
              </p>
            </div>
            <p className="font-display text-lg sm:text-xl text-[#c5a059] font-extrabold whitespace-nowrap">
              {property.price.includes('*') ? property.price : `${property.price}*`}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 text-center text-xs font-bold text-gray-600">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
              <span className="material-symbols-outlined text-base text-secondary">bed</span>
              <span>{property.bedrooms} BHK</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
              <span className="material-symbols-outlined text-base text-secondary">square_foot</span>
              <span>{property.sqft}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
              <span className="material-symbols-outlined text-base text-secondary">directions_car</span>
              <span>3 Park</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Row - Matching Image 2 */}
      <div className="px-5 sm:px-6 pb-6 pt-1 flex items-center gap-2.5">
        <Link
          href={`/properties/${property.id}`}
          className="flex-1 py-3 bg-black text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-800 transition-all text-center cursor-pointer shadow-sm"
        >
          View Details
        </Link>
        <Link
          href="/contact"
          className="p-3 border border-secondary/60 text-secondary rounded-xl hover:bg-secondary/10 transition-all flex items-center justify-center cursor-pointer flex-shrink-0"
          aria-label="Call Agent"
        >
          <span className="material-symbols-outlined text-lg">call</span>
        </Link>
      </div>
    </article>
  );
};

export default DetailedPropertyCard;
