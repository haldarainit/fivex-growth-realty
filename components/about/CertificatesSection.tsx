'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificatesData, CertificateItem } from '@/data/certificatesData';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className="w-full py-4">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setSelectedCert(cert)}
            className="group bg-white rounded-3xl p-5 border border-gray-100 shadow-md hover:shadow-2xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              {/* Card Thumbnail Box displaying the PNG / JPEG Card Image */}
              <div className="relative h-52 rounded-2xl overflow-hidden mb-4 border border-gray-100 bg-gray-50 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={cert.previewImage}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2 bg-white"
                />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 bg-primary/85 backdrop-blur-md px-3 py-1 rounded-full border border-secondary/30 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary">
                    {cert.category}
                  </span>
                </div>

                {/* Hover Preview Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
                  <span className="bg-secondary text-primary px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">visibility</span>
                    View Full {cert.fileType === 'pdf' ? 'PDF' : 'Document'}
                  </span>
                </div>
              </div>

              {/* Card Body Info */}
              <div className="space-y-1.5 px-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-secondary">
                  {cert.issuer}
                </span>
                <h3 className="font-display font-extrabold text-base text-primary leading-snug group-hover:text-secondary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Bottom Card Bar */}
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-primary bg-surface-container-low px-2.5 py-1 rounded-lg border border-gray-100">
                {cert.regNumber}
              </span>
              <a
                href={cert.filePath}
                download={cert.downloadName}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-extrabold text-primary hover:text-secondary bg-gray-100 hover:bg-secondary/15 px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Document Viewer Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Clean Professional Modal Header */}
              <div className="bg-primary text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary block">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs font-mono text-secondary mt-0.5 font-bold">
                    Registration ID: {selectedCert.regNumber}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href={selectedCert.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all"
                  >
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                    Open PDF Tab
                  </a>

                  <a
                    href={selectedCert.filePath}
                    download={selectedCert.downloadName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-primary px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 hover:brightness-110 shadow-md whitespace-nowrap"
                  >
                    <span className="material-symbols-outlined text-base">download</span>
                    Download
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                </div>
              </div>

              {/* Main Document Viewer (Displays Actual PDF iframe or Image) */}
              <div className="flex-1 p-3 bg-slate-900 overflow-y-auto min-h-[520px] flex items-center justify-center">
                {selectedCert.fileType === 'image' ? (
                  <img
                    src={selectedCert.filePath}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[74vh] object-contain rounded-2xl shadow-2xl bg-white p-2"
                  />
                ) : (
                  <iframe
                    src={selectedCert.filePath}
                    title={selectedCert.title}
                    className="w-full h-[74vh] rounded-2xl bg-white border border-gray-200 shadow-2xl"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesSection;
