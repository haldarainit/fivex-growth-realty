'use client';

import React, { useState } from 'react';
import { AgentInfo } from '@/types';

interface PropertyAgentCardProps {
  agent: AgentInfo;
  propertyTitle: string;
}

export const PropertyAgentCard: React.FC<PropertyAgentCardProps> = ({
  agent,
  propertyTitle,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: `I'm interested in ${propertyTitle}...`,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: `I'm interested in ${propertyTitle}...`,
      });
    }, 3000);
  };

  return (
    <div className="bg-surface shadow-xl rounded-2xl p-8 border border-outline-variant">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-16 h-16 rounded-full object-cover shadow-sm"
        />
        <div>
          <p className="font-display font-bold text-primary text-base">{agent.name}</p>
          <p className="text-xs text-on-surface-variant font-body">{agent.role}</p>
        </div>
      </div>

      {submitted ? (
        <div className="text-center py-8 space-y-2">
          <span className="material-symbols-outlined text-secondary text-4xl">
            check_circle
          </span>
          <p className="font-bold text-primary text-sm">Callback Requested!</p>
          <p className="text-xs text-on-surface-variant">
            {agent.name} will get in touch with you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              required
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-secondary/20 font-body text-primary outline-none"
            />
          </div>
          <div>
            <input
              required
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-secondary/20 font-body text-primary outline-none"
            />
          </div>
          <div>
            <input
              required
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-secondary/20 font-body text-primary outline-none"
            />
          </div>
          <div>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-secondary/20 font-body text-primary outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-on-surface-variant transition-all active:scale-95 shadow-md cursor-pointer text-xs uppercase tracking-wider"
          >
            Request Callback
          </button>
        </form>
      )}

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => alert('Booking visit feature launched! Advisor will contact you.')}
          className="flex-1 border-2 border-secondary text-secondary font-bold py-3 rounded-lg hover:bg-secondary/5 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
        >
          <span className="material-symbols-outlined text-sm">calendar_month</span>
          Book Visit
        </button>
      </div>
    </div>
  );
};

export default PropertyAgentCard;
