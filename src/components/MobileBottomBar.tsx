import React from 'react';
import { COMPANY_INFO, IMAGES, getWhatsAppLink } from '../data/content';
import { MessageCircle } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Reserva rápida mobile"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#070F1E]/95 backdrop-blur-md border-t border-amber-500/25 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3 max-h-16"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400/50 shrink-0 bg-[#070F1E] shadow">
          <img
            src={IMAGES.logo}
            alt="EU SOU FLORIPA"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold leading-tight">
            EU SOU FLORIPA
          </span>
          <span className="text-[10px] font-mono text-slate-300">
            {COMPANY_INFO.phoneDisplay}
          </span>
        </div>
      </div>


      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 max-w-[240px] py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950/40 whitespace-nowrap active:scale-95"
      >
        <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
        <span>RESERVAR PELO WHATSAPP</span>
      </a>
    </aside>
  );
};
