import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ScholarData, DiscoveredScholarState } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';
import { PortraitArt } from './PortraitArt';

interface MuseumHallProps {
  scholars: ScholarData[];
  scholarsState: Record<string, DiscoveredScholarState>;
  onSelectScholar: (scholar: ScholarData) => void;
  onOpenFinalMission: () => void;
  allCompleted: boolean;
}

export const MuseumHall: React.FC<MuseumHallProps> = ({
  scholars,
  scholarsState,
  onSelectScholar,
  onOpenFinalMission,
  allCompleted
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeNicheIndex, setActiveNicheIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'walkthrough' | 'overview'>('walkthrough');

  // Handle scroll snap detection
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = 320; // approximate width + gap
    const newIndex = Math.round(scrollLeft / itemWidth);
    if (newIndex >= 0 && newIndex < scholars.length && newIndex !== activeNicheIndex) {
      setActiveNicheIndex(newIndex);
    }
  };

  const scrollToNiche = (index: number) => {
    setActiveNicheIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetElement = container.children[index] as HTMLElement;
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeNicheIndex - 1);
    scrollToNiche(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(scholars.length - 1, activeNicheIndex + 1);
    scrollToNiche(nextIdx);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeNicheIndex]);

  return (
    <div className="relative w-full flex flex-col flex-1 overflow-hidden bg-gradient-to-b from-[#e6f4f6] via-[#f0f9fa] to-[#ddedf0]">
      {/* Museum Architectural Background Texture (Authentic 8-Pointed Seljuk Star Geometry) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="seljuk-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* 8-pointed Seljuk Star */}
              <polygon points="40,6 49,29 74,40 49,51 40,74 31,51 6,40 31,29" fill="none" stroke="#0d9488" strokeWidth="1.2" opacity="0.6" />
              <rect x="22" y="22" width="36" height="36" fill="none" stroke="#0891b2" strokeWidth="0.8" opacity="0.4" />
              <circle cx="40" cy="40" r="7" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.5" />
              <circle cx="0" cy="0" r="14" fill="none" stroke="#0d9488" strokeWidth="0.6" opacity="0.3" />
              <circle cx="80" cy="0" r="14" fill="none" stroke="#0d9488" strokeWidth="0.6" opacity="0.3" />
              <circle cx="0" cy="80" r="14" fill="none" stroke="#0d9488" strokeWidth="0.6" opacity="0.3" />
              <circle cx="80" cy="80" r="14" fill="none" stroke="#0d9488" strokeWidth="0.6" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seljuk-pattern)" />
        </svg>
      </div>

      {/* Atmospheric Seljuk Hall Lighting (Torches, sunlight & firuze ambient glows) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0d9488]/15 rounded-full blur-[130px]" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#06b6d4]/12 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#cde6ea]/40 via-transparent to-transparent" />
      </div>

      {/* Hall Subheader / 9 Portals Micro Map Indicator */}
      <div className="relative z-10 px-4 sm:px-8 py-2.5 border-b border-[#0d9488]/20 bg-white/85 backdrop-blur-md flex items-center justify-center gap-4 shadow-xs">
        {/* Center: 9 Portals Micro Map Indicator */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-1">
          {scholars.map((scholar, idx) => {
            const state = scholarsState[scholar.id];
            const isGuessed = state?.isNameGuessed;
            const isCompleted = state?.isFullyEvaluated;
            const isActive = activeNicheIndex === idx;

            return (
              <button
                key={scholar.id}
                onClick={() => {
                  scrollToNiche(idx);
                }}
                className={`relative w-7 h-7 rounded-full border transition-all flex items-center justify-center font-serif text-[11px] font-bold ${
                  isCompleted
                    ? 'bg-[#0d9488] border-[#0f766e] text-white shadow-sm'
                    : isGuessed
                    ? 'bg-[#0284c7] border-sky-400 text-white'
                    : 'bg-white border-[#0d9488]/40 text-[#0d9488] hover:border-[#0d9488]'
                } ${isActive ? 'ring-2 ring-[#0d9488] scale-110 shadow-sm' : ''}`}
                title={`${idx + 1}. ${isGuessed ? scholar.name : 'Gizemli Portre'}`}
              >
                {isCompleted ? '✓' : idx + 1}
              </button>
            );
          })}
        </div>

        {/* Right: Final Mission Call to Action Button */}
        {allCompleted && (
          <button
            onClick={onOpenFinalMission}
            className="sm:absolute sm:right-6 px-3.5 py-1.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white font-serif font-bold text-xs rounded-lg shadow-md border border-teal-300/40 animate-pulse hover:animate-none"
          >
            <span>Kapanış Görevi Açıldı!</span>
          </button>
        )}
      </div>

      {/* Top Guidance Banner */}
      <div className="relative z-10 px-4 pt-3 pb-1 max-w-4xl mx-auto w-full">
        <div className="bg-white/90 border border-[#0d9488]/30 rounded-2xl px-4 py-2.5 sm:px-6 shadow-xs text-center backdrop-blur-xs">
          <p className="text-xs sm:text-sm text-[#0f2933] font-serif leading-relaxed">
            Portre alanında yer alan 9 portreyi sırasıyla inceleyiniz. İpuçlarından hareketle âlimin kimliğini belirleyiniz; bilgi kartlarını okuyup değerlendirme sorularını ve somut kanıtları yanıtlayarak incelemenizi tamamlayınız.
          </p>
        </div>
      </div>

      {/* VIEW MODE 1: WALKTHROUGH CORRIDOR (Cinematic Pan & Stroll) */}
      {viewMode === 'walkthrough' ? (
        <div className="relative flex-1 flex flex-col justify-center overflow-hidden py-4 sm:py-8">
          {/* Left / Right Nav Arrows */}
          <button
            disabled={activeNicheIndex === 0}
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/90 border border-[#0d9488]/40 text-[#0f766e] hover:bg-[#0d9488] hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center shadow-lg transition-all"
            aria-label="Önceki Portre"
          >
            <span className="text-2xl leading-none font-bold text-[#0f766e] group-hover:text-white select-none pb-0.5">‹</span>
          </button>

          <button
            disabled={activeNicheIndex === scholars.length - 1}
            onClick={handleNext}
            className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/90 border border-[#0d9488]/40 text-[#0f766e] hover:bg-[#0d9488] hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center shadow-lg transition-all"
            aria-label="Sonraki Portre"
          >
            <span className="text-2xl leading-none font-bold text-[#0f766e] group-hover:text-white select-none pb-0.5">›</span>
          </button>

          {/* Horizontal Gallery Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center space-x-6 sm:space-x-12 px-8 sm:px-24 overflow-x-auto overflow-y-hidden py-6 scrollbar-none snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {scholars.map((scholar, idx) => {
              const state = scholarsState[scholar.id];
              const isGuessed = state?.isNameGuessed;
              const isEvaluated = state?.isFullyEvaluated;
              const isCurrent = activeNicheIndex === idx;

              return (
                <div
                  key={scholar.id}
                  className="snap-center shrink-0 w-[270px] sm:w-[320px] flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    onSelectScholar(scholar);
                  }}
                >
                  {/* Classical Architectural Pointed Arch Niche Frame */}
                  <div
                    className={`relative w-full rounded-2xl p-3.5 sm:p-4 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-white border-2 border-[#0d9488] shadow-[0_20px_45px_rgba(13,148,136,0.2),0_4px_16px_rgba(0,0,0,0.06)] ring-4 ring-[#14b8a6]/20'
                        : 'bg-white/85 border border-[#0d9488]/30 hover:border-[#0d9488] hover:bg-white shadow-md'
                    }`}
                  >
                    {/* Framed Canvas */}
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border-4 border-[#0f766e] ring-2 ring-[#fbbf24]/50 bg-[#e6f4f6] shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                      <PortraitArt
                        scholarId={scholar.id}
                        isGuessed={isGuessed}
                      />

                      {/* Spotlight illumination on hover */}
                      <div className="absolute inset-0 bg-[#0d9488]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    {/* Walkthrough Plaque */}
                    <div className="mt-3 text-center px-1 min-h-[42px] flex flex-col justify-center">
                      {isGuessed ? (
                        <h3 className="font-serif font-bold text-sm sm:text-base text-[#0f2933] mt-0.5 group-hover:text-[#0d9488] transition-colors truncate">
                          {scholar.name}
                        </h3>
                      ) : (
                        <h3 className="font-serif font-bold text-sm sm:text-base text-[#0f766e] group-hover:text-[#0d9488] transition-colors truncate">
                          Kim Olduğumu Keşfet
                        </h3>
                      )}
                    </div>
                  </div>

                  {/* Floor Reflection Stand Pedestal */}
                  <div className="w-3/4 h-2 bg-gradient-to-r from-transparent via-[#0d9488]/30 to-transparent mt-2 blur-[1px]" />
                </div>
              );
            })}
          </div>


        </div>
      ) : (
        /* VIEW MODE 2: OVERVIEW WALL (All 9 portraits on one majestic exhibition wall) */
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {scholars.map((scholar) => {
              const state = scholarsState[scholar.id];
              const isGuessed = state?.isNameGuessed;
              const isEvaluated = state?.isFullyEvaluated;

              return (
                <div
                  key={scholar.id}
                  onClick={() => {
                    onSelectScholar(scholar);
                  }}
                  className="bg-white border border-[#0d9488]/30 hover:border-[#0d9488] hover:shadow-[0_20px_40px_rgba(13,148,136,0.18)] rounded-2xl p-4 shadow-sm cursor-pointer group transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border-4 border-[#0f766e] ring-2 ring-[#fbbf24]/40 bg-[#e6f4f6] shadow-inner">
                    <PortraitArt
                      scholarId={scholar.id}
                      isGuessed={isGuessed}
                    />
                  </div>

                  {/* Gallery Plaque */}
                  <div className="mt-3 text-center px-1 min-h-[42px] flex flex-col justify-center">
                    {isGuessed ? (
                      <h3 className="font-serif font-bold text-sm sm:text-base text-[#0f2933] mt-0.5 group-hover:text-[#0d9488] transition-colors truncate">
                        {scholar.name}
                      </h3>
                    ) : (
                      <h3 className="font-serif font-bold text-sm sm:text-base text-[#0f766e] group-hover:text-[#0d9488] transition-colors truncate">
                        Kim Olduğumu Keşfet
                      </h3>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
