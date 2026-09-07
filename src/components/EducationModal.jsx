import React from 'react';
import educationData from '../content/educationComparison.json';
import { X, GraduationCap, BookOpen } from 'lucide-react';

export default function EducationModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <span className="badge badge-blue">Eğitim Kurumları • Ders Kitabı S.76-78</span>
          <h2 style={{ fontSize: '1.3rem', color: '#0f172a', marginTop: '0.2rem' }}>
            {educationData.title}
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.82rem' }}>
            Nizamiye Medreseleri vs Katedral &amp; Manastır Okulları
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem' }}>
          
          {/* Medrese */}
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#065f46' }}>
              <GraduationCap size={20} />
              <h3 style={{ fontSize: '1rem' }}>Türk-İslam: Medrese Sistemi</h3>
            </div>

            {/* Authentic Textbook Infographic */}
            <div style={{ borderRadius: '8px', overflow: 'hidden', height: '140px', border: '1px solid #86efac' }}>
              <img
                src="/assets/education/medrese_egitimi.jpg"
                alt="Bilgi Görseli 1.6: Medreselerde Eğitim"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ fontSize: '0.7rem', color: '#059669', fontStyle: 'italic', textAlign: 'center' }}>
              Bilgi Görseli 1.6: Medreselerde Eğitim (Ders Kitabı S.76)
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {educationData.medrese.features.map((f, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid #86efac', borderRadius: '8px', padding: '0.5rem 0.7rem' }}>
                  <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>{f.heading}</strong>
                  <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '0.1rem' }}>{f.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Katedral */}
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#1e40af' }}>
              <BookOpen size={20} />
              <h3 style={{ fontSize: '1rem' }}>Batı: Katedral &amp; Manastır</h3>
            </div>

            {/* Authentic Textbook Infographic */}
            <div style={{ borderRadius: '8px', overflow: 'hidden', height: '140px', border: '1px solid #93c5fd' }}>
              <img
                src="/assets/education/katedral_okulu.jpg"
                alt="Bilgi Görseli 1.7: Manastır ve Katedral Okullarında Eğitim"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ fontSize: '0.7rem', color: '#2563eb', fontStyle: 'italic', textAlign: 'center' }}>
              Bilgi Görseli 1.7: Katedral ve Manastır Okulları (Ders Kitabı S.78)
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {educationData.cathedral.features.map((f, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid #93c5fd', borderRadius: '8px', padding: '0.5rem 0.7rem' }}>
                  <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>{f.heading}</strong>
                  <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '0.1rem' }}>{f.detail}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
