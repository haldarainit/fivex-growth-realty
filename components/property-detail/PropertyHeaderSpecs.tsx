import React from 'react';

interface PropertyHeaderSpecsProps {
  title: string;
  location: string;
  price: string;
  priceLabel?: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
}

export const PropertyHeaderSpecs: React.FC<PropertyHeaderSpecsProps> = ({
  title,
  location,
  price,
  priceLabel = 'Starting From',
  bedrooms,
  bathrooms,
  sqft,
}) => {
  return (
    <div className="mb-12 border-b border-outline-variant pb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl lg:text-5xl text-primary font-bold mb-2">
            {title}
          </h1>
          <p className="text-on-surface-variant text-lg font-body flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">location_on</span>
            {location}
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">
            {priceLabel}
          </p>
          <p className="font-display text-3xl font-bold text-primary">{price}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">bed</span>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant font-bold uppercase">Bedrooms</p>
            <p className="font-body font-bold text-sm text-primary">{bedrooms} Beds</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">bathtub</span>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant font-bold uppercase">Bathrooms</p>
            <p className="font-body font-bold text-sm text-primary">{bathrooms} Baths</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">square_foot</span>
          </div>
          <div>
            <p className="text-xs text-on-surface-variant font-bold uppercase">Living Area</p>
            <p className="font-body font-bold text-sm text-primary">{sqft}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeaderSpecs;
