import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScholarData, DiscoveredScholarState } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';
import { PortraitArt } from './PortraitArt';

interface CuratorModalProps {
  scholar: ScholarData;
  scholarState: DiscoveredScholarState;
  allScholarsState: Record<string, DiscoveredScholarState>;
  onClose: () => void;
  onUpdateState: (scholarId: string, updates: Partial<DiscoveredScholarState>) => void;
  onOpenNext?: () => void;
}

export const CuratorModal: React.FC<CuratorModalProps> = ({
  scholar,
  scholarState,
  onClose,
  onUpdateState,
  onOpenNext
}) => {
  // Local stage management: 'clues' | 'guessing' | 'revealed' | 'curator_eval' | 'evidence' | 'completed'
  const isGuessed = scholarState.isNameGuessed;
  const isFullyEvaluated = scholarState.isFullyEvaluated;

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

  // Evaluation local state
  const [selectedCuratorOpt, setSelectedCuratorOpt] = useState<number | null>(
    scholarState.curatorAnswerIndex ?? null
  );
  const [selectedAnatoliaOpt, setSelectedAnatoliaOpt] = useState<number | null>(
    scholarState.anatoliaAnswerIndex ?? null
  );
  const [selectedEvidenceOpt, setSelectedEvidenceOpt] = useState<number | null>(
    scholarState.evidenceAnswerIndex ?? null
  );
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
        message: 'Tebrikler! Portredeki şahsiyetin kimliğini başarıyla belirlediniz.'
      });
      onUpdateState(scholar.id, { isNameGuessed: true });
      setTimeout(() => {
        setActiveTab('knowledge');
        setGuessFeedback(null);
      }, 1400);
    } else {
      setGuessFeedback({
        type: 'error',
        message: 'Bir kanıtı daha inceleyiniz. Portredeki şahsiyetin eseri ve düşüncesi sizlere ipucu vermektedir.'
      });
    }
  };

  // Handle Evidence Submission
  const handleVerifyEvidence = () => {
    if (selectedEvidenceOpt === null) return;

    const opt = scholar.evidenceOptions[selectedEvidenceOpt];
    if (opt.isCorrect) {
      setEvidenceFeedback({
        type: 'success',
        message: 'Değerlendirmenizi somut bir kanıtla başarıyla desteklediniz.'
      });
      onUpdateState(scholar.id, {
        isFullyEvaluated: true,
        curatorAnswerIndex: selectedCuratorOpt ?? undefined,
        anatoliaAnswerIndex: selectedAnatoliaOpt ?? undefined,
        evidenceAnswerIndex: selectedEvidenceOpt,
        evaluatedAt: new Date().toISOString()
      });
      timerRef.current = setTimeout(() => {
        onClose();
      }, 1400);
    } else {
      setEvidenceFeedback({
        type: 'error',
        message: opt.explanation || 'Bu seçenek mümkün görünüyor; ancak gösterilen kanıt bunu yeterince desteklemiyor. İpuçlarını tekrar inceleyebilirsiniz.'
      });
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
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[#0f2933] hover:bg-[#e0f2f1] rounded-full transition-colors font-bold text-base leading-none shadow-xs"
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
                <span className="block text-[11px] font-serif uppercase tracking-[0.2em] text-[#ccfbf1] font-bold">
                  {scholar.field}
                </span>
                <h3 className="font-serif font-bold text-white text-base sm:text-lg mt-0.5 drop-shadow-xs">
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
                              İpucunu Aç
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
                    Bu portredeki şahsiyet kimdir?
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    İncelediğiniz ipuçlarına dayanarak 9 büyük şahsiyet arasından doğru olanı seçiniz.
                  </p>
                </div>

                {/* 9 candidate scholars grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SCHOLARS_DATA.map((candidate) => {
                    const isSelected = selectedGuessId === candidate.id;
                    return (
                      <button
                        key={candidate.id}
                        onClick={() => {
                          setSelectedGuessId(candidate.id);
                          setGuessFeedback(null);
                        }}
                        className={`p-3 sm:p-3.5 text-left rounded-2xl border transition-all text-xs font-serif flex flex-col justify-center group ${
                          isSelected
                            ? 'bg-[#e0f2f1] border-2 border-[#0d9488] text-[#0f766e] shadow-md ring-2 ring-[#0d9488]/30'
                            : 'bg-white border-2 border-[#0d9488]/20 text-[#0f2933] hover:border-[#0d9488] hover:bg-[#f0fdfa] shadow-xs'
                        }`}
                      >
                        <div className="font-bold text-sm sm:text-base text-[#0f2933] truncate group-hover:text-[#0d9488] transition-colors">
                          {candidate.name}
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#0d9488] truncate mt-0.5">
                          {candidate.field}
                        </div>
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

                {/* 3. Alt: Alıntı / Şahsiyetin Sözü */}
                {scholar.quote && (
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f0fdfa] border border-[#0d9488]/30 shadow-xs text-center">
                    <p className="font-manuscript text-base sm:text-lg lg:text-xl font-medium italic text-[#0f766e] leading-relaxed">
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
                {/* Question 1: Prime contribution */}
                <div className="space-y-2.5">
                  <div className="bg-[#f0f9ff]/80 border-2 border-[#0284c7]/45 rounded-2xl p-3.5 sm:p-4 shadow-xs">
                    <h4 className="text-base sm:text-lg font-serif font-bold text-[#0f766e] leading-snug">
                      1. {scholar.curatorQuestion}
                    </h4>
                  </div>

                  <div className="space-y-1 px-1">
                    {scholar.curatorOptions.map((opt, idx) => {
                      const isSelected = selectedCuratorOpt === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedCuratorOpt(idx);
                          }}
                          className={`group w-full py-2 px-3 sm:py-2.5 sm:px-3 text-left rounded-xl transition-all flex items-start gap-3 text-xs sm:text-sm ${
                            isSelected
                              ? 'bg-[#0d9488]/15 text-[#0f766e] font-semibold'
                              : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center font-serif text-[11px] font-bold shrink-0 transition-colors mt-0.5 ${
                              isSelected
                                ? 'bg-[#0d9488] text-white shadow-xs'
                                : 'bg-slate-100 border border-slate-300 text-slate-600 group-hover:bg-slate-200 group-hover:text-[#0f766e]'
                            }`}
                          >
                            {isSelected ? '✓' : String.fromCharCode(65 + idx)}
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question 2: Anatolia Connection */}
                <div className="space-y-2.5 pt-3 border-t border-[#0d9488]/20">
                  <div className="bg-[#f0f9ff]/80 border-2 border-[#0284c7]/45 rounded-2xl p-3.5 sm:p-4 shadow-xs">
                    <h4 className="text-base sm:text-lg font-serif font-bold text-[#0f766e] leading-snug">
                      2. {scholar.anatoliaQuestion}
                    </h4>
                  </div>

                  <div className="space-y-1 px-1">
                    {scholar.anatoliaOptions.map((opt, idx) => {
                      const isSelected = selectedAnatoliaOpt === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedAnatoliaOpt(idx);
                          }}
                          className={`group w-full py-2 px-3 sm:py-2.5 sm:px-3 text-left rounded-xl transition-all flex items-start gap-3 text-xs sm:text-sm ${
                            isSelected
                              ? 'bg-[#0d9488]/15 text-[#0f766e] font-semibold'
                              : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center font-serif text-[11px] font-bold shrink-0 transition-colors mt-0.5 ${
                              isSelected
                                ? 'bg-[#0d9488] text-white shadow-xs'
                                : 'bg-slate-100 border border-slate-300 text-slate-600 group-hover:bg-slate-200 group-hover:text-[#0f766e]'
                            }`}
                          >
                            {isSelected ? '✓' : String.fromCharCode(65 + idx)}
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Proceed to Evidence Stage */}
                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setActiveTab('knowledge')}
                    className="text-xs text-[#0f766e] hover:text-[#115e59] font-medium"
                  >
                    ← Bilgi Kartlarına Dön
                  </button>

                  <button
                    disabled={selectedCuratorOpt === null || selectedAnatoliaOpt === null}
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
            )}

            {/* TAB 5: EVIDENCE ("KANITINI GÖSTER") */}
            {activeTab === 'evidence' && isGuessed && (
              <div className="space-y-2.5">
                <div className="bg-[#f0f9ff]/80 border-2 border-[#0284c7]/45 rounded-2xl p-3.5 sm:p-4 shadow-xs">
                  <h4 className="text-base sm:text-lg font-serif font-bold text-[#0f766e] leading-snug">
                    {scholar.evidenceQuestion}
                  </h4>
                </div>

                {/* Evidence options */}
                <div className="space-y-1 px-1">
                  {scholar.evidenceOptions.map((opt, idx) => {
                    const isSelected = selectedEvidenceOpt === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedEvidenceOpt(idx);
                          setEvidenceFeedback(null);
                        }}
                        className={`group w-full py-2 px-3 sm:py-2.5 sm:px-3 text-left rounded-xl transition-all flex items-start gap-3 text-xs sm:text-sm ${
                          isSelected
                            ? 'bg-[#0d9488]/15 text-[#0f766e] font-semibold'
                            : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center font-serif text-[11px] font-bold shrink-0 transition-colors mt-0.5 ${
                            isSelected
                              ? 'bg-[#0d9488] text-white shadow-xs'
                              : 'bg-slate-100 border border-slate-300 text-slate-600 group-hover:bg-slate-200 group-hover:text-[#0f766e]'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                <AnimatePresence>
                  {evidenceFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3.5 rounded-2xl border text-xs flex items-start space-x-2.5 ${
                        evidenceFeedback.type === 'success'
                          ? 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950'
                          : 'bg-rose-50 border-2 border-rose-500 text-rose-950'
                      }`}
                    >
                      {evidenceFeedback.type === 'success' ? (
                        <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">!</span>
                      )}
                      <div>
                        <p className="font-bold">{evidenceFeedback.message}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Evidence verification and complete buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setActiveTab('curator')}
                    className="text-xs text-[#0f766e] hover:text-[#115e59] font-medium"
                  >
                    ← Değerlendirme Sorularına Dön
                  </button>

                  <div className="flex items-center space-x-2">
                    {!isFullyEvaluated ? (
                      <button
                        disabled={selectedEvidenceOpt === null}
                        onClick={handleVerifyEvidence}
                        className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] disabled:opacity-40 disabled:cursor-not-allowed text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all shadow-teal-700/20"
                      >
                        Kanıtı Doğrula & Değerlendir
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          if (timerRef.current) clearTimeout(timerRef.current);
                          onClose();
                        }}
                        className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-serif font-bold text-sm rounded-xl shadow-lg hover:from-emerald-500 hover:to-teal-600 transition-all"
                      >
                        İnceleme Tamamlandı
                      </button>
                    )}
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
