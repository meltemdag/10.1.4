import React from 'react';
import SummaryDashboard from '../components/SummaryDashboard';
import { useCaravan } from '../state/CaravanContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function S5_Summary() {
  const { goToScene } = useCaravan();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <SummaryDashboard />

      {/* Navigation Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button
          onClick={() => goToScene('S4')}
          className="btn-outline-gold"
        >
          <ArrowLeft size={18} /> İstasyon C'ye Dön
        </button>

        <button
          onClick={() => goToScene('S6')}
          className="btn-gold pulse-glow"
        >
          Kapanış ve Başarı Beratına İlerle (S6) <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
