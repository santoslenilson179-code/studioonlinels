import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle, Instagram } from 'lucide-react';

interface HeaderProps {
  onOpenStudioModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenStudioModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destaques', href: '#galeria-executiva' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Transformação', href: '#antes-depois' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Combos', href: '#combos' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B0D]/90 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo-link"
            href="#inicio"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm overflow-hidden border border-[#72DDE3]/50 shadow-[0_0_15px_rgba(114,221,227,0.35)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-[#151B1E] shrink-0">
              <img
                src="/images/hero-brand.png"
                alt="Studio Online LS"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i.ibb.co/601q75dx/Chat-GPT-Image-11-de-set-de-2026-20-11-17.png';
                }}
              />
            </div>
            <span className="font-serif text-lg tracking-[0.15em] font-light text-[#F7FBFC] group-hover:text-[#72DDE3] transition-colors">
              STUDIO ONLINE LS
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-light text-[#AEBFC3] hover:text-[#F7FBFC] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#72DDE3] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button, Instagram & WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="header-instagram-link"
              href="https://www.instagram.com/lenilson7005?stkn=bnR0ZHVhN3phbHZm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-sm border border-white/10 hover:border-[#72DDE3]/60 bg-[#151B1E] text-[#AEBFC3] hover:text-[#72DDE3] hover:bg-[#1E272B] transition-all"
              title="Instagram: @lenilson7005"
              aria-label="Instagram @lenilson7005"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            <a
              id="header-whatsapp-link"
              href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20fotos%20profissionais%20com%20IA."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/10 hover:border-[#72DDE3]/50 bg-[#151B1E] text-[#72DDE3] hover:text-[#F7FBFC] transition-all text-[11px] font-mono"
              title="Fale direto no WhatsApp 77 98153-9584"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="font-semibold">77 98153-9584</span>
            </a>

            <button
              id="header-cta-button"
              onClick={onOpenStudioModal}
              className="bg-[#BDEFF2] hover:bg-[#F7FBFC] border border-[#BDEFF2] px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#080B0D] shadow-[0_0_15px_rgba(189,239,242,0.3)] transition-all duration-300 rounded-sm flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3 text-[#080B0D]" />
              <span>Criar Fotos</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F7FBFC] hover:text-[#72DDE3] focus:outline-none transition-colors"
            aria-label="Abrir menu principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="md:hidden fixed inset-x-0 top-[56px] bg-[#080B0D]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-5 shadow-2xl"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-[#AEBFC3] hover:text-[#72DDE3] py-2 border-b border-white/5 flex items-center justify-between transition-colors font-light"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#72DDE3]" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              id="mobile-instagram-cta"
              href="https://www.instagram.com/lenilson7005?stkn=bnR0ZHVhN3phbHZm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-sm border border-white/10 bg-[#151B1E] text-[#AEBFC3] hover:text-[#F7FBFC] text-xs font-mono flex items-center justify-center gap-2 transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#72DDE3]" />
              <span>Instagram: @lenilson7005</span>
            </a>

            <a
              id="mobile-whatsapp-cta"
              href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20fotos%20profissionais%20com%20IA."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-sm border border-[#72DDE3]/40 bg-[#151B1E] text-[#72DDE3] text-xs font-mono flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: 77 98153-9584</span>
            </a>

            <button
              id="mobile-drawer-cta-button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStudioModal();
              }}
              className="w-full bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(189,239,242,0.3)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#080B0D]" />
              <span>Criar Fotos</span>
            </button>

            <p className="text-[10px] text-center text-[#AEBFC3] font-mono pt-1">
              💻 Criador de sites • Studio Online LS
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
