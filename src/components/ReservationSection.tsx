import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, getWhatsAppLink, TOURS } from '../data/content';
import { ReservationFormData } from '../types';
import { MessageCircle, Send, CheckCircle2, ShieldCheck, Users, Calendar } from 'lucide-react';

interface ReservationSectionProps {
  preselectedTour?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  preselectedTour = 'PASSEIO DE ESCUNA',
}) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    whatsapp: '',
    desiredDate: '',
    adultsCount: 2,
    childrenCount: 0,
    tourName: preselectedTour,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  useEffect(() => {
    if (preselectedTour) {
      setFormData((prev) => ({ ...prev, tourName: preselectedTour }));
    }
  }, [preselectedTour]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes('Count') ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage =
      `Olá equipe EU SOU FLORIPA! Gostaria de solicitar uma reserva:\n\n` +
      `👤 Nome: ${formData.name}\n` +
      `📱 WhatsApp: ${formData.whatsapp}\n` +
      `📅 Data desejada: ${formData.desiredDate || 'A definir'}\n` +
      `⛵ Passeio: ${formData.tourName}\n` +
      `👥 Adultos: ${formData.adultsCount}\n` +
      `👶 Crianças: ${formData.childrenCount}\n` +
      (formData.message ? `💬 Observação: ${formData.message}` : '');

    const generatedLink = getWhatsAppLink(formattedMessage);
    setWhatsAppUrl(generatedLink);
    setSubmitted(true);

    // Dispatch lead payload to n8n automation webhook
    try {
      const n8nUrl = localStorage.getItem('eu_sou_floripa_n8n_url') || COMPANY_INFO.n8nWebhookDefault;
      if (n8nUrl) {
        fetch(n8nUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'reservation_form_lead',
            ...formData,
            timestamp: new Date().toISOString(),
          }),
        }).catch(() => {});
      }
    } catch {
      // Offline or network error ignored
    }

    // Open WhatsApp directly
    window.open(generatedLink, '_blank');

  };

  return (
    <section id="reservas" className="py-20 sm:py-24 bg-[#070F1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Conversion Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Garanta Seu Lugar a Bordo
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            PRONTO PARA VIVER FLORIPA PELO MAR?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Escolha seu passeio, fale com nossa equipe e prepare-se para viver uma experiência inesquecível.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-4" />

          {/* Quick WhatsApp CTA Button right under header */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-emerald-950/50"
            >
              <MessageCircle className="w-5 h-5" />
              <span>RESERVAR PELO WHATSAPP: <strong className="font-mono">{COMPANY_INFO.phoneDisplay}</strong></span>
            </a>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-[#0D1C30] border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 text-center">
                Formulário de Solicitação de Reserva
              </h3>
              <p className="text-xs text-slate-400 text-center mb-6">
                Preencha os dados abaixo para receber atendimento prioritário da nossa equipe.
              </p>

              {/* Nome */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Seu WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="(DDD) 99999-9999"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors font-mono"
                />
              </div>

              {/* Passeio Desejado & Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Passeio Desejado *
                  </label>
                  <select
                    name="tourName"
                    value={formData.tourName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                  >
                    {TOURS.map((tour) => (
                      <option key={tour.id} value={tour.name} className="bg-slate-900 text-white">
                        {tour.name}
                      </option>
                    ))}
                    <option value="Fretamento Exclusivo / Grupos" className="bg-slate-900 text-white">
                      Fretamento Exclusivo / Grupos
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Data Desejada
                  </label>
                  <input
                    type="date"
                    name="desiredDate"
                    value={formData.desiredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Passageiros: Adultos e Crianças */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Quantidade de Adultos
                  </label>
                  <input
                    type="number"
                    name="adultsCount"
                    min="1"
                    max="100"
                    value={formData.adultsCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Quantidade de Crianças
                  </label>
                  <input
                    type="number"
                    name="childrenCount"
                    min="0"
                    max="100"
                    value={formData.childrenCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Mensagem Opcional */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Mensagem ou Dúvida (Opcional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Gostaria de comemorar um aniversário, tirar dúvidas sobre horários..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-amber-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-sm sm:text-base hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SOLICITAR RESERVA</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Seus dados são protegidos e enviados diretamente para nosso atendimento oficial.</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Solicitação Iniciada!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                Caso sua janela do WhatsApp não tenha aberto automaticamente, clique no botão abaixo para continuar sua reserva diretamente com a equipe da <strong>EU SOU FLORIPA</strong>.
              </p>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>CONTINUAR PELO WHATSAPP</span>
              </a>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Enviar outra solicitação
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
