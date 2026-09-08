import React from 'react';
import { motion } from 'motion/react';
import { ScholarData, FinalCuratorSubmission } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';

interface MuseumReportModalProps {
  submission: FinalCuratorSubmission;
  onClose: () => void;
  onResetExploration: () => void;
}

export const MuseumReportModal: React.FC<MuseumReportModalProps> = ({
  submission,
  onClose,
  onResetExploration
}) => {
  // Dimensions analysis
  const dimensionsSummary = [
    {
      id: 'bilim',
      label: 'Bilim ve Mühendislik',
      color: 'bg-cyan-50 text-cyan-900 border-cyan-300',
      scholars: ['Cezeri', 'Ömer Hayyam', 'Kaşgarlı Mahmud']
    },
    {
      id: 'egitim',
      label: 'Eğitim ve İrfan Mektebi',
      color: 'bg-amber-50 text-amber-900 border-amber-300',
      scholars: ['Ahmed Yesevi', 'Hacı Bektaş Veli', 'İbnülarabi', 'Mevlana']
    },
    {
      id: 'dilVeKultur',
      label: 'Dil ve Kültür',
      color: 'bg-sky-50 text-sky-900 border-sky-300',
      scholars: ['Kaşgarlı Mahmud', 'Yunus Emre', 'Ahmed Yesevi']
    },
    {
      id: 'sanat',
      label: 'Sanat ve Edebiyat',
      color: 'bg-emerald-50 text-emerald-900 border-emerald-300',
      scholars: ['Yunus Emre', 'Mevlana', 'Ömer Hayyam']
    },
    {
      id: 'dusunce',
      label: 'Felsefe ve Düşünce',
      color: 'bg-teal-50 text-teal-900 border-teal-300',
      scholars: ['İbnülarabi', 'Mevlana', 'Ömer Hayyam', 'Hacı Bektaş Veli']
    },
    {
      id: 'islamlasma',
      label: 'İslamlaşma ve Tasavvufi Hoşgörü',
      color: 'bg-teal-50 text-teal-900 border-teal-300',
      scholars: ['Ahmed Yesevi', 'Hacı Bektaş Veli', 'Mevlana', 'İbnülarabi']
    },
    {
      id: 'anadoluTurklesmesi',
      label: 'Anadolu’nun Türkleşmesi ve Vatanlaşması',
      color: 'bg-blue-50 text-blue-900 border-blue-300',
      scholars: ['Yunus Emre', 'İbni Bibi', 'Hacı Bektaş Veli', 'Ahmed Yesevi', 'Kaşgarlı Mahmud']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0f2933]/60 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-white border-2 border-[#0d9488] rounded-3xl shadow-[0_25px_70px_rgba(13,148,136,0.25)] overflow-hidden text-[#0f2933] flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:text-black print:bg-white"
      >
        {/* Certificate Top Frame */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0284c7] border-b border-[#0d9488]/30 flex flex-wrap items-center justify-between gap-4 text-white print:border-b-2 print:border-black">
          <div className="flex items-center space-x-3.5">
            <div>
              <span className="text-[11px] font-serif uppercase tracking-[0.2em] text-[#ccfbf1] font-bold">
                TAR.10.1.4 Etkinlik Başarı Belgesi
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white print:text-black">
                Tarih Öğrenme ve Değerlendirme Raporu
              </h2>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2 print:hidden">
            <button
              onClick={() => {
                window.print();
              }}
              className="px-3.5 py-1.5 text-xs font-serif bg-white/15 border border-white/30 text-white hover:bg-white/25 rounded-xl transition-colors"
              title="Raporu Yazdır / PDF Olarak Kaydet"
            >
              Yazdır
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-serif bg-white text-[#0f766e] font-bold rounded-xl hover:bg-slate-100 shadow transition-colors"
            >
              Portre Alanına Dönünüz
            </button>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 print:overflow-visible bg-[#fafdfd]">
          {/* Section: Evaluation Synthesis */}
          <div className="p-5 rounded-2xl bg-[#f0fdfa] border-2 border-[#0d9488]/30 shadow-xs print:bg-gray-50 print:border-gray-300">
            <div className="text-[#0f766e] font-serif font-bold text-xs uppercase tracking-widest print:text-black">
              Değerlendirmeniz (Sentez)
            </div>
            <blockquote className="mt-2 text-base sm:text-lg font-serif italic text-[#134e4a] leading-relaxed border-l-4 border-[#0d9488] pl-4 print:text-black">
              “{submission.thesisStatement}”
            </blockquote>
          </div>

          {/* Selected 3 Scholars & Reasons */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-sm text-[#0f766e] uppercase tracking-wider print:text-black">
              Anadolu’nun Dönüşümünde Belirlediğiniz 3 Öncü İlim İnsanı ve Gerekçeleriniz
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {submission.selectedScholarIds.map((id) => {
                const scholar = SCHOLARS_DATA.find((s) => s.id === id);
                if (!scholar) return null;
                const reason = submission.reasons[id];

                return (
                  <div
                    key={id}
                    className="p-4 rounded-2xl bg-white border-2 border-[#0d9488]/25 print:bg-white print:border-gray-300 flex flex-col justify-between shadow-xs"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#0d9488]/40 shrink-0 bg-[#e6f4f6] shadow-xs">
                        <img
                          src={`${import.meta.env.BASE_URL}images/scholars/avatars/${scholar.id}.png`}
                          alt={scholar.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-base text-[#0f2933] print:text-black truncate">
                          {scholar.name}
                        </h4>
                        <span className="block text-xs text-slate-500 mt-0.5 print:text-gray-600 truncate">
                          {scholar.work}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-[#0d9488]/20 text-xs text-slate-700 leading-relaxed print:text-gray-800">
                      <strong className="text-[#0f766e]">Gerekçeniz:</strong> {reason}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dimensions Visual Breakdown */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-sm text-[#0f766e] uppercase tracking-wider print:text-black">
              Keşfettiğiniz Medeniyet Boyutları (TAR.10.1.4 Kazanım Haritası)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {dimensionsSummary.map((dim) => {
                return (
                  <div
                    key={dim.id}
                    className={`p-3.5 rounded-2xl border ${dim.color} flex flex-col justify-between print:bg-white print:border-gray-300 print:text-black shadow-2xs`}
                  >
                    <div>
                      <span className="font-serif font-bold text-xs">
                        {dim.label}
                      </span>
                    </div>
                    <div className="mt-2 text-[11px] text-slate-700 leading-snug print:text-gray-700">
                      <strong className="text-slate-900">Temsilciler:</strong> {dim.scholars.join(', ')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pedagogical Summary & Seal */}
          <div className="p-4 rounded-2xl bg-[#f0fdfa] border border-[#0d9488]/30 flex flex-col sm:flex-row items-center justify-between gap-4 print:bg-white print:border-gray-300">
            <div>
              <h4 className="font-serif font-bold text-sm text-[#0f2933] print:text-black">
                Tüm İlim İnsanları Başarıyla İncelendi ve Değerlendirildi
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xl print:text-gray-600">
                Türkistan’dan Türkiye’ye uzanan bilim, dil, felsefe ve kültür mirasımızın Anadolu’nun vatanlaşma ve İslamlaşma sürecindeki rolünü birincil kanıtlarla başarıyla değerlendirdiniz.
              </p>
            </div>

            <div className="shrink-0 flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0f766e] via-[#0d9488] to-[#0284c7] border-2 border-[#fde047] shadow-xl flex flex-col items-center justify-center text-center rotate-[-6deg]">
                <span className="text-[9px] font-serif font-bold text-white">TARİH</span>
                <span className="text-[8px] font-mono tracking-wider text-[#fde047] uppercase font-bold">BAŞARI MÜHRÜ</span>
                <span className="text-[7px] text-white/90">TAR.10.1.4</span>
              </div>
            </div>
          </div>

          {/* Reset or Re-explore */}
          <div className="flex items-center justify-between pt-2 print:hidden">
            <button
              onClick={() => {
                if (confirm('Etkinlik ilerlemenizi sıfırlayıp baştan başlamak istiyor musunuz?')) {
                  onResetExploration();
                }
              }}
              className="text-xs text-rose-600 hover:text-rose-700 font-serif font-medium"
            >
              Keşfi Sıfırlayınız ve Baştan Başlayınız
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] text-white font-serif font-bold text-sm rounded-xl shadow-lg shadow-teal-700/20 transition-all"
            >
              Salonda Gezinmeye Devam Ediniz
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
