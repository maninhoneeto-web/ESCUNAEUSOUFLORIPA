import React, { useState } from 'react';
import { FAQ_ITEMS, COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#070F1E] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Perguntas Frequentes
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            AINDA TEM DÚVIDAS?
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Reunimos as principais respostas para que sua experiência a bordo da EU SOU FLORIPA seja tranquila e memorável.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-14">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#0D1C30] border border-slate-800 hover:border-amber-400/40 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-white tracking-wide">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-400/20 text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fade-in font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dedicated WhatsApp Escalation Card as required */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0C223A] to-[#0A1828] border border-amber-500/30 p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="font-display text-lg font-bold text-white mb-1 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              Sua dúvida não foi respondida acima?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nossa equipe está online no WhatsApp oficial pronta para atender você e seu grupo com agilidade.
            </p>
          </div>
          <a
            href={getWhatsAppLink('Olá! Tenho uma dúvida sobre os passeios de escuna da EU SOU FLORIPA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>FALAR NO WHATSAPP: {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
