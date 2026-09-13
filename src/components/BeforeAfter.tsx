import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/mockData';

interface BeforeAfterProps {
  onOpenStudioModal: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onOpenStudioModal }) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[selectedCaseIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="antes-depois" className="py-24 sm:py-32 bg-[#080B0D] relative border-t border-white/10 overflow-hidden">
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-[#72DDE3]">
            Transformação Fotográfica
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F7FBFC] leading-tight mb-4">
            Uma nova perspectiva <span className="italic font-light text-[#72DDE3]">sobre você.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#AEBFC3] font-light max-w-2xl leading-relaxed">
            Arraste o divisor para comparar a foto casual original com a produção final refinada pelo Studio Digital. A identidade é rigorosamente preservada.
          </p>
        </div>

        {/* Case Switcher Minimalist Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-white/5">
          {BEFORE_AFTER_CASES.map((item, idx) => {
            const isCurrent = idx === selectedCaseIdx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedCaseIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-all duration-200 relative ${
                  isCurrent
                    ? 'text-[#72DDE3]'
                    : 'text-[#AEBFC3]/60 hover:text-[#F7FBFC]'
                }`}
              >
                <span>{item.category}</span>
                {isCurrent && (
                  <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-[#72DDE3]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Comparison Component Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Slider */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/5] sm:aspect-[4/3] rounded-sm overflow-hidden select-none cursor-ew-resize border border-white/10 bg-[#080B0D] shadow-2xl"
            >
              {/* After Image (Full Background) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activeCase.afterImage}
                  alt={activeCase.afterLabel}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-sm text-[9px] font-mono uppercase tracking-widest bg-[#080B0D]/90 text-[#72DDE3] border border-[#72DDE3]/40 backdrop-blur-md">
                  DEPOIS • ESTÚDIO IA
                </div>
              </div>

              {/* Before Image (Clipped with width matching slider) */}
              <div
                className="absolute inset-0 h-full overflow-hidden border-r border-[#72DDE3]"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt={activeCase.beforeLabel}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'
                  }}
                  draggable={false}
                />
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-sm text-[9px] font-mono uppercase tracking-widest bg-[#080B0D]/90 text-[#AEBFC3] border border-white/10 backdrop-blur-md">
                  ANTES • ORIGINAL
                </div>
              </div>

              {/* Central Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#72DDE3] shadow-[0_0_12px_#72DDE3] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#080B0D] border border-[#72DDE3] flex items-center justify-center text-[#72DDE3] shadow-xl">
                  <MoveHorizontal className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Instruction Toast */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-sm bg-[#080B0D]/90 backdrop-blur-md border border-white/10 text-[10px] text-[#AEBFC3] flex items-center gap-1.5 pointer-events-none whitespace-nowrap font-mono">
                <MoveHorizontal className="w-3 h-3 text-[#72DDE3]" />
                <span>Arraste para comparar</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Deep-Dive Notes */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-8 rounded-sm bg-[#151B1E] border border-white/10 shadow-xl">
              
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#72DDE3] uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#72DDE3]" />
                <span>Estudo de Caso • {activeCase.category}</span>
              </div>

              <h3 className="font-serif text-2xl text-[#F7FBFC] font-light mb-3">
                {activeCase.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#AEBFC3] font-light leading-relaxed mb-6">
                {activeCase.description}
              </p>

              {/* Details List */}
              <div className="space-y-2.5 mb-8">
                <span className="text-[10px] uppercase tracking-widest text-[#AEBFC3]/60 font-mono block">
                  Aprimoramentos Artísticos:
                </span>
                {activeCase.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs text-[#F7FBFC] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#72DDE3]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenStudioModal}
                className="w-full bg-[#BDEFF2] hover:bg-[#F7FBFC] text-[#080B0D] py-3.5 px-6 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(189,239,242,0.35)]"
              >
                <span>Quero Minha Transformação</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#080B0D]" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
