import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, CheckCircle2 } from 'lucide-react';
import { INSTAGRAM_POSTS, STORE_INFO } from '../data/storeData';

export const InstagramFeed: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [postLikes, setPostLikes] = useState<Record<string, number>>(
    INSTAGRAM_POSTS.reduce((acc, p) => ({ ...acc, [p.id]: p.likes }), {})
  );

  const handleLike = (id: string) => {
    setLikedPosts((prev) => {
      const isCurrentlyLiked = !!prev[id];
      setPostLikes((likesPrev) => ({
        ...likesPrev,
        [id]: isCurrentlyLiked ? likesPrev[id] - 1 : likesPrev[id] + 1,
      }));
      return { ...prev, [id]: !isCurrentlyLiked };
    });
  };

  return (
    <section id="instagram-feed" className="py-8 px-4 bg-white relative">
      <div className="max-w-md mx-auto">
        {/* Section Header styled like an Instagram profile bar */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
              <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden flex items-center justify-center">
                <img
                  src="/laura-kids-logo.png"
                  alt="Laura Kids"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h3 className="text-sm font-extrabold text-stone-900">{STORE_INFO.instagramHandle}</h3>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
              </div>
              <p className="text-xs text-stone-500">Instagram Oficial • Moda Infantil</p>
            </div>
          </div>

          <a
            id="btn-seguir-instagram-top"
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-all flex items-center gap-1 active:scale-95"
          >
            <span>Ver perfil</span>
            <ExternalLink className="w-3 h-3 text-stone-500" />
          </a>
        </div>

        {/* Carousel of Instagram Feed Posts */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none no-scrollbar -mx-4 px-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {INSTAGRAM_POSTS.map((post) => {
            const isLiked = !!likedPosts[post.id];
            const currentLikes = postLikes[post.id] || post.likes;

            return (
              <div
                key={post.id}
                id={`insta-post-${post.id}`}
                className="flex-none w-[75vw] sm:w-[260px] max-w-[280px] snap-center rounded-2xl border border-stone-200/80 bg-white overflow-hidden shadow-sm flex flex-col"
              >
                {/* Post Top Bar */}
                <div className="px-3 py-2 flex items-center justify-between border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-amber-100 flex items-center justify-center p-0.5 border border-amber-200">
                      <img
                        src="/laura-kids-logo.png"
                        alt="LK"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-stone-800">laurakids</span>
                  </div>
                  <span className="text-[10px] text-stone-400 font-medium">{post.timeAgo}</span>
                </div>

                {/* Post Image: Criança usando look */}
                <div
                  className="aspect-square w-full overflow-hidden bg-stone-100 relative cursor-pointer"
                  onDoubleClick={() => handleLike(post.id)}
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-xs text-white text-[10px] font-semibold">
                    {post.lookTag}
                  </div>
                </div>

                {/* Post Actions & Caption */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Action buttons */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <button
                          id={`like-post-btn-${post.id}`}
                          onClick={() => handleLike(post.id)}
                          aria-label="Curtir post"
                          className="flex items-center gap-1 text-stone-700 active:scale-90 transition-transform cursor-pointer"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              isLiked ? 'fill-rose-500 text-rose-500' : 'text-stone-700'
                            }`}
                          />
                        </button>
                        <button
                          aria-label="Comentar"
                          className="text-stone-700 active:scale-90 transition-transform cursor-pointer"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </button>
                      </div>
                      <span className="text-[11px] font-bold text-stone-800">
                        {currentLikes} curtidas
                      </span>
                    </div>

                    {/* Caption */}
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      <span className="font-bold text-stone-900 mr-1">laurakids</span>
                      {post.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Official Button: SEGUIR NO INSTAGRAM */}
        <div className="mt-4">
          <a
            id="btn-seguir-no-instagram"
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white font-extrabold text-sm tracking-wide shadow-md shadow-pink-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:opacity-95"
          >
            <Instagram className="w-4 h-4" />
            <span>SEGUIR NO INSTAGRAM</span>
          </a>
        </div>
      </div>
    </section>
  );
};
