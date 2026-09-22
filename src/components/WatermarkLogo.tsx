import React from 'react';

interface WatermarkLogoProps {
  className?: string;
  opacity?: number; // e.g. 0.06 or 0.08
  id?: string;
  rotate?: number;
  scale?: number;
}

export const WatermarkLogo: React.FC<WatermarkLogoProps> = ({
  className = '',
  opacity = 0.07,
  id = 'laura-kids-watermark',
  rotate = -6,
  scale = 1.15,
}) => {
  return (
    <div
      id={id}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center select-none z-0 ${className}`}
    >
      <div
        className="w-[120%] max-w-[700px] aspect-[800/480] transition-opacity duration-700"
        style={{
          transform: `rotate(${rotate}deg) scale(${scale})`,
          opacity,
          filter: 'blur(0.4px) contrast(105%)',
        }}
      >
        <img
          src="/laura-kids-logo.png"
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};
