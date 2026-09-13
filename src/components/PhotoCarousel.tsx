import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Play,
  Pause,
  MessageCircle
} from 'lucide-react';
import { CAROUSEL_PHOTOS, CarouselPhotoItem } from '../data/mockData';
import { PortfolioItem } from '../types';

interface PhotoCarouselProps {
  onOpenLightbox: (item: PortfolioItem) => void;
  onOpenStudioModal: (category?: string) => void;
}

export const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ 
  onOpenLightbox, 
  onOpenStudioModal 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalPhotos = CAROUSEL_PHOTOS.length;
  const currentPhoto = CAROUSEL_PHOTOS[currentIndex];

  // Auto-advance carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPhotos);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, totalPhotos]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Convert Carousel item to PortfolioItem for Lightbox
  const handleOpenCurrentInLightbox = (photo: CarouselPhotoItem) => {
    onOpenLightbox({
      id: photo.id,
      title: photo.title,
      category: photo.category as any,
      imageUrl: photo.url,
      aspectRatio: 'portrait',
      promptDescription: photo.subtitle,
      styleTags: photo.styleTags,
      lighting: photo.lighting,
      cameraLens: `${photo.camera} • ${photo.lens}`,
      clientType: 'Empresário / Profissional VIP'
    });
  };

  return (
    <section 
      id="galeria-executiva" 
      className="py-20 sm:py-28 bg-[#080B0D] relative border-t border-white/10 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#72DDE3]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#151B1E] border border-[#72DDE3]/30 mb-3">
              <span className="text-xs">📸</span>
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#72DDE3]">
                Carrossel de Ensaios Reais • Fotos com IA
              </p>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7FBFC] leading-tight">
              Sua presença & <span className="italic font-light text-[#72DDE3]">autoridade em foco.</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-[#AEBFC3] font-light mt-2 max-w-xl leading-relaxed">
              <strong className="text-[#F7FBFC] font-normal">🚀 Para empresários e profissionais</strong> que buscam elevar sua percepção de valor. Veja o nível de nitidez, fidelidade anatômica e iluminação editorial.
            </p>
          </div>

          {/* Navigation Controls on Header (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2.5 rounded-sm bg-[#151B1E] hover:bg-[#1E272B] border border-white/10 text-[#AEBFC3] hover:text-[#F7FBFC] transition-colors text-xs flex items-center gap-1.5"
              title={isAutoPlaying ? 'Pausar carrossel automático' : 'Iniciar carrossel automático'}
              aria-label="Controle de reprodução automática"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#72DDE3]" />
                  <span className="text-[10px] font-mono">Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#72DDE3]" />
                  <span className="text-[10px] font-mono">Auto</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrev}
              className="p-2.5 rounded-sm bg-[#151B1E] hover:bg-[#1E272B] border border-white/10 text-[#AEBFC3] hover:text-[#F7FBFC] transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="px-3 py-2 rounded-sm bg-[#151B1E] border border-white/10 text-[11px] font-mono text-[#72DDE3]">
              0{currentIndex + 1} / 0{totalPhotos}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-sm bg-[#151B1E] hover:bg-[#1E272B] border border-white/10 text-[#AEBFC3] hover:text-[#F7FBFC] transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Carousel Feature Card */}
        <div 
          className="relative bg-[#151B1E] border border-white/10 rounded-sm overflow-hidden group shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Full-Width Image Canvas */}
          <div className="w-full relative overflow-hidden bg-black flex items-center justify-center aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[380px] sm:min-h-[500px]">
            
            {CAROUSEL_PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === currentIndex 
                    ? 'opacity-100 scale-100 pointer-events-auto z-10' 
                    : 'opacity-0 scale-105 pointer-events-none z-0'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                {/* Subtle Gradient vignettes */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#080B0D]/50 via-transparent to-transparent" />
              </div>
            ))}

            {/* Top Meta Badges on Image */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
              <span className="px-3 py-1 rounded-sm text-[10px] font-mono tracking-widest uppercase bg-[#080B0D]/85 backdrop-blur-md text-[#72DDE3] border border-[#72DDE3]/30">
                {currentPhoto.badge}
              </span>

              <button
                onClick={() => handleOpenCurrentInLightbox(currentPhoto)}
                className="w-9 h-9 rounded-sm bg-[#080B0D]/85 backdrop-blur-md border border-white/15 text-[#F7FBFC] hover:text-[#080B0D] hover:bg-[#BDEFF2] flex items-center justify-center transition-all shadow-lg"
                title="Visualizar em tela cheia (8K)"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Subtle Bottom Title & Tag Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
              <div className="bg-[#080B0D]/85 backdrop-blur-md border border-white/10 px-4 py-3 rounded-sm max-w-lg pointer-events-auto">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#72DDE3] uppercase tracking-widest mb-1">
                  <span>Ensaio 0{currentIndex + 1}</span>
                  <span>•</span>
                  <span>{currentPhoto.category}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#F7FBFC] font-light leading-snug">
                  {currentPhoto.title}
                </h3>
              </div>

              <div className="pointer-events-auto">
                <a
                  href={`https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostei%20do%20estilo%20do%20ensaio%20"${encodeURIComponent(currentPhoto.title)}"%20e%20quero%20fotos%20profissionais.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#72DDE3] hover:bg-[#F7FBFC] text-[#080B0D] text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(114,221,227,0.35)]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Quero Essa Estética</span>
                </a>
              </div>
            </div>

            {/* Left/Right Prev/Next Floating Navigation Arrows */}
            <div className="absolute inset-y-0 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#080B0D]/80 hover:bg-[#72DDE3] text-white hover:text-[#080B0D] pointer-events-auto border border-white/10 transition-all opacity-80 hover:opacity-100 shadow-lg"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#080B0D]/80 hover:bg-[#72DDE3] text-white hover:text-[#080B0D] pointer-events-auto border border-white/10 transition-all opacity-80 hover:opacity-100 shadow-lg"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Autoplay Progress Line */}
            {isAutoPlaying && (
              <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20 overflow-hidden">
                <div 
                  key={currentIndex}
                  className="h-full bg-[#72DDE3] shadow-[0_0_12px_#72DDE3] animate-[progress_5000ms_linear]" 
                  style={{ animationDuration: '5000ms' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Interactive Thumbnail Carousel Bar */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {CAROUSEL_PHOTOS.map((photo, pIdx) => {
            const isActive = pIdx === currentIndex;
            return (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(pIdx)}
                className={`text-left p-2.5 rounded-sm border transition-all duration-300 flex items-center gap-3 ${
                  isActive
                    ? 'bg-[#1E272B] border-[#72DDE3] ring-1 ring-[#72DDE3]/40'
                    : 'bg-[#151B1E] border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="w-12 h-12 rounded-sm overflow-hidden shrink-0 border border-white/10 bg-black">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="overflow-hidden">
                  <span className={`text-[9px] font-mono block uppercase ${isActive ? 'text-[#72DDE3]' : 'text-[#AEBFC3]/60'}`}>
                    0{pIdx + 1} • {photo.category}
                  </span>
                  <p className={`text-xs truncate font-light ${isActive ? 'text-[#F7FBFC] font-medium' : 'text-[#AEBFC3]'}`}>
                    {photo.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* WhatsApp & Creator Callout Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AEBFC3]/60 font-light pt-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-[#72DDE3]">✨ Sua imagem com presença e autoridade</span>
            <span>•</span>
            <span className="text-[#72DDE3] font-mono">💻 Criador de sites</span>
          </div>

          <a
            href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20as%20fotos%20profissionais%20com%20IA."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#72DDE3] hover:text-[#F7FBFC] font-mono transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Fale direto no WhatsApp: 77 98153-9584 →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
