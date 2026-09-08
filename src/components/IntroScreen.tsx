import React from 'react';
import { motion } from 'motion/react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none bg-[#0a2328]">
      {/* Historical Seljuk Scholars & Observatory Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url('/images/seljuk_scholars_bg.jpg')` }}
      />

      {/* Atmospheric Seljuk Firuze/Turquoise & Vignette Tint Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a272c]/75 via-[#0f766e]/35 to-[#061e22]/85 backdrop-blur-[1.5px]" />

      {/* Subtle Seljuk Star Geometric Geometry Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="intro-seljuk-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,6 49,29 74,40 49,51 40,74 31,51 6,40 31,29" fill="none" stroke="#5eead4" strokeWidth="1.2" opacity="0.8" />
              <rect x="22" y="22" width="36" height="36" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
              <circle cx="40" cy="40" r="7" fill="none" stroke="#fde047" strokeWidth="1" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#intro-seljuk-pattern)" />
        </svg>
      </div>

      {/* Main Entrance Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -15 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl bg-white/95 backdrop-blur-md border-2 border-[#0d9488]/40 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(13,148,136,0.2)] text-[#0f2933] overflow-hidden"
      >
        {/* Top Seljuk Turquoise Banner and Gold Inlay */}
        <div className="absolute top-0 inset-x-0 h-2.5 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0284c7]" />
        <div className="absolute top-2.5 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20" />

        {/* 1. Başlık */}
        <div className="text-center pt-2 sm:pt-4">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2933] tracking-wide leading-tight">
            Türkistan’dan Anadolu’ya <br className="hidden sm:inline" />
            <span className="text-[#0d9488]">Medeniyet Öncüleri</span>
          </h1>
        </div>

        {/* 2. Açıklama (Tanıtıcı ve Kazanım Odaklı) */}
        <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-[#f0fdfa] border border-[#0d9488]/30 shadow-inner text-center">
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#134e4a] leading-relaxed">
            Bu etkinlikte; Türkistan’dan Anadolu’ya uzanan süreçte bilim, düşünce ve kültür hayatımıza yön veren öncü âlim ve mutasavvıfları tanıyacak; onların medeniyetimize ve insanlığa sunduğu kalıcı katkıları keşfedeceksiniz.
          </p>
        </div>

        {/* 3. Etkinliğe Başla Butonu */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            onClick={onStart}
            className="w-full sm:w-auto px-10 sm:px-14 py-3.5 sm:py-4 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] text-white font-serif font-bold text-base sm:text-lg rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer shadow-teal-700/20"
          >
            Etkinliğe Başla
          </button>
        </div>
      </motion.div>
    </div>
  );
};
