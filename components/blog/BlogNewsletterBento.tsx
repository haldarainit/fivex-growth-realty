'use client';

import React, { useState } from 'react';
import { newsletterImageUrl } from '@/data/blogData';

export const BlogNewsletterBento: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="lg:col-span-2 flex flex-col md:flex-row bg-primary text-white rounded-xl overflow-hidden shadow-xl">
      <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
        <h3 className="font-display text-2xl font-bold mb-4">Join the Circle</h3>
        <p className="text-white/70 font-body text-sm mb-8 leading-relaxed">
          Receive our monthly 'State of Realty' report. Private insights delivered directly to your inbox, curated for the modern investor.
        </p>
        {subscribed ? (
          <p className="text-secondary-fixed-dim font-bold text-sm">
            Welcome to the Circle! 🎉 Insights incoming.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your work email"
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 flex-grow text-white placeholder:text-white/40 focus:bg-white/20 transition-all outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-secondary text-white px-5 py-3 rounded-lg font-bold hover:bg-secondary-fixed-dim transition-colors active:scale-95 cursor-pointer text-xs uppercase tracking-wider"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
      <div className="md:w-1/2 h-64 md:h-full overflow-hidden">
        <img
          src={newsletterImageUrl}
          alt="Professional studying architectural blueprints"
          className="w-full h-full object-cover opacity-80 mix-blend-screen"
        />
      </div>
    </div>
  );
};

export default BlogNewsletterBento;
