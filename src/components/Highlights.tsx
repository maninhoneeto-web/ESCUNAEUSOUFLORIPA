import React from 'react';
import { HIGHLIGHTS_DATA } from '../data/content';

export const Highlights: React.FC = () => {
  return (
    <section className="relative z-10 py-16 sm:py-20 bg-[#0B1728] border-y border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            A Magia da Ilha Navegada
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            SEU PRÓXIMO PASSEIO COMEÇA AQUI
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 mx-auto mt-4" />
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HIGHLIGHTS_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 rounded-xl bg-[#0F213A]/70 border border-slate-700/60 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col items-start"
            >
              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-4 p-3 rounded-lg bg-slate-900/60 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                {item.iconText}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-white tracking-wide mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
