import React from 'react';
import { MessageCircle, Instagram, Sparkles, ChevronDown } from 'lucide-react';
import { HeaderLogo } from './HeaderLogo';
import { STORE_INFO } from '../data/storeData';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F3] to-[#FFF4EC] pt-4 pb-10 px-4 flex flex-col items-center text-center"
    >
      {/* Subtle organic background decoration */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-pink-100/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-sky-100/50 blur-3xl pointer-events-none" />

      {/* Top Banner with Logo */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center z-10">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 shadow-xs border border-amber-200/80 mb-3 text-xs font-bold text-amber-700 tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          <span>Coleção Moda Infantil</span>
        </div>

        {/* LOGO LAURA KIDS GRANDE E EM ALTA QUALIDADE */}
        <div className="py-1">
          <HeaderLogo size="lg" id="hero-main-logo" />
        </div>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-stone-600 font-medium max-w-xs mt-1 mb-5">
          Looks completos com estilo, conforto e alegria para momentos inesquecíveis.
        </p>

        {/* Hero Photo Card: Crianças com looks completos */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl shadow-amber-950/10 border-4 border-white bg-white group transition-all duration-300">
          <div className="aspect-[4/3] w-full overflow-hidden relative">
            <img
              src="/images/hero.jpg"
              alt="Crianças sorrindo usando looks completos da Laura Kids"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            {/* Subtle bottom gradient overlay for look badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent flex flex-col justify-end p-4 text-left">
              <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E02424] text-white shadow-sm mb-1 tracking-wider uppercase">
                Nova Coleção
              </span>
              <h2 className="text-white text-lg font-bold drop-shadow-sm leading-tight">
                Moda feita para brincar e encantar
              </h2>
              <p className="text-white/90 text-xs font-medium">
                Meninos e Meninas • Do bebê aos 12 anos
              </p>
            </div>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="w-full mt-6 space-y-3">
          {/* Main Action: VER NOSSOS LOOKS */}
          <button
            id="btn-ver-nossos-looks"
            onClick={onExploreClick}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF5252] via-[#F59E0B] to-[#EC4899] text-white font-extrabold text-base tracking-wide shadow-lg shadow-red-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105"
          >
            <Sparkles className="w-5 h-5 fill-white/80" />
            <span>VER NOSSOS LOOKS</span>
            <ChevronDown className="w-4 h-4 ml-1 stroke-[3]" />
          </button>

          {/* Social Buttons: WhatsApp & Instagram */}
          <div className="grid grid-cols-2 gap-3">
            {/* WhatsApp Button */}
            <a
              id="hero-btn-whatsapp"
              href={STORE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all hover:bg-[#20ba59]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Instagram Button */}
            <a
              id="hero-btn-instagram"
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white font-bold text-sm shadow-md shadow-pink-600/20 active:scale-[0.98] transition-all hover:opacity-95"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Small trust badges */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-stone-500 mt-5">
          <span className="flex items-center gap-1">✨ Alta Qualidade</span>
          <span>•</span>
          <span className="flex items-center gap-1">🧸 Conforto Total</span>
          <span>•</span>
          <span className="flex items-center gap-1">📦 Envio Rápido</span>
        </div>
      </div>
    </section>
  );
};
