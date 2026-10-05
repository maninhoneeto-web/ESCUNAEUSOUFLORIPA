import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { ToursSection } from './components/ToursSection';
import { PricingSection } from './components/PricingSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ItinerarySection } from './components/ItinerarySection';
import { GallerySection } from './components/GallerySection';
import { VideoSection } from './components/VideoSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BoardingSection } from './components/BoardingSection';
import { ReservationSection } from './components/ReservationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { SalesBot } from './components/SalesBot';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedTourForBooking, setSelectedTourForBooking] = useState('PASSEIO DE ESCUNA');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTourForReservation = (tourName: string) => {
    setSelectedTourForBooking(tourName);
    scrollToSection('reservas');
  };

  return (
    <div className="min-h-screen bg-[#070F1E] text-slate-100 flex flex-col font-sans selection:bg-[#0284C7] selection:text-white">
      {/* Fixed Top Bar Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenBookingModal={() => scrollToSection('reservas')}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 1. Hero Section (Primeira Tela) */}
        <Hero
          onReserveClick={() => scrollToSection('reservas')}
          onExploreToursClick={() => scrollToSection('passeios')}
        />

        {/* 2. Destaques (SEU PRÓXIMO PASSEIO COMEÇA AQUI) */}
        <Highlights />

        {/* 3. Passeios (ESCOLHA SUA AVENTURA) */}
        <ToursSection
          onSelectTourForReservation={handleSelectTourForReservation}
        />

        {/* 4. Preços Profissionais (Com campos editáveis e WhatsApp) */}
        <PricingSection />

        {/* 5. Experiência (MAIS QUE UM PASSEIO. UMA EXPERIÊNCIA EM FLORIPA.) */}
        <ExperienceSection />

        {/* 6. Roteiro (DESCUBRA FLORIPA PELO MAR - 01 ao 04) */}
        <ItinerarySection
          onReserveClick={() => scrollToSection('reservas')}
        />

        {/* 7. Galeria Visual Moderna com Lightbox */}
        <GallerySection />

        {/* 8. Vídeo Teaser (VEJA FLORIPA DE UM JEITO DIFERENTE) */}
        <VideoSection
          onReserveClick={() => scrollToSection('reservas')}
        />

        {/* 9. Por Que Viver Essa Experiência? */}
        <WhyChooseUs />

        {/* 10. Local de Embarque (ONDE EMBARCAR?) */}
        <BoardingSection />

        {/* 11. Seção de Conversão Final & Formulário de Reserva */}
        <ReservationSection
          preselectedTour={selectedTourForBooking}
        />

        {/* 12. Avaliações (QUEM VIVEU, RECOMENDA) */}
        <TestimonialsSection />

        {/* 13. FAQ (AINDA TEM DÚVIDAS?) */}
        <FaqSection />

        {/* 14. Blog & SEO (DICAS DE FLORIPA) */}
        <BlogSection />
      </main>

      {/* Interactive Sales & Reception Bot (Floating) */}
      <SalesBot />

      {/* Fixed Mobile Bottom Bar (<=15% viewport height) */}
      <MobileBottomBar />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
