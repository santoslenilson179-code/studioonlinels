import React from 'react';
import { UserCheck, Sparkles, Layers } from 'lucide-react';

export const EmotionalValue: React.FC = () => {
  const pillars = [
    {
      id: 'pillar-identidade',
      title: 'IDENTIDADE',
      subtitle: 'Sua personalidade preservada em cada imagem.',
      description:
        'Não utilizamos filtros genéricos que descaracterizam seu rosto. Nossa tecnologia de ponta mapeia com exatidão a simetria, expressão e essência única que tornam você inconfundível.',
      icon: UserCheck,
      number: '01'
    },
    {
      id: 'pillar-estetica',
      title: 'ESTÉTICA',
      subtitle: 'Direção visual pensada para valorizar sua presença.',
      description:
        'Cada produção recebe um tratamento de direção de arte equivalente a campanhas de alta costura e editoriais internacionais. Harmonizamos paleta de cores, figurino e cenografia.',
      icon: Sparkles,
      number: '02'
    },
    {
      id: 'pillar-realismo',
      title: 'REALISMO',
      subtitle: 'Detalhes naturais e acabamento fotográfico profissional.',
      description:
        'Poros, fios de cabelo, texturas de tecidos nobres e reflexos de luz com a profundidade ótica de lentes de médio formato. O resultado é indistinguível de um ensaio físico de estúdio.',
      icon: Layers,
      number: '03'
    }
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#080B0D] relative border-t border-white/10 overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#72DDE3]/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-[#72DDE3]">
            O Valor da Sua Imagem
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F7FBFC] leading-[1.15] mb-6">
            "Não criamos apenas imagens. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#72DDE3]">
              Criamos a forma como você será percebido.
            </span>"
          </h2>
          <div className="w-12 h-[1px] bg-[#72DDE3]/60 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#AEBFC3] font-light leading-relaxed">
            Uma boa fotografia comunica antes mesmo de qualquer palavra. Por isso, cada imagem é pensada para transmitir personalidade, confiança, estilo e profissionalismo.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative p-8 sm:p-10 rounded-sm bg-[#151B1E] hover:bg-[#1E272B] border border-white/10 hover:border-[#72DDE3]/50 transition-all duration-500 flex flex-col justify-between shadow-lg"
              >
                {/* Top Pillar Header */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-sm bg-[#080B0D] border border-white/10 group-hover:border-[#72DDE3]/50 flex items-center justify-center text-[#72DDE3] transition-colors duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="font-serif text-2xl font-light text-[#AEBFC3]/60 group-hover:text-[#72DDE3] transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-light tracking-wide text-[#F7FBFC] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-[#72DDE3] mb-4 leading-snug font-mono">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-[#AEBFC3] group-hover:text-[#F7FBFC] font-light leading-relaxed transition-colors">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#AEBFC3]/60">
                  <span>Padrão Internacional</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72DDE3]/40 group-hover:bg-[#72DDE3] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
