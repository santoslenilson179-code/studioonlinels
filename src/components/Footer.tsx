import React from 'react';
import { Camera, Instagram, Linkedin, MessageCircle, Globe, Laptop } from 'lucide-react';

interface FooterProps {
  onOpenStudioModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStudioModal }) => {
  return (
    <footer className="bg-[#080B0D] text-[#AEBFC3] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand & Value Prop */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#inicio" className="flex items-center gap-2.5 mb-3 group">
              <div className="w-8 h-8 rounded-sm overflow-hidden border border-[#72DDE3]/40 shadow-[0_0_10px_rgba(114,221,227,0.25)] flex items-center justify-center bg-[#151B1E] shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/hero-brand.png"
                  alt="Studio Online LS Logo"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://i.ibb.co/601q75dx/Chat-GPT-Image-11-de-set-de-2026-20-11-17.png';
                  }}
                />
              </div>
              <span className="font-serif text-base font-light tracking-[0.15em] text-[#F7FBFC] group-hover:text-white transition-colors">
                STUDIO ONLINE LS
              </span>
            </a>

            <p className="text-xs text-[#F7FBFC] font-light mb-1">
              📸 Fotos profissionais com IA
            </p>
            <p className="text-xs text-[#72DDE3] font-light mb-2">
              ✨ Sua imagem com presença e autoridade
            </p>
            <p className="text-xs text-[#AEBFC3] font-light max-w-md mb-4 leading-relaxed">
              🚀 Para empresários e profissionais que buscam o mais alto nível estético e credibilidade digital.
            </p>

            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20as%20fotos%20profissionais%20com%20IA."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#151B1E] border border-white/10 hover:border-[#72DDE3]/50 text-xs text-[#F7FBFC] hover:text-[#72DDE3] transition-all font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#72DDE3]" />
              <span>📲 77 98153-9584</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-2.5 text-xs font-light">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#AEBFC3]/60 mb-1">
              Navegação
            </p>
            <a href="#galeria-executiva" className="text-[#AEBFC3] hover:text-[#72DDE3] transition-colors">Destaques (Carrossel)</a>
            <a href="#portfolio" className="text-[#AEBFC3] hover:text-[#72DDE3] transition-colors">Portfólio</a>
            <a href="#antes-depois" className="text-[#AEBFC3] hover:text-[#72DDE3] transition-colors">Transformação</a>
            <a href="#como-funciona" className="text-[#AEBFC3] hover:text-[#72DDE3] transition-colors">Como Funciona</a>
            <a href="#combos" className="text-[#AEBFC3] hover:text-[#72DDE3] transition-colors">Combos & Valores</a>
            <a href="#faq" className="text-[#AEBFC3] hover:text-[#72DDE3] transition-colors">Dúvidas Frequentes</a>
            <button
              onClick={onOpenStudioModal}
              className="text-left text-[#72DDE3] hover:text-white transition-colors pt-1"
            >
              Configurador VIP →
            </button>
          </div>

          {/* Creator & Web Development Card */}
          <div className="md:col-span-3 flex flex-col justify-between p-4 rounded-sm bg-[#151B1E] border border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#72DDE3]">
                <Laptop className="w-4 h-4 text-[#72DDE3]" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  💻 Criador de sites
                </span>
              </div>
              <p className="text-[11px] text-[#AEBFC3] font-light leading-relaxed mb-3">
                Criação de landing pages e sites profissionais de alta performance para empresários e especialistas.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <a
                href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20cria%C3%A7%C3%A3o%20de%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-[#72DDE3] hover:text-white transition-colors"
              >
                Falar com desenvolvedor →
              </a>

              {/* Socials */}
              <div className="flex items-center gap-1.5">
                <a
                  href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-sm bg-[#1E272B] hover:bg-[#BDEFF2] hover:text-[#080B0D] text-[#AEBFC3] flex items-center justify-center transition-all"
                  aria-label="WhatsApp 77 98153-9584"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/lenilson7005?stkn=bnR0ZHVhN3phbHZm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-sm bg-[#1E272B] hover:bg-[#BDEFF2] hover:text-[#080B0D] text-[#AEBFC3] flex items-center justify-center transition-all"
                  aria-label="Instagram @lenilson7005"
                  title="Instagram: @lenilson7005"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AEBFC3]/60 font-light">
          <p>© 2026 Studio Online LS. 💻 Criador de sites • Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px]">
            <a
              href="https://www.instagram.com/lenilson7005?stkn=bnR0ZHVhN3phbHZm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AEBFC3] hover:text-[#72DDE3] transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-[#72DDE3]" />
              <span>@lenilson7005</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href="https://wa.me/5577981539584"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AEBFC3] hover:text-[#72DDE3] transition-colors"
            >
              📲 WhatsApp: (77) 98153-9584
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
