import React, { useEffect } from 'react';
import { X, Sparkles, Camera, Aperture, Eye, Tag, Share2, Download, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectForStudio?: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onSelectForStudio
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: `Confira esta fotografia profissional criada com IA no Studio Online LS: ${item.title}`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share dismissed', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div
      id="portfolio-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#151B1E] border border-white/10 rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-lightbox-button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-8 h-8 rounded-sm bg-[#080B0D]/90 hover:bg-[#BDEFF2] hover:text-[#080B0D] border border-white/15 text-[#F7FBFC] flex items-center justify-center transition-all duration-200 focus:outline-none"
          aria-label="Fechar visualizador"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Large Image View */}
        <div className="lg:w-3/5 bg-[#080B0D] flex items-center justify-center p-4 sm:p-8 relative min-h-[350px] lg:min-h-[550px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl"
          />
          <div className="absolute bottom-4 left-4">
            <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono tracking-widest uppercase bg-[#080B0D]/90 text-[#72DDE3] border border-[#72DDE3]/30">
              8K Master Render
            </span>
          </div>
        </div>

        {/* Right Side: Editorial Production Notes & Specs */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#151B1E] border-t lg:border-t-0 lg:border-l border-white/10">
          <div>
            {/* Category & Client */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#72DDE3]">
                {item.category}
              </span>
              <span className="text-[#AEBFC3]/40">•</span>
              <span className="text-[11px] text-[#AEBFC3] font-light">{item.clientType}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F7FBFC] font-light leading-tight mb-4">
              {item.title}
            </h3>

            {/* Prompt / Creative Brief */}
            <div className="p-4 rounded-sm bg-[#080B0D] border border-white/5 mb-6">
              <span className="text-[10px] uppercase tracking-wider text-[#72DDE3] flex items-center gap-1.5 mb-1.5 font-mono">
                <Sparkles className="w-3 h-3 text-[#72DDE3]" />
                Conceito & Direção Criativa
              </span>
              <p className="text-xs text-[#AEBFC3] leading-relaxed italic font-light">
                "{item.promptDescription}"
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-3 mb-6 text-xs font-light">
              <div className="flex items-start gap-3">
                <Camera className="w-4 h-4 text-[#72DDE3] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AEBFC3]/60 font-mono block">Emulação Óptica</span>
                  <span className="text-[#F7FBFC]">{item.cameraLens}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Aperture className="w-4 h-4 text-[#72DDE3] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#AEBFC3]/60 font-mono block">Esquema de Iluminação</span>
                  <span className="text-[#F7FBFC]">{item.lighting}</span>
                </div>
              </div>
            </div>

            {/* Style Tags */}
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-widest text-[#AEBFC3]/60 font-mono block mb-2">
                Atributos de Estilo
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.styleTags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-[#1E272B] text-[#AEBFC3] border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                onClose();
                if (onSelectForStudio) onSelectForStudio(item);
              }}
              className="w-full bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] py-3 px-5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(189,239,242,0.35)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#080B0D]" />
              <span>Quero um ensaio neste estilo</span>
            </button>

            <button
              onClick={handleShare}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm text-xs text-[#AEBFC3] hover:text-[#F7FBFC] bg-[#1E272B] hover:bg-[#253238] border border-white/10 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Compartilhar Referência</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
