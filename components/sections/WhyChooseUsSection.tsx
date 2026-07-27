import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import FeatureCard from '@/components/ui/FeatureCard';
import { fivexFeatures } from '@/data/homeData';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <SectionContainer
      id="services"
      bgStyle="bg-primary text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeader
        badge="Unmatched Expertise"
        title="The Fivex Edge"
        subtitle="Setting the benchmark in real estate consultancy through expert strategy and unwavering integrity."
        centered={true}
        lightTheme={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {fivexFeatures.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUsSection;
