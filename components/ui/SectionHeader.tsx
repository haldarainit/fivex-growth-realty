import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightTheme?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  lightTheme = false,
  className = '',
}) => {
  const alignmentClass = centered ? 'text-center' : 'text-left';
  const textColor = lightTheme ? 'text-white' : 'text-primary';
  const subtitleColor = lightTheme ? 'text-white/50' : 'text-primary/70';

  return (
    <div className={`${alignmentClass} mb-20 space-y-4 ${className}`}>
      {badge && (
        <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">
          {badge}
        </span>
      )}
      <h2 className={`font-display text-4xl lg:text-5xl ${textColor} font-bold`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body ${subtitleColor} text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-secondary ${centered ? 'mx-auto' : ''} mt-6`} />
    </div>
  );
};

export default SectionHeader;
