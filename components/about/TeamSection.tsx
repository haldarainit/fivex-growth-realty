import React from 'react';
import { teamMembers } from '@/data/teamData';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-16 max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-4">
          Meet the Experts
        </span>
        <h2 className="font-display text-4xl text-primary font-bold">
          Leadership &amp; Advisors
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="group text-center">
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] shadow-md">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${member.image}')` }}
                aria-label={member.imageAlt || member.name}
              />
            </div>
            <h4 className="font-display font-bold text-lg text-primary mb-1">{member.name}</h4>
            <p className="font-body text-xs text-secondary font-bold uppercase tracking-widest mb-3">
              {member.designation}
            </p>
            {member.shortBio && (
              <p className="text-gray-500 text-sm leading-relaxed font-body line-clamp-2">{member.shortBio}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
