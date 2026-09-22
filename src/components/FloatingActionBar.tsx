import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export const FloatingActionBar: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="floating-action-bar"
      className="fixed bottom-4 inset-x-0 z-40 px-4 pointer-events-none flex justify-center"
    >
      <div className="pointer-events-auto max-w-sm w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-stone-900/10 border border-stone-200/80 p-2 flex items-center justify-between gap-2">
        {/* WhatsApp direct pill */}
        <a
          id="floating-btn-whatsapp"
          href={STORE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Falar no WhatsApp</span>
        </a>

        {/* Instagram pill */}
        <a
          id="floating-btn-instagram"
          href={STORE_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram da loja"
          className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-xs active:scale-95 transition-all"
        >
          <Instagram className="w-4 h-4" />
        </a>

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            id="floating-btn-scroll-top"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-all active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
