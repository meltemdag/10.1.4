import React from 'react';
import { useCaravan } from '../state/CaravanContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function S1_Context() {
  const { goToScene } = useCaravan();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      maxWidth: '750px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <div>
        <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>
          Geçmişten Günümüze Kültür Köprüsü
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.2rem' }}>
          Türk-İslam mirası bugün de tüm dünyada yaşamaya devam ediyor.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        
        {/* TİKA */}
        <div className="modern-card" style={{ padding: '0.85rem', textAlign: 'left' }}>
          <div style={{ borderRadius: '8px', overflow: 'hidden', height: '160px', background: '#f1f5f9' }}>
            <img
              src="/assets/context/tika_tunus.jpg"
              alt="TİKA El Yazması Laboratuvarı"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ marginTop: '0.6rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#0f172a' }}>🏛️ TİKA</h3>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.15rem' }}>
              150+ ülkede cami, köprü ve el yazması kütüphanelerini restore eder.
            </p>
          </div>
        </div>

        {/* Yunus Emre */}
        <div className="modern-card" style={{ padding: '0.85rem', textAlign: 'left' }}>
          <div style={{ borderRadius: '8px', overflow: 'hidden', height: '160px', background: '#f1f5f9' }}>
            <img
              src="/assets/context/yee_senegal.jpg"
              alt="Yunus Emre Enstitüsü Atölyesi"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ marginTop: '0.6rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#0f172a' }}>🌍 Yunus Emre Enstitüsü</h3>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.15rem' }}>
              80+ kültür merkezinde Türkçeyi, sanatı ve hoşgörü kültürünü tanıtır.
            </p>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', marginTop: '0.5rem' }}>
        <button onClick={() => goToScene('S0')} className="btn-secondary">
          <ArrowLeft size={16} /> Geri
        </button>
        <button onClick={() => goToScene('S2')} className="btn-primary">
          1. İstasyona Başla (Karşılaştır) <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
