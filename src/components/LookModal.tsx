import React from 'react';
import { X, MessageCircle, Heart, Share2, Sparkles } from 'lucide-react';
import { LookItem } from '../types';
import { STORE_INFO } from '../data/storeData';

interface LookModalProps {
  look: LookItem | null;
  onClose: () => void;
}

export const LookModal: React.FC<LookModalProps> = ({ look, onClose }) => {
  if (!look) return null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Laura Kids - ${look.title}`,
          text: `Olha esse look lindo da Laura Kids: ${look.title}!`,
          url: window.location.href,
        });
      } catch {
        // user cancelled or share unsupported
      }
    }
  };

  return (
    <div
      id="look-modal-overlay"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 animate-fade-in"
      onClick={onClose}
    >
      <div
        id="look-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-scale-up border border-stone-100"
      >
        {/* Modal Image Header */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
          <img
            src={look.image}
            alt={look.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />

          {/* Close button */}
          <button
            id="btn-close-modal"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-white tracking-wider uppercase shadow-sm">
              {look.tag}
            </span>
          </div>

          {/* Category overlay */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-xs text-stone-800 shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>{look.category}</span>
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 flex-1 flex flex-col justify-between overflow-y-auto">
          <div>
            <h3 className="text-xl font-extrabold text-stone-900 leading-snug">
              {look.title}
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed font-medium">
              {look.description}
            </p>

            <div className="mt-4 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60 flex items-center gap-2.5">
              <span className="text-lg">🧸</span>
              <p className="text-[11px] text-amber-900 font-semibold leading-tight">
                Peça fotografada com look completo. Consulte disponibilidade de numerações e cores no atendimento.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-5 space-y-2 pt-2 border-t border-stone-100">
            <a
              id="modal-btn-whatsapp"
              href={STORE_INFO.getLookWhatsappUrl(look.title, look.tag)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir este look no WhatsApp</span>
            </a>

            <div className="flex gap-2">
              <button
                onClick={handleShare}
                className="flex-1 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartilhar</span>
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition-colors"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
