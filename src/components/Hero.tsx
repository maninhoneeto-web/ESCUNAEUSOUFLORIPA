import React from 'react';
import { IMAGES, COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { Anchor, Compass, ChevronDown, MessageCircle, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
  onExploreToursClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onReserveClick,
  onExploreToursClick,
}) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Fallback and Measured Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Escuna de madeira navegando nas águas cristalinas de Florianópolis"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured contrast scrim: dark navy + subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070F1E]/90 via-[#070F1E]/75 to-[#070F1E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,15,30,0.6)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Official Logo Crest in Hero */}
        <div className="mb-4 sm:mb-6 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-[0_0_35px_rgba(212,175,55,0.45)] bg-[#070F1E] mx-auto hover:scale-105 transition-transform duration-300">
              <img
                src={IMAGES.logo}
                alt="Logo Oficial EU SOU FLORIPA"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/assets/images/logo.jpg') {
                    target.src = '/assets/images/logo.jpg';
                  }
                }}
                className="w-full h-full object-cover"
              />

            </div>
          </div>
        </div>

        {/* Top Tagline */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-400 uppercase mb-4 drop-shadow">
          <Compass className="w-4 h-4 text-amber-400" />
          <span>EU SOU FLORIPA · PASSEIOS DE ESCUNA EM FLORIANÓPOLIS</span>
          <Anchor className="w-4 h-4 text-amber-400" />
        </div>


        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl max-w-3xl text-balance">
          Viva Florianópolis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-amber-300 to-amber-400">pelo mar.</span>
        </h1>

        {/* Complement Text */}
        <p className="text-base sm:text-xl text-slate-200/90 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 text-balance">
          Embarque em uma experiência inesquecível e descubra as belezas de Floripa de um jeito diferente.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none mb-8">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-950 font-bold text-sm sm:text-base bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/25 cursor-pointer whitespace-nowrap"
          >
            RESERVE AGORA
          </button>

          <button
            onClick={onExploreToursClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold text-sm sm:text-base bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/50 backdrop-blur-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            CONHEÇA OS PASSEIOS
          </button>
        </div>

        {/* Dedicated WhatsApp Conversion Button */}
        <div className="w-full max-w-md">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg text-emerald-300 hover:text-emerald-200 bg-emerald-950/60 hover:bg-emerald-950/80 border border-emerald-500/40 text-xs sm:text-sm font-semibold transition-all hover:shadow-lg hover:shadow-emerald-950/50 group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>RESERVAR PELO WHATSAPP: <strong className="font-mono text-white">{COMPANY_INFO.phoneDisplay}</strong></span>
          </a>
        </div>

        {/* Clean trust metadata (unboxed, typographic separators) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Embarcação Homologada
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Tripulação Habilitada</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Florianópolis – SC</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Famílias, Casais e Grupos</span>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={onExploreToursClick}
        aria-label="Rolar para baixo"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-amber-400 transition-colors p-2 cursor-pointer animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};
