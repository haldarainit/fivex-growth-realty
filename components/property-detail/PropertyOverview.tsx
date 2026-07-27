import React from 'react';

interface PropertyOverviewProps {
  paragraphs: string[];
}

export const PropertyOverview: React.FC<PropertyOverviewProps> = ({ paragraphs }) => {
  return (
    <section className="mb-16" id="overview">
      <h2 className="font-display text-2xl font-bold text-primary mb-6">Overview</h2>
      {paragraphs.map((p, idx) => (
        <p
          key={idx}
          className="font-body text-on-surface-variant text-base leading-relaxed mb-6 last:mb-0"
        >
          {p}
        </p>
      ))}
    </section>
  );
};

export default PropertyOverview;
