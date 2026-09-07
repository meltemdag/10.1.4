import React from 'react';
import { useCaravan } from '../state/CaravanContext';
import { ArrowRight } from 'lucide-react';

export default function S0_Intro() {
  const { goToScene } = useCaravan();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: '750px',
      margin: '0 auto',
      padding: '1rem 0'
    }}>
      <div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: '#0f172a', fontWeight: '800' }}>
          Kervan Rotası
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '0.3rem' }}>
          Türkistan'dan Anadolu'ya İlim ve Kültür Yolculuğu (1040 - 1299)
        </p>
      </div>

      {/* Map visual */}
      <div className="modern-card" style={{ padding: '0.5rem', overflow: 'hidden', width: '100%' }}>
        <img
          src="/assets/route-map-bg.svg"
          alt="Kervan Rotası Haritası"
          style={{ width: '100%', height: 'auto', borderRadius: '10px', display: 'block' }}
        />
      </div>

      {/* 1 Big Play Button */}
      <button
        onClick={() => goToScene('S1')}
        className="btn-primary"
        style={{ padding: '0.85rem 2.5rem', fontSize: '1.1rem', marginTop: '0.5rem' }}
      >
        Kervana Başla 🐪 <ArrowRight size={20} />
      </button>
    </div>
  );
}
