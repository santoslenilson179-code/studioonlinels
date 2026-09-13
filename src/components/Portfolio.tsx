import React, { useState, useMemo } from 'react';
import { Eye, Camera, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioCategory, PortfolioItem } from '../types';

interface PortfolioProps {
  onOpenLightbox: (item: PortfolioItem) => void;
  onOpenStudioModal: (preselectedStyle?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox, onOpenStudioModal }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('Todos');

  const categories: PortfolioCategory[] = useMemo(() => {
    const unique = Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.category)));
    return ['Todos', ...unique] as PortfolioCategory[];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Todos') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#080B0D] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[#72DDE3]">
            Galeria Editorial
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7FBFC]">
            Produções <span className="italic font-light text-[#72DDE3]">Recentes.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#AEBFC3] font-light mt-2">
            Fotografia digital hiper-realista com fidelidade anatômica e estética refinada.
          </p>
        </div>

        {/* Category Filter Chips - Minimalist Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10 border-b border-white/5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] font-light whitespace-nowrap transition-colors relative ${
                  isActive
                    ? 'text-[#72DDE3]'
                    : 'text-[#AEBFC3]/60 hover:text-[#F7FBFC]'
                }`}
              >
                {cat}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-[#72DDE3]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Minimalist Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-sm overflow-hidden bg-[#151B1E] border border-white/10 hover:border-[#72DDE3]/60 transition-all duration-300 cursor-pointer shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B0D] via-[#080B0D]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[9px] uppercase tracking-widest text-[#72DDE3] font-mono bg-[#080B0D]/85 px-2 py-0.5 rounded-sm border border-[#72DDE3]/30">
                    {item.category}
                  </span>
                  
                  <div className="w-7 h-7 rounded-sm bg-[#080B0D]/80 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-[#BDEFF2] group-hover:text-[#080B0D] transition-all">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end">
                  <h3 className="font-serif text-lg font-light text-[#F7FBFC] group-hover:text-[#72DDE3] transition-colors mb-1 leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-[#AEBFC3]">
                    <span className="truncate text-[10px] font-mono">{item.cameraLens}</span>
                    <span className="text-[#72DDE3] text-[10px] uppercase tracking-wider flex items-center gap-0.5 font-light">
                      Ver detalhes <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
