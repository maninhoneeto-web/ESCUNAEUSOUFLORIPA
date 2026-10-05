import React, { useState } from 'react';
import { BLOG_POSTS, COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, X, MessageCircle } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const seoTopicList = [
    'Passeio de escuna em Florianópolis',
    'Passeio de barco em Florianópolis',
    'Barco pirata em Florianópolis',
    'O que fazer em Florianópolis',
    'Passeios em Floripa',
    'Passeios de barco em Floripa',
    'Melhores passeios em Florianópolis',
    'O que fazer em Florianópolis com crianças',
    'Passeio de barco vale a pena?',
    'Florianópolis vista pelo mar',
  ];

  return (
    <section id="blog" className="py-20 sm:py-24 bg-[#091526] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Blog Náutico & Dicas Turísticas
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            DICAS DE FLORIPA
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Guias completos e conteúdos para planejar seu roteiro náutico e aproveitar ao máximo as belezas da Ilha da Magia.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto mt-4" />
        </div>

        {/* SEO Category Cloud (Clean unboxed typography) */}
        <div className="mb-12 p-6 rounded-2xl bg-[#0C1B2E] border border-slate-800 text-center">
          <p className="text-xs uppercase tracking-wider text-amber-400/90 font-semibold mb-3">
            Tópicos em Destaque no Blog:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-300">
            {seoTopicList.map((topic, i) => (
              <React.Fragment key={topic}>
                <span className="hover:text-amber-300 transition-colors cursor-pointer">
                  {topic}
                </span>
                {i < seoTopicList.length - 1 && <span aria-hidden="true" className="text-slate-600">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-2xl bg-[#0D1C30] border border-slate-800 hover:border-amber-400/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C30] to-transparent" />
                <div className="absolute top-3 left-3 text-[11px] font-semibold text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-slate-800">
                  {post.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {post.readTime}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors pt-2 border-t border-slate-800 cursor-pointer"
                >
                  <span>LER ARTIGO COMPLETO</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0A1628] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {selectedPost.category} · {selectedPost.readTime} de leitura
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                {selectedPost.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 h-60 bg-slate-900 border border-slate-800">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Gostou das dicas? Reserve seu passeio e viva essa experiência com a EU SOU FLORIPA.
              </div>
              <a
                href={getWhatsAppLink(`Olá! Li o artigo "${selectedPost.title}" e gostaria de reservar meu passeio de escuna!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>RESERVAR NO WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
