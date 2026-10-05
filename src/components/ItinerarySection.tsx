import React from 'react';
import { ITINERARY_STEPS, COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { Compass, MessageCircle, ArrowRight } from 'lucide-react';

interface ItinerarySectionProps {
  onReserveClick: () => void;
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ onReserveClick }) => {
  return (
    <section id="roteiros" className="py-20 sm:py-24 bg-[#091526] relative border-y border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            A Jornada a Bordo
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            DESCUBRA FLORIPA PELO MAR
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Uma expedição planejada do início ao fim para proporcionar conforto, paisagens inesquecíveis e momentos de pura descontração.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-4" />
        </div>

        {/* 4 Steps Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {ITINERARY_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#0C1E34] border border-slate-700/80 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Step Number in Nautical Gold */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl sm:text-4xl font-black text-amber-400/90 font-mono tracking-wider">
                    {item.step}
                  </span>
                  <Compass className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>

                {/* Step Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {/* Primary Short Text */}
                <p className="text-sm font-medium text-amber-200/90 mb-3">
                  {item.description}
                </p>

                {/* Expanded Details */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>

              {index < ITINERARY_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-amber-400/50">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conversion action after itinerary */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            RESERVE AGORA O SEU PASSEIO
          </button>
          <a
            href={getWhatsAppLink('Olá! Gostaria de mais detalhes sobre o roteiro dos passeios da EU SOU FLORIPA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>FALAR NO WHATSAPP COM A EQUIPE</span>
          </a>
        </div>
      </div>
    </section>
  );
};
