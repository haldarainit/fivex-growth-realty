'use client';

import React, { useState } from 'react';
import ConciergeCard from '@/components/ui/ConciergeCard';
import { amenityOptions } from '@/data/propertiesData';

export const PropertySidebarFilter: React.FC = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedBedroom, setSelectedBedroom] = useState<string>('3+');
  const [minSqft, setMinSqft] = useState<string>('');
  const [maxSqft, setMaxSqft] = useState<string>('');

  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
      <div>
        <h3 className="font-display text-2xl font-bold text-primary mb-6">
          Advanced Filter
        </h3>

        <div className="space-y-6">
          {/* Amenities */}
          <div>
            <span className="text-xs font-bold uppercase block mb-4 text-primary tracking-wider">
              Amenities
            </span>
            <div className="space-y-3">
              {amenityOptions.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-3 cursor-pointer group select-none"
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary cursor-pointer"
                  />
                  <span className="text-sm font-body text-primary/80 group-hover:text-secondary transition-colors">
                    {amenity}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <span className="text-xs font-bold uppercase block mb-4 text-primary tracking-wider">
              Bedrooms
            </span>
            <div className="grid grid-cols-4 gap-2">
              {['1+', '2+', '3+', '4+'].map((bed) => (
                <button
                  key={bed}
                  type="button"
                  onClick={() => setSelectedBedroom(bed)}
                  className={`py-2 border border-outline-variant rounded font-semibold text-xs transition-all cursor-pointer ${
                    selectedBedroom === bed
                      ? 'bg-primary text-white border-primary'
                      : 'hover:bg-primary-container hover:text-white text-primary'
                  }`}
                >
                  {bed}
                </button>
              ))}
            </div>
          </div>

          {/* Property Area SQFT */}
          <div>
            <span className="text-xs font-bold uppercase block mb-4 text-primary tracking-wider">
              Square Footage (SQFT)
            </span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minSqft}
                onChange={(e) => setMinSqft(e.target.value)}
                className="w-full p-2 bg-surface-container-lowest border border-outline-variant/40 rounded text-sm outline-none text-primary focus:border-secondary"
              />
              <span className="text-outline">—</span>
              <input
                type="number"
                placeholder="Max"
                value={maxSqft}
                onChange={(e) => setMaxSqft(e.target.value)}
                className="w-full p-2 bg-surface-container-lowest border border-outline-variant/40 rounded text-sm outline-none text-primary focus:border-secondary"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Concierge Callout */}
      <ConciergeCard />
    </aside>
  );
};

export default PropertySidebarFilter;
