import React from 'react';
import FigureGallery from '../components/FigureGallery';
import { useCaravan } from '../state/CaravanContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function S4_StationC() {
  const { goToScene, stationCCompleted } = useCaravan();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <FigureGallery />

      {/* Navigation Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button
          onClick={() => goToScene('S3')}
          className="btn-outline-gold"
        >
          <ArrowLeft size={18} /> İstasyon B'ye Dön
        </button>

        {stationCCompleted && (
          <button
            onClick={() => goToScene('S5')}
            className="btn-gold pulse-glow"
          >
            Sentez Panosuna İlerle (S5) <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
