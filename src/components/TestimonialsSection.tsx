import React from 'react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { Star, MessageCircle, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Respect Rule 18: NÃO INVENTAR avaliações. Espaço reservado para avaliações reais.
  const slots = [
    {
      stars: 5,
      quote: '[DEPOIMENTO REAL]',
      author: '[NOME DO CLIENTE]',
      origin: 'Turista em Florianópolis',
    },
    {
      stars: 5,
      quote: '[DEPOIMENTO REAL]',
      author: '[NOME DO CLIENTE]',
      origin: 'Passeio em Família',
    },
    {
      stars: 5,
      quote: '[DEPOIMENTO REAL]',
      author: '[NOME DO CLIENTE]',
      origin: 'Grupo de Amigos',
    },
  ];

  return (
    <section className="py-20 bg-[#091526] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Experiências Compartilhadas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            QUEM VIVEU, RECOMENDA
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            A opinião espontânea de quem embarcou em nossas escunas e conheceu Florianópolis sob uma nova perspectiva.
          </p>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-4" />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slots.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-[#0D1C30] border border-slate-700/80 flex flex-col justify-between shadow-lg relative group hover:border-amber-400/40 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-400/30 mb-3" />
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-base font-serif italic text-slate-200 leading-relaxed mb-6 font-medium">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-white">
                    — {item.author}
                  </h4>
                  <span className="text-[11px] text-slate-400">{item.origin}</span>
                </div>
                <span className="text-[10px] text-amber-400/80 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to submit review via WhatsApp */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppLink('Olá equipe EU SOU FLORIPA! Gostaria de deixar meu depoimento e avaliação sobre o passeio!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Já fez o passeio? Envie seu depoimento pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
