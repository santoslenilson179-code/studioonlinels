import React from 'react';
import { Sparkles, Check, ArrowRight, MessageCircle, Send } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="combos" className="py-20 sm:py-28 bg-[#080B0D]/90 backdrop-blur-md relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151B1E] border border-[#72DDE3]/30 shadow-[0_0_20px_rgba(114,221,227,0.15)] mb-4">
            <span className="text-sm">📸</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] font-bold text-[#72DDE3]">
              COMBOS — STUDIO ONLINE LS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7FBFC] leading-tight">
            Sua imagem profissional <span className="italic font-light text-[#72DDE3]">sem precisar ir a um estúdio.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#AEBFC3] font-light mt-4 max-w-xl mx-auto flex items-center justify-center gap-2">
            <span>📲</span>
            <span>Escolha seu combo e envie suas fotos para começar.</span>
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const waUrl = `https://wa.me/5577981539584?text=${encodeURIComponent(
              plan.whatsappMessage || `Olá! Quero começar com o ${plan.name} (${plan.priceDisplay}).`
            )}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-sm p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#0E1518] border-2 border-[#72DDE3] shadow-[0_0_35px_rgba(114,221,227,0.25)] ring-1 ring-[#72DDE3]/50'
                    : 'bg-[#12181B] border border-white/10 hover:border-[#72DDE3]/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge ? (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#72DDE3] text-[#080B0D] font-bold shadow-[0_0_15px_rgba(114,221,227,0.5)] flex items-center gap-1">
                    <span>{plan.badge}</span>
                  </div>
                ) : null}

                <div>
                  {/* Header info */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{plan.icon}</span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F7FBFC] font-semibold tracking-wide">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#AEBFC3] font-light mb-6 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-4xl sm:text-5xl font-light text-[#F7FBFC] tracking-tight">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-xs text-[#AEBFC3]/70 font-light">
                        / produção única
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-sm bg-[#151B1E] border border-white/5">
                      <Sparkles className="w-3 h-3 text-[#72DDE3]" />
                      <span className="text-[11px] text-[#72DDE3] font-mono font-medium">
                        {plan.imagesCount}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F7FBFC]/90 font-light">
                        <span className="text-[#72DDE3] text-xs mt-0.5 shrink-0">✨</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions: Direct WhatsApp & Studio Simulator */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 text-center ${
                      isPopular
                        ? 'bg-[#72DDE3] hover:bg-[#F7FBFC] text-[#080B0D] shadow-[0_0_20px_rgba(114,221,227,0.4)]'
                        : 'bg-[#1E272B] hover:bg-[#72DDE3] hover:text-[#080B0D] text-[#F7FBFC] border border-white/10'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>COMEÇAR NO WHATSAPP</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-2.5 px-4 rounded-sm text-[11px] font-mono text-[#AEBFC3] hover:text-[#72DDE3] hover:bg-[#151B1E] border border-transparent hover:border-white/10 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Simular fotos e poses</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Step Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-sm bg-[#12181B] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1E272B] border border-[#72DDE3]/40 flex items-center justify-center text-xl shrink-0">
              📲
            </div>
            <div>
              <p className="text-sm sm:text-base font-medium text-[#F7FBFC]">
                Como começar agora mesmo?
              </p>
              <p className="text-xs sm:text-sm text-[#AEBFC3] font-light mt-0.5">
                Escolha seu combo acima, envie suas fotos pelo WhatsApp e nós cuidamos de toda a direção visual e tratamento com IA.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5577981539584?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20combos%20do%20Studio%20Online%20LS."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 hover:border-[#25D366] transition-all text-xs font-mono font-bold tracking-wider"
          >
            <Send className="w-3.5 h-3.5" />
            <span>FALAR COM PRODUTOR: 77 98153-9584</span>
          </a>
        </div>

      </div>
    </section>
  );
};
