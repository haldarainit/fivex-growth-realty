import React from 'react';
import { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-6 aspect-[3/4] shadow-md">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${member.image}')` }}
          aria-label={member.imageAlt || member.name}
        />
        {/* Hover overlay with social links */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-4">
            <button aria-label="Share profile" className="cursor-pointer">
              <span className="material-symbols-outlined text-white hover:text-secondary-fixed-dim transition-colors">
                share
              </span>
            </button>
            <button aria-label="Email member" className="cursor-pointer">
              <span className="material-symbols-outlined text-white hover:text-secondary-fixed-dim transition-colors">
                mail
              </span>
            </button>
          </div>
        </div>
      </div>

      <h4 className="font-display font-bold text-lg text-primary mb-1">{member.name}</h4>
      <p className="font-body text-xs text-secondary font-bold uppercase tracking-widest mb-3">
        {member.role}
      </p>
      {member.bio && (
        <p className="text-on-surface-variant text-sm leading-relaxed font-body">{member.bio}</p>
      )}
    </div>
  );
};

export default TeamCard;
