import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhotoCarousel } from './components/PhotoCarousel';
import { Portfolio } from './components/Portfolio';
import { BeforeAfter } from './components/BeforeAfter';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StudioModal } from './components/StudioModal';
import { LightboxModal } from './components/LightboxModal';
import { PortfolioItem, PricingPlan } from './types';

export default function App() {
  const [isStudioModalOpen, setIsStudioModalOpen] = useState(false);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<PortfolioItem | null>(null);
  const [preselectedPlan, setPreselectedPlan] = useState<PricingPlan | null>(null);
  const [preselectedCategory, setPreselectedCategory] = useState<string | undefined>(undefined);

  const handleOpenStudioModal = (categoryOrPlanName?: string) => {
    if (categoryOrPlanName) {
      setPreselectedCategory(categoryOrPlanName);
    }
    setIsStudioModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setPreselectedPlan(plan);
    setIsStudioModalOpen(true);
  };

  const handleOpenLightbox = (item: PortfolioItem) => {
    setSelectedLightboxItem(item);
  };

  return (
    <div className="min-h-screen bg-[#080B0D] text-[#F7FBFC] selection:bg-[#72DDE3]/30 selection:text-[#F7FBFC] font-sans antialiased overflow-x-hidden relative">
      {/* Ambient LP Background Photo from ibb.co/JwJ202gH */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="https://i.ibb.co/hJzHhHwV/Man-sitting-at-desk-2-K-202609081500.jpg"
          alt="Executive Studio Atmosphere"
          className="w-full h-full object-cover object-center opacity-15 filter contrast-125 saturate-75"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://i.ibb.co/gLKwHwhJ/Man-sitting-at-desk-2-K-202609081500.jpg';
          }}
        />
        <div className="absolute inset-0 bg-[#080B0D]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B0D] via-transparent to-[#080B0D]" />
      </div>

      <div className="relative z-10">
        {/* 1. Ultra-Clean Fixed Header */}
        <Header onOpenStudioModal={() => handleOpenStudioModal()} />

        {/* 2. Cinematic Minimal Hero */}
        <Hero
          onOpenStudioModal={() => handleOpenStudioModal()}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 3. Real Photos Interactive Carousel */}
        <PhotoCarousel
          onOpenLightbox={handleOpenLightbox}
          onOpenStudioModal={handleOpenStudioModal}
        />

        {/* 4. Editorial Portfolio Gallery */}
        <Portfolio
          onOpenLightbox={handleOpenLightbox}
          onOpenStudioModal={handleOpenStudioModal}
        />

        {/* 4. Interactive Transformation (Before & After) */}
        <BeforeAfter onOpenStudioModal={() => handleOpenStudioModal()} />

        {/* 5. Minimal 4-Step Process */}
        <Process onOpenStudioModal={() => handleOpenStudioModal()} />

        {/* 6. Combos Studio Online LS */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 7. FAQ */}
        <FAQ />

        {/* 7. Minimalist Footer */}
        <Footer onOpenStudioModal={() => handleOpenStudioModal()} />
      </div>

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20fotos%20profissionais%20com%20IA%20e%20cria%C3%A7%C3%A3o%20de%20sites."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#151B1E]/95 hover:bg-[#1E272B] text-[#F7FBFC] border border-[#72DDE3]/40 hover:border-[#72DDE3] px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(114,221,227,0.2)] flex items-center gap-2.5 transition-all duration-300 group backdrop-blur-md hover:scale-105"
        aria-label="Atendimento no WhatsApp 77 98153-9584"
      >
        <div className="w-6 h-6 rounded-full bg-[#25D366] text-black flex items-center justify-center shrink-0 shadow-sm">
          <MessageCircle className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="text-left leading-tight hidden sm:block">
          <p className="text-[9px] text-[#AEBFC3] font-mono uppercase tracking-wider">Atendimento VIP</p>
          <p className="text-xs font-semibold text-[#72DDE3] group-hover:text-[#F7FBFC] font-mono">77 98153-9584</p>
        </div>
        <span className="sm:hidden text-xs font-semibold text-[#72DDE3] font-mono">77 98153-9584</span>
      </a>

      {/* Lightbox Modal */}
      {selectedLightboxItem && (
        <LightboxModal
          item={selectedLightboxItem}
          onClose={() => setSelectedLightboxItem(null)}
          onSelectService={() => {
            const cat = selectedLightboxItem.category;
            setSelectedLightboxItem(null);
            handleOpenStudioModal(cat);
          }}
        />
      )}

      {/* Studio Interactive Configurator Modal */}
      {isStudioModalOpen && (
        <StudioModal
          isOpen={isStudioModalOpen}
          onClose={() => {
            setIsStudioModalOpen(false);
            setPreselectedPlan(null);
            setPreselectedCategory(undefined);
          }}
          initialPlan={preselectedPlan}
          initialCategory={preselectedCategory}
        />
      )}
    </div>
  );
}
