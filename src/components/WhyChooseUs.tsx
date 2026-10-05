import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#070F1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Diferenciais EU SOU FLORIPA
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            POR QUE VIVER ESSA EXPERIÊNCIA?
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Segurança, tradição náutica e o carinho em receber cada visitante para criar memórias inesquecíveis no mar de Floripa.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-4" />
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#0D1B2E] border border-slate-800 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col items-start group"
            >
              <div className="text-3xl mb-4 p-3 rounded-xl bg-slate-900 border border-slate-700/60 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
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
