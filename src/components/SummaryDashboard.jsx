import React, { useState } from 'react';
import { useCaravan } from '../state/CaravanContext';
import comparisonData from '../content/comparisonCards.json';
import figuresData from '../content/figures.json';
import { Copy, Check, ArrowRight } from 'lucide-react';

export default function SummaryDashboard() {
  const {
    studentName,
    setStudentName,
    stationAPlacements,
    stationCTags,
    goToScene
  } = useCaravan();

  const [copied, setCopied] = useState(false);

  const turkIslamCards = comparisonData.filter(c => stationAPlacements[c.id] === 'turk_islam');
  const batiCards = comparisonData.filter(c => stationAPlacements[c.id] === 'bati');

  const generatePresentationScript = () => {
    return `# TÜRK-İSLAM MEDENİYETİNİN ETKİLERİ (TAR.10.1.4)
Öğrenci: ${studentName || 'Tarih Öğrencisi'} • Tarih: ${new Date().toLocaleDateString('tr-TR')}

1. MEDENİYET KARŞILAŞTIRMASI:
- Türk-İslam: Nizamiye medreseleri, saray himayesi, rasathaneler, küçük kan dolaşımı buluşu, vakıflar.
- Batı: Katedral okulları, skolastik düşünce, kilise baskısı ve sansür.

2. TARİHSEL KANITLAR:
- Biruni: Saray himayesinde çok yönlü bilim ve rasathane gözlemleri.
- İbn Nefis: Galen'in hatasını düzelterek küçük kan dolaşımını ilk kez keşfetti.
- Colin Ronan: İslam bilimi pasif aktarıcı değil, hataları düzelten özgün üreticidir.

3. 9 BÜYÜK ŞAHSİYET:
- Yesevi & Yunus Emre: Türkçe irfan ve tasavvuf dili.
- Kaşgarlı Mahmud: Divânü Lugâti't-Türk ve ilk Türk dünya haritası.
- Ömer Hayyam: Celali Takvimi ve 3. derece denklemler.
- Cezeri: Robotik otomatlar ve Fil Su Saati.
- İbnülarabi, Mevlana & Hacı Bektaş: Evrensel hoşgörü, birlik ve bilgelik.
- İbni Bibi: Selçuklu tarihi, vakıf ve ticaret güvenliği belgeleri.`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePresentationScript());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '850px', margin: '0 auto' }}>
      
      {/* Action Header */}
      <div className="modern-card" style={{ padding: '0.85rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#475569' }}>Öğrenci:</span>
          <input
            type="text"
            placeholder="Adınızı giriniz..."
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={{
              padding: '0.3rem 0.6rem',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={handleCopy} className="btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Kopyalandı!' : 'Sunumu Kopyala'}
          </button>
          <button onClick={() => goToScene('S6')} className="btn-gold" style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem' }}>
            Beratı Al <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Visual Infographic Grid */}
      <div className="modern-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        {/* Section 1: Karşılaştırma */}
        <div>
          <strong style={{ fontSize: '0.95rem', color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>
            ⚖️ Medeniyetler Karşılaştırması
          </strong>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '0.65rem' }}>
              <span style={{ color: '#065f46', fontSize: '0.82rem', fontWeight: '700' }}>🕌 Türk-İslam</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.35rem' }}>
                {turkIslamCards.map(c => (
                  <span key={c.id} style={{ background: '#ffffff', border: '1px solid #86efac', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.72rem', color: '#065f46' }}>
                    {c.icon} {c.title}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '0.65rem' }}>
              <span style={{ color: '#1e40af', fontSize: '0.82rem', fontWeight: '700' }}>⛪ Batı</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.35rem' }}>
                {batiCards.map(c => (
                  <span key={c.id} style={{ background: '#ffffff', border: '1px solid #93c5fd', padding: '0.15rem 0.45rem', borderRadius: '4px', fontSize: '0.72rem', color: '#1e40af' }}>
                    {c.icon} {c.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: 9 Figures Visual Strip */}
        <div>
          <strong style={{ fontSize: '0.95rem', color: '#0f172a', display: 'block', marginBottom: '0.4rem' }}>
            ⚜️ İnsanlığın Ortak Mirası (9 Şahsiyet)
          </strong>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.5rem' }}>
            {figuresData.map(f => {
              const tag = stationCTags[f.id];
              return (
                <div key={f.id} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.5rem', textAlign: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 0.25rem', border: '1px solid #cbd5e1' }}>
                    <img src={f.image} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {f.name}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: '#059669', fontWeight: '600' }}>
                    {tag?.tagLabel || 'Etiketlendi'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
