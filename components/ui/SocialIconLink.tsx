import React from 'react';

type SocialIconLinkProps = {
  platform: string;
  url: string;
  iconImg: string;
  className?: string;
  iconClassName?: string;
};

export const SocialIconLink: React.FC<SocialIconLinkProps> = ({
  platform,
  url,
  iconImg,
  className = '',
  iconClassName = '',
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
      title={platform}
      className={`inline-flex items-center justify-center text-white/75 transition-all hover:scale-105 hover:text-secondary ${className}`}
    >
      <img src={iconImg} alt={platform} className={`h-5 w-5 object-contain ${iconClassName}`} />
    </a>
  );
};

export default SocialIconLink;
