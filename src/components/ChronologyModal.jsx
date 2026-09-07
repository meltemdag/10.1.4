import React, { useState } from 'react';
import chronologyCards from '../content/chronologyCards.json';
import { X, Calendar, ArrowRight } from 'lucide-react';

export default function ChronologyModal({ onClose }) {
  const [selectedEvent, setSelectedEvent] = useState(chronologyCards[0]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <span className="badge badge-gold">Tarih Şeridi</span>
          <h2 style={{ fontSize: '1.3rem', color: '#0f172a', marginTop: '0.2rem' }}>
            1040 - 1299 Tarihsel Dönüm Noktaları
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.82rem' }}>
            Dandanakan'dan Kösedağ'a Türk-İslam medeniyetinin aşamaları
          </p>
        </div>

        {/* Timeline Chips */}
        <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
          {chronologyCards.map(c => {
            const isSelected = selectedEvent.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedEvent(c)}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1',
                  background: isSelected ? '#eff6ff' : '#ffffff',
                  color: isSelected ? '#1d4ed8' : '#475569',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {c.year}
              </button>
            );
          })}
        </div>

        {/* Selected Event Card */}
        {selectedEvent && (
          <div className="pop-in" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#0f172a' }}>{selectedEvent.title}</h3>
              <span className="badge badge-blue">{selectedEvent.year}</span>
            </div>
            <p style={{ color: '#334155', fontSize: '0.88rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
              {selectedEvent.summary}
            </p>
            <div style={{ marginTop: '0.75rem', background: '#ecfdf5', border: '1px solid #86efac', borderRadius: '8px', padding: '0.5rem 0.75rem', fontSize: '0.8rem', color: '#047857' }}>
              <strong>Sonuç:</strong> {selectedEvent.impact}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
