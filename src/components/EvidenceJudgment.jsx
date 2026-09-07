import React, { useState } from 'react';
import { useCaravan } from '../state/CaravanContext';
import evidenceData from '../content/evidenceCards.json';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function EvidenceJudgment() {
  const {
    stationBJudgments,
    stationBRelationship,
    recordJudgmentStationB,
    setRelationshipStationB,
    goToScene
  } = useCaravan();

  const [activeStep, setActiveStep] = useState(0); // 0, 1, 2, 3, 4 (relationship)
  const [feedback, setFeedback] = useState(null);

  const evidenceList = evidenceData.evidenceList;
  const isSpecialStep = activeStep === evidenceList.length;
  const currentEvidence = evidenceList[activeStep];

  const handleSelectJudgment = (judgment) => {
    const isCorrect = recordJudgmentStationB(currentEvidence.id, judgment.id);
    setFeedback({
      judgmentId: judgment.id,
      isCorrect,
      message: judgment.feedback
    });
  };

  const handleRelationshipChoice = (optId) => {
    const isCorrect = setRelationshipStationB(optId);
    const opt = evidenceData.relationshipQuestion.options.find(o => o.id === optId);
    setFeedback({
      optId,
      isCorrect,
      message: opt.explanation
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '750px', margin: '0 auto' }}>
      
      {/* Step dots */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#0f172a' }}>
          Kanıtı incele ve doğru sonucu seç
        </h2>

        <div style={{ display: 'flex', gap: '0.3rem' }}>
          {evidenceList.map((ev, idx) => {
            const isDone = stationBJudgments.some(j => j.evidenceId === ev.id && j.isCorrect);
            const isActive = activeStep === idx;
            return (
              <button
                key={ev.id}
                onClick={() => {
                  setActiveStep(idx);
                  setFeedback(null);
                }}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: isActive ? '2px solid #2563eb' : '1px solid #cbd5e1',
                  background: isActive ? '#2563eb' : isDone ? '#ecfdf5' : '#ffffff',
                  color: isActive ? '#ffffff' : isDone ? '#059669' : '#64748b',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                {isDone ? '✓' : idx + 1}
              </button>
            );
          })}
          <button
            onClick={() => {
              setActiveStep(evidenceList.length);
              setFeedback(null);
            }}
            style={{
              padding: '0 0.6rem',
              height: '32px',
              borderRadius: '9999px',
              border: isSpecialStep ? '2px solid #2563eb' : '1px solid #cbd5e1',
              background: isSpecialStep ? '#2563eb' : stationBRelationship === 'rel_yes' ? '#ecfdf5' : '#ffffff',
              color: isSpecialStep ? '#ffffff' : stationBRelationship === 'rel_yes' ? '#059669' : '#64748b',
              fontWeight: '700',
              fontSize: '0.78rem',
              cursor: 'pointer'
            }}
          >
            {stationBRelationship === 'rel_yes' ? '✓ Analiz' : 'Analiz'}
          </button>
        </div>
      </div>

      {/* Main card */}
      {!isSpecialStep ? (
        <div className="modern-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          
          {/* Header & image */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>
              {currentEvidence.icon} {currentEvidence.title}
            </strong>
            <span className="badge badge-blue">{currentEvidence.code}</span>
          </div>

          {currentEvidence.image && (
            <div style={{ borderRadius: '8px', overflow: 'hidden', height: '180px', background: '#000', border: '1px solid #e2e8f0' }}>
              <img
                src={currentEvidence.image}
                alt={currentEvidence.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* 1-sentence Quote */}
          <p style={{ color: '#1e293b', fontSize: '0.92rem', fontStyle: 'italic', background: '#f8fafc', padding: '0.6rem 0.8rem', borderRadius: '8px', borderLeft: '3px solid #2563eb' }}>
            "{currentEvidence.quote}"
          </p>

          {/* 2 Choices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {currentEvidence.judgments.map((j) => {
              const currentSaved = stationBJudgments.find(sj => sj.evidenceId === currentEvidence.id);
              const isSelected = feedback?.judgmentId === j.id || currentSaved?.judgmentId === j.id;
              const isCorrect = j.correct;

              let btnBorder = '#cbd5e1';
              let btnBg = '#ffffff';
              if (isSelected) {
                btnBorder = isCorrect ? '#10b981' : '#f43f5e';
                btnBg = isCorrect ? '#ecfdf5' : '#fff1f2';
              }

              return (
                <button
                  key={j.id}
                  onClick={() => handleSelectJudgment(j)}
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: `2px solid ${btnBorder}`,
                    background: btnBg,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: '#0f172a'
                  }}
                >
                  <span>{j.text}</span>
                  {isSelected && (
                    isCorrect ? <CheckCircle2 size={18} color="#10b981" /> : <AlertCircle size={18} color="#f43f5e" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Proceed */}
          {feedback && (
            <div className="pop-in" style={{
              background: feedback.isCorrect ? '#ecfdf5' : '#fff1f2',
              border: `1px solid ${feedback.isCorrect ? '#86efac' : '#fecdd3'}`,
              borderRadius: '8px',
              padding: '0.6rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '0.85rem', color: feedback.isCorrect ? '#065f46' : '#9f1239', fontWeight: '600' }}>
                {feedback.message}
              </span>

              {feedback.isCorrect && (
                <button
                  onClick={() => {
                    setFeedback(null);
                    setActiveStep(s => s + 1);
                  }}
                  className="btn-primary"
                  style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', flexShrink: 0 }}
                >
                  İleri →
                </button>
              )}
            </div>
          )}

        </div>
      ) : (
        /* Special Step */
        <div className="modern-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#0f172a' }}>
            İbn Nefis'in küçük kan dolaşımını keşfetmesi, İslam biliminin özgün olduğunu kanıtlar mı?
          </h3>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            {evidenceData.relationshipQuestion.options.map(opt => {
              const isSelected = stationBRelationship === opt.id;
              const isCorrect = opt.correct;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleRelationshipChoice(opt.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    border: isSelected ? (isCorrect ? '2px solid #10b981' : '2px solid #f43f5e') : '2px solid #cbd5e1',
                    background: isSelected ? (isCorrect ? '#ecfdf5' : '#fff1f2') : '#ffffff',
                    color: '#0f172a',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    cursor: 'pointer'
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          {feedback && (
            <div className="pop-in" style={{
              background: feedback.isCorrect ? '#ecfdf5' : '#fff1f2',
              border: `1px solid ${feedback.isCorrect ? '#86efac' : '#fecdd3'}`,
              borderRadius: '8px',
              padding: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <span style={{ fontSize: '0.85rem', color: feedback.isCorrect ? '#065f46' : '#9f1239', fontWeight: '600' }}>
                {feedback.message}
              </span>

              {feedback.isCorrect && (
                <button onClick={() => goToScene('S4')} className="btn-primary" style={{ marginTop: '0.3rem', padding: '0.45rem 1.25rem' }}>
                  3. İstasyona Geç (Şahsiyetler) →
                </button>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
