import React, { useState } from 'react';
import { IMAGES, COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { Play, Pause, Volume2, VolumeX, Sparkles, MessageCircle } from 'lucide-react';

interface VideoSectionProps {
  onReserveClick: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onReserveClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-20 sm:py-24 bg-[#091629] relative overflow-hidden border-y border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Experiência Audiovisual
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            VEJA FLORIPA DE UM JEITO DIFERENTE
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Dê o play e descubra como é viver essa experiência a bordo.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-4" />
        </div>

        {/* Video Player Showcase Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/80 bg-slate-950 aspect-video group">
          {/* Video Poster Image / Reel Visual */}
          <img
            src={IMAGES.hero}
            alt="Teaser da experiência da escuna EU SOU FLORIPA"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-110 brightness-90' : 'scale-100 brightness-75'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {!isPlaying ? (
              <button
                onClick={() => setIsPlaying(true)}
                className="group/btn relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-400 to-amber-300 flex items-center justify-center text-slate-950 shadow-2xl shadow-amber-400/40 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                aria-label="Dar play no vídeo"
              >
                <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-25" />
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
              </button>
            ) : (
              <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-amber-400/40 text-center max-w-md animate-fade-in">
                <p className="text-sm font-semibold text-amber-300 mb-2 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Prévia Cinematográfica A Bordo
                </p>
                <p className="text-xs text-slate-200 mb-4">
                  Vídeo institucional da temporada 2026. Acompanhe a navegação, as paradas para banho e a alegria dos nossos passageiros.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 flex items-center gap-1.5"
                  >
                    <Pause className="w-3.5 h-3.5" /> Pausar
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 flex items-center gap-1.5"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isMuted ? 'Ativar Som' : 'Mudo'}</span>
                  </button>
                </div>
              </div>
            )}

            {!isPlaying && (
              <p className="mt-4 text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">
                Clique para assistir ao vídeo oficial da EU SOU FLORIPA
              </p>
            )}
          </div>

          {/* Bottom Bar inside video player */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-slate-300">
            <span className="font-display font-bold text-amber-300">
              EU SOU FLORIPA · Temporada 2026
            </span>
            <span className="font-mono text-slate-400">4K Ultra HD</span>
          </div>
        </div>

        {/* CTA Button as specified */}
        <div className="mt-12 text-center">
          <button
            onClick={onReserveClick}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-sm sm:text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/25 cursor-pointer whitespace-nowrap"
          >
            QUERO VIVER ESSA EXPERIÊNCIA
          </button>
        </div>
      </div>
    </section>
  );
};
