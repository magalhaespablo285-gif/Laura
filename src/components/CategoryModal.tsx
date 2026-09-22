import React from 'react';
import { X, MessageCircle, Sparkles } from 'lucide-react';
import { CategoryItem } from '../types';

interface CategoryModalProps {
  category: CategoryItem | null;
  onClose: () => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose }) => {
  if (!category) return null;

  return (
    <div
      id="category-modal-overlay"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        id="category-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] border border-stone-100"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <img
            src={category.image}
            alt={category.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-xl">
            {category.emoji}
          </div>
          <div className="absolute bottom-3 left-3 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Categoria
            </span>
            <h3 className="text-xl font-black drop-shadow-md">
              {category.title}
            </h3>
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-stone-700 leading-relaxed">
              {category.tagline}
            </p>
            <p className="text-xs text-stone-500 mt-2">
              Explore os looks completos da categoria {category.title}. Nossa equipe te ajuda a escolher o tamanho ideal pelo WhatsApp.
            </p>
          </div>

          <div className="mt-6 pt-3 border-t border-stone-100 space-y-2">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Olá! Quero ver mais looks e novidades da categoria ${category.title} da Laura Kids!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ver catálogo no WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs transition-colors"
            >
              Continuar navegando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
