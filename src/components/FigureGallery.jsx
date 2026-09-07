import React, { useState } from 'react';
import { useCaravan } from '../state/CaravanContext';
import figuresData from '../content/figures.json';
import { CheckCircle2, X, ArrowRight } from 'lucide-react';

export default function FigureGallery() {
  const {
    stationCTags,
    tagFigureStationC,
    removeFigureTagStationC,
    goToScene
  } = useCaravan();

  const [selectedFigure, setSelectedFigure] = useState(null);

  const taggedCount = Object.keys(stationCTags).length;
  const totalFigures = figuresData.length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '950px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#0f172a' }}>
          Şahsiyete dokun ve panoya etiketle
        </h2>
        <span className={`badge ${taggedCount === totalFigures ? 'badge-green' : 'badge-gold'}`} style={{ fontSize: '0.85rem' }}>
          {taggedCount} / {totalFigures} Etiketlendi
        </span>
      </div>

      {/* 9 Figures Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '0.75rem'
      }}>
        {figuresData.map(fig => {
          const isTagged = !!stationCTags[fig.id];
          const tagInfo = stationCTags[fig.id];

          return (
            <div
              key={fig.id}
              onClick={() => setSelectedFigure(fig)}
              className="modern-card"
              style={{
                padding: '0.65rem',
                cursor: 'pointer',
                border: isTagged ? '2px solid #10b981' : '1px solid #e2e8f0',
                background: isTagged ? '#f0fdf4' : '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: isTagged ? '3px solid #10b981' : '2px solid #cbd5e1',
                background: '#f1f5f9'
              }}>
                <img
                  src={fig.image}
                  alt={fig.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <strong style={{ fontSize: '0.9rem', color: '#0f172a', display: 'block' }}>{fig.name}</strong>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{fig.title}</span>
              </div>

              {isTagged ? (
                <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <CheckCircle2 size={12} /> {tagInfo.tagLabel}
                </span>
              ) : (
                <span style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: '600' }}>
                  + Etiketle
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {taggedCount === totalFigures && (
        <div className="modern-card pop-in" style={{
          padding: '1rem',
          textAlign: 'center',
          background: '#ecfdf5',
          border: '2px solid #10b981',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ color: '#047857', fontWeight: '700', fontSize: '0.95rem' }}>
            🎉 9 şahsiyet panoya eklendi!
          </span>
          <button onClick={() => goToScene('S5')} className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
            Sentez Panosuna Geç →
          </button>
        </div>
      )}

      {/* Quick Tagging Modal */}
      {selectedFigure && (
        <div className="modal-overlay" onClick={() => setSelectedFigure(null)}>
          <div className="modal-body" style={{ maxWidth: '420px', padding: '1.25rem', textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedFigure(null)}
              style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
            >
              <X size={18} />
            </button>

            <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 0.5rem', border: '2px solid #2563eb' }}>
              <img
                src={selectedFigure.image}
                alt={selectedFigure.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h3 style={{ fontSize: '1.15rem', color: '#0f172a' }}>{selectedFigure.name}</h3>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{selectedFigure.primaryWork}</span>

            <p style={{ margin: '0.75rem 0', fontSize: '0.85rem', color: '#334155', fontStyle: 'italic', background: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
              "{selectedFigure.quote}"
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.85rem' }}>
              {selectedFigure.tagOptions.map(t => {
                const isCurrent = stationCTags[selectedFigure.id]?.tagId === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      tagFigureStationC(selectedFigure.id, t.id, t.label, t.color);
                      setSelectedFigure(null);
                    }}
                    style={{
                      flex: 1,
                      padding: '0.6rem',
                      borderRadius: '8px',
                      border: isCurrent ? '2px solid #10b981' : '1px solid #cbd5e1',
                      background: isCurrent ? '#ecfdf5' : '#ffffff',
                      color: isCurrent ? '#047857' : '#0f172a',
                      fontWeight: '700',
                      fontSize: '0.82rem',
                      cursor: 'pointer'
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
