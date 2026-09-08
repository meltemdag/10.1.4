import React, { useState } from 'react';

interface PortraitArtProps {
  scholarId: string;
  isGuessed: boolean;
  className?: string;
  isInspecting?: boolean;
}

export const PortraitArt: React.FC<PortraitArtProps> = ({
  scholarId,
  isGuessed,
  className = '',
  isInspecting = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const portraitSrc = `${import.meta.env.BASE_URL}images/scholars/portraits/${scholarId}.png`;

  return (
    <div className={`relative overflow-hidden w-full h-full select-none bg-[#e6f7f8] ${className}`}>
      {/* Real Museum Portrait Painting */}
      {!imageError ? (
        <img
          src={portraitSrc}
          alt={scholarId}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${isInspecting ? 'brightness-105' : 'brightness-100 group-hover:scale-105'}`}
          loading="eager"
        />
      ) : (
        /* Fallback if image fails */
        <div className="w-full h-full flex items-center justify-center bg-[#e6f7f8] text-[#0f766e] font-serif text-sm">
          {scholarId}
        </div>
      )}

      {/* Subtle Fine Art Light Glaze */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-black/10" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(13,148,136,0.15)]" />

      {/* Warm Golden Spotlight Glow Cone */}
      <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-[#d97706]/15 via-transparent to-transparent pointer-events-none" />

      {/* When NOT guessed yet and NOT in active inspection (in hall view): display Seljuk Turquoise Mystery Veil */}
      {!isGuessed && !isInspecting && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f766e]/75 via-[#0d9488]/65 to-[#0284c7]/75 backdrop-blur-[1px] flex items-center justify-center p-4 text-center transition-all duration-300 group-hover:from-[#0f766e]/60 group-hover:to-[#0284c7]/60">
          <div className="w-14 h-14 rounded-full bg-white/95 border-2 border-[#f59e0b] flex items-center justify-center text-[#0f766e] shadow-[0_4px_20px_rgba(15,118,110,0.4)] transform group-hover:scale-110 transition-transform">
            <span className="font-serif text-2xl font-bold text-[#0d9488]">?</span>
          </div>
        </div>
      )}
    </div>
  );
};
