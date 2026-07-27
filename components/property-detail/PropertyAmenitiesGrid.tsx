import React from 'react';
import { DetailAmenity } from '@/types';

interface PropertyAmenitiesGridProps {
  amenities: DetailAmenity[];
}

export const PropertyAmenitiesGrid: React.FC<PropertyAmenitiesGridProps> = ({
  amenities,
}) => {
  return (
    <section className="mb-16" id="amenities">
      <h2 className="font-display text-2xl font-bold text-primary mb-8">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {amenities.map((amenity, idx) => (
          <div
            key={idx}
            className="p-6 bg-surface-container-low rounded-xl border border-outline-variant hover:border-secondary transition-colors group flex flex-col justify-start"
          >
            <span className="material-symbols-outlined text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform">
              {amenity.icon}
            </span>
            <p className="font-body font-bold text-primary text-sm">{amenity.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyAmenitiesGrid;
