import React from 'react';
import { MessageCircle, Instagram, Heart } from 'lucide-react';
import { HeaderLogo } from './HeaderLogo';
import { STORE_INFO } from '../data/storeData';

export const FooterSection: React.FC = () => {
  return (
    <footer id="rodape" className="bg-[#FFFDF9] border-t border-stone-200/80 pt-10 pb-20 px-4 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* LOGO LAURA KIDS EM PNG TRANSPARENTE */}
        <div className="mb-3">
          <HeaderLogo size="md" id="footer-logo" />
        </div>

        {/* Nome da Loja */}
        <h3 className="text-lg font-black text-stone-800 tracking-wider">
          {STORE_INFO.name}
        </h3>
        <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mt-0.5 mb-5">
          {STORE_INFO.tagline}
        </p>

        {/* Social Links: Instagram & WhatsApp */}
        <div className="flex items-center justify-center gap-3 mb-8 w-full max-w-xs">
          <a
            id="footer-btn-whatsapp"
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <a
            id="footer-btn-instagram"
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 rounded-xl bg-pink-50 text-pink-700 border border-pink-200 font-bold text-xs flex items-center justify-center gap-2 hover:bg-pink-100 transition-colors"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Clean copyright and aesthetic sign-off */}
        <div className="pt-6 border-t border-stone-100 w-full text-xs text-stone-400 space-y-1">
          <p className="flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} Laura Kids. Todos os direitos reservados.</span>
          </p>
          <p className="flex items-center justify-center gap-1 text-[11px] text-stone-400">
            <span>Feito com</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>para crianças felizes</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
