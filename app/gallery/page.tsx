'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { galleryImages, galleryCategories } from '@/data/galleryData';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const slides = filtered.map((img) => ({ src: img.src, alt: img.alt }));

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero Banner */}
        <div className="bg-primary py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(197,160,89,0.15),transparent_60%)]" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-secondary text-xs font-extrabold uppercase tracking-widest">
                Our Gallery &amp; Events
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mt-3 tracking-tight">
                Our Moments &amp; Portfolio
              </h1>
              <p className="text-white/80 text-base sm:text-xl mt-4 max-w-2xl leading-relaxed font-medium">
                Behind the scenes — team celebrations, property visits, corporate events, CSR drives, and industry recognitions.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12">
          {/* Prominent & Large Category Filter Buttons */}
          <div className="flex gap-3 flex-wrap mb-12 justify-center sm:justify-start">
            {galleryCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-extrabold cursor-pointer transition-all uppercase tracking-wider shadow-sm ${
                    isSelected
                      ? 'bg-primary text-secondary ring-2 ring-secondary shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Masonry Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <p className="text-white text-sm font-bold leading-snug">{img.alt}</p>
                      <span className="text-xs text-secondary font-extrabold uppercase tracking-wider mt-1 block">
                        {galleryCategories.find((c) => c.id === img.category)?.label}
                      </span>
                    </div>
                    <span
                      className="ml-auto material-symbols-outlined text-secondary text-2xl"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      zoom_in
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <span className="material-symbols-outlined text-gray-300 text-7xl">
                photo_library
              </span>
              <p className="text-gray-500 text-lg font-bold mt-4">No images found in this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Fullscreen Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />

      <Footer />
    </>
  );
}
