'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { getProjectBySlug, unifiedProjects } from '@/data/projectsData';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const project = getProjectBySlug(slug) || unifiedProjects[0];

  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'floorplan' | 'location'>('overview');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 min-h-screen bg-slate-50">

        {/* Breadcrumb & Quick Info Bar */}
        <section className="bg-white border-b border-gray-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-2 font-medium">
              <Link href="/" className="hover:text-secondary">Home</Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-secondary">Projects</Link>
              <span>/</span>
              <span className="text-primary font-bold truncate max-w-[200px] sm:max-w-none">{project.title}</span>
            </div>
            <Link
              href="/projects"
              className="font-bold text-secondary hover:underline flex items-center gap-1"
            >
              ← Back to All Projects
            </Link>
          </div>
        </section>

        {/* Hero Gallery Section */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {project.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${badge.style}`}
                  >
                    {badge.label}
                  </span>
                ))}
                <span className="bg-primary/10 text-primary text-[11px] font-bold px-3 py-1 rounded-full">
                  {project.cityName}
                </span>
                <span className="bg-secondary/15 text-secondary text-[11px] font-bold px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                {project.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mt-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
                {project.location}
              </p>
            </div>

            <div className="lg:text-right bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-xs uppercase font-extrabold tracking-wider text-gray-400">Starting Price</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-secondary mt-0.5">
                {project.startingPrice}
              </p>
              {project.yieldText && (
                <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mt-1 inline-block">
                  ✦ {project.yieldText}
                </p>
              )}
            </div>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <div
              onClick={() => setSelectedImage(project.image)}
              className="md:col-span-2 relative group cursor-pointer overflow-hidden bg-gray-200"
            >
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined">zoom_in</span> Click to Enlarge
                </span>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-4">
              {(project.galleryImages && project.galleryImages.length > 1
                ? project.galleryImages.slice(1, 3)
                : [
                    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Interior preview' },
                    { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Terrace view' },
                  ]
              ).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img.url)}
                  className="flex-1 relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-200"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Tabs & Inquiry Form Grid */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Main Details (8 cols) */}
            <div className="lg:col-span-8 space-y-8">

              {/* Navigation Tabs */}
              <div className="flex border-b border-gray-200 bg-white p-1.5 rounded-2xl shadow-sm overflow-x-auto gap-2">
                {[
                  { id: 'overview', label: 'Overview & Highlights', icon: 'info' },
                  { id: 'amenities', label: 'Amenities', icon: 'star' },
                  { id: 'floorplan', label: 'Floor Plans', icon: 'floor' },
                  { id: 'location', label: 'Landmarks', icon: 'map' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Specs Quick Strip */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <span className="material-symbols-outlined text-secondary text-2xl mb-1">king_bed</span>
                  <p className="text-xs text-gray-400 font-bold uppercase">Bedrooms</p>
                  <p className="text-lg font-extrabold text-primary">{project.bedrooms ? `${project.bedrooms} Beds` : 'N/A'}</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-secondary text-2xl mb-1">bathtub</span>
                  <p className="text-xs text-gray-400 font-bold uppercase">Bathrooms</p>
                  <p className="text-lg font-extrabold text-primary">{project.bathrooms ? `${project.bathrooms} Baths` : 'N/A'}</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-secondary text-2xl mb-1">square_foot</span>
                  <p className="text-xs text-gray-400 font-bold uppercase">Area Size</p>
                  <p className="text-lg font-extrabold text-primary">{project.sqft || 'On Request'}</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-secondary text-2xl mb-1">domain</span>
                  <p className="text-xs text-gray-400 font-bold uppercase">Project Status</p>
                  <p className="text-lg font-extrabold text-primary">{project.status}</p>
                </div>
              </div>

              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold font-display text-primary">About {project.title}</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                    {(project.fullOverview || [project.description]).map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  {/* Investment Insight Box */}
                  {project.investmentInsight && (
                    <div className="bg-secondary/10 border-l-4 border-secondary p-5 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-extrabold text-sm text-primary flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary">trending_up</span>
                          {project.investmentInsight.title}
                        </h4>
                        <span className="text-[11px] font-bold uppercase bg-secondary text-white px-2.5 py-0.5 rounded-full">
                          {project.investmentInsight.trendLabel}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {project.investmentInsight.description}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Amenities */}
              {activeTab === 'amenities' && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold font-display text-primary mb-6">World-Class Amenities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {(project.amenities || []).map((amenity, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-2xl flex flex-col items-center text-center gap-2 hover:bg-secondary/10 transition-colors">
                        <span className="material-symbols-outlined text-3xl text-secondary">{amenity.icon}</span>
                        <span className="text-xs font-bold text-primary">{amenity.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Floor Plan */}
              {activeTab === 'floorplan' && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                  <h3 className="text-xl font-bold font-display text-primary">Master Layout & Architectural Floor Plan</h3>
                  <div className="bg-gray-100 rounded-2xl p-4 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img
                      src={project.floorPlanImage || 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80'}
                      alt="Floor plan master layout"
                      className="max-h-[450px] object-contain rounded-xl shadow-md"
                    />
                  </div>
                </div>
              )}

              {/* Tab 4: Location Landmarks */}
              {activeTab === 'location' && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold font-display text-primary">Nearby Landmarks & Connectivity</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(project.landmarks || []).map((lm, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">{lm.icon}</span>
                        </div>
                        <div>
                          <p className="font-bold text-sm text-primary">{lm.name}</p>
                          <p className="text-xs text-gray-500 font-semibold">{lm.distance}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar: Inquiry & Agent Contact (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">

                {/* Inquiry Card */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
                  <h4 className="font-display font-extrabold text-lg text-primary">Book Private Tour / Inquiry</h4>
                  <p className="text-xs text-gray-500">
                    Get exclusive pricing sheets, floor plan PDFs, and priority site visit booking for {project.title}.
                  </p>

                  {isSubmitted ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl text-center font-bold">
                      ✓ Inquiry submitted! Our senior advisor will call you within 15 minutes.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={3}
                          placeholder="Message / Preferred Inspection Date"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-secondary text-white py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
                      >
                        Request Express Callback →
                      </button>
                    </form>
                  )}
                </div>

                {/* Agent Card */}
                {project.agent && (
                  <div className="bg-primary text-white p-6 rounded-3xl shadow-lg flex items-center gap-4">
                    <img
                      src={project.agent.image}
                      alt={project.agent.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
                    />
                    <div>
                      <h5 className="font-bold text-sm text-white">{project.agent.name}</h5>
                      <p className="text-xs text-secondary font-semibold">{project.agent.role}</p>
                      <p className="text-[11px] text-gray-300 mt-1">Direct Advisor for {project.title}</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* Modal preview for images */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          >
            <img src={selectedImage} alt="Expanded view" className="max-w-full max-h-[90vh] object-contain rounded-2xl" />
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
