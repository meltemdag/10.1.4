import React from 'react';
import EvidenceJudgment from '../components/EvidenceJudgment';
import { useCaravan } from '../state/CaravanContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function S3_StationB() {
  const { goToScene, stationBCompleted } = useCaravan();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <EvidenceJudgment />

      {/* Navigation Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button
          onClick={() => goToScene('S2')}
          className="btn-outline-gold"
        >
          <ArrowLeft size={18} /> İstasyon A'ya Dön
        </button>

        {stationBCompleted && (
          <button
            onClick={() => goToScene('S4')}
            className="btn-gold pulse-glow"
          >
            İstasyon C'ye İlerle (9 Şahsiyet) <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
