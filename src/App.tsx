import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { LooksCarousel } from './components/LooksCarousel';
import { CategoriesSection } from './components/CategoriesSection';
import { BrandSpotlightSection } from './components/BrandSpotlightSection';
import { InstagramFeed } from './components/InstagramFeed';
import { WhatsAppSection } from './components/WhatsAppSection';
import { FooterSection } from './components/FooterSection';
import { LookModal } from './components/LookModal';
import { CategoryModal } from './components/CategoryModal';
import { FloatingActionBar } from './components/FloatingActionBar';
import { LookItem, CategoryItem } from './types';

export default function App() {
  const [selectedLook, setSelectedLook] = useState<LookItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  const handleScrollToLooks = () => {
    const section = document.getElementById('nossos-looks');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4EFEA] flex justify-center selection:bg-pink-200 selection:text-pink-900">
      {/* 
        Mobile BioSite Container:
        On mobile: fills 100% of viewport width.
        On tablet & desktop: centered smartphone / biosite column with subtle elevation and soft backdrop.
      */}
      <div className="w-full max-w-md min-h-screen bg-[#FFFDF9] shadow-2xl relative flex flex-col">
        {/* Top subtle decorative color bar inspired by the logo rainbow colors */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#FF5252] via-[#F59E0B] via-[#4ADE80] via-[#0284C7] to-[#EC4899]" />

        {/* MAIN BIOSITE CONTENT */}
        <main className="flex-1 flex flex-col">
          {/* SEÇÃO 1: HERO / INÍCIO */}
          <HeroSection onExploreClick={handleScrollToLooks} />

          {/* SEÇÃO 2: NOSSOS LOOKS */}
          <LooksCarousel onSelectLook={(look) => setSelectedLook(look)} />

          {/* SEÇÃO 3: CATEGORIAS */}
          <CategoriesSection onSelectCategory={(cat) => setSelectedCategory(cat)} />

          {/* SEÇÃO 4: DESTAQUE DA MARCA */}
          <BrandSpotlightSection />

          {/* SEÇÃO 5: INSTAGRAM */}
          <InstagramFeed />

          {/* SEÇÃO 6: WHATSAPP */}
          <WhatsAppSection />

          {/* SEÇÃO 7: RODAPÉ */}
          <FooterSection />
        </main>

        {/* Floating Quick Action Bar for Instant Access */}
        <FloatingActionBar />

        {/* Interactive Modals */}
        <LookModal
          look={selectedLook}
          onClose={() => setSelectedLook(null)}
        />
        <CategoryModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      </div>
    </div>
  );
}
