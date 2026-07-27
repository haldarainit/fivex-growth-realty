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
    <article className="property-card bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between w-full min-w-0">
      <div>
        {/* Card Image Area */}
        <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
          <div className="absolute top-3.5 left-3.5 z-10 flex gap-1.5 flex-wrap max-w-[80%]">
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
            className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-gray-700 hover:text-red-500 transition-all shadow-sm cursor-pointer"
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
        <div className="p-4 sm:p-5 lg:p-6 space-y-3">
          <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-1 sm:gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-gray-900 group-hover:text-secondary transition-colors line-clamp-1">
                <Link href={`/properties/${property.id}`}>{property.title}</Link>
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 mt-0.5 min-w-0">
                <span className="material-symbols-outlined text-base text-secondary flex-shrink-0">
                  location_on
                </span>
                <span className="truncate">{property.location}</span>
              </p>
            </div>
            <div className="text-left xs:text-right flex-shrink-0 pt-0.5 xs:pt-0">
              <span className="font-display text-base sm:text-lg lg:text-xl text-[#c5a059] font-extrabold whitespace-nowrap">
                {property.price.includes('*') ? property.price : `${property.price}*`}
              </span>
            </div>
          </div>

          {/* 3 Specs Items Row */}
          <div className="grid grid-cols-3 gap-1 sm:gap-2 py-3 border-y border-gray-100 text-center text-[11px] sm:text-xs font-bold text-gray-600">
            <div className="flex items-center justify-center gap-1 min-w-0">
              <span className="material-symbols-outlined text-sm sm:text-base text-secondary flex-shrink-0">
                bed
              </span>
              <span className="truncate">{property.bedrooms} BHK</span>
            </div>
            <div className="flex items-center justify-center gap-1 min-w-0">
              <span className="material-symbols-outlined text-sm sm:text-base text-secondary flex-shrink-0">
                square_foot
              </span>
              <span className="truncate">{property.sqft}</span>
            </div>
            <div className="flex items-center justify-center gap-1 min-w-0">
              <span className="material-symbols-outlined text-sm sm:text-base text-secondary flex-shrink-0">
                directions_car
              </span>
              <span className="truncate">3 Park</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="px-4 sm:px-5 lg:px-6 pb-5 pt-1 flex items-center gap-2">
        <Link
          href={`/properties/${property.id}`}
          className="flex-1 py-3 px-3 bg-black text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider rounded-xl hover:bg-gray-800 transition-all text-center cursor-pointer shadow-sm whitespace-nowrap overflow-hidden text-ellipsis block min-w-0"
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
