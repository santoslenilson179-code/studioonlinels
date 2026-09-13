import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenStudioModal: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenStudioModal }) => {
  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-[#080B0D] relative border-t border-white/10 overflow-hidden">
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Statement Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold mb-4 text-[#72DDE3]">
              Liberdade Criativa Total
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F7FBFC] leading-[1.1] mb-6">
              Imagine ter um estúdio fotográfico <br className="hidden sm:inline" />
              <span className="italic font-light text-[#72DDE3]">disponível sempre</span> que precisar.
            </h2>

            <p className="text-base sm:text-lg text-[#AEBFC3] font-light leading-relaxed mb-8">
              Novos conceitos. Novos cenários. Novas identidades. Sem locação, sem produção complexa e sem as limitações de uma sessão tradicional.
            </p>

            <div className="space-y-3 mb-10 w-full">
              {[
                'Atualize suas fotos para cada nova campanha ou evento em minutos',
                'Experimente diferentes estilos visuais antes de mudar seu visual real',
                'Fotografias consistentes e alinhadas ao seu posicionamento de marca'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F7FBFC] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72DDE3] shrink-0 mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              id="experience-cta-button"
              onClick={onOpenStudioModal}
              className="bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-sm transition-all shadow-[0_0_25px_rgba(189,239,242,0.35)] flex items-center gap-3"
            >
              <span>QUERO EXPERIMENTAR</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#080B0D]" />
            </button>
          </div>

          {/* Right Column: Grande Imagem Cinematográfica */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=85&w=1200&auto=format&fit=crop"
                alt="Ensaio Cinematográfico Studio IA"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-black/20" />
              
              {/* Bottom Cinematic Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#151B1E]/95 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#72DDE3] font-mono block mb-0.5">
                    Produção Digital Nº 4.892
                  </span>
                  <p className="font-serif text-sm sm:text-base text-[#F7FBFC] font-light">
                    Editorial Alta Costura Paris
                  </p>
                </div>
                <div className="w-8 h-8 rounded-sm bg-[#1E272B] border border-white/10 flex items-center justify-center text-[#72DDE3]">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
