import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { Phone, MessageCircle, Mail, MapPin, X, Shield, FileText, RefreshCw } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const quickLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'passeios', label: 'Passeios' },
    { id: 'roteiros', label: 'Roteiros' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'experiencia', label: 'Sobre' },
    { id: 'faq', label: 'FAQ' },
    { id: 'reservas', label: 'Contato' },
  ];

  const socialChannels = [
    { name: 'Instagram', link: COMPANY_INFO.socialLinks.instagram, placeholder: '[INSERIR LINK INSTAGRAM]' },
    { name: 'Facebook', link: COMPANY_INFO.socialLinks.facebook, placeholder: '[INSERIR LINK FACEBOOK]' },
    { name: 'TikTok', link: COMPANY_INFO.socialLinks.tiktok, placeholder: '[INSERIR LINK TIKTOK]' },
    { name: 'YouTube', link: COMPANY_INFO.socialLinks.youtube, placeholder: '[INSERIR LINK YOUTUBE]' },
  ];

  return (
    <footer className="bg-[#050B16] border-t border-amber-500/20 text-slate-400 pt-16 pb-24 lg:pb-12 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <BrandLogo size="lg" />
            <p className="text-slate-300 leading-relaxed text-xs">
              Passeios de escuna, barco temático e experiências náuticas inesquecíveis em Florianópolis – Santa Catarina. A melhor forma de contemplar a Ilha da Magia.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-semibold text-amber-300 block mb-1">
                Atendimento Oficial:
              </span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-mono text-sm hover:text-amber-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-amber-300 transition-colors cursor-pointer text-xs"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Redes Sociais [INSERIR LINKS] */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Redes Sociais
            </h4>
            <p className="text-slate-400 text-xs mb-3">
              Acompanhe nossos dias de navegação e fotos dos passageiros:
            </p>
            <ul className="space-y-2">
              {socialChannels.map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  <a
                    href={item.link}
                    className="text-slate-300 hover:text-amber-400 transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.placeholder}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Local de Embarque & Marketing Analytics */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Localização & Embarque
            </h4>
            <div className="space-y-2 text-slate-300 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.boardingLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
              </div>
            </div>

            {/* Analytics Slots Indicator (Ready for production) */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300 block">
                Tags de Marketing Prontas:
              </span>
              <span>Google Analytics · Google Search Console · Meta Pixel · GTM</span>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-center sm:text-left">
          <div>
            © 2026 EU SOU FLORIPA. Todos os direitos reservados.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <button
              onClick={() => setActiveLegalModal('privacidade')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveLegalModal('termos')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveLegalModal('cancelamento')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Política de Cancelamento
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#0A1628] border border-amber-500/40 rounded-2xl p-6 sm:p-8 text-slate-300 text-sm">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {activeLegalModal === 'privacidade' && (
              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <Shield className="w-5 h-5" />
                  <h3 className="font-display text-xl font-bold text-white">
                    Política de Privacidade
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-4">EU SOU FLORIPA · Versão 2026</p>
                <div className="space-y-3 leading-relaxed text-xs sm:text-sm">
                  <p>
                    A <strong>EU SOU FLORIPA</strong> valoriza e respeita a privacidade de todos os clientes e visitantes. As informações fornecidas através do nosso formulário de reserva ou WhatsApp (nome, telefone e preferências de passeio) são utilizadas estritamente para o processamento de reservas, orientações sobre o embarque e contato direto de atendimento.
                  </p>
                  <p>
                    Não comercializamos, alugamos ou repassamos seus dados pessoais a terceiros. Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você tem direito de solicitar a exclusão de seus dados de nossa base de contatos a qualquer momento entrando em contato pelo WhatsApp oficial.
                  </p>
                </div>
              </div>
            )}

            {activeLegalModal === 'termos' && (
              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <FileText className="w-5 h-5" />
                  <h3 className="font-display text-xl font-bold text-white">
                    Termos de Uso
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-4">EU SOU FLORIPA · Versão 2026</p>
                <div className="space-y-3 leading-relaxed text-xs sm:text-sm">
                  <p>
                    O acesso a este site e a contratação dos passeios de escuna da <strong>EU SOU FLORIPA</strong> estão sujeitos às normas vigentes da Autoridade Marítima (Marinha do Brasil) e às instruções transmitidas pelo Comandante e pela tripulação a bordo.
                  </p>
                  <p>
                    Para garantir a segurança de todos os passageiros, é obrigatório seguir as normas de conduta durante a navegação e o uso dos equipamentos de segurança homologados quando determinado pelo Comandante.
                  </p>
                </div>
              </div>
            )}

            {activeLegalModal === 'cancelamento' && (
              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <RefreshCw className="w-5 h-5" />
                  <h3 className="font-display text-xl font-bold text-white">
                    Política de Cancelamento & Remarcação
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-4">EU SOU FLORIPA · Versão 2026</p>
                <div className="space-y-3 leading-relaxed text-xs sm:text-sm">
                  <p>
                    Nossa prioridade inegociável é a segurança de cada passageiro. Em caso de condições meteorológicas adversas (ventos fortes, tempestades ou proibição de saída emitida pela Capitania dos Portos), o passeio poderá ser remarcado para outra data conveniente ou ter seu valor integralmente reembolsado.
                  </p>
                  <p>
                    Cancelamentos solicitados pelo passageiro com antecedência mínima informada no ato da confirmação de reserva garantem a opção de crédito para nova data ou reembolso conforme as condições comerciais acordadas via WhatsApp.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
