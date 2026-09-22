import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { WatermarkLogo } from './WatermarkLogo';

export const WhatsAppSection: React.FC = () => {
  return (
    <section
      id="contato-whatsapp"
      className="relative overflow-hidden py-12 px-4 bg-gradient-to-b from-[#FFFDF9] via-[#ECFDF5] to-[#F0FDF4]"
    >
      {/* Integrated Watermark of Laura Kids Logo */}
      <WatermarkLogo
        id="watermark-whatsapp-section"
        opacity={0.08}
        rotate={4}
        scale={1.2}
      />

      <div className="relative z-10 max-w-md mx-auto text-center flex flex-col items-center">
        {/* Playful top icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4 animate-bounce duration-1000">
          <MessageCircle className="w-8 h-8 fill-white" />
        </div>

        {/* Textos exatos solicitados */}
        <div className="space-y-1 mb-6">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-100/80 px-3 py-1 rounded-full mb-1">
            <Sparkles className="w-3 h-3 text-emerald-600" /> Atendimento Personalizado
          </span>
          <h2 className="text-2xl font-black text-stone-800 tracking-tight">
            Gostou de algum look?
          </h2>
          <p className="text-base font-semibold text-stone-600">
            Fale com a Laura Kids pelo WhatsApp.
          </p>
          <p className="text-xs text-stone-500 max-w-xs mx-auto pt-1">
            Tire dúvidas sobre tamanhos, tecidos, novidades e faça seu pedido direto com nossa equipe.
          </p>
        </div>

        {/* Botão Grande: FALAR NO WHATSAPP */}
        <div className="w-full">
          <a
            id="btn-falar-no-whatsapp"
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-base tracking-wider shadow-xl shadow-emerald-600/25 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span>FALAR NO WHATSAPP</span>
          </a>
        </div>

        {/* Friendly note */}
        <p className="text-[11px] text-stone-400 mt-4 flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          Resposta rápida em horário comercial
        </p>
      </div>
    </section>
  );
};
