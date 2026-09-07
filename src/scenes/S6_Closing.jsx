import React, { useState } from 'react';
import { useCaravan } from '../state/CaravanContext';
import CertificateModal from '../components/CertificateModal';
import { Award, RotateCcw } from 'lucide-react';

export default function S6_Closing() {
  const { studentName, setStudentName, restartExperience } = useCaravan();
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center', textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: '1rem 0' }}>
      
      <div className="modern-card" style={{ padding: '2rem 1.5rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ fontSize: '3rem' }}>🏆</div>
        
        <h2 style={{ fontSize: '1.6rem', color: '#0f172a' }}>
          Tebrikler! Kervan Tamamlandı
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.5rem 0' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Berat Sahibi:</span>
          <input
            type="text"
            placeholder="Adınızı giriniz..."
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '0.9rem',
              textAlign: 'center',
              outline: 'none'
            }}
          />
        </div>

        <button
          onClick={() => setShowCertificate(true)}
          className="btn-gold"
          style={{ padding: '0.75rem 2rem', fontSize: '1rem', marginTop: '0.35rem' }}
        >
          <Award size={18} /> Beratı Aç &amp; İndir
        </button>
      </div>

      <button onClick={restartExperience} className="btn-secondary" style={{ color: '#e11d48', fontSize: '0.85rem' }}>
        <RotateCcw size={14} /> Yeniden Başlat
      </button>

      {showCertificate && (
        <CertificateModal
          studentName={studentName}
          onClose={() => setShowCertificate(false)}
        />
      )}

    </div>
  );
}
