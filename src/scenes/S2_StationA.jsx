import React from 'react';
import DragMatchBoard from '../components/DragMatchBoard';
import { useCaravan } from '../state/CaravanContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function S2_StationA() {
  const { goToScene, stationACompleted } = useCaravan();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <DragMatchBoard />

      {/* Navigation Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button
          onClick={() => goToScene('S1')}
          className="btn-outline-gold"
        >
          <ArrowLeft size={18} /> Giriş Bağlamına Dön
        </button>

        {stationACompleted && (
          <button
            onClick={() => goToScene('S3')}
            className="btn-gold pulse-glow"
          >
            İstasyon B'ye İlerle (Kanıt-Yargı) <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
