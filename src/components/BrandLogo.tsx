import React from 'react';
import { IMAGES } from '../data/content';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'crest';
  showSubtitle?: boolean;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  showText = true,
}) => {
  const imageSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    hero: 'w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36',
    crest: 'w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
    hero: 'text-3xl sm:text-5xl',
    crest: 'text-2xl sm:text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[8px] sm:text-[9px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-xs',
    hero: 'text-xs sm:text-sm',
    crest: 'text-xs sm:text-sm',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Official Provided Circular Logo Badge */}
      <div className={`relative shrink-0 ${imageSizes[size]} group-hover:scale-105 transition-transform duration-300`}>
        <div className="w-full h-full rounded-full overflow-hidden border border-amber-400/40 shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-[#070F1E]">
          <img
            src={IMAGES.logo}
            alt="Logo Oficial EU SOU FLORIPA - Passeios de Escuna em Florianópolis"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-display font-black tracking-wider leading-none text-white transition-colors group-hover:text-amber-300 ${titleSizes[size]}`}
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
          >
            EU SOU FLORIPA
          </span>
          {showSubtitle && (
            <span
              className={`font-semibold tracking-[0.22em] uppercase text-amber-400/90 leading-tight mt-1 ${subtitleSizes[size]}`}
            >
              Passeios de Escuna · Florianópolis
            </span>
          )}
        </div>
      )}
    </div>
  );
};
