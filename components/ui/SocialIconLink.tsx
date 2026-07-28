import React from 'react';

type SocialIconLinkProps = {
  platform: string;
  url: string;
  iconImg: string;
  className?: string;
};

export const SocialIconLink: React.FC<SocialIconLinkProps> = ({ platform, url, iconImg, className = '' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
      title={platform}
      className={`inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white/70 transition-all hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary ${className}`}
    >
      <img src={iconImg} alt={platform} className="h-5 w-5 object-contain" />
    </a>
  );
};

export default SocialIconLink;