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

  // Entrance and termination screen states
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isTerminated, setIsTerminated] = useState<boolean>(false);

  // Modals
  const [selectedScholar, setSelectedScholar] = useState<ScholarData | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(false);
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
