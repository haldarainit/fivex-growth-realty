import React from 'react';
import { LandmarkItem } from '@/types';

interface PropertyLandmarksProps {
  landmarks: LandmarkItem[];
}

export const PropertyLandmarks: React.FC<PropertyLandmarksProps> = ({ landmarks }) => {
  return (
    <section className="mb-16" id="landmarks">
      <h2 className="font-display text-2xl font-bold text-primary mb-8">
        Nearby Landmarks
      </h2>
      <div className="space-y-4">
        {landmarks.map((landmark, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                {landmark.icon}
              </span>
              <span className="font-body font-bold text-sm text-primary">
                {landmark.name}
              </span>
            </div>
            <span className="text-on-surface-variant font-body text-sm font-semibold">
              {landmark.distance}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyLandmarks;
