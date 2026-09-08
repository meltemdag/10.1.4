import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScholarData, DiscoveredScholarState, FinalCuratorSubmission } from './types';
import { SCHOLARS_DATA } from './data/scholarsData';
import { shuffleArray } from './utils/shuffle';
import { MuseumHeader } from './components/MuseumHeader';
import { MuseumHall } from './components/MuseumHall';
import { CuratorModal } from './components/CuratorModal';
import { FinalCuratorMission } from './components/FinalCuratorMission';
import { MuseumReportModal } from './components/MuseumReportModal';

const STORAGE_KEY_STATE = 't_islamic_museum_state_v1';
const STORAGE_KEY_SUBMISSION = 't_islamic_museum_submission_v1';
const STORAGE_KEY_WELCOMED = 't_islamic_museum_welcomed_v1';

// Helper to create initial pristine museum state with all 9 portraits closed
const createInitialScholarsState = (): Record<string, DiscoveredScholarState> => {
  const initial: Record<string, DiscoveredScholarState> = {};
  SCHOLARS_DATA.forEach((scholar) => {
    initial[scholar.id] = {
      isNameGuessed: false,
      unlockedClues: [],
      isFullyEvaluated: false
    };
  });
  return initial;
};

export default function App() {
  // Randomize scholars order every time the activity / page is loaded
  const [shuffledScholars, setShuffledScholars] = useState<ScholarData[]>(() => {
    return shuffleArray(SCHOLARS_DATA);
  });

  // Main collection state - always starts fresh with all 9 portraits closed on page refresh
  const [scholarsState, setScholarsState] = useState<Record<string, DiscoveredScholarState>>(() => {
    if (typeof window !== 'undefined') {
      try {
        // Clear any old stored states so previous session caches are wiped
        localStorage.removeItem(STORAGE_KEY_STATE);
        localStorage.removeItem(STORAGE_KEY_SUBMISSION);
      } catch {
        // Ignore
      }
    }
    return createInitialScholarsState();
  });

  // Final Curator Mission Submission - starts clean on reload
  const [submission, setSubmission] = useState<FinalCuratorSubmission | null>(null);

  // Modals
  const [selectedScholar, setSelectedScholar] = useState<ScholarData | null>(null);
  const [showWelcome, setShowWelcome] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY_WELCOMED) !== 'true';
    }
    return true;
  });
  const [showFinalMission, setShowFinalMission] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);

  // Check if all 9 are evaluated
  const allEvaluated = SCHOLARS_DATA.every(
    (scholar) => scholarsState[scholar.id]?.isFullyEvaluated
  );

  // Partial updates helper
  const handleUpdateScholarState = (scholarId: string, updates: Partial<DiscoveredScholarState>) => {
    setScholarsState((prev) => {
      const current = prev[scholarId] || {
        isNameGuessed: false,
        unlockedClues: [],
        isFullyEvaluated: false
      };
      return {
        ...prev,
        [scholarId]: {
          ...current,
          ...updates
        }
      };
    });
  };

  // Open next unevaluated scholar in sequence
  const handleOpenNextScholar = () => {
    if (!selectedScholar) return;
    const currentIdx = shuffledScholars.findIndex((s) => s.id === selectedScholar.id);
    const nextIdx = (currentIdx + 1) % shuffledScholars.length;
    setSelectedScholar(shuffledScholars[nextIdx]);
  };

  // Close welcome modal
  const handleDismissWelcome = () => {
    setShowWelcome(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_WELCOMED, 'true');
    }
  };

  // Reset entire exploration
  const handleResetExploration = () => {
    const initial: Record<string, DiscoveredScholarState> = {};
    SCHOLARS_DATA.forEach((scholar) => {
      initial[scholar.id] = {
        isNameGuessed: false,
        unlockedClues: [],
        isFullyEvaluated: false
      };
    });
    setScholarsState(initial);
    setSubmission(null);
    setShowReport(false);
    setShowFinalMission(false);
    setShuffledScholars(shuffleArray(SCHOLARS_DATA));
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY_STATE);
      localStorage.removeItem(STORAGE_KEY_SUBMISSION);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#e6f7f8] via-[#f0fdfa] to-[#dcf0f2] text-[#0f2933] selection:bg-[#0d9488]/30 selection:text-[#0f766e]">
      {/* Museum Header Bar */}
      <MuseumHeader
        scholarsState={scholarsState}
        onOpenFinalMission={() => setShowFinalMission(true)}
        onOpenReport={() => setShowReport(true)}
        hasFinalSubmission={Boolean(submission)}
      />

      {/* Main Museum Gallery Floor */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <MuseumHall
          scholars={shuffledScholars}
          scholarsState={scholarsState}
          onSelectScholar={(scholar) => setSelectedScholar(scholar)}
          onOpenFinalMission={() => setShowFinalMission(true)}
          allCompleted={allEvaluated}
        />
      </main>

      {/* Curator Inspection Modal */}
      <AnimatePresence>
        {selectedScholar && (
          <CuratorModal
            scholar={selectedScholar}
            scholarState={
              scholarsState[selectedScholar.id] || {
                isNameGuessed: false,
                unlockedClues: [],
                isFullyEvaluated: false
              }
            }
            allScholarsState={scholarsState}
            onClose={() => setSelectedScholar(null)}
            onUpdateState={handleUpdateScholarState}
            onOpenNext={handleOpenNextScholar}
          />
        )}
      </AnimatePresence>

      {/* Final Curator Mission Modal */}
      <AnimatePresence>
        {showFinalMission && (
          <FinalCuratorMission
            scholarsState={scholarsState}
            onClose={() => setShowFinalMission(false)}
            onCompleteMission={(newSubmission) => {
              setSubmission(newSubmission);
              setShowFinalMission(false);
              setShowReport(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* Museum Completion & Certification Report Modal */}
      <AnimatePresence>
        {showReport && submission && (
          <MuseumReportModal
            submission={submission}
            onClose={() => setShowReport(false)}
            onResetExploration={handleResetExploration}
          />
        )}
      </AnimatePresence>

      {/* Welcome & Learning Mission Entry Dialog (PRD Section 5) */}
      <AnimatePresence>
        {showWelcome && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f2933]/55 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="relative w-full max-w-lg bg-white border-2 border-[#0d9488] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(13,148,136,0.25)] text-[#0f2933] overflow-hidden"
            >
              {/* Top Seljuk Turquoise Banner & Arch Accent */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0284c7]" />

              <div className="flex justify-between items-start mb-3 mt-1">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0f2933] leading-tight">
                  Portre Alanına Hoş Geldiniz
                </h2>

                <button
                  onClick={handleDismissWelcome}
                  className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[#0f2933] hover:bg-[#e0f2f1] rounded-lg transition-colors font-bold text-base leading-none"
                  title="Kapat"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#f0fdfa] border-2 border-[#0d9488]/30 shadow-inner my-4">
                <p className="font-serif text-sm sm:text-base text-[#134e4a] leading-relaxed">
                  Aşağıda verilen portreleri sırasıyla inceleyiniz. İpuçlarından hareketle âlimin kimliğini belirleyiniz; bilgi kartlarını okuyup değerlendirme sorularını ve somut kanıtları yanıtlayarak incelemenizi tamamlayınız. Tüm incelemeleri bitirdiğinizde açılacak olan kapanış görevini yerine getiriniz.
                </p>
              </div>

              {/* Learning methodology badge */}
              <div className="flex items-center justify-center space-x-1.5 text-xs text-[#0f766e] font-serif py-2 border-y border-[#0d9488]/20 mb-5">
                <span>Keşfet → İncele → Belirle → Kanıtla → Değerlendir</span>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleDismissWelcome}
                  className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all transform active:scale-95 shadow-teal-700/20"
                >
                  İncelemeye Başlayınız
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
