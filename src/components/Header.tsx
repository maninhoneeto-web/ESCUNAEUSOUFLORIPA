import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection = 'inicio',
  onNavigate,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'passeios', label: 'Passeios' },
    { id: 'roteiros', label: 'Roteiros' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Dicas' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070F1E]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-[#070F1E]/90 via-[#070F1E]/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('inicio');
            }}
            className="group focus:outline-none"
            aria-label="EU SOU FLORIPA - Página Inicial"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors hover:text-amber-400 whitespace-nowrap cursor-pointer relative py-1 ${
                  activeSection === item.id
                    ? 'text-amber-400 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400'
                    : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-300 transition-colors mr-1"
              title="Ligue para nós"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  handleNavClick('reservas');
                }
              }}
              className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-400/40 hover:brightness-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              RESERVE AGORA
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 transition-colors focus:outline-none"
              aria-label="Abrir Menu de Navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#070F1E]/95 backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between border-b border-amber-500/30">
          <nav className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-amber-400 bg-amber-500/10 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="space-y-3 pt-6 border-t border-slate-800">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 text-center transition-colors shadow-lg shadow-emerald-900/30"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <div className="text-center text-xs text-slate-400">
              Atendimento oficial: {COMPANY_INFO.phoneDisplay}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
