// src/components/UavSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { uavMetrics, uavMissions } from '../data/content.js';
import CountUp from './CountUp.jsx';
import { ShieldCheck, Navigation, Clock, Plane, MapPin, Radio, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Sub-component to manage automatic rotation and manual clicks per mission card
function MissionImageCarousel({ images, title, onExpand }) {
  const imageList = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000); // Automatically rotates every 4 seconds
    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div 
      className="h-48 bg-slate-800 relative overflow-hidden group cursor-pointer"
      onClick={() => onExpand(imageList, currentIndex, title)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={imageList[currentIndex]}
          alt={`${title} - image ${currentIndex + 1}`}
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </AnimatePresence>

      {/* Full-screen preview hint overlay */}
      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 px-3 py-1.5 text-xs font-semibold text-amber-400 backdrop-blur-md shadow-lg">
          <Maximize2 className="h-3.5 w-3.5" /> Expand Preview
        </span>
      </div>

      {/* Carousel dots indicator */}
      {imageList.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-2 py-1 rounded-full z-10">
          {imageList.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function UavSection() {
  // Modal state for full-screen image preview lightbox
  const [activeLightbox, setActiveLightbox] = useState(null);

  const openLightbox = (images, index, title) => {
    setActiveLightbox({ images, index, title });
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
  };

  const nextLightboxImage = () => {
    if (!activeLightbox) return;
    setActiveLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  };

  const prevLightboxImage = () => {
    if (!activeLightbox) return;
    setActiveLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <section id="uav-ops" className="bg-slate-950 py-20 font-sans text-slate-100">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            <Radio className="h-3.5 w-3.5 animate-pulse" /> UAV Operations & GIS
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Aerial Reconnaissance & Flight Metrics
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Combining software engineering with licensed UAV piloting, thermal inspection, and spatial telemetry analytics.
          </p>
        </div>

        {/* Telemetry Stat Cards with CountUp */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-center backdrop-blur-md">
            <Clock className="h-6 w-6 text-amber-400 mx-auto mb-2" />
            <span className="text-2xl font-black text-white">
              <CountUp value={uavMetrics.totalFlightHours} />
            </span>
            <p className="text-xs text-slate-400 mt-1">Flight Hours</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-center backdrop-blur-md">
            <Navigation className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
            <span className="text-2xl font-black text-white">
              <CountUp value={uavMetrics.totalDistanceKm} /> km
            </span>
            <p className="text-xs text-slate-400 mt-1">Distance Mapped</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-center backdrop-blur-md">
            <Plane className="h-6 w-6 text-sky-400 mx-auto mb-2" />
            <span className="text-2xl font-black text-white">
              <CountUp value={uavMetrics.totalMissions} />
            </span>
            <p className="text-xs text-slate-400 mt-1">Missions Logged</p>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-center backdrop-blur-md">
            <ShieldCheck className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
            <span className="text-2xl font-black text-emerald-400">
              <CountUp value={uavMetrics.incidentRate} />
            </span>
            <p className="text-xs text-slate-400 mt-1">Incident / Crash Rate</p>
          </div>

        </div>

        {/* Mission Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uavMissions.map((mission, idx) => (
            <motion.div
              key={idx}
              className="rounded-3xl border border-white/10 bg-slate-900/90 overflow-hidden shadow-xl hover:border-amber-500/40 transition"
              whileHover={{ y: -4 }}
            >
              <div className="relative">
                {/* Auto-rotating Carousel Container */}
                <MissionImageCarousel 
                  images={mission.images || [mission.image]} 
                  title={mission.title}
                  onExpand={openLightbox}
                />

                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 px-3 py-1 rounded-full text-[10px] font-bold text-amber-400 pointer-events-none">
                  {Array.isArray(mission.aircraft) ? mission.aircraft.join(' • ') : mission.aircraft}
                </div>
                <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] text-slate-300 flex items-center gap-1 pointer-events-none">
                  <MapPin className="h-3 w-3 text-cyan-400" />
                  {mission.location}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                  <span>{mission.clientCategory}</span>
                  <span className="text-amber-400 font-bold">{mission.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{mission.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {mission.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {mission.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="rounded-md bg-slate-800 px-2 py-1 text-[10px] font-medium text-amber-200/80 border border-amber-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-screen Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 rounded-full bg-slate-900 border border-white/20 p-3 text-slate-200 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="h-6 w-6" />
            </button>

            <div 
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Expanded Image */}
              <motion.img
                key={activeLightbox.index}
                src={activeLightbox.images[activeLightbox.index]}
                alt={activeLightbox.title}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl border border-white/10 shadow-2xl object-contain"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              {/* Navigation Controls for Lightbox */}
              {activeLightbox.images.length > 1 && (
                <>
                  <button
                    onClick={prevLightboxImage}
                    className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/90 border border-white/20 p-3 text-slate-200 hover:text-white hover:border-amber-400 transition"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextLightboxImage}
                    className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/90 border border-white/20 p-3 text-slate-200 hover:text-white hover:border-amber-400 transition"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Lightbox Caption Header */}
              <div className="mt-4 text-center">
                <h4 className="text-base font-bold text-white">{activeLightbox.title}</h4>
                {activeLightbox.images.length > 1 && (
                  <p className="text-xs text-slate-400 mt-1">
                    Image {activeLightbox.index + 1} of {activeLightbox.images.length}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}