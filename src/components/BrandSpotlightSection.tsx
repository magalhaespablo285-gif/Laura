import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { WatermarkLogo } from './WatermarkLogo';
import { STORE_INFO } from '../data/storeData';

export const BrandSpotlightSection: React.FC = () => {
  return (
    <section
      id="destaque-da-marca"
      className="relative overflow-hidden py-12 px-4 bg-gradient-to-b from-[#FFF4EC] via-[#FFF9F3] to-[#FFFDF9]"
    >
      {/* 
        MARCA D'ÁGUA ELEGANTE:
        Logo LAURA KIDS grande ao fundo, com transparência/opacidade baixa,
        ocupando boa parte da área da seção, mas permanecendo atrás da criança e do conteúdo.
      */}
      <WatermarkLogo
        id="watermark-destaque-marca"
        opacity={0.10}
        rotate={-5}
        scale={1.3}
        className="top-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-amber-200 text-amber-800 text-xs font-bold tracking-wide uppercase shadow-xs mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>Destaque da Marca</span>
        </div>

        {/* Citação / Frase Oficial */}
        <blockquote className="text-xl md:text-2xl font-extrabold text-stone-800 tracking-tight leading-snug mb-6 max-w-xs">
          “{STORE_INFO.motto}”
        </blockquote>

        {/* Foto Profissional da Criança usando look completo */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 border-4 border-white bg-white group">
          <div className="aspect-[4/3] w-full overflow-hidden relative">
            <img
              src="/images/spotlight.jpg"
              alt="Criança sorrindo com look completo Laura Kids"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle light vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex flex-col justify-end p-5 text-left text-white">
              <span className="text-[11px] font-extrabold tracking-widest text-amber-300 uppercase mb-0.5 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-amber-300" /> Feito com Amor
              </span>
              <p className="text-sm font-bold text-white/95 leading-snug">
                Cada detalhe pensado para o bem-estar e a felicidade dos pequenos.
              </p>
            </div>
          </div>
        </div>

        {/* Brief authentic indicator */}
        <p className="text-xs text-stone-500 mt-4 font-medium">
          Laura Kids Moda Infantil • Cuidando do visual dos seus pequenos com muito carinho
        </p>
      </div>
    </section>
  );
};
