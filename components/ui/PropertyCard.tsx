'use client';

import React, { useState } from 'react';
import { PropertyItem } from '@/types';
import Link from 'next/link';

interface PropertyCardProps {
  property: PropertyItem;
  onAction?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-100 transition-all duration-300 group flex flex-col justify-between">
      <div>
        {/* Card Image Area */}
        <div className="relative h-60 sm:h-64 md:h-72 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
          
          {/* Top Left Badges - Matching Attached Image 2 */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-10 flex-wrap">
            <span className="bg-[#fceba2] text-[#694f03] px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              FOR SALE
            </span>
            <span className="bg-black text-white px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              NEW
            </span>
          </div>

          {/* Top Right Heart Favorite Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            aria-label="Save Property"
            className="absolute top-3.5 right-3.5 z-10 p-2 rounded-full bg-white/70 hover:bg-white backdrop-blur-md text-gray-700 hover:text-red-500 transition-all shadow-sm cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-lg block"
              style={{
                fontVariationSettings: isLiked ? '"FILL" 1' : '"FILL" 0',
                color: isLiked ? '#ef4444' : 'inherit',
              }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Card Content Area */}
        <div className="p-5 sm:p-6 space-y-3.5">
          {/* Title & Price Row - Matching Image 2 */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors line-clamp-1">
                {property.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 mt-0.5">
                <span className="material-symbols-outlined text-base text-secondary flex-shrink-0">
                  location_on
                </span>
                <span className="line-clamp-1">{property.location}</span>
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-display text-lg sm:text-xl font-extrabold text-[#c5a059]">
                {property.price.includes('*') ? property.price : `${property.price}*`}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {property.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-gray-100 px-2.5 py-1 rounded-md font-semibold text-gray-600 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Specs Row - 3 Items Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 text-center text-xs font-bold text-gray-600">
            {property.specs.map((spec, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-1">
                <span className="material-symbols-outlined text-base text-secondary">
                  {spec.icon}
                </span>
                <span className="truncate">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons Row - Matching Attached Image 2 */}
      <div className="px-5 sm:px-6 pb-6 pt-1 flex items-center gap-2.5">
        <Link
          href={`/properties/${property.id}`}
          className="flex-1 py-3 bg-black text-white font-extrabold rounded-xl hover:bg-gray-800 transition-all text-xs tracking-wider uppercase text-center cursor-pointer shadow-sm"
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
    </div>
  );
};

export default PropertyCard;
