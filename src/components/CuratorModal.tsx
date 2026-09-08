import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScholarData, DiscoveredScholarState } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';
import { shuffleArray } from '../utils/shuffle';
import { PortraitArt } from './PortraitArt';

interface CuratorModalProps {
  scholar: ScholarData;
  scholarState: DiscoveredScholarState;
  allScholarsState: Record<string, DiscoveredScholarState>;
  onClose: () => void;
  onUpdateState: (scholarId: string, updates: Partial<DiscoveredScholarState>) => void;
  onOpenNext?: () => void;
  onFinishAllScholars?: () => void;
}

export const CuratorModal: React.FC<CuratorModalProps> = ({
  scholar,
  scholarState,
  allScholarsState,
  onClose,
  onUpdateState,
  onOpenNext,
  onFinishAllScholars
}) => {
  // Local stage management: 'clues' | 'guessing' | 'revealed' | 'curator_eval' | 'evidence' | 'completed'
  const isGuessed = scholarState.isNameGuessed;
  const isFullyEvaluated = scholarState.isFullyEvaluated;
  const [hasCompletedLocal, setHasCompletedLocal] = useState(false);
  const isComplete = isFullyEvaluated || hasCompletedLocal;

  const [activeTab, setActiveTab] = useState<'clues' | 'guessing' | 'knowledge' | 'curator' | 'evidence'>(
    isFullyEvaluated ? 'knowledge' : isGuessed ? 'curator' : 'clues'
  );

  const [selectedGuessId, setSelectedGuessId] = useState<string | null>(null);
  const [guessFeedback, setGuessFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Shuffled candidate scholars for Tab 2 (Guessing)
  const shuffledCandidates = useMemo(() => {
    return shuffleArray(SCHOLARS_DATA);
  }, [scholar.id]);

  // Shuffled Question 1 options and feedback
  const shuffledCuratorOptions = useMemo(() => {
    const list = scholar.curatorOptions.map((text, idx) => ({
      text,
      feedback: scholar.curatorFeedbacks?.[idx] || '',
      isCorrect: idx === scholar.correctCuratorOption
    }));
    return shuffleArray(list);
  }, [scholar.id]);

  // Shuffled Question 2 options and feedback
  const shuffledAnatoliaOptions = useMemo(() => {
    const list = scholar.anatoliaOptions.map((text, idx) => ({
      text,
      feedback: scholar.anatoliaFeedbacks?.[idx] || '',
      isCorrect: idx === scholar.correctAnatoliaOption
    }));
    return shuffleArray(list);
  }, [scholar.id]);

  // Shuffled Question 3 (Evidence) options
  const shuffledEvidenceOptions = useMemo(() => {
    return shuffleArray([...scholar.evidenceOptions]);
  }, [scholar.id]);

  // Evaluation local state
  const [selectedCuratorOpt, setSelectedCuratorOpt] = useState<number | null>(() => {
    if (scholarState.isFullyEvaluated) {
      return shuffledCuratorOptions.findIndex((o) => o.isCorrect);
    }
    return null;
  });
  const [selectedAnatoliaOpt, setSelectedAnatoliaOpt] = useState<number | null>(() => {
    if (scholarState.isFullyEvaluated) {
      return shuffledAnatoliaOptions.findIndex((o) => o.isCorrect);
    }
    return null;
  });
  const [selectedEvidenceOpt, setSelectedEvidenceOpt] = useState<number | null>(() => {
    if (scholarState.isFullyEvaluated) {
      return shuffledEvidenceOptions.findIndex((o) => o.isCorrect);
    }
    return null;
  });
  const [evidenceFeedback, setEvidenceFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Unlocked clues helper
  const unlockedClues = scholarState.unlockedClues || [];

  const handleUnlockClue = (clueId: string) => {
    if (!unlockedClues.includes(clueId)) {
      const updated = [...unlockedClues, clueId];
      onUpdateState(scholar.id, { unlockedClues: updated });
    }
  };

  // Handle Guessing
  const handleMakeGuess = () => {
    if (!selectedGuessId) return;

    if (selectedGuessId === scholar.id) {
      setGuessFeedback({
        type: 'success',
        message: 'Doğru! Portredeki âlimin kimliğini başarıyla belirlediniz.'
      });
      onUpdateState(scholar.id, { isNameGuessed: true });
      setTimeout(() => {
        setActiveTab('knowledge');
        setGuessFeedback(null);
      }, 1400);
    } else {
      setGuessFeedback({
        type: 'error',
        message: 'Kanıtları bir daha inceleyiniz. Portredeki âlimin eseri ve düşüncesi sizlere ipucu vermektedir.'
      });
    }
  };

  // Handle Evidence Submission
  const handleVerifyEvidence = () => {
    if (selectedEvidenceOpt === null) return;

    const opt = shuffledEvidenceOptions[selectedEvidenceOpt];
    if (opt?.isCorrect) {
      setHasCompletedLocal(true);
      setEvidenceFeedback({
        type: 'success',
        message: 'Doğru! Değerlendirmeniz somut kanıtla başarıyla doğrulandı.'
      });
      onUpdateState(scholar.id, {
        isFullyEvaluated: true,
        curatorAnswerIndex: selectedCuratorOpt ?? undefined,
        anatoliaAnswerIndex: selectedAnatoliaOpt ?? undefined,
        evidenceAnswerIndex: selectedEvidenceOpt,
        evaluatedAt: new Date().toISOString()
      });
    } else {
      setEvidenceFeedback({
        type: 'error',
        message: opt?.explanation || 'Bu seçenek çıkarımınızı desteklememektedir. İlgili âlimin birincil kaynak niteliğindeki eserlerini ve kayıtlarını inceleyiniz.'
      });
    }
  };

  // Check if all other 8 scholars are fully evaluated
  const isAllOtherScholarsCompleted = SCHOLARS_DATA.every((s) => {
    if (s.id === scholar.id) return true;
    return allScholarsState[s.id]?.isFullyEvaluated;
  });

  const handleCompleteInspection = () => {
    const isThisScholarValid =
      isFullyEvaluated ||
      (selectedEvidenceOpt !== null && Boolean(shuffledEvidenceOptions[selectedEvidenceOpt]?.isCorrect));

    if (!isFullyEvaluated && selectedEvidenceOpt !== null && shuffledEvidenceOptions[selectedEvidenceOpt]?.isCorrect) {
      onUpdateState(scholar.id, {
        isFullyEvaluated: true,
        curatorAnswerIndex: selectedCuratorOpt ?? undefined,
        anatoliaAnswerIndex: selectedAnatoliaOpt ?? undefined,
        evidenceAnswerIndex: selectedEvidenceOpt,
        evaluatedAt: new Date().toISOString()
      });
    }

    onClose();

    // Kilitleme mantığı: YALNIZCA tüm 9 portre incelenmişse ve İncelemeyi Tamamla tıklandığında açılır
    if (isThisScholarValid && isAllOtherScholarsCompleted && onFinishAllScholars) {
      setTimeout(() => {
        onFinishAllScholars();
      }, 350);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0f2933]/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-5xl xl:max-w-6xl max-h-[94vh] flex flex-col bg-white border-2 border-[#0d9488] rounded-3xl shadow-[0_25px_70px_rgba(13,148,136,0.25)] overflow-hidden text-[#0f2933]"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3.5 z-30 w-8 h-8 rounded-full bg-white hover:bg-rose-50 border border-slate-300 hover:border-rose-300 text-slate-700 hover:text-rose-600 flex items-center justify-center transition-all font-bold text-sm leading-none shadow-xs"
          title="Kapat"
        >
          ✕
        </button>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#fafdfd]">
          {/* Left Column: Portrait Painting Box */}
          <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3">
            {/* Top Identity Card above portrait */}
            {isGuessed && (
              <div className="w-full p-3 sm:p-3.5 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0284c7] text-white border border-[#0d9488]/30 rounded-2xl text-center shadow-md">
                <h3 className="font-serif font-bold text-white text-base sm:text-lg drop-shadow-xs">
                  {scholar.name}
                </h3>
                <span className="block text-xs font-serif text-[#e6fffa]/85 mt-0.5">
                  {scholar.period}
                </span>
              </div>
            )}

            <div className="relative w-full aspect-[3/4] max-w-[260px] md:max-w-[280px] lg:max-w-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0f766e] ring-2 ring-[#fbbf24]/50 bg-[#e6f4f6]">
              <PortraitArt
                scholarId={scholar.id}
                isGuessed={isGuessed}
                isInspecting={true}
              />
            </div>
          </div>

          {/* Right Column: Tab Content */}
          <div className="md:col-span-8 flex flex-col justify-between">
            {/* TAB 1: CLUES */}
            {activeTab === 'clues' && (
              <div className="space-y-4">
                {/* 3 Clues list */}
                <div className="space-y-3">
                  {[scholar.clue1, scholar.clue2, scholar.clue3].map((clue, idx) => {
                    const isUnlocked = unlockedClues.includes(clue.id);
                    return (
                      <div
                        key={clue.id}
                        className={`rounded-2xl transition-all duration-300 ${
                          isUnlocked
                            ? 'bg-white border-2 border-[#0d9488] shadow-md p-4'
                            : 'bg-white/80 border border-[#0d9488]/25 p-3 hover:border-[#0d9488] hover:bg-white shadow-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2.5">
                            <span className="w-6 h-6 rounded-full bg-[#0d9488]/15 text-[#0f766e] flex items-center justify-center text-xs font-bold font-serif">
                              {idx + 1}
                            </span>
                            <span className="font-serif text-sm font-bold text-[#0f2933]">
                              {clue.badge}
                            </span>
                          </div>

                          {!isUnlocked && (
                            <button
                              onClick={() => handleUnlockClue(clue.id)}
                              className="px-3.5 py-1.5 text-xs font-serif font-semibold text-white bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] rounded-xl shadow transition-all transform active:scale-95 shadow-teal-700/20"
                            >
                              Göster
                            </button>
                          )}
                        </div>

                        {isUnlocked && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2.5 text-sm text-[#0f2933] leading-relaxed pl-8 border-l-2 border-[#0d9488]/40"
                          >
                            {clue.text}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Button to Next Step */}
                <div className="pt-3 flex justify-end">
                  {!isGuessed ? (
                    <button
                      onClick={() => {
                        setActiveTab('guessing');
                      }}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all shadow-teal-700/20"
                    >
                      Tahmin Aşamasına Geçiniz
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setActiveTab('knowledge');
                      }}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] text-white font-serif font-bold text-sm rounded-xl shadow transition-all"
                    >
                      Bilgi Kartlarını İnceleyiniz
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: GUESSING */}
            {activeTab === 'guessing' && !isGuessed && (
              <div className="space-y-4">
                <div className="bg-[#f0fdfa] border border-[#0d9488]/30 rounded-2xl p-4">
                  <h4 className="font-serif font-bold text-base text-[#0f766e]">
                    Bu portredeki âlim kimdir?
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    İncelediğiniz kanıtlara dayanarak 9 büyük âlim arasından doğru olanı belirleyiniz.
                  </p>
                </div>

                {/* 9 candidate scholars grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {shuffledCandidates.map((candidate) => {
                    const isSelected = selectedGuessId === candidate.id;
                    return (
                      <button
                        key={candidate.id}
                        onClick={() => {
                          setSelectedGuessId(candidate.id);
                          setGuessFeedback(null);
                        }}
                        className={`p-3.5 sm:p-4 text-center rounded-2xl border transition-all font-serif flex items-center justify-center min-h-[56px] group ${
                          isSelected
                            ? 'bg-[#e0f2f1] border-2 border-[#0d9488] text-[#0f766e] shadow-md ring-2 ring-[#0d9488]/30'
                            : 'bg-white border-2 border-[#0d9488]/20 text-[#0f2933] hover:border-[#0d9488] hover:bg-[#f0fdfa] shadow-xs'
                        }`}
                      >
                        <span className="font-bold text-sm sm:text-base text-[#0f2933] truncate group-hover:text-[#0d9488] transition-colors">
                          {candidate.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback message */}
                <AnimatePresence>
                  {guessFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`p-3.5 rounded-2xl border flex items-start space-x-2.5 text-xs ${
                        guessFeedback.type === 'success'
                          ? 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950'
                          : 'bg-rose-50 border-2 border-rose-500 text-rose-950'
                      }`}
                    >
                      {guessFeedback.type === 'success' ? (
                        <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">!</span>
                      )}
                      <div>
                        <p className="font-bold">{guessFeedback.message}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Guess action button */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveTab('clues')}
                    className="text-xs text-[#0f766e] hover:text-[#115e59] font-medium"
                  >
                    ← İpuçlarına Geri Dön
                  </button>

                  <button
                    disabled={!selectedGuessId}
                    onClick={handleMakeGuess}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] disabled:opacity-40 disabled:cursor-not-allowed text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all shadow-teal-700/20"
                  >
                    Kararımı Onayla
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: KNOWLEDGE CARDS (AFTER DISCOVERY) */}
            {activeTab === 'knowledge' && isGuessed && (
              <div className="space-y-3.5 flex flex-col justify-between h-full">
                {/* 4 Temel Bilgi Kartı (2x2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* DOĞUM VE COĞRAFYA */}
                  <div className="p-3.5 sm:p-4 bg-white border-2 border-[#0d9488]/25 rounded-2xl shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="text-[#d97706] font-serif font-bold text-xs sm:text-sm uppercase tracking-wider">
                        <span>Doğum ve Yaşadığı Coğrafya</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                        {scholar.geography}
                      </p>
                    </div>
                  </div>

                  {/* ESERİ */}
                  <div className="p-3.5 sm:p-4 bg-white border-2 border-[#0d9488]/25 rounded-2xl shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="text-[#0f766e] font-serif font-bold text-xs sm:text-sm uppercase tracking-wider">
                        <span>Başlıca Eseri</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#0f2933] mt-1 font-serif">
                        {scholar.work}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                        {scholar.clue1.text}
                      </p>
                    </div>
                  </div>

                  {/* DÜŞÜNCESİ VE ÇALIŞMA YÖNTEMİ */}
                  <div className="p-3.5 sm:p-4 bg-white border-2 border-[#0d9488]/25 rounded-2xl shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="text-[#0284c7] font-serif font-bold text-xs sm:text-sm uppercase tracking-wider">
                        <span>Düşüncesi ve Çalışma Yöntemi</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                        {scholar.contribution}
                      </p>
                    </div>
                  </div>

                  {/* ANADOLU VE İSLAM DÜNYASINA ETKİSİ */}
                  <div className="p-3.5 sm:p-4 bg-white border-2 border-[#0d9488]/25 rounded-2xl shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="text-[#059669] font-serif font-bold text-xs sm:text-sm uppercase tracking-wider">
                        <span>Anadolu ve İslam Dünyasına Etkisi</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                        {scholar.influence}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Alt: Alıntı / Özlü Söz */}
                {scholar.quote && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/90 via-[#fffdf5] to-amber-50/90 border-2 border-amber-300/80 shadow-xs text-center">
                    <p className="font-serif text-base sm:text-lg lg:text-xl font-bold italic text-[#78350f] leading-relaxed">
                      "{scholar.quote}"
                    </p>
                  </div>
                )}

                {/* 4. Değerlendirme Butonu */}
                <div className="pt-1 flex justify-end">
                  <button
                    onClick={() => {
                      setActiveTab('curator');
                    }}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all hover:scale-[1.02] shadow-teal-700/20"
                  >
                    Değerlendirme Aşamasına Geçiniz
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: EVALUATION & ANATOLIA CONNECTION */}
            {activeTab === 'curator' && isGuessed && (
              <div className="space-y-6">
                {/* Question 1 Block */}
                <div className="space-y-2">
                  {/* Soru Kartı (Border kalınlaştırıldı) */}
                  <div className="bg-white border-2 border-slate-300 rounded-xl p-3 sm:p-3.5 shadow-xs">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-slate-900 leading-snug">
                      1. {scholar.curatorQuestion}
                    </h4>
                  </div>

                  {/* Options (ABCD kaldırıldı, direkt metinle başlar) */}
                  <div className="space-y-1">
                    {shuffledCuratorOptions.map((opt, idx) => {
                      const isSelected = selectedCuratorOpt === idx;
                      const isCorrect = opt.isCorrect;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedCuratorOpt(idx);
                          }}
                          className={`group w-full py-2 px-3.5 text-left rounded-lg transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${
                            isSelected
                              ? isCorrect
                                ? 'bg-emerald-100/90 text-emerald-950 font-semibold shadow-2xs'
                                : 'bg-rose-100/90 text-rose-950 font-semibold shadow-2xs'
                              : 'bg-white/90 text-slate-800 hover:bg-[#f0fdfa] hover:text-slate-950 shadow-2xs'
                          }`}
                        >
                          <span className="font-semibold leading-snug">{opt.text}</span>
                          {isSelected && (
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                isCorrect ? 'bg-emerald-600 text-white shadow-xs' : 'bg-rose-600 text-white shadow-xs'
                              }`}
                            >
                              {isCorrect ? '✓' : '✕'}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback for Question 1 (Border var, kompakt) */}
                  <AnimatePresence>
                    {selectedCuratorOpt !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: -3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                        className={`mt-1.5 py-1.5 px-2.5 rounded-lg border text-[11px] sm:text-xs leading-snug flex items-start gap-2 shadow-2xs ${
                          shuffledCuratorOptions[selectedCuratorOpt]?.isCorrect
                            ? 'bg-emerald-50/90 border border-emerald-300 text-emerald-950'
                            : 'bg-rose-50/90 border border-rose-300 text-rose-950'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5 ${
                            shuffledCuratorOptions[selectedCuratorOpt]?.isCorrect
                              ? 'bg-emerald-200 text-emerald-800'
                              : 'bg-rose-200 text-rose-800'
                          }`}
                        >
                          {shuffledCuratorOptions[selectedCuratorOpt]?.isCorrect ? '✓' : '!'}
                        </span>
                        <p className="font-medium pt-0.5">
                          {shuffledCuratorOptions[selectedCuratorOpt]?.feedback}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Question 2 Block */}
                <div className="space-y-2 pt-2">
                  {/* Soru Kartı (Border kalınlaştırıldı) */}
                  <div className="bg-white border-2 border-slate-300 rounded-xl p-3 sm:p-3.5 shadow-xs">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-slate-900 leading-snug">
                      2. {scholar.anatoliaQuestion}
                    </h4>
                  </div>

                  {/* Options (ABCD kaldırıldı, direkt metinle başlar) */}
                  <div className="space-y-1">
                    {shuffledAnatoliaOptions.map((opt, idx) => {
                      const isSelected = selectedAnatoliaOpt === idx;
                      const isCorrect = opt.isCorrect;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedAnatoliaOpt(idx);
                          }}
                          className={`group w-full py-2 px-3.5 text-left rounded-lg transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${
                            isSelected
                              ? isCorrect
                                ? 'bg-emerald-100/90 text-emerald-950 font-semibold shadow-2xs'
                                : 'bg-rose-100/90 text-rose-950 font-semibold shadow-2xs'
                              : 'bg-white/90 text-slate-800 hover:bg-[#f0fdfa] hover:text-slate-950 shadow-2xs'
                          }`}
                        >
                          <span className="font-semibold leading-snug">{opt.text}</span>
                          {isSelected && (
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                isCorrect ? 'bg-emerald-600 text-white shadow-xs' : 'bg-rose-600 text-white shadow-xs'
                              }`}
                            >
                              {isCorrect ? '✓' : '✕'}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback for Question 2 (Border var, kompakt) */}
                  <AnimatePresence>
                    {selectedAnatoliaOpt !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: -3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                        className={`mt-1.5 py-1.5 px-2.5 rounded-lg border text-[11px] sm:text-xs leading-snug flex items-start gap-2 shadow-2xs ${
                          shuffledAnatoliaOptions[selectedAnatoliaOpt]?.isCorrect
                            ? 'bg-emerald-50/90 border border-emerald-300 text-emerald-950'
                            : 'bg-rose-50/90 border border-rose-300 text-rose-950'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5 ${
                            shuffledAnatoliaOptions[selectedAnatoliaOpt]?.isCorrect
                              ? 'bg-emerald-200 text-emerald-800'
                              : 'bg-rose-200 text-rose-800'
                          }`}
                        >
                          {shuffledAnatoliaOptions[selectedAnatoliaOpt]?.isCorrect ? '✓' : '!'}
                        </span>
                        <p className="font-medium pt-0.5">
                          {shuffledAnatoliaOptions[selectedAnatoliaOpt]?.feedback}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Proceed to Evidence Stage */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab('knowledge')}
                    className="text-xs text-[#0f766e] hover:text-[#115e59] font-medium"
                  >
                    ← Bilgi Kartlarına Dön
                  </button>

                  <div className="flex items-center gap-3">
                    {selectedCuratorOpt !== null &&
                      selectedAnatoliaOpt !== null &&
                      (!shuffledCuratorOptions[selectedCuratorOpt]?.isCorrect ||
                        !shuffledAnatoliaOptions[selectedAnatoliaOpt]?.isCorrect) && (
                        <span className="text-xs text-rose-700 font-medium">
                          Her iki soruda da doğru çıkarıma ulaşarak ilerleyiniz.
                        </span>
                      )}

                    <button
                      disabled={
                        selectedCuratorOpt === null ||
                        selectedAnatoliaOpt === null ||
                        !shuffledCuratorOptions[selectedCuratorOpt]?.isCorrect ||
                        !shuffledAnatoliaOptions[selectedAnatoliaOpt]?.isCorrect
                      }
                      onClick={() => {
                        onUpdateState(scholar.id, {
                          curatorAnswerIndex: selectedCuratorOpt ?? undefined,
                          anatoliaAnswerIndex: selectedAnatoliaOpt ?? undefined
                        });
                        setActiveTab('evidence');
                      }}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] disabled:opacity-40 disabled:cursor-not-allowed text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all shadow-teal-700/20"
                    >
                      Kanıtını Göster Aşamasına Geçiniz
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: EVIDENCE ("KANITINI GÖSTER") */}
            {activeTab === 'evidence' && isGuessed && (
              <div className="space-y-4">
                {/* Question 3 Block */}
                <div className="space-y-2">
                  {/* Soru Kartı (Border kalınlaştırıldı) */}
                  <div className="bg-white border-2 border-slate-300 rounded-xl p-3 sm:p-3.5 shadow-xs">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-slate-900 leading-snug">
                      {scholar.evidenceQuestion}
                    </h4>
                  </div>

                  {/* Evidence options (ABCD kaldırıldı, direkt metinle başlar) */}
                  <div className="space-y-1">
                    {shuffledEvidenceOptions.map((opt, idx) => {
                      const isSelected = selectedEvidenceOpt === idx;
                      return (
                        <button
                          key={idx}
                          disabled={isComplete}
                          onClick={() => {
                            setSelectedEvidenceOpt(idx);
                            if (opt.isCorrect) {
                              setHasCompletedLocal(true);
                              setEvidenceFeedback({
                                type: 'success',
                                message: 'Doğru! Değerlendirmenizi somut bir kanıtla desteklediniz.'
                              });
                              onUpdateState(scholar.id, {
                                isFullyEvaluated: true,
                                curatorAnswerIndex: selectedCuratorOpt ?? undefined,
                                anatoliaAnswerIndex: selectedAnatoliaOpt ?? undefined,
                                evidenceAnswerIndex: idx,
                                evaluatedAt: new Date().toISOString()
                              });
                            } else {
                              setEvidenceFeedback({
                                type: 'error',
                                message: opt.explanation || 'Bu seçenek çıkarımınızı desteklememektedir. İlgili âlimin birincil kaynak niteliğindeki eserlerini ve kayıtlarını inceleyiniz.'
                              });
                            }
                          }}
                          className={`group w-full py-2 px-3.5 text-left rounded-lg transition-all flex items-center justify-between gap-3 text-xs sm:text-sm ${
                            isSelected
                              ? opt.isCorrect
                                ? 'bg-emerald-100/90 text-emerald-950 font-semibold shadow-2xs'
                                : 'bg-rose-100/90 text-rose-950 font-semibold shadow-2xs'
                              : 'bg-white/90 text-slate-800 hover:bg-[#f0fdfa] hover:text-slate-950 shadow-2xs'
                          }`}
                        >
                          <span className="font-semibold leading-snug">{opt.text}</span>
                          {isSelected && (
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                                opt.isCorrect ? 'bg-emerald-600 text-white shadow-xs' : 'bg-rose-600 text-white shadow-xs'
                              }`}
                            >
                              {opt.isCorrect ? '✓' : '✕'}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback (Border var, kompakt) */}
                  <AnimatePresence>
                    {evidenceFeedback && (
                      <motion.div
                        initial={{ opacity: 0, y: -3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                        className={`mt-1.5 py-1.5 px-2.5 rounded-lg border text-[11px] sm:text-xs leading-snug flex items-start gap-2 shadow-2xs ${
                          evidenceFeedback.type === 'success'
                            ? 'bg-emerald-50/90 border border-emerald-300 text-emerald-950'
                            : 'bg-rose-50/90 border border-rose-300 text-rose-950'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5 ${
                            evidenceFeedback.type === 'success'
                              ? 'bg-emerald-200 text-emerald-800'
                              : 'bg-rose-200 text-rose-800'
                          }`}
                        >
                          {evidenceFeedback.type === 'success' ? '✓' : '!'}
                        </span>
                        <p className="font-medium pt-0.5">{evidenceFeedback.message}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Evidence verification and complete buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveTab('curator')}
                    className="text-xs text-[#0f766e] hover:text-[#115e59] font-medium"
                  >
                    ← Değerlendirme Sorularına Dön
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      disabled={selectedEvidenceOpt === null || !shuffledEvidenceOptions[selectedEvidenceOpt]?.isCorrect}
                      onClick={handleCompleteInspection}
                      className="px-7 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all shadow-emerald-700/20 cursor-pointer"
                    >
                      İncelemeyi Tamamla
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
