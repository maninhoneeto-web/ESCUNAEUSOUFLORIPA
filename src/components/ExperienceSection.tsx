import React from 'react';
import { EXPERIENCE_BLOCKS } from '../data/content';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 sm:py-24 bg-[#070F1E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            A Essência Náutica de Florianópolis
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            MAIS QUE UM PASSEIO.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-cyan-300">
              UMA EXPERIÊNCIA EM FLORIPA.
            </span>
          </h2>
          <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Florianópolis fica ainda mais bonita quando vista do mar. Embarque, relaxe e descubra paisagens que tornam a Ilha um dos destinos mais especiais do Brasil.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-6" />
        </div>

        {/* 6 Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERIENCE_BLOCKS.map((block, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#0D1C30]/80 border border-slate-800 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col items-start group"
            >
              <div className="text-3xl sm:text-4xl mb-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 group-hover:scale-110 transition-transform duration-300">
                {block.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {block.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
