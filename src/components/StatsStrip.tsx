import React from 'react';
import { STATS_DATA } from '../data/mockData';

export const StatsStrip: React.FC = () => {
  return (
    <section className="py-12 sm:py-14 bg-[#080B0D] border-y border-white/10 relative overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center sm:items-start text-center sm:text-left border-l-0 sm:border-l sm:border-white/10 sm:first:border-none sm:pl-8 first:pl-0"
            >
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#72DDE3] mb-1">
                {stat.value}
              </span>
              <p className="text-[11px] uppercase tracking-widest text-[#AEBFC3] font-light leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
