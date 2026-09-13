import React from 'react';
import { 
  Globe, 
  Building2, 
  Sparkles, 
  Sliders, 
  Zap, 
  Infinity, 
  Check,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { DIFFERENTIALS_DATA } from '../data/mockData';

export const Differentials: React.FC = () => {
  const iconMap = [
    Globe,
    Building2,
    Sparkles,
    Sliders,
    Zap,
    Infinity
  ];

  const comparisonRows = [
    {
      feature: 'Local da sessão',
      studioDigital: '100% Online, no conforto da sua casa ou escritório',
      traditional: 'Deslocamento obrigatório até estúdio ou locação'
    },
    {
      feature: 'Custo de locação & equipe',
      studioDigital: 'Zero custos extras (tudo incluso no plano)',
      traditional: 'Diárias de fotógrafo, assistente, maquiador e estúdio'
    },
    {
      feature: 'Tempo de entrega',
      studioDigital: 'De 12h a 48h úteis com galeria digital',
      traditional: 'De 15 a 30 dias úteis para tratamento'
    },
    {
      feature: 'Flexibilidade de cenários',
      studioDigital: 'Infinitos cenários mundiais (Manhattan, Paris, Estúdio)',
      traditional: 'Limitado ao espaço físico alugado no dia'
    },
    {
      feature: 'Trocas de figurinos',
      studioDigital: 'Alfaiataria sob medida e alta costura ilimitada',
      traditional: 'Apenas as roupas que você levar na mala'
    },
    {
      feature: 'Resolução final',
      studioDigital: 'Master 4K e 8K com preservação anatômica',
      traditional: 'Dependente do sensor e pós-produção manual'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 sm:py-32 bg-[#080B0D] relative border-t border-white/10 overflow-hidden">
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-[#72DDE3]">
            A Nova Era da Fotografia
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F7FBFC] leading-tight mb-4">
            Por que escolher um <span className="italic font-light text-[#72DDE3]">Studio Digital?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#AEBFC3] font-light max-w-xl mx-auto leading-relaxed">
            Uma comparação direta entre o modelo tradicional burocrático e a agilidade da produção digital de alto padrão.
          </p>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {DIFFERENTIALS_DATA.map((diff, idx) => {
            const Icon = iconMap[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="p-7 rounded-sm bg-[#151B1E] border border-white/10 hover:border-[#72DDE3]/50 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-sm bg-[#1E272B] border border-white/10 group-hover:border-[#72DDE3]/40 flex items-center justify-center text-[#72DDE3] shrink-0 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-base sm:text-lg font-light text-[#F7FBFC] group-hover:text-[#72DDE3] transition-colors">
                      {diff.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#AEBFC3] font-light leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Comparison Table */}
        <div className="p-6 sm:p-10 rounded-sm bg-[#151B1E] border border-white/10 overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-12 pb-4 mb-4 border-b border-white/10 text-[11px] font-mono uppercase tracking-widest">
              <div className="col-span-4 text-[#AEBFC3]/60">Critério</div>
              <div className="col-span-4 text-[#72DDE3] flex items-center gap-1.5 font-bold">
                <span>Studio IA Digital</span>
              </div>
              <div className="col-span-4 text-[#AEBFC3]/60">Estúdio Tradicional</div>
            </div>

            <div className="space-y-3 text-xs">
              {comparisonRows.map((row, rIdx) => (
                <div
                  key={rIdx}
                  className="grid grid-cols-12 py-3 border-b border-white/5 last:border-none items-center"
                >
                  <div className="col-span-4 font-light text-[#F7FBFC]">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-[#F7FBFC] flex items-start gap-2 pr-4 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#72DDE3] shrink-0 mt-1.5" />
                    <span>{row.studioDigital}</span>
                  </div>
                  <div className="col-span-4 text-[#AEBFC3]/50 flex items-start gap-2 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 mt-1.5" />
                    <span>{row.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
