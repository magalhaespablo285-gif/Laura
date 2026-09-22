import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA, STORE_INFO } from '../data/storeData';
import { CategoryItem } from '../types';

interface CategoriesSectionProps {
  onSelectCategory: (category: CategoryItem) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias-section" className="py-8 px-4 bg-[#FFF9F3] relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-10 right-0 w-64 h-64 rounded-full bg-pink-100/40 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-64 h-64 rounded-full bg-sky-100/40 blur-2xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-md mx-auto mb-6 text-center">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
          Explore por Estilo
        </span>
        <h2 className="text-2xl font-extrabold text-stone-800 tracking-tight">
          Nossas Categorias
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
          Tudo o que você procura para vestir as crianças com carinho e bom gosto
        </p>
      </div>

      {/* Grid of 6 Modern Cards */}
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3.5">
        {CATEGORIES_DATA.map((cat) => (
          <div
            key={cat.id}
            id={`categoria-card-${cat.id}`}
            onClick={() => onSelectCategory(cat)}
            className="group relative rounded-3xl bg-white border border-stone-200/70 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer active:scale-[0.98]"
          >
            {/* Image of child wearing clothes */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 relative">
              <img
                src={cat.image}
                alt={`Moda Infantil - Categoria ${cat.title}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Emoji badge */}
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/95 shadow-xs flex items-center justify-center text-sm">
                <span>{cat.emoji}</span>
              </div>

              {/* Arrow */}
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/30 backdrop-blur-xs text-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Title overlay at bottom of image */}
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <h3 className="text-sm font-extrabold drop-shadow-xs tracking-tight">
                  {cat.title}
                </h3>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-2.5 flex-1 flex flex-col justify-between bg-white">
              <p className="text-[11px] text-stone-500 line-clamp-1 leading-tight font-medium">
                {cat.tagline}
              </p>
              
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Olá! Gostaria de conferir as opções da categoria ${cat.title} na Laura Kids!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-2 text-[11px] font-bold text-amber-600 hover:text-amber-700 flex items-center gap-0.5"
              >
                <span>Ver opções</span>
                <span className="text-[10px]">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
