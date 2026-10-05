import React, { useState } from 'react';
import { TOURS, COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { Tour } from '../types';
import { Clock, MapPin, CheckCircle2, Info, MessageCircle, X, ChevronRight, Sparkles } from 'lucide-react';

interface ToursSectionProps {
  onSelectTourForReservation: (tourName: string) => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({
  onSelectTourForReservation,
}) => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const handleOpenDetail = (tour: Tour) => {
    setSelectedTour(tour);
  };

  const handleCloseDetail = () => {
    setSelectedTour(null);
  };

  return (
    <section id="passeios" className="py-20 sm:py-24 bg-[#070F1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Roteiros Náuticos Selecionados
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            ESCOLHA SUA AVENTURA
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Embarcações tradicionais de madeira com estrutura completa, conforto e tripulação experiente em Florianópolis.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-4" />
        </div>

        {/* Big Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <div
              key={tour.id}
              className="group flex flex-col rounded-2xl bg-[#0D1B2E] border border-slate-800 hover:border-amber-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Image & Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={tour.image}
                  alt={tour.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-transparent to-black/30" />
                
                {tour.badge && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-400 text-slate-950 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tour.badge}</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                  <span className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700/60">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Duração: {tour.duration}</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700/60">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Florianópolis</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors mb-2">
                    {tour.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mb-3">
                    {tour.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {tour.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Principais Atrações:
                    </p>
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="text-xs text-slate-400">Investimento:</div>
                    <div className="text-right">
                      <span className="text-base sm:text-lg font-bold text-amber-300 font-display">
                        {tour.priceAdult}
                      </span>
                      <div className="text-[11px] text-slate-400">Valores sob consulta</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => handleOpenDetail(tour)}
                      className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-amber-400/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>VER PASSEIO</span>
                    </button>

                    <button
                      onClick={() => onSelectTourForReservation(tour.name)}
                      className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
                    >
                      RESERVAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Callout immediately after tours as requested in prompt */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-[#0C233C] via-[#0E2A47] to-[#0A1B2E] border border-cyan-500/30 p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
              Dúvidas sobre o melhor passeio para o seu grupo?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossa equipe está disponível para orientar sobre disponibilidade, horários e condições especiais.
            </p>
          </div>
          <a
            href={getWhatsAppLink('Olá! Gostaria de consultar os valores e saídas dos passeios da EU SOU FLORIPA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONSULTAR PELO WHATSAPP</span>
          </a>
        </div>
      </div>

      {/* Tour Detail Modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0A1628] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseDetail}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tour Title */}
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Detalhes da Experiência
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedTour.name}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {selectedTour.longDescription}
              </p>
            </div>

            {/* Operational Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 p-4 rounded-xl bg-[#081220] border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Duração:</span>
                <strong className="text-white font-mono">{selectedTour.duration}</strong>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Horário:</span>
                <strong className="text-white font-mono">{selectedTour.departureTime}</strong>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 block mb-0.5">Local:</span>
                <strong className="text-white">{selectedTour.departureLocation}</strong>
              </div>
            </div>

            {/* What is Included */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                O Que Está Incluso:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                {selectedTour.included.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Recomendações para o Passeio:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {selectedTour.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-amber-400">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-left w-full sm:w-auto">
                <div className="text-xs text-slate-400">Valores Oficiais:</div>
                <div className="text-base font-bold text-amber-300">{selectedTour.priceAdult}</div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={getWhatsAppLink(`Olá! Quero saber valores e reservar o ${selectedTour.name} da EU SOU FLORIPA.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CONSULTAR NO WHATSAPP</span>
                </a>

                <button
                  onClick={() => {
                    handleCloseDetail();
                    onSelectTourForReservation(selectedTour.name);
                  }}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm hover:brightness-110 transition-all"
                >
                  RESERVAR AGORA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
