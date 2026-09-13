import React, { useState } from 'react';
import { Camera, Briefcase, Sparkles, Smartphone, Gem, ShoppingBag, ArrowUpRight, Plus } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesProps {
  onOpenStudioModal: (serviceCategory?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenStudioModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera className="w-4 h-4 text-[#72DDE3]" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-[#72DDE3]" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-[#72DDE3]" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-[#72DDE3]" />;
      case 'Gem': return <Gem className="w-4 h-4 text-[#72DDE3]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4 text-[#72DDE3]" />;
      default: return <Sparkles className="w-4 h-4 text-[#72DDE3]" />;
    }
  };

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-[#080B0D] relative border-t border-white/10 overflow-hidden">
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-[#72DDE3]">
            Especialidades de Produção
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F7FBFC] leading-tight mb-4">
            Serviços sob medida para <br className="hidden sm:inline" />
            <span className="italic font-light text-[#72DDE3]">cada objetivo de imagem.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#AEBFC3] font-light max-w-2xl leading-relaxed">
            Desde posicionamento executivo até campanhas de alta costura e catálogo de produtos. Conheça nossas principais verticais.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-sm bg-[#151B1E] border border-white/10 hover:border-[#72DDE3]/60 overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-lg"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#080B0D]">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151B1E] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4 p-2 rounded-sm bg-[#080B0D]/90 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-light text-[#F7FBFC] group-hover:text-[#72DDE3] transition-colors mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#72DDE3] mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-[#AEBFC3] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#72DDE3] hover:text-[#F7FBFC] uppercase transition-colors"
                  >
                    <span>Saiba mais</span>
                    <Plus className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenStudioModal(service.title)}
                    className="w-7 h-7 rounded-sm bg-[#1E272B] hover:bg-[#BDEFF2] hover:text-[#080B0D] border border-white/10 text-[#AEBFC3] flex items-center justify-center transition-all"
                    title="Iniciar este ensaio"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectService={(srv) => {
            setSelectedService(null);
            onOpenStudioModal(srv.title);
          }}
        />
      )}
    </section>
  );
};
