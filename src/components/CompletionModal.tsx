import React from 'react';
import { motion } from 'motion/react';

interface CompletionModalProps {
  isOpen: boolean;
  onRestart: () => void;
  onTerminate: () => void;
  onClose: () => void;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({
  isOpen,
  onRestart,
  onTerminate,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a2328]/75 backdrop-blur-sm select-none">
      {/* Seljuk Star Architectural Geometry Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="completion-seljuk-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,6 49,29 74,40 49,51 40,74 31,51 6,40 31,29" fill="none" stroke="#5eead4" strokeWidth="1.2" opacity="0.7" />
              <rect x="22" y="22" width="36" height="36" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.5" />
              <circle cx="40" cy="40" r="7" fill="none" stroke="#fde047" strokeWidth="1" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#completion-seljuk-pattern)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-md border-2 border-[#0d9488]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(13,148,136,0.3)] text-[#0f2933] overflow-hidden text-center"
      >
        {/* Top Seljuk Turquoise Banner and Gold Inlay */}
        <div className="absolute top-0 inset-x-0 h-2.5 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0284c7]" />
        <div className="absolute top-2.5 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20" />

        {/* Close 'X' Button in Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors font-bold text-base leading-none"
          title="Kapat"
        >
          ✕
        </button>

        {/* Title */}
        <div className="pt-2 sm:pt-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f2933] tracking-wide leading-tight">
            Tebrikler, Etkinliği Tamamladınız!
          </h2>
        </div>

        {/* Description Box */}
        <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#f0fdfa] border border-[#0d9488]/30 shadow-inner">
          <p className="font-serif text-sm sm:text-base text-[#134e4a] leading-relaxed">
            Türkistan’dan Anadolu’ya uzanan süreçte medeniyet öncüsü âlim ve mutasavvıflarımızı başarıyla incelediniz; onların insanlığa ve medeniyetimize sunduğu katkıları keşfederek tüm değerlendirmeleri tamamladınız.
          </p>
        </div>

        {/* Action Buttons: Etkinliği Yeniden Başlat & Etkinliği Bitir */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onRestart}
            className="w-full sm:w-1/2 py-3 px-4 bg-white hover:bg-[#f0fdfa] text-[#0f766e] hover:text-[#115e59] border-2 border-[#0d9488] font-serif font-bold text-sm rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            Etkinliği Yeniden Başlat
          </button>

          <button
            onClick={onTerminate}
            className="w-full sm:w-1/2 py-3 px-4 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] text-white font-serif font-bold text-sm rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-teal-700/20"
          >
            Etkinliği Bitir
          </button>
        </div>
      </motion.div>
    </div>
  );
};
