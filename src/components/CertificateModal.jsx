import React, { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download, Printer, X, Award } from 'lucide-react';

export default function CertificateModal({ studentName, onClose }) {
  const certificateRef = useRef(null);

  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true
      });
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
      pdf.save(`kervan-rotasi-berati-${studentName || 'ogrenci'}.pdf`);
    } catch (err) {
      console.error(err);
    }
  };

  const formattedDate = new Date().toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-body"
        style={{ maxWidth: '820px', padding: '1.25rem', background: '#f8fafc' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: '#ffffff',
            border: '1px solid #cbd5e1',
            color: '#64748b',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Certificate Surface */}
        <div
          ref={certificateRef}
          style={{
            background: '#ffffff',
            border: '4px double #d97706',
            borderRadius: '16px',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
          }}
        >
          {/* Header */}
          <div style={{ fontSize: '2.5rem', marginBottom: '0.4rem' }}>⚜️</div>
          <span style={{ fontSize: '0.78rem', color: '#d97706', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
            TÜRKİYE YÜZYILI MAARİF MODELİ • TARİH 10
          </span>
          
          <h1 style={{ fontSize: '1.8rem', color: '#0f172a', fontFamily: 'var(--font-serif)', marginTop: '0.2rem' }}>
            KERVAN ROTASI BAŞARI BERATI
          </h1>
          <div style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
            Türkistan'dan Türkiye'ye Türk-İslam Medeniyeti İlim ve İrfan Seferi
          </div>

          {/* Student Name */}
          <div style={{ margin: '1.25rem 0' }}>
            <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Bu berat,</span>
            <div style={{
              fontSize: '1.6rem',
              color: '#1e3a8a',
              fontFamily: 'var(--font-serif)',
              fontWeight: 'bold',
              borderBottom: '2px solid #fde68a',
              display: 'inline-block',
              padding: '0.2rem 2rem',
              margin: '0.3rem 0'
            }}>
              {studentName || 'Değerli Tarih Öğrencisi'}
            </div>
          </div>

          {/* 2-Line Citation */}
          <p style={{ color: '#475569', fontSize: '0.88rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            adlı öğrencinin <strong>TAR.10.1.4</strong> kazanımı kapsamında; Türk-İslam ve Batı medeniyetlerinin bilim, kültür, eğitim ve sanat anlayışını karşılaştırıp, 9 büyük şahsiyetin insanlığın ortak mirasına katkısını başarıyla modellediği tasdik olunur.
          </p>

          {/* Footer */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: '2rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid #f1f5f9'
          }}>
            <div style={{ textAlign: 'left', fontSize: '0.8rem', color: '#64748b' }}>
              <div>Tarih: <strong>{formattedDate}</strong></div>
              <div style={{ color: '#059669', fontWeight: '600' }}>Kervan Seferi: Tamamlandı</div>
            </div>

            {/* Seal */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '2px solid #d97706',
              background: '#fef3c7',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#b45309',
              fontWeight: 'bold',
              fontSize: '0.7rem'
            }}>
              <span>⭐</span>
              <span>MÜHÜR</span>
            </div>

            <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#64748b' }}>
              <div>Meclis: <strong>Âlimler &amp; Erenler</strong></div>
              <div style={{ color: '#2563eb', fontWeight: '600' }}>Başarı Derecesi: %100</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <button onClick={handleDownloadPDF} className="btn-primary">
            <Download size={16} /> Beratı İndir (PDF)
          </button>
          <button onClick={handlePrint} className="btn-secondary">
            <Printer size={16} /> Yazdır
          </button>
        </div>
      </div>
    </div>
  );
}
