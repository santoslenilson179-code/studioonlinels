import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Eye, ChevronLeft, ChevronRight, MessageCircle, Instagram } from 'lucide-react';
import { HERO_GALLERY_IMAGES } from '../data/mockData';

interface HeroProps {
  onOpenStudioModal: () => void;
  onOpenLightbox: (item: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStudioModal, onOpenLightbox }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % HERO_GALLERY_IMAGES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentImage = HERO_GALLERY_IMAGES[activeImageIndex];

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] pt-28 sm:pt-36 pb-20 flex items-center bg-[#080B0D] overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#72DDE3]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#BDEFF2]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 relative flex flex-col items-start text-left z-10 p-6 sm:p-8 lg:p-10 rounded-sm overflow-hidden border border-[#72DDE3]/25 bg-[#080B0D]/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-sm group/herocard">
            
            {/* Background Image Layer (Requested via Focus Mode) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <img
                src="/images/hero-brand.png"
                alt="Fundo Executivo Studio LS"
                className="w-full h-full object-cover object-top opacity-35 filter contrast-110 group-hover/herocard:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i.ibb.co/601q75dx/Chat-GPT-Image-11-de-set-de-2026-20-11-17.png';
                }}
              />
              {/* Refined Glacial Gradients for flawless readability and depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#080B0D]/95 via-[#080B0D]/85 to-[#080B0D]/65" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-[#080B0D]/50" />
              <div className="absolute inset-0 border border-[#72DDE3]/15 rounded-sm pointer-events-none" />
            </div>

            {/* Tag Badge */}
            <div className="mb-4 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-[#151B1E] border border-[#72DDE3]/30 shadow-[0_0_15px_rgba(114,221,227,0.15)]">
              <div className="w-5 h-5 rounded-full overflow-hidden border border-[#72DDE3]/60 shrink-0">
                <img
                  src="/images/hero-brand.png"
                  alt="Studio Online LS"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://i.ibb.co/601q75dx/Chat-GPT-Image-11-de-set-de-2026-20-11-17.png';
                  }}
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#72DDE3]">
                Fotos profissionais com IA
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#F7FBFC] leading-[1.05] mb-6">
              Sua imagem com <br />
              <span className="italic font-light text-[#72DDE3]">presença e autoridade.</span>
            </h1>

            {/* Complement Subtext */}
            <p className="text-sm sm:text-base text-[#AEBFC3] font-light max-w-lg leading-relaxed mb-8">
              <span className="text-[#F7FBFC] font-medium">🚀 Para empresários e profissionais</span> que valorizam credibilidade, posicionamento executivo de alto padrão e fotografia editorial sem a complexidade de estúdios tradicionais.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <button
                id="hero-primary-cta"
                onClick={onOpenStudioModal}
                className="bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] px-7 py-3.5 text-xs uppercase tracking-widest font-bold rounded-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(189,239,242,0.35)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#080B0D]" />
                <span>Iniciar Ensaio</span>
              </button>

              <a
                id="hero-whatsapp-cta"
                href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20fotos%20profissionais%20com%20IA."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#72DDE3]/40 hover:border-[#72DDE3] bg-[#151B1E] hover:bg-[#1E272B] text-[#72DDE3] hover:text-[#F7FBFC] px-5 py-3.5 text-xs uppercase tracking-widest font-mono font-medium rounded-sm transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>📲 77 98153-9584</span>
              </a>

              <a
                id="hero-instagram-cta"
                href="https://www.instagram.com/lenilson7005?stkn=bnR0ZHVhN3phbHZm"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 hover:border-[#72DDE3]/60 bg-[#151B1E] hover:bg-[#1E272B] text-[#AEBFC3] hover:text-[#72DDE3] px-4 py-3.5 text-xs font-mono rounded-sm transition-all inline-flex items-center justify-center gap-2"
                title="Instagram: @lenilson7005"
              >
                <Instagram className="w-3.5 h-3.5 text-[#72DDE3]" />
                <span>@lenilson7005</span>
              </a>

              <a
                id="hero-secondary-cta"
                href="#portfolio"
                className="border border-white/15 px-5 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-white/5 text-[#AEBFC3] hover:text-[#F7FBFC] rounded-sm transition-all inline-flex items-center justify-center gap-1.5"
              >
                <span>Portfólio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#72DDE3]" />
              </a>
            </div>

            {/* Minimalist Specs & Creator Line */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#AEBFC3]/60 font-light pt-4 border-t border-white/5 w-full max-w-lg">
              <span className="flex items-center gap-1.5 text-[#AEBFC3]">
                <span>📸</span> Fotos com IA
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#AEBFC3]">
                <span>✨</span> Presença & Autoridade
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#72DDE3] font-mono text-[11px]">
                <span>💻</span> Criador de sites
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-sm overflow-hidden bg-[#151B1E] border border-white/10 hover:border-[#72DDE3]/40 transition-colors group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Image Frame */}
              <div className="relative w-full h-full">
                {HERO_GALLERY_IMAGES.map((img, idx) => (
                  <div
                    key={img.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === activeImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      onError={(e) => {
                        if (img.url.includes('hero-brand')) {
                          (e.target as HTMLImageElement).src = 'https://i.ibb.co/601q75dx/Chat-GPT-Image-11-de-set-de-2026-20-11-17.png';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-transparent opacity-60" />
                  </div>
                ))}
              </div>

              {/* Top Meta Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <span className="text-[9px] uppercase tracking-widest text-[#72DDE3] bg-[#080B0D]/90 px-2.5 py-1 rounded-sm border border-[#72DDE3]/30 font-mono">
                  {currentImage.tag}
                </span>

                <button
                  onClick={() => onOpenLightbox({
                    id: currentImage.id,
                    title: currentImage.title,
                    category: currentImage.tag,
                    imageUrl: currentImage.url,
                    promptDescription: `Sessão exclusiva em formato digital de ${currentImage.title}.`,
                    styleTags: ['Studio AI', 'Alta Fidelidade', 'Pele Real'],
                    lighting: currentImage.lighting,
                    cameraLens: `${currentImage.camera} • ${currentImage.lens}`,
                    clientType: 'Campanha Digital'
                  })}
                  className="w-7 h-7 rounded-sm bg-[#080B0D]/80 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#080B0D] hover:bg-[#BDEFF2] transition-all"
                  title="Expandir fotografia"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-[#080B0D]/90 backdrop-blur-md px-3.5 py-2.5 rounded-sm border border-white/10">
                <div>
                  <h4 className="font-serif text-sm text-[#F7FBFC] font-light">{currentImage.title}</h4>
                  <p className="text-[10px] text-[#AEBFC3] font-mono">{currentImage.lens}</p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev - 1 + HERO_GALLERY_IMAGES.length) % HERO_GALLERY_IMAGES.length)}
                    className="p-1 rounded-sm bg-[#151B1E] hover:bg-[#1E272B] text-[#AEBFC3] hover:text-[#F7FBFC] transition-colors"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev + 1) % HERO_GALLERY_IMAGES.length)}
                    className="p-1 rounded-sm bg-[#151B1E] hover:bg-[#1E272B] text-[#AEBFC3] hover:text-[#F7FBFC] transition-colors"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
