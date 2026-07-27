'use client';

import React from 'react';

interface PropertyFloorPlanProps {
  floorPlanImage: string;
  onDownload?: () => void;
}

export const PropertyFloorPlan: React.FC<PropertyFloorPlanProps> = ({
  floorPlanImage,
  onDownload,
}) => {
  return (
    <section className="mb-16" id="floorplan">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-display text-2xl font-bold text-primary">Floor Plan</h2>
        <button
          onClick={onDownload}
          className="text-secondary font-bold flex items-center gap-2 hover:underline cursor-pointer text-sm"
        >
          <span className="material-symbols-outlined">download</span>
          Download Brochure
        </button>
      </div>
      <div className="bg-surface-container-high rounded-2xl p-8 md:p-12 flex items-center justify-center border border-dashed border-outline">
        <div className="text-center w-full">
          <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">
            architecture
          </span>
          <p className="font-body text-on-surface-variant text-sm mb-6">
            2D & 3D Floor plans available for download
          </p>
          <img
            src={floorPlanImage}
            alt="2D & 3D Floor plan architectural rendering"
            className="rounded-lg max-w-lg mx-auto shadow-sm w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyFloorPlan;
