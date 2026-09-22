import React from 'react';

interface HeaderLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({
  className = '',
  size = 'md',
  id = 'laura-kids-main-logo',
}) => {
  const sizeClasses = {
    sm: 'h-12 w-auto max-w-[160px]',
    md: 'h-20 w-auto max-w-[260px]',
    lg: 'h-28 w-auto max-w-[340px] md:h-32',
    xl: 'h-36 w-auto max-w-[420px] md:h-44',
  };

  return (
    <div id={id} className={`inline-flex items-center justify-center transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      <img
        src="/laura-kids-logo.png"
        alt="Laura Kids - Moda Infantil"
        referrerPolicy="no-referrer"
        className={`${sizeClasses[size]} object-contain drop-shadow-md select-none`}
        loading="eager"
      />
    </div>
  );
};
