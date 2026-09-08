import React from 'react';
import { DiscoveredScholarState } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';

interface MuseumHeaderProps {
  scholarsState: Record<string, DiscoveredScholarState>;
  onOpenFinalMission: () => void;
  onOpenReport?: () => void;
  hasFinalSubmission: boolean;
}

export const MuseumHeader: React.FC<MuseumHeaderProps> = ({
  scholarsState,
  onOpenFinalMission,
  onOpenReport,
  hasFinalSubmission
}) => {
  // Count evaluated & guessed
  const evaluatedCount = SCHOLARS_DATA.filter(
    (s) => scholarsState[s.id]?.isFullyEvaluated
  ).length;

  const isAllEvaluated = evaluatedCount === SCHOLARS_DATA.length;

  return (
    <header className="relative z-30 w-full border-b border-[#0f766e]/30 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0284c7] text-white shadow-md select-none">
      {/* Top Seljuk Gold Inlay Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-500/20 via-amber-300 to-amber-500/20 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Refined Elegant Title */}
        <div className="flex items-center">
          <h1 className="font-serif text-lg sm:text-2xl tracking-wide drop-shadow-sm flex flex-wrap items-baseline gap-x-2">
            <span className="font-medium text-white/95">Türkistan’dan Anadolu’ya</span>
            <span className="font-semibold text-[#fef08a] tracking-wider">Medeniyet Öncüleri</span>
          </h1>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center space-x-3">
          {(hasFinalSubmission || isAllEvaluated) && (
            <div className="flex items-center space-x-2">
              {hasFinalSubmission && onOpenReport && (
                <button
                  onClick={onOpenReport}
                  className="px-3.5 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-serif font-bold rounded-xl border border-white/40 shadow transition-colors backdrop-blur-sm"
                >
                  <span className="hidden sm:inline">Etkinlik Raporum</span>
                </button>
              )}

              {isAllEvaluated && !hasFinalSubmission && (
                <button
                  onClick={onOpenFinalMission}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#fef08a] hover:to-[#fbbf24] text-[#0f2933] text-xs font-serif font-bold rounded-xl border border-[#fef08a] shadow-md transition-all hover:scale-105"
                >
                  <span>Kapanış Görevi</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

