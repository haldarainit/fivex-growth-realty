import React from 'react';
import TeamCard from '@/components/ui/TeamCard';
import { teamMembers } from '@/data/aboutData';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-4">
          Meet the Experts
        </span>
        <h2 className="font-display text-4xl text-primary font-bold">
          Leadership & Advisors
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
