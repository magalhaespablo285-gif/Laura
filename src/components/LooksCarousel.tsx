import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Heart, Eye } from 'lucide-react';
import { LOOKS_DATA, STORE_INFO } from '../data/storeData';
import { LookItem } from '../types';

interface LooksCarouselProps {
  onSelectLook: (look: LookItem) => void;
}

export const LooksCarousel: React.FC<LooksCarouselProps> = ({ onSelectLook }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [likedLooks, setLikedLooks] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedLooks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.75));
      setActiveIndex(Math.min(Math.max(index, 0), LOOKS_DATA.length - 1));
    }
  };

  // Tag styling helper based on brand colors
  const getTagBadgeStyle = (tag: LookItem['tag']) => {
    switch (tag) {
      case 'VESTIDOS':
        return 'bg-pink-500 text-white';
      case 'LOOK MASCULINO':
        return 'bg-sky-600 text-white';
      case 'LOOK FEMININO':
        return 'bg-rose-500 text-white';
      case 'CONJUNTOS':
        return 'bg-emerald-600 text-white';
      case 'NOVIDADES':
        return 'bg-amber-500 text-white';
      default:
        return 'bg-stone-800 text-white';
    }
  };

  return (
    <section id="nossos-looks" className="py-8 px-4 bg-[#FFFDF9] relative">
      {/* Section Header */}
      <div className="max-w-md mx-auto mb-4 flex items-end justify-between">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-0.5">
            Coleção Oficial
          </span>
          <h2 className="text-2xl font-extrabold text-stone-800 tracking-tight flex items-center gap-2">
            <span>Nossos Looks</span>
            <span className="text-base text-pink-500">✨</span>
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Arraste para o lado e encante-se com cada combinação
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-1.5">
          <button
            id="looks-prev-btn"
            onClick={() => scroll('left')}
            aria-label="Look anterior"
            className="w-8 h-8 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center shadow-xs active:scale-95 transition-all hover:bg-stone-50 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            id="looks-next-btn"
            onClick={() => scroll('right')}
            aria-label="Próximo look"
            className="w-8 h-8 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center shadow-xs active:scale-95 transition-all hover:bg-stone-50 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none no-scrollbar -mx-4 px-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {LOOKS_DATA.map((look) => {
          const isLiked = likedLooks[look.id];
          const badgeClass = getTagBadgeStyle(look.tag);

          return (
            <div
              key={look.id}
              id={`card-${look.id}`}
              onClick={() => onSelectLook(look)}
              className="flex-none w-[78vw] sm:w-[280px] max-w-[310px] snap-center rounded-3xl bg-white border border-stone-100/80 shadow-md shadow-amber-950/5 overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container with Tag Badge */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                <img
                  src={look.image}
                  alt={`${look.title} - ${look.tag}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider shadow-sm uppercase ${badgeClass}`}
                  >
                    {look.tag}
                  </span>
                </div>

                {/* Like Button */}
                <button
                  id={`btn-like-${look.id}`}
                  onClick={(e) => toggleLike(look.id, e)}
                  aria-label="Favoritar look"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 shadow-sm active:scale-90 transition-all hover:bg-white"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isLiked ? 'fill-rose-500 text-rose-500' : 'text-stone-600'
                    }`}
                  />
                </button>

                {/* Tap to expand overlay hint */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 flex items-center justify-between text-white opacity-95">
                  <span className="text-xs font-semibold flex items-center gap-1 text-white/90">
                    <Eye className="w-3.5 h-3.5" /> Ver detalhes
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs font-medium">
                    Look Completo
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-stone-800 line-clamp-1 group-hover:text-amber-700 transition-colors">
                    {look.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                    {look.description}
                  </p>
                </div>

                {/* Order / WhatsApp CTA */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
                  <a
                    id={`btn-ask-whatsapp-${look.id}`}
                    href={STORE_INFO.getLookWhatsappUrl(look.title, look.tag)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Pedir no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-1.5 mt-2">
        {LOOKS_DATA.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Ir para look ${idx + 1}`}
            onClick={() => {
              if (scrollContainerRef.current) {
                const clientWidth = scrollContainerRef.current.clientWidth;
                scrollContainerRef.current.scrollTo({
                  left: idx * (clientWidth * 0.75),
                  behavior: 'smooth',
                });
              }
            }}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx
                ? 'w-6 h-2 bg-amber-500'
                : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
