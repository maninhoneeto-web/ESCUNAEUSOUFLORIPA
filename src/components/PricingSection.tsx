import React from 'react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { Tag, Sparkles, Calendar, MessageCircle, HelpCircle } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A1424] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Transparência & Condições Comerciais
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            TABELA DE TARIFAS & CONDIÇÕES
          </h2>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            Consulte nossa equipe para tarifas vigentes, reservas antecipadas e condições diferenciadas para grupos e eventos.
          </p>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-4" />
        </div>

        {/* Pricing Cards Grid (Strictly respecting prompt rule: NO INVENTED VALUES, fields with [PREENCHER] and WhatsApp) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Tarifário Regular */}
          <div className="rounded-2xl bg-[#0D1C30] border border-slate-700/80 p-7 flex flex-col justify-between hover:border-amber-400/40 transition-colors shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
                  Tarifário Padrão
                </span>
                <span className="text-xs text-amber-400/90 font-mono">Temporada 2026</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Ingresso Individual
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Adulto:</span>
                  <span className="font-mono font-semibold text-amber-300">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Criança:</span>
                  <span className="font-mono font-semibold text-amber-300">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Duração:</span>
                  <span className="font-mono font-semibold text-slate-200">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Horário:</span>
                  <span className="font-mono font-semibold text-slate-200">[PREENCHER]</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <a
                href={getWhatsAppLink('Olá! Gostaria de consultar os valores do Ingresso Individual da EU SOU FLORIPA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>CONSULTAR PELO WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Card 2: Valor Antecipado / Promoção (Featured) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#112744] to-[#0A1A2E] border-2 border-amber-400/70 p-7 flex flex-col justify-between shadow-xl relative scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider shadow">
              PROMOÇÃO & VALOR ANTECIPADO
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold tracking-wider uppercase text-amber-300">
                  Reserva Antecipada
                </span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Condição Especial
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Garanta sua vaga com antecedência e obtenha condições exclusivas para grupos ou famílias.
              </p>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                  <span className="text-slate-300">Adulto Antecipado:</span>
                  <span className="font-mono font-semibold text-amber-300">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                  <span className="text-slate-300">Criança Antecipada:</span>
                  <span className="font-mono font-semibold text-amber-300">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                  <span className="text-slate-300">Desconto por Grupo:</span>
                  <span className="font-mono font-semibold text-emerald-400">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
                  <span className="text-slate-300">Validade:</span>
                  <span className="font-mono text-slate-300">[PREENCHER]</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/60">
              <a
                href={getWhatsAppLink('Olá! Quero saber as condições especiais e valores para Reserva Antecipada na EU SOU FLORIPA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CONSULTAR PELO WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Card 3: Oferta Especial / Grupos */}
          <div className="rounded-2xl bg-[#0D1C30] border border-slate-700/80 p-7 flex flex-col justify-between hover:border-amber-400/40 transition-colors shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
                  OFERTA ESPECIAL
                </span>
                <Tag className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Grupos & Fretamentos
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Pacotes corporativos, aniversários, confraternizações e saídas exclusivas da escuna.
              </p>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Mínimo de Pessoas:</span>
                  <span className="font-mono font-semibold text-slate-200">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Fretamento Exclusivo:</span>
                  <span className="font-mono font-semibold text-amber-300">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Roteiro Personalizado:</span>
                  <span className="font-mono font-semibold text-slate-200">[PREENCHER]</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-300">Serviço de Bordo:</span>
                  <span className="font-mono text-slate-300">[PREENCHER]</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <a
                href={getWhatsAppLink('Olá! Gostaria de uma cotação para Grupos / Fretamento de Escuna na EU SOU FLORIPA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>CONSULTAR PELO WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Informative Note */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-center gap-2 text-center max-w-2xl mx-auto">
          <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Os valores finais dependem da data, número de passageiros e categoria do passeio. Consulte nossa equipe diretamente pelo WhatsApp <strong>{COMPANY_INFO.phoneDisplay}</strong>.
          </span>
        </div>
      </div>
    </section>
  );
};
