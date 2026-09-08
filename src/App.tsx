import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScholarData, DiscoveredScholarState, FinalCuratorSubmission } from './types';
import { SCHOLARS_DATA } from './data/scholarsData';
import { shuffleArray } from './utils/shuffle';
import { IntroScreen } from './components/IntroScreen';
import { MuseumHeader } from './components/MuseumHeader';
import { MuseumHall } from './components/MuseumHall';
import { CuratorModal } from './components/CuratorModal';
import { FinalCuratorMission } from './components/FinalCuratorMission';
import { MuseumReportModal } from './components/MuseumReportModal';
import { CompletionModal } from './components/CompletionModal';

const STORAGE_KEY_STATE = 't_islamic_museum_state_v1';
const STORAGE_KEY_SUBMISSION = 't_islamic_museum_submission_v1';

// Safe SCORM completion trigger (Rule 6 compliant, no console logs)
const triggerScormCompletion = () => {
  try {
    const win = window as any;
    const api =
      win.pipwerks?.SCORM ||
      win.SCORM ||
      win.API ||
      win.parent?.API ||
      win.parent?.pipwerks?.SCORM;
    if (api) {
      if (typeof api.set === 'function') {
        api.set('cmi.core.lesson_status', 'completed');
        api.set('cmi.completion_status', 'completed');
        api.save();
      } else if (typeof api.LMSSetValue === 'function') {
        api.LMSSetValue('cmi.core.lesson_status', 'completed');
        api.LMSCommit('');
      }
    }
  } catch {
    // Ignore cross-origin or missing API
  }
};

// Helper to create initial completed museum state for inspecting the completion screen
const createInitialScholarsState = (): Record<string, DiscoveredScholarState> => {
  const initial: Record<string, DiscoveredScholarState> = {};
  SCHOLARS_DATA.forEach((scholar) => {
    initial[scholar.id] = {
      isNameGuessed: true,
      unlockedClues: [scholar.clue1.id, scholar.clue2.id, scholar.clue3.id],
      isFullyEvaluated: true
    };
  });
  return initial;
};

export default function App() {
  // Randomize scholars order every time the activity / page is loaded
  const [shuffledScholars, setShuffledScholars] = useState<ScholarData[]>(() => {
    return shuffleArray(SCHOLARS_DATA);
  });

  // Main collection state - initial state configured to show all completed
  const [scholarsState, setScholarsState] = useState<Record<string, DiscoveredScholarState>>(() => {
    return createInitialScholarsState();
  });

  // Final Curator Mission Submission - starts clean on reload
  const [submission, setSubmission] = useState<FinalCuratorSubmission | null>(null);

  // Entrance and termination screen states (isStarted: true, showCompletionModal: true to immediately review)
  const [isStarted, setIsStarted] = useState<boolean>(true);
  const [isTerminated, setIsTerminated] = useState<boolean>(false);

  // Modals
  const [selectedScholar, setSelectedScholar] = useState<ScholarData | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(true);
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
    setIsStarted(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY_STATE);
      localStorage.removeItem(STORAGE_KEY_SUBMISSION);
    }
  };

  // Restart activity: resets state and takes student to intro screen
  const handleRestartActivity = () => {
    triggerScormCompletion();
    handleResetExploration();
    setShowCompletionModal(false);
  };

  // Terminate activity: closes window or shows graceful termination screen
  const handleTerminateActivity = () => {
    triggerScormCompletion();
    setShowCompletionModal(false);
    setIsTerminated(true);
    try {
      window.close();
    } catch {
      // Ignore
    }
  };

  if (isTerminated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a2328] select-none">
        {/* Historical Seljuk Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/images/seljuk_scholars_bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a272c]/90 via-[#0f766e]/40 to-[#061e22]/95 backdrop-blur-[2px]" />
        <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-md border-2 border-[#0d9488]/40 rounded-3xl p-8 sm:p-10 text-center shadow-[0_25px_60px_rgba(0,0,0,0.5)] text-[#0f2933]">
          <div className="absolute top-0 inset-x-0 h-2.5 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0284c7]" />
          <div className="absolute top-2.5 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f2933] mb-4">
            Etkinlik Tamamlandı
          </h2>
          <p className="font-serif text-base text-[#134e4a] leading-relaxed mb-6">
            Etkinliği başarıyla tamamladınız. Bu sekmeyi veya tarayıcı penceresini kapatabilirsiniz.
          </p>
          <button
            onClick={() => window.close()}
            className="px-8 py-3 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] text-white font-serif font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer shadow-teal-700/20"
          >
            Pencereyi Kapat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#e6f7f8] via-[#f0fdfa] to-[#dcf0f2] text-[#0f2933] selection:bg-[#0d9488]/30 selection:text-[#0f766e]">
      <AnimatePresence mode="wait">
        {!isStarted ? (
          <IntroScreen key="intro" onStart={() => setIsStarted(true)} />
        ) : (
          <motion.div
            key="activity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen w-full flex flex-col"
          >
            {/* Museum Header Bar */}
            <MuseumHeader
              scholarsState={scholarsState}
              onOpenFinalMission={() => setShowFinalMission(true)}
              onOpenReport={() => setShowReport(true)}
              onOpenCompletion={() => setShowCompletionModal(true)}
              hasFinalSubmission={Boolean(submission)}
            />

            {/* Main Museum Gallery Floor */}
            <main className="flex-1 flex flex-col relative overflow-hidden">
              <MuseumHall
                scholars={shuffledScholars}
                scholarsState={scholarsState}
                onSelectScholar={(scholar) => setSelectedScholar(scholar)}
                onOpenFinalMission={() => setShowFinalMission(true)}
                onOpenCompletion={() => setShowCompletionModal(true)}
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
                  onFinishAllScholars={() => setShowCompletionModal(true)}
                />
              )}
            </AnimatePresence>

            {/* Completion Popup Modal */}
            <AnimatePresence>
              {showCompletionModal && (
                <CompletionModal
                  isOpen={showCompletionModal}
                  onClose={() => setShowCompletionModal(false)}
                  onRestart={handleRestartActivity}
                  onTerminate={handleTerminateActivity}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
