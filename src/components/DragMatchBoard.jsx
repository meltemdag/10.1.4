import React, { useState } from 'react';
import { useCaravan } from '../state/CaravanContext';
import comparisonData from '../content/comparisonCards.json';
import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

export default function DragMatchBoard() {
  const {
    stationAPlacements,
    stationACompleted,
    placeCardInStationA,
    goToScene
  } = useCaravan();

  const [draggedCardId, setDraggedCardId] = useState(null);
  const [shakingCardId, setShakingCardId] = useState(null);
  const [hintCard, setHintCard] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const unplacedCards = comparisonData.filter(c => !stationAPlacements[c.id]);
  const turkIslamCards = comparisonData.filter(c => stationAPlacements[c.id] === 'turk_islam');
  const batiCards = comparisonData.filter(c => stationAPlacements[c.id] === 'bati');

  const totalCards = comparisonData.length;
  const placedCount = turkIslamCards.length + batiCards.length;

  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData('text/plain', cardId);
    setDraggedCardId(cardId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain') || draggedCardId;
    if (!cardId) return;

    attemptPlacement(cardId, targetColumn);
    setDraggedCardId(null);
  };

  const attemptPlacement = (cardId, targetColumn) => {
    const success = placeCardInStationA(cardId, targetColumn);
    if (!success) {
      setShakingCardId(cardId);
      const card = comparisonData.find(c => c.id === cardId);
      setHintCard(card);
      setTimeout(() => setShakingCardId(null), 500);
    } else {
      setHintCard(null);
      setSelectedCardId(null);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '950px', margin: '0 auto' }}>
      
      {/* Super clean header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#0f172a' }}>
          Kavramı ait olduğu medeniyete sürükle veya seç
        </h2>
        <span className="badge badge-blue" style={{ fontSize: '0.85rem' }}>
          {placedCount} / {totalCards} Eşleşti
        </span>
      </div>

      {/* Hint if error */}
      {hintCard && (
        <div className="pop-in" style={{
          background: '#fff1f2',
          border: '1px solid #fecdd3',
          color: '#be123c',
          padding: '0.5rem 0.85rem',
          borderRadius: '8px',
          fontSize: '0.82rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <HelpCircle size={16} />
          <span><strong>İpucu:</strong> {hintCard.hint}</span>
        </div>
      )}

      {/* 3 Columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '0.85rem',
        alignItems: 'start'
      }}>
        
        {/* Left: Türk-İslam */}
        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'turk_islam')}
          className="modern-card"
          style={{
            minHeight: '380px',
            padding: '0.85rem',
            border: '2px dashed #10b981',
            background: '#f0fdf4',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.4rem', borderBottom: '1px solid #bbf7d0' }}>
            <strong style={{ color: '#065f46', fontSize: '0.95rem' }}>🕌 Türk-İslam</strong>
            <span className="badge badge-green" style={{ fontSize: '0.72rem' }}>{turkIslamCards.length}</span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {turkIslamCards.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', fontSize: '0.78rem', textAlign: 'center' }}>
                Buraya bırakın
              </div>
            ) : (
              turkIslamCards.map(card => (
                <div
                  key={card.id}
                  className="pop-in"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #86efac',
                    borderRadius: '8px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{card.icon} {card.title}</span>
                  <CheckCircle2 size={15} color="#10b981" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Center: Pool */}
        <div className="modern-card" style={{
          minHeight: '380px',
          padding: '0.85rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.4rem', borderBottom: '1px solid #e2e8f0' }}>
            <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>Kartlar</strong>
            <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>{unplacedCards.length} Kaldı</span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem', overflowY: 'auto', maxHeight: '460px' }}>
            {unplacedCards.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem', gap: '0.5rem' }}>
                <CheckCircle2 size={32} color="#10b981" />
                <strong style={{ color: '#047857', fontSize: '1rem' }}>Tamamlandı!</strong>
                <button onClick={() => goToScene('S3')} className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  2. İstasyona Geç →
                </button>
              </div>
            ) : (
              unplacedCards.map(card => {
                const isSelected = selectedCardId === card.id;
                const isShaking = shakingCardId === card.id;

                return (
                  <div
                    key={card.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, card.id)}
                    onClick={() => setSelectedCardId(isSelected ? null : card.id)}
                    className={`modern-card ${isShaking ? 'shake' : ''}`}
                    style={{
                      padding: '0.5rem 0.75rem',
                      cursor: 'pointer',
                      border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                      background: isSelected ? '#eff6ff' : '#ffffff',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#0f172a',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span>{card.icon}</span>
                      <span>{card.title}</span>
                    </div>

                    {isSelected && (
                      <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.2rem' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            attemptPlacement(card.id, 'turk_islam');
                          }}
                          style={{
                            flex: 1,
                            padding: '0.3rem',
                            background: '#059669',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            cursor: 'pointer'
                          }}
                        >
                          ← Türk-İslam
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            attemptPlacement(card.id, 'bati');
                          }}
                          style={{
                            flex: 1,
                            padding: '0.3rem',
                            background: '#2563eb',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            cursor: 'pointer'
                          }}
                        >
                          Batı →
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Batı */}
        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'bati')}
          className="modern-card"
          style={{
            minHeight: '380px',
            padding: '0.85rem',
            border: '2px dashed #3b82f6',
            background: '#eff6ff',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.4rem', borderBottom: '1px solid #bfdbfe' }}>
            <strong style={{ color: '#1e40af', fontSize: '0.95rem' }}>⛪ Batı (Orta Çağ)</strong>
            <span className="badge badge-blue" style={{ fontSize: '0.72rem' }}>{batiCards.length}</span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {batiCards.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', fontSize: '0.78rem', textAlign: 'center' }}>
                Buraya bırakın
              </div>
            ) : (
              batiCards.map(card => (
                <div
                  key={card.id}
                  className="pop-in"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #93c5fd',
                    borderRadius: '8px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{card.icon} {card.title}</span>
                  <CheckCircle2 size={15} color="#2563eb" />
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
