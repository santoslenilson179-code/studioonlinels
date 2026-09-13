import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#080B0D] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[#72DDE3]">
            Perguntas Frequentes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7FBFC]">
            Dúvidas & <span className="italic font-light text-[#72DDE3]">Respostas.</span>
          </h2>
        </div>

        {/* Accordion Items */}
        <div className="space-y-2.5">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-sm border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#151B1E] border-[#72DDE3]/50 shadow-[0_0_15px_rgba(114,221,227,0.1)]'
                    : 'bg-[#151B1E] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#72DDE3] shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-light text-[#F7FBFC]">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'text-[#72DDE3] rotate-180' : 'text-[#AEBFC3]/60'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#AEBFC3] font-light leading-relaxed border-t border-white/5 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
