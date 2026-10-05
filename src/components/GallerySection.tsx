import React, { useState } from 'react';
import { GALLERY_ITEMS, IMAGES } from '../data/content';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todas');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const filters = [
    { id: 'todas', label: 'Todas as Fotos' },
    { id: 'A Escuna', label: 'A Escuna' },
    { id: 'A Bordo', label: 'A Bordo' },
    { id: 'Paisagens da Ilha', label: 'Paisagens' },
    { id: 'Pôr do Sol', label: 'Pôr do Sol' },
  ];

  const filteredItems =
    activeFilter === 'todas'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 sm:py-24 bg-[#070F1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Registros Náuticos & Paisagens
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            GALERIA VISUAL
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Vislumbre a atmosfera que espera por você a bordo das nossas escunas em Florianópolis.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage({ src: item.src, title: item.title })}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-amber-400/50 shadow-xl transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-300 mb-1">
                  {item.category}
                </span>
                <p className="text-sm font-semibold text-white leading-snug">
                  {item.title}
                </p>
              </div>

              <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveFilter('todas')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-semibold text-xs sm:text-sm border border-amber-400/30 hover:border-amber-400 transition-colors shadow cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" />
            <span>VER TODAS AS FOTOS</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg cursor-pointer"
              aria-label="Fechar foto"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-slate-800"
            />
            <div className="mt-4 text-center text-sm font-medium text-slate-200">
              {lightboxImage.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
