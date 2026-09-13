import React, { useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Package, Users } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectService
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      id="service-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#151B1E] border border-white/10 rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-sm bg-[#080B0D]/90 text-[#F7FBFC] hover:text-[#72DDE3] border border-white/10 flex items-center justify-center transition-colors"
          aria-label="Fechar detalhes"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Header of the Modal */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151B1E] via-[#151B1E]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1 text-[#72DDE3]">
              Especialidade Studio Digital
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F7FBFC] font-light">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 bg-[#151B1E]">
          <p className="text-sm text-[#AEBFC3] leading-relaxed font-light">
            {service.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#AEBFC3]/60 mb-3">
              O Que Está Incluso Nesta Produção:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F7FBFC] font-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72DDE3] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Audience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="p-3.5 rounded-sm bg-[#1E272B] border border-white/5">
              <div className="flex items-center gap-1.5 text-[#72DDE3] font-mono text-[11px] uppercase tracking-wider mb-1">
                <Package className="w-3.5 h-3.5" />
                <span>Entregáveis</span>
              </div>
              <p className="text-[#AEBFC3] font-light">{service.deliverables}</p>
            </div>

            <div className="p-3.5 rounded-sm bg-[#1E272B] border border-white/5">
              <div className="flex items-center gap-1.5 text-[#72DDE3] font-mono text-[11px] uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>Indicado Para</span>
              </div>
              <p className="text-[#AEBFC3] font-light">{service.idealFor}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectService(service);
              }}
              className="w-full sm:w-auto flex-1 bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] py-3 px-6 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(189,239,242,0.35)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#080B0D]" />
              <span>Configurar Este Ensaio</span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-sm text-xs text-[#AEBFC3] hover:text-[#F7FBFC] hover:bg-[#1E272B] transition-colors"
            >
              Voltar ao Site
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
