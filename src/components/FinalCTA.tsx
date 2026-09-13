import React from 'react';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onOpenStudioModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenStudioModal }) => {
  return (
    <section className="py-28 sm:py-36 bg-[#080B0D] relative border-t border-white/10 overflow-hidden">
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      {/* Subtle cyan radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#72DDE3]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Small top label */}
        <p className="text-[11px] uppercase tracking-[0.4em] font-bold mb-4 text-[#72DDE3]">
          Estúdio Digital Exclusivo
        </p>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F7FBFC] leading-[1.1] mb-6">
          Sua próxima grande imagem <br className="hidden sm:inline" />
          <span className="italic font-light text-[#72DDE3]">
            começa aqui.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-[#AEBFC3] font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Transforme uma ideia em uma fotografia que atrai autoridade imediata. Eleve sua percepção de valor com uma produção visual refinada.
        </p>

        {/* Big CTA Button & Social Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            id="final-cta-button"
            onClick={onOpenStudioModal}
            className="w-full sm:w-auto bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] px-9 py-4 text-xs font-bold tracking-widest uppercase rounded-sm transition-all shadow-[0_0_30px_rgba(189,239,242,0.35)] flex items-center justify-center gap-3"
          >
            <span>CRIAR MINHAS FOTOS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#080B0D]" />
          </button>

          <a
            id="final-instagram-link"
            href="https://www.instagram.com/lenilson7005?stkn=bnR0ZHVhN3phbHZm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-[#72DDE3]/40 hover:border-[#72DDE3] bg-[#151B1E] text-[#F7FBFC] hover:text-[#72DDE3] px-6 py-4 text-xs font-mono font-medium rounded-sm transition-all flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4 text-[#72DDE3]" />
            <span>@lenilson7005</span>
          </a>
        </div>

        {/* Tagline Below */}
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#AEBFC3]/60 font-mono">
          Studio Digital de Fotografia com Inteligência Artificial
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#AEBFC3] font-light">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#72DDE3]" /> Entrega Rápida em até 24h
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#72DDE3]" /> Resolução 8K Ultra HD
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#72DDE3]" /> Direitos Comerciais Inclusos
          </span>
        </div>

      </div>
    </section>
  );
};
