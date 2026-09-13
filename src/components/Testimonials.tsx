import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-[#080B0D] relative border-t border-white/10 overflow-hidden">
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] font-bold mb-3 text-[#72DDE3]">
            Depoimentos & Experiências
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F7FBFC] leading-tight mb-4">
            Quem experimenta, <br className="hidden sm:inline" />
            <span className="italic font-light text-[#72DDE3]">percebe a diferença.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#AEBFC3] font-light max-w-xl leading-relaxed">
            Depoimentos de executivos, empresários e criadores de conteúdo que transformaram sua presença visual.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-sm bg-[#151B1E] border border-white/10 hover:border-[#72DDE3]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#72DDE3] text-[#72DDE3]" />
                  ))}
                </div>

                {/* Highlight Tag */}
                <p className="text-[11px] font-mono text-[#72DDE3] uppercase tracking-wider mb-3">
                  "{item.highlight}"
                </p>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#AEBFC3] leading-relaxed mb-8 font-light">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Result Photo */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="text-xs font-light text-[#F7FBFC]">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-[#AEBFC3]/60 block font-light">
                      {item.role}
                    </span>
                  </div>
                </div>

                <span className="text-[9px] text-[#72DDE3] uppercase font-mono tracking-wider">
                  Verificado
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
