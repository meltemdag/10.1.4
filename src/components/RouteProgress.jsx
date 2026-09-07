import React from 'react';
import { useCaravan } from '../state/CaravanContext';

const scenes = [
  { id: 'S0', name: 'Giriş' },
  { id: 'S1', name: 'Kültür' },
  { id: 'S2', name: 'Karşılaştır' },
  { id: 'S3', name: 'Kanıt' },
  { id: 'S4', name: 'Şahsiyetler' },
  { id: 'S5', name: 'Sentez' },
  { id: 'S6', name: 'Berat' }
];

export default function RouteProgress() {
  const {
    currentScene,
    goToScene,
    stationACompleted,
    stationBCompleted,
    stationCCompleted
  } = useCaravan();

  const currentIndex = scenes.findIndex(s => s.id === currentScene);

  const isCompleted = (sceneId) => {
    if (sceneId === 'S0' || sceneId === 'S1') return currentIndex > scenes.findIndex(s => s.id === sceneId);
    if (sceneId === 'S2') return stationACompleted;
    if (sceneId === 'S3') return stationBCompleted;
    if (sceneId === 'S4') return stationCCompleted;
    return currentIndex >= scenes.findIndex(s => s.id === sceneId);
  };

  const isAccessible = (index) => {
    if (index <= currentIndex) return true;
    if (index === 1 || index === 2) return true;
    if (index === 3) return stationACompleted;
    if (index === 4) return stationBCompleted;
    if (index === 5) return stationCCompleted;
    return false;
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e2e8f0',
      padding: '0.6rem 1rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }} onClick={() => goToScene('S0')}>
          <span style={{ fontSize: '1.25rem' }}>🐪</span>
          <span style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0f172a' }}>Kervan Rotası</span>
        </div>

        {/* Step Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {scenes.map((s, idx) => {
            const active = currentScene === s.id;
            const done = isCompleted(s.id);
            const accessible = isAccessible(idx);

            return (
              <button
                key={s.id}
                onClick={() => accessible && goToScene(s.id)}
                disabled={!accessible}
                style={{
                  padding: '0.3rem 0.65rem',
                  borderRadius: '9999px',
                  border: active ? '2px solid #2563eb' : '1px solid #e2e8f0',
                  background: active ? '#2563eb' : done ? '#ecfdf5' : '#ffffff',
                  color: active ? '#ffffff' : done ? '#059669' : '#94a3b8',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  cursor: accessible ? 'pointer' : 'default',
                  opacity: accessible ? 1 : 0.4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                {done ? '✓' : idx + 1}
                <span className="step-name" style={{ display: active ? 'inline' : 'none' }}>{s.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
