import React from 'react';
import { Upload, Palette, Cpu, Download } from 'lucide-react';

interface ProcessProps {
  onOpenStudioModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenStudioModal }) => {
  const steps = [
    {
      number: '01',
      title: 'Envio de Fotos',
      subtitle: '3 a 8 fotos simples',
      description: 'Selfies ou fotos casuais do celular com luz natural. Sem necessidade de maquiagem ou estúdio.',
      icon: Upload
    },
    {
      number: '02',
      title: 'Direção Visual',
      subtitle: 'Estilo & Atmosfera',
      description: 'Escolha o figurino, iluminação e locação desejada — do executivo clássico ao editorial de moda.',
      icon: Palette
    },
    {
      number: '03',
      title: 'Curadoria com IA',
      subtitle: 'Renderização 8K',
      description: 'Modelos visuais de alta resolução preservam fielmente sua anatomia, expressão e autenticidade.',
      icon: Cpu
    },
    {
      number: '04',
      title: 'Galeria Pronta',
      subtitle: 'Alta definição',
      description: 'Receba sua galeria completa sem marcas d’água e com direitos de uso comercial irrestritos.',
      icon: Download
    }
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-[#080B0D] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[#72DDE3]">
              Processo Editorial
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7FBFC]">
              Simplicidade em <span className="italic font-light text-[#72DDE3]">4 etapas.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#AEBFC3] max-w-sm font-light leading-relaxed">
            Sem deslocamentos ou ensaios cansativos. Uma experiência fotográfica 100% digital e sob medida.
          </p>
        </div>

        {/* 4 Minimalist Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 sm:p-7 rounded-sm bg-[#151B1E] border border-white/10 hover:border-[#72DDE3]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-[#72DDE3]/60">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-sm bg-[#1E272B] border border-white/10 flex items-center justify-center text-[#72DDE3]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-light text-[#F7FBFC] mb-1">
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-[#72DDE3] font-mono uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-[#AEBFC3] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
