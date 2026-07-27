import React from 'react';

interface PropertyGalleryProps {
  images: { url: string; alt: string }[];
  badges: { label: string; style: string }[];
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, badges }) => {
  const mainImage = images[0] || { url: '', alt: 'Property main image' };
  const image2 = images[1] || mainImage;
  const image3 = images[2] || mainImage;

  return (
    <section className="px-margin-desktop max-w-container-max mx-auto mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[600px]">
        {/* Main Feature Image */}
        <div className="lg:col-span-8 relative overflow-hidden rounded-xl image-zoom shadow-md group min-h-[350px] lg:min-h-full">
          <img
            src={mainImage.url}
            alt={mainImage.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className={`${badge.style} px-4 py-1 rounded-full text-xs font-bold shadow-lg`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary Images Column */}
        <div className="lg:col-span-4 flex flex-col gap-4 min-h-[300px]">
          <div className="h-1/2 relative overflow-hidden rounded-xl image-zoom shadow-md min-h-[180px]">
            <img
              src={image2.url}
              alt={image2.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="h-1/2 relative overflow-hidden rounded-xl image-zoom shadow-md min-h-[180px]">
            <img
              src={image3.url}
              alt={image3.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group hover:bg-black/20 transition-all">
              <span className="text-white font-bold text-lg">+12 Photos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
