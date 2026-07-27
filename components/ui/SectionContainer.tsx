import React from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  bgStyle?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className = '',
  containerClassName = '',
  children,
  bgStyle = 'bg-white',
}) => {
  return (
    <section id={id} className={`py-20 md:py-32 lg:py-40 ${bgStyle} ${className}`}>
      <div
        className={`px-4 sm:px-8 md:px-margin-desktop max-w-container-max mx-auto ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
