import React, { useState } from 'react';

type SocialIconLinkProps = {
  platform: string;
  url: string;
  iconImg?: string;
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
  const [imgError, setImgError] = useState(false);

  const getPlatformIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('whatsapp')) return 'chat';
    if (lower.includes('tumblr')) return 'post_add';
    if (lower.includes('pinterest')) return 'push_pin';
    if (lower.includes('facebook')) return 'share';
    if (lower.includes('linkedin')) return 'work';
    if (lower.includes('instagram')) return 'photo_camera';
    if (lower.includes('youtube')) return 'play_circle';
    if (lower.includes('twitter') || lower.includes('x')) return 'tag';
    return 'open_in_new';
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
      title={platform}
      className={`inline-flex items-center justify-center text-white/80 transition-all hover:scale-110 hover:text-secondary ${className}`}
    >
      {iconImg && !imgError ? (
        <img
          src={iconImg}
          alt={platform}
          onError={() => setImgError(true)}
          className={`h-5 w-5 object-contain ${iconClassName}`}
        />
      ) : (
        <span
          className="material-symbols-outlined text-base text-secondary bg-white/10 p-1.5 rounded-lg border border-white/20 hover:bg-secondary hover:text-primary transition-colors"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          {getPlatformIcon(platform)}
        </span>
      )}
    </a>
  );
};

export default SocialIconLink;
