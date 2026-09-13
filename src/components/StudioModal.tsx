import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Upload, 
  Camera, 
  Sliders, 
  Eye, 
  CheckCircle2, 
  RefreshCw, 
  Download, 
  Share2, 
  MessageCircle, 
  ShieldCheck 
} from 'lucide-react';
import { STUDIO_CONFIG_OPTIONS, PORTFOLIO_ITEMS, PRICING_PLANS } from '../data/mockData';
import { PricingPlan } from '../types';

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: PricingPlan | null;
  initialCategory?: string;
}

export const StudioModal: React.FC<StudioModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
  initialCategory
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'Corporativo');
  const [selectedLighting, setSelectedLighting] = useState('natural-window');
  const [selectedEnvironment, setSelectedEnvironment] = useState('manhattan-loft');
  const [selectedWardrobe, setSelectedWardrobe] = useState('tailored-suit');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan>(initialPlan || PRICING_PLANS[1]);
  const [aspectRatio, setAspectRatio] = useState<'portrait' | 'square' | 'stories'>('portrait');
  const [customNotes, setCustomNotes] = useState('');
  const [uploadedPhotosCount, setUploadedPhotosCount] = useState(3);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isRenderComplete, setIsRenderComplete] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    if (initialPlan) {
      setSelectedPlan(initialPlan);
    }
  }, [initialCategory, initialPlan]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleStartGeneration = () => {
    setIsGenerating(true);
    setGenerationProgress(10);
    setCurrentStep(4);

    const interval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGenerating(false);
            setIsRenderComplete(true);
          }, 600);
          return 100;
        }
        return prev + 15;
      });
    }, 300);
  };

  // Find sample result preview based on category
  const previewImageItem = PORTFOLIO_ITEMS.find((item) => item.category === selectedCategory) || PORTFOLIO_ITEMS[0];

  const handleFinishWhatsApp = () => {
    const message = `Ol%C3%A1%20Studio%20Online%20LS!%20Acabei%20de%20configurar%20meu%20briefing%20no%20site:%0A%0A-%20*Combo:*%20${encodeURIComponent(selectedPlan.name + ' (' + selectedPlan.priceDisplay + ')')}%0A-%20*Categoria:*%20${encodeURIComponent(selectedCategory)}%0A-%20*Ilumina%C3%A7%C3%A3o:*%20${encodeURIComponent(selectedLighting)}%0A-%20*Ambiente:*%20${encodeURIComponent(selectedEnvironment)}%0A-%20*Figurino:*%20${encodeURIComponent(selectedWardrobe)}%0A%0AGostaria%20de%20enviar%20minhas%20fotos%20e%20come%C3%A7ar!`;
    window.open(`https://wa.me/5577981539584?text=${message}`, '_blank');
  };

  return (
    <div
      id="studio-configurator-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#151B1E] border border-white/10 rounded-sm overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#1E272B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#151B1E] border border-white/10 flex items-center justify-center text-[#72DDE3]">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-base sm:text-lg text-[#F7FBFC] font-light">
                  Studio Digital • Configurador de Ensaio
                </h3>
                <span className="px-2 py-0.5 rounded-sm text-[9px] font-mono uppercase bg-[#72DDE3]/15 text-[#72DDE3] border border-[#72DDE3]/30">
                  Etapa {currentStep} de 4
                </span>
              </div>
              <p className="text-[11px] text-[#AEBFC3] font-light">
                Personalize sua direção criativa e visual antes da produção
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-sm bg-[#151B1E] hover:bg-[#BDEFF2] hover:text-[#080B0D] border border-white/10 text-[#AEBFC3] flex items-center justify-center transition-colors"
            aria-label="Fechar configurador"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body with Step Progress */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#080B0D]">
          
          {/* STEP 1: Objective & Category */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1 text-[#72DDE3]">
                  Passo 1 • Proposta Visual
                </p>
                <h4 className="font-serif text-2xl text-[#F7FBFC] font-light">
                  Qual o objetivo principal do seu ensaio?
                </h4>
                <p className="text-xs text-[#AEBFC3] mt-1 font-light">
                  Selecione a categoria que melhor representa o seu momento de carreira ou marca.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {STUDIO_CONFIG_OPTIONS.categories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-4 rounded-sm text-left border transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#1E272B] border-[#72DDE3] text-[#F7FBFC] shadow-[0_0_15px_rgba(114,221,227,0.2)]'
                          : 'bg-[#151B1E] border-white/10 text-[#AEBFC3] hover:border-white/20 hover:text-[#F7FBFC]'
                      }`}
                    >
                      <span className="text-xs font-light">{cat.label}</span>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-sm bg-[#72DDE3] text-[#080B0D] flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Plan Choice Selector in Step 1 */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-[#AEBFC3] font-mono block mb-3">
                  Pacote Selecionado:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRICING_PLANS.map((plan) => {
                    const isPlanActive = selectedPlan.id === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan)}
                        className={`cursor-pointer p-3.5 rounded-sm border transition-all ${
                          isPlanActive
                            ? 'bg-[#1E272B] border-[#72DDE3] text-[#F7FBFC] shadow-[0_0_15px_rgba(114,221,227,0.2)]'
                            : 'bg-[#151B1E] border-white/10 text-[#AEBFC3] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-serif text-sm font-light">{plan.name}</span>
                          <span className="text-xs font-mono text-[#72DDE3] font-semibold">{plan.priceDisplay}</span>
                        </div>
                        <p className="text-[10px] text-[#AEBFC3]/60 font-light">{plan.imagesCount}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Lighting & Environment */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1 text-[#72DDE3]">
                  Passo 2 • Atmosfera & Cenografia
                </p>
                <h4 className="font-serif text-2xl text-[#F7FBFC] font-light">
                  Defina a iluminação e o cenário desejado.
                </h4>
              </div>

              {/* Lighting */}
              <div>
                <label className="text-[11px] uppercase tracking-widest text-[#AEBFC3] block mb-2 font-mono">
                  Esquema de Iluminação:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {STUDIO_CONFIG_OPTIONS.lightingOptions.map((light) => {
                    const isSelected = selectedLighting === light.id;
                    return (
                      <button
                        key={light.id}
                        onClick={() => setSelectedLighting(light.id)}
                        className={`p-3.5 rounded-sm text-left border transition-all ${
                          isSelected
                            ? 'bg-[#1E272B] border-[#72DDE3] text-[#F7FBFC] shadow-[0_0_15px_rgba(114,221,227,0.2)]'
                            : 'bg-[#151B1E] border-white/10 text-[#AEBFC3] hover:border-white/20'
                        }`}
                      >
                        <p className="text-xs font-light text-[#F7FBFC]">{light.label}</p>
                        <p className="text-[11px] text-[#AEBFC3]/60 font-light mt-0.5">{light.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Environment */}
              <div>
                <label className="text-[11px] uppercase tracking-widest text-[#AEBFC3] block mb-2 font-mono">
                  Locação / Cenário Virtual:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {STUDIO_CONFIG_OPTIONS.environments.map((env) => {
                    const isSelected = selectedEnvironment === env.id;
                    return (
                      <button
                        key={env.id}
                        onClick={() => setSelectedEnvironment(env.id)}
                        className={`p-3.5 rounded-sm text-left border transition-all ${
                          isSelected
                            ? 'bg-[#1E272B] border-[#72DDE3] text-[#F7FBFC] shadow-[0_0_15px_rgba(114,221,227,0.2)]'
                            : 'bg-[#151B1E] border-white/10 text-[#AEBFC3] hover:border-white/20'
                        }`}
                      >
                        <p className="text-xs font-light text-[#F7FBFC]">{env.label}</p>
                        <p className="text-[11px] text-[#AEBFC3]/60 font-light mt-0.5">{env.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Wardrobe & Reference Photos */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1 text-[#72DDE3]">
                  Passo 3 • Figurino & Referências
                </p>
                <h4 className="font-serif text-2xl text-[#F7FBFC] font-light">
                  Escolha o estilo de figurino e adicione suas fotos.
                </h4>
              </div>

              {/* Wardrobes */}
              <div>
                <label className="text-[11px] uppercase tracking-widest text-[#AEBFC3] block mb-2 font-mono">
                  Figurino & Estilo de Vestimenta:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {STUDIO_CONFIG_OPTIONS.wardrobes.map((wardrobe) => {
                    const isSelected = selectedWardrobe === wardrobe.id;
                    return (
                      <button
                        key={wardrobe.id}
                        onClick={() => setSelectedWardrobe(wardrobe.id)}
                        className={`p-3.5 rounded-sm text-left border transition-all ${
                          isSelected
                            ? 'bg-[#1E272B] border-[#72DDE3] text-[#F7FBFC] shadow-[0_0_15px_rgba(114,221,227,0.2)]'
                            : 'bg-[#151B1E] border-white/10 text-[#AEBFC3] hover:border-white/20'
                        }`}
                      >
                        <p className="text-xs font-light text-[#F7FBFC]">{wardrobe.label}</p>
                        <p className="text-[11px] text-[#AEBFC3]/60 font-light mt-0.5">{wardrobe.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upload Dropzone Simulation */}
              <div>
                <label className="text-[11px] uppercase tracking-widest text-[#AEBFC3] block mb-2 font-mono">
                  Fotos de Referência Facial ({uploadedPhotosCount} fotos selecionadas):
                </label>
                <div
                  onClick={() => setUploadedPhotosCount((prev) => Math.min(8, prev + 1))}
                  className="p-6 rounded-sm bg-[#151B1E] border border-dashed border-white/20 hover:border-[#72DDE3]/50 transition-colors flex flex-col items-center justify-center text-center cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#1E272B] group-hover:bg-[#72DDE3]/20 text-[#72DDE3] flex items-center justify-center mb-2 transition-colors">
                    <Upload className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-light text-[#F7FBFC]">
                    Arraste ou clique para adicionar suas selfies / fotos casuais
                  </p>
                  <p className="text-[11px] text-[#AEBFC3]/60 font-light mt-1">
                    Recomendamos de 3 a 8 fotos com boa luz para fidelidade máxima
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    {[...Array(uploadedPhotosCount)].map((_, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-sm text-[9px] font-mono bg-[#72DDE3]/15 text-[#72DDE3] border border-[#72DDE3]/30"
                      >
                        Foto 0{i + 1} ✓
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Custom Notes */}
              <div>
                <label className="text-[11px] uppercase tracking-widest text-[#AEBFC3] block mb-1.5 font-mono">
                  Observações Especiais ou Preferências:
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Ex: Gostaria de usar blazer escuro com corte italiano, postura de liderança..."
                  className="w-full p-3 rounded-sm bg-[#151B1E] border border-white/10 text-xs text-[#F7FBFC] focus:border-[#72DDE3] focus:outline-none resize-none h-20 placeholder:text-[#555] font-light"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Generation Simulation & Result Preview */}
          {currentStep === 4 && (
            <div className="space-y-6">
              {isGenerating ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#72DDE3]/20 border-t-[#72DDE3] animate-spin mb-6 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#72DDE3]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#F7FBFC] font-light mb-2">
                    Renderizando Amostra Editorial com IA...
                  </h4>
                  <p className="text-xs text-[#AEBFC3] font-light max-w-sm mb-6">
                    Ajustando volumetria de luz {selectedLighting}, texturas de pele e enquadramento 8K.
                  </p>

                  <div className="w-full max-w-md h-1.5 bg-[#1E272B] rounded-sm overflow-hidden mb-2">
                    <div
                      className="h-full bg-[#72DDE3] transition-all duration-300 rounded-sm"
                      style={{ width: `${generationProgress}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-[#72DDE3]">{generationProgress}% concluído</span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#72DDE3]">
                        Briefing Criado com Sucesso
                      </p>
                      <h4 className="font-serif text-2xl text-[#F7FBFC] font-light">
                        Prévia da Sua Produção Studio Digital
                      </h4>
                    </div>

                    <span className="px-2.5 py-1 rounded-sm text-[10px] font-mono text-[#72DDE3] bg-[#72DDE3]/10 border border-[#72DDE3]/30 uppercase">
                      Pronto para Produção
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Rendered Sample Image */}
                    <div className="md:col-span-6 relative rounded-sm overflow-hidden border border-white/10 aspect-[4/5] bg-[#080B0D]">
                      <img
                        src={previewImageItem.imageUrl}
                        alt="Simulação Studio IA"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-sm bg-[#080B0D]/90 backdrop-blur-md border border-white/10 text-xs flex items-center justify-between">
                        <span className="font-serif text-[#F7FBFC] font-light">{previewImageItem.title}</span>
                        <span className="text-[10px] text-[#72DDE3] uppercase font-mono">Simulação 8K</span>
                      </div>
                    </div>

                    {/* Briefing Summary */}
                    <div className="md:col-span-6 space-y-4 text-xs">
                      <div className="p-4 rounded-sm bg-[#151B1E] border border-white/10">
                        <h5 className="font-serif text-sm text-[#F7FBFC] font-light mb-3">
                          Resumo do Seu Briefing:
                        </h5>
                        <div className="space-y-2 text-[#AEBFC3] font-light">
                          <div className="flex justify-between border-b border-white/5 pb-1.5">
                            <span className="text-[#AEBFC3]/60">Plano Selecionado:</span>
                            <span className="text-[#72DDE3] font-mono font-semibold">{selectedPlan.name} ({selectedPlan.priceDisplay})</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1.5">
                            <span className="text-[#AEBFC3]/60">Categoria:</span>
                            <span className="text-[#F7FBFC]">{selectedCategory}</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1.5">
                            <span className="text-[#AEBFC3]/60">Iluminação:</span>
                            <span className="text-[#F7FBFC]">{selectedLighting}</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1.5">
                            <span className="text-[#AEBFC3]/60">Figurino:</span>
                            <span className="text-[#F7FBFC]">{selectedWardrobe}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#AEBFC3]/60">Volume Previsto:</span>
                            <span className="text-[#72DDE3] font-mono">{selectedPlan.imagesCount}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-sm bg-[#151B1E] border border-white/10 flex items-start gap-3">
                        <ShieldCheck className="w-4 h-4 text-[#72DDE3] shrink-0 mt-0.5" />
                        <p className="text-[11px] text-[#AEBFC3] leading-relaxed font-light">
                          Sua identidade será tratada com rigor fotográfico. Nossos diretores de arte digitais farão o alinhamento fino antes da entrega final.
                        </p>
                      </div>

                      <button
                        onClick={handleFinishWhatsApp}
                        className="w-full bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] py-3.5 px-6 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(189,239,242,0.35)]"
                      >
                        <MessageCircle className="w-4 h-4 text-[#080B0D]" />
                        <span>Confirmar Ensaio no WhatsApp • 77 98153-9584</span>
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#1E272B] flex items-center justify-between">
          {currentStep > 1 && currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs text-[#AEBFC3] hover:text-[#F7FBFC] hover:bg-[#151B1E] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            {currentStep < 3 && (
              <button
                onClick={() => setCurrentStep((prev) => prev + 1)}
                className="bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <span>Avançar</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#080B0D]" />
              </button>
            )}

            {currentStep === 3 && (
              <button
                onClick={handleStartGeneration}
                className="bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(189,239,242,0.35)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#080B0D]" />
                <span>Simular Produção</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
