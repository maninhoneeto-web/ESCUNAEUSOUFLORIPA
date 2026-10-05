import React, { useState, useRef, useEffect } from 'react';
import { COMPANY_INFO, IMAGES, getWhatsAppLink, TOURS } from '../data/content';
import { ChatMessage } from '../types';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  MessageCircle,
  Bot,
  Settings,
  CheckCircle,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export const SalesBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isSendingToN8n, setIsSendingToN8n] = useState(false);
  const [n8nWebhookUrl, setN8nWebhookUrl] = useState(() => {
    return localStorage.getItem('eu_sou_floripa_n8n_url') || COMPANY_INFO.n8nWebhookDefault;
  });
  const [showN8nSettings, setShowN8nSettings] = useState(false);
  const [webhookSentCount, setWebhookSentCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message flow
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          sender: 'bot',
          text: '🏴‍☠️ Ahoy! Bem-vindo à EU SOU FLORIPA!\n\nSou o assistente de vendas e reservas automatizado via n8n. Como posso te ajudar hoje?',
          options: [
            { label: '⛵ Conhecer os passeios', action: 'conhecer_passeios' },
            { label: '💰 Ver preços', action: 'ver_precos' },
            { label: '📅 Consultar disponibilidade', action: 'consultar_disponibilidade' },
            { label: '📍 Saber onde embarcar', action: 'saber_embarque' },
            { label: '📲 Falar com atendimento', action: 'falar_atendimento' },
          ],
        },
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Dispatch data to n8n webhook
  const sendToN8nWebhook = async (payload: Record<string, unknown>) => {
    if (!n8nWebhookUrl) return;
    setIsSendingToN8n(true);
    try {
      await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          source: 'site_eu_sou_floripa',
          timestamp: new Date().toISOString(),
        }),
      });
      setWebhookSentCount((prev) => prev + 1);
    } catch {
      // Graceful offline or CORS fallback: local simulation continues uninterrupted
    } finally {
      setIsSendingToN8n(false);
    }
  };

  const handleOptionClick = (option: { label: string; action: string; value?: string }) => {
    // Append user selection
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: option.label,
    };

    let botResponse: ChatMessage;

    switch (option.action) {
      case 'conhecer_passeios':
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Navegamos a bordo de tradicionais escunas de madeira pela costa de Florianópolis! Nossos principais passeios são:\n\n1. PASSEIO DE ESCUNA (tradicional com parada para banho)\n2. PASSEIO COMPLETO (expedição ampliada pela baía)\n3. PASSEIO ESPECIAL (entardecer e grupos)\n\nQual deles você gostaria de saber mais?',
          options: [
            { label: '⛵ Passeio de Escuna Tradicional', action: 'selecionar_passeio', value: 'Passeio de Escuna' },
            { label: '🌊 Passeio Completo', action: 'selecionar_passeio', value: 'Passeio Completo' },
            { label: '🌅 Passeio Especial / Pôr do Sol', action: 'selecionar_passeio', value: 'Passeio Especial' },
            { label: '📲 Falar com a tripulação no WhatsApp', action: 'falar_atendimento' },
          ],
        };
        break;

      case 'selecionar_passeio':
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Excelente escolha! Para quantas pessoas seria o ${option.value || 'passeio'}?`,
          options: [
            { label: 'Casal (2 adultos)', action: 'selecionar_pessoas', value: 'Casal (2 pessoas)' },
            { label: 'Família com crianças (3 a 5 pessoas)', action: 'selecionar_pessoas', value: 'Família (3 a 5 pessoas)' },
            { label: 'Grupo de amigos (6+ pessoas)', action: 'selecionar_pessoas', value: 'Grupo (6+ pessoas)' },
          ],
        };
        break;

      case 'selecionar_pessoas':
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Anotado (${option.value})! E qual seria a data estimada da sua aventura em Floripa?`,
          options: [
            { label: 'Neste final de semana', action: 'concluir_fluxo', value: 'Final de semana' },
            { label: 'Durante a semana', action: 'concluir_fluxo', value: 'Dia de semana' },
            { label: 'Ainda estou planejando', action: 'concluir_fluxo', value: 'Data flexível' },
          ],
        };
        break;

      case 'ver_precos':
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Os valores são definidos conforme a modalidade do passeio, quantidade de passageiros (adultos e crianças) e época da temporada. Nossa equipe envia a tabela atualizada em instantes pelo WhatsApp!',
          ctaButton: {
            label: 'FALAR NO WHATSAPP',
            url: getWhatsAppLink('Olá! Gostaria de consultar a tabela de preços atualizada dos passeios da EU SOU FLORIPA.'),
          },
        };
        break;

      case 'consultar_disponibilidade':
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'As saídas das escunas dependem das condições marítimas e da capacidade da embarcação para garantir sua segurança e conforto. Para checar as vagas disponíveis em tempo real com a tripulação:',
          ctaButton: {
            label: 'FALAR NO WHATSAPP',
            url: getWhatsAppLink('Olá! Gostaria de consultar a disponibilidade de vagas para o passeio de escuna.'),
          },
        };
        break;

      case 'saber_embarque':
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `O ponto de embarque fica em Florianópolis – SC (${COMPANY_INFO.boardingLocation}). Nossa equipe envia o ponto exato no Google Maps e dicas de chegada pelo WhatsApp!`,
          ctaButton: {
            label: 'FALAR NO WHATSAPP',
            url: getWhatsAppLink('Olá! Gostaria de saber onde fica o ponto de embarque e como chegar.'),
          },
        };
        break;

      case 'concluir_fluxo':
      case 'falar_atendimento':
      default:
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Perfeito! Dados registrados na nossa automação n8n. Vou encaminhar você agora para nossa equipe oficial no WhatsApp para finalizar os detalhes!',
          ctaButton: {
            label: 'FALAR NO WHATSAPP',
            url: getWhatsAppLink(`Olá! Iniciei o atendimento pelo Bot de Vendas n8n do site e gostaria de confirmar minha reserva na EU SOU FLORIPA. (${option.value || 'Geral'})`),
          },
        };
        break;
    }

    sendToN8nWebhook({
      event: 'user_option_selected',
      option: option.label,
      action: option.action,
      value: option.value,
    });

    setMessages((prev) => [...prev, userMsg, botResponse]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const query = inputText.trim();
    setInputText('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    const botResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: `Recebi sua mensagem sobre "${query}". Nosso fluxo inteligente n8n já sincronizou seu atendimento! Clique no botão abaixo para concluir diretamente com nossos atendentes no WhatsApp:`,
      ctaButton: {
        label: 'FALAR NO WHATSAPP COM A TRIPULAÇÃO',
        url: getWhatsAppLink(`Olá! Escrevi no Bot de Vendas n8n: "${query}". Gostaria de atendimento para meu passeio na EU SOU FLORIPA!`),
      },
    };

    sendToN8nWebhook({
      event: 'user_custom_message',
      message: query,
    });

    setMessages((prev) => [...prev, userMsg, botResponse]);
  };

  const handleSaveN8nUrl = (url: string) => {
    setN8nWebhookUrl(url);
    localStorage.setItem('eu_sou_floripa_n8n_url', url);
    setShowN8nSettings(false);
  };

  return (
    <>
      {/* ========================================================
          DUAL FLOATING SYSTEM: WhatsApp Button + n8n Sales Bot
          ======================================================== */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* 1. Botão Flutuante do WhatsApp */}
        <div className="relative pointer-events-auto group">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer relative"
            aria-label="Falar no WhatsApp oficial da EU SOU FLORIPA"
          >
            {/* Ripple Pulse Rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
          </a>

          {/* Desktop Hover Tooltip */}
          <div className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-lg bg-slate-900/95 text-white border border-emerald-500/40 text-xs shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="font-bold text-[#25D366] block">WhatsApp Oficial</span>
            {COMPANY_INFO.phoneDisplay}
          </div>
        </div>

        {/* 2. Botão Flutuante do Bot de Vendas n8n */}
        <div className="relative pointer-events-auto group">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setHasInteracted(true);
            }}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 shadow-[0_4px_20px_rgba(212,175,55,0.45)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer border-2 border-slate-950 relative"
            aria-label="Abrir Bot de Vendas n8n"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <>
                <Bot className="w-7 h-7" />
                {/* Small n8n badge pill */}
                <span className="absolute -top-1.5 -left-1 px-1.5 py-0.5 rounded-full bg-slate-950 text-amber-300 font-mono text-[9px] font-black tracking-tight border border-amber-400/80 shadow">
                  n8n
                </span>
                {/* Online indicator */}
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950 animate-pulse" />
              </>
            )}
          </button>

          {/* Initial floating hint on desktop if not opened */}
          {!isOpen && !hasInteracted && (
            <div className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 w-52 p-2.5 rounded-xl bg-slate-900/95 text-white border border-amber-500/40 text-xs shadow-2xl text-left pointer-events-none">
              <span className="font-bold text-amber-300 flex items-center gap-1 mb-0.5">
                <Sparkles className="w-3.5 h-3.5" /> Bot de Vendas n8n
              </span>
              Descubra o passeio ideal para você em segundos!
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          Interactive n8n Chat Window Modal
          ======================================================== */}
      {isOpen && (
        <div className="fixed bottom-24 sm:bottom-20 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[410px] max-h-[580px] h-[540px] rounded-2xl bg-[#091526] border border-amber-500/40 shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Bot Header */}
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#0C1E34] via-[#0D2440] to-[#0A1628] border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400/60 shadow bg-[#070F1E] shrink-0">
                <img
                  src={IMAGES.logo}
                  alt="Logo EU SOU FLORIPA"
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
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-display text-sm font-bold text-white leading-tight">
                    EU SOU FLORIPA
                  </h4>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                    Bot n8n
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                    Fluxo Ativo
                  </span>
                  {webhookSentCount > 0 && (
                    <span className="text-[9px] text-slate-400 font-mono">
                      · {webhookSentCount} disparos
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowN8nSettings(!showN8nSettings)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-slate-800 transition-colors cursor-pointer"
                title="Configurar Webhook n8n"
                aria-label="Configurar Webhook n8n"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Minimizar atendimento"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* n8n Settings Bar (toggleable) */}
          {showN8nSettings && (
            <div className="p-3 bg-[#081220] border-b border-amber-500/20 text-xs text-slate-300 animate-fade-in">
              <div className="font-semibold text-amber-300 mb-1 flex items-center justify-between">
                <span>Webhook de Automação n8n:</span>
                <span className="text-[10px] text-slate-400">Ativo</span>
              </div>
              <input
                type="url"
                value={n8nWebhookUrl}
                onChange={(e) => setN8nWebhookUrl(e.target.value)}
                placeholder="https://seu-n8n.com/webhook/..."
                className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400 mb-2 font-mono"
              />
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400">
                  Os eventos de leads e chat são enviados para este webhook.
                </span>
                <button
                  onClick={() => handleSaveN8nUrl(n8nWebhookUrl)}
                  className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold text-[11px]"
                >
                  Salvar
                </button>
              </div>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#070F1E]/85">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-amber-400 text-slate-950 font-semibold rounded-tr-none'
                      : 'bg-[#0E2038] text-slate-200 border border-slate-700/60 rounded-tl-none font-normal'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Option Buttons */}
                {msg.options && (
                  <div className="mt-2.5 flex flex-col gap-1.5 w-full max-w-[95%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className="text-left text-xs px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-amber-400/20 text-slate-200 hover:text-amber-300 border border-slate-700/80 hover:border-amber-400/50 transition-all cursor-pointer font-medium flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                )}

                {/* WhatsApp Hand-off CTA button */}
                {msg.ctaButton && (
                  <div className="mt-3 w-full max-w-[90%]">
                    <a
                      href={msg.ctaButton.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-emerald-950/40"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{msg.ctaButton.label}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* User Text Input Area (n8n powered conversational prompt) */}
          <form
            onSubmit={handleSendMessage}
            className="p-2.5 bg-[#091526] border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite sua dúvida ou mensagem..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Footer */}
          <div className="px-3 py-2 bg-[#070F1E] border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1 font-mono text-emerald-400">
              <CheckCircle className="w-3 h-3" /> Integrado ao n8n
            </span>
            <span>WhatsApp: <strong className="text-amber-300 font-mono">{COMPANY_INFO.phoneDisplay}</strong></span>
          </div>
        </div>
      )}
    </>
  );
};
