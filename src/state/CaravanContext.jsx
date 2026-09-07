import React, { createContext, useContext, useState, useEffect } from 'react';
import comparisonData from '../content/comparisonCards.json';
import evidenceData from '../content/evidenceCards.json';
import figuresData from '../content/figures.json';

const CaravanContext = createContext();

export function CaravanProvider({ children }) {
  // Navigation State
  const [currentScene, setCurrentScene] = useState('S0'); // S0, S1, S2, S3, S4, S5, S6
  const [studentName, setStudentName] = useState('');

  // Modals for extensions S-A, S-B
  const [showChronology, setShowChronology] = useState(false);
  const [showEducationComparison, setShowEducationComparison] = useState(false);

  // Station A (S2): Medeniyet Karşılaştırma
  const [stationAPlacements, setStationAPlacements] = useState({}); // { [cardId]: 'turk_islam' | 'bati' }
  const [stationACompleted, setStationACompleted] = useState(false);
  const [stationAWrongCount, setStationAWrongCount] = useState(0);

  // Station B (S3): Kanıt - Yargı
  const [stationBJudgments, setStationBJudgments] = useState([]); // [{ evidenceId, judgmentId, isCorrect }]
  const [stationBRelationship, setStationBRelationship] = useState(null); // 'rel_yes' | 'rel_no'
  const [stationBCompleted, setStationBCompleted] = useState(false);

  // Station C (S4): Şahsiyet Galerisi & Ortak Miras Panosu
  const [stationCTags, setStationCTags] = useState({}); // { [figureId]: { tagId, tagLabel, color } }
  const [stationCCompleted, setStationCCompleted] = useState(false);

  // Check Station A completion
  useEffect(() => {
    const totalCards = comparisonData.length;
    const placedCorrectlyCount = comparisonData.filter(
      c => stationAPlacements[c.id] === c.correctColumn
    ).length;
    if (placedCorrectlyCount === totalCards) {
      setStationACompleted(true);
    }
  }, [stationAPlacements]);

  // Check Station B completion
  useEffect(() => {
    const allEvidencesCompleted = evidenceData.evidenceList.every(ev =>
      stationBJudgments.some(j => j.evidenceId === ev.id && j.isCorrect)
    );
    const relationshipDone = stationBRelationship === 'rel_yes';
    if (allEvidencesCompleted && relationshipDone) {
      setStationBCompleted(true);
    }
  }, [stationBJudgments, stationBRelationship]);

  // Check Station C completion
  useEffect(() => {
    const taggedCount = Object.keys(stationCTags).length;
    if (taggedCount === figuresData.length) {
      setStationCCompleted(true);
    }
  }, [stationCTags]);

  // Actions
  const goToScene = (sceneId) => {
    setCurrentScene(sceneId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const placeCardInStationA = (cardId, targetColumn) => {
    const card = comparisonData.find(c => c.id === cardId);
    if (!card) return false;

    if (card.correctColumn === targetColumn) {
      setStationAPlacements(prev => ({ ...prev, [cardId]: targetColumn }));
      return true;
    } else {
      setStationAWrongCount(c => c + 1);
      return false;
    }
  };

  const removeCardInStationA = (cardId) => {
    setStationAPlacements(prev => {
      const next = { ...prev };
      delete next[cardId];
      return next;
    });
  };

  const recordJudgmentStationB = (evidenceId, judgmentId) => {
    const evidence = evidenceData.evidenceList.find(e => e.id === evidenceId);
    if (!evidence) return false;
    const judgment = evidence.judgments.find(j => j.id === judgmentId);
    if (!judgment) return false;

    const isCorrect = judgment.correct;
    setStationBJudgments(prev => {
      const filtered = prev.filter(p => p.evidenceId !== evidenceId);
      return [...filtered, { evidenceId, judgmentId, isCorrect, evidenceTitle: evidence.title, judgmentText: judgment.text }];
    });

    return isCorrect;
  };

  const setRelationshipStationB = (answerId) => {
    const isCorrect = answerId === 'rel_yes';
    setStationBRelationship(answerId);
    return isCorrect;
  };

  const tagFigureStationC = (figureId, tagId, tagLabel, tagColor) => {
    setStationCTags(prev => ({
      ...prev,
      [figureId]: {
        tagId,
        tagLabel,
        tagColor
      }
    }));
  };

  const removeFigureTagStationC = (figureId) => {
    setStationCTags(prev => {
      const next = { ...prev };
      delete next[figureId];
      return next;
    });
  };

  const restartExperience = () => {
    setCurrentScene('S0');
    setStationAPlacements({});
    setStationACompleted(false);
    setStationAWrongCount(0);
    setStationBJudgments([]);
    setStationBRelationship(null);
    setStationBCompleted(false);
    setStationCTags({});
    setStationCCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CaravanContext.Provider
      value={{
        currentScene,
        goToScene,
        studentName,
        setStudentName,
        showChronology,
        setShowChronology,
        showEducationComparison,
        setShowEducationComparison,
        // Station A
        stationAPlacements,
        stationACompleted,
        stationAWrongCount,
        placeCardInStationA,
        removeCardInStationA,
        // Station B
        stationBJudgments,
        stationBRelationship,
        stationBCompleted,
        recordJudgmentStationB,
        setRelationshipStationB,
        // Station C
        stationCTags,
        stationCCompleted,
        tagFigureStationC,
        removeFigureTagStationC,
        // Reset
        restartExperience
      }}
    >
      {children}
    </CaravanContext.Provider>
  );
}

export function useCaravan() {
  const ctx = useContext(CaravanContext);
  if (!ctx) {
    throw new Error('useCaravan must be used within CaravanProvider');
  }
  return ctx;
}
