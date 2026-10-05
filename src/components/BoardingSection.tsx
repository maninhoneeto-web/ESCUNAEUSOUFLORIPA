import React from 'react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { MapPin, Navigation, Compass, MessageCircle, AlertCircle } from 'lucide-react';

export const BoardingSection: React.FC = () => {
  return (
    <section id="embarque" className="py-20 sm:py-24 bg-[#091526] relative border-y border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Ponto de Partida Oficial
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            ONDE EMBARCAR?
          </h2>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-4" />
        </div>

        {/* Content Box with Google Maps Space */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0D1E34] border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column: Address info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 text-xs font-semibold mb-4 border border-amber-400/20">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Cais de Embarque Náutico</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Local de Embarque da Escuna
              </h3>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-start gap-3 text-slate-200">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-mono text-base">
                      {COMPANY_INFO.boardingLocation}
                    </strong>
                    <span className="text-xs text-slate-400">
                      Ponto central de acesso náutico com fácil estacionamento e embarque acessível.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300 text-xs bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Apresente-se com pelo menos <strong>30 minutos de antecedência</strong> do horário agendado para realização do check-in e orientações da Capitania.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Florianópolis SC embarque escuna')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>COMO CHEGAR</span>
                </a>

                <a
                  href={getWhatsAppLink('Olá! Gostaria de receber a localização exata e orientações de chegada ao embarque da EU SOU FLORIPA.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>PEDIR ROTA NO WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Interactive Placeholder Area */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 flex flex-col items-center justify-center text-center p-6 group">
              {/* Styled Maritime Map Canvas Graphic */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#091526]/60 to-[#091526]" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-amber-400" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-1">
                  Espaço Integrado Google Maps
                </h4>
                <p className="text-xs text-slate-300 max-w-xs mb-4">
                  {COMPANY_INFO.boardingLocation}
                </p>
                <span className="text-[11px] font-mono text-amber-300/80 bg-slate-950/80 px-3 py-1 rounded-md border border-slate-800">
                  Coordenadas oficiais enviadas após a reserva
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
