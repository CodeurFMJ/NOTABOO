
import React from 'react';

const Media: React.FC = () => {
    return (
        <section id="media" className="py-20 sm:py-28 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-brand-yellow font-bold">Notaboo Media</p>
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mt-2">
                        Le média qui documente les cultures urbaines telles qu'elles se vivent
                    </h2>
                    <p className="mt-6 text-lg text-gray-300">
                        Pas de folklore. Pas de clichés. Juste des histoires vraies, des trajectoires singulières et des gestes créatifs qui façonnent l'époque. Notre tonalité : Documentaire, sensible, ancrée dans le réel.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-8 bg-black rounded-lg text-center">
                        <h3 className="text-xl font-bold text-brand-yellow mb-2">CULTURE</h3>
                        <p className="text-gray-400">Musique, mode, art visuel, cinéma, street culture : nous explorons les expressions artistiques qui redéfinissent les imaginaires africains contemporains.</p>
                        <a href="#" className="mt-4 inline-block font-bold text-white hover:text-brand-yellow">LIRE CULTURE →</a>
                    </div>
                    <div className="p-8 bg-black rounded-lg text-center">
                        <h3 className="text-xl font-bold text-brand-yellow mb-2">LIFESTYLE</h3>
                        <p className="text-gray-400">Comment on vit, crée, consomme et rêve à Douala, Lagos, Abidjan, Kinshasa. Un regard sensible sur les esthétiques et rythmes du quotidien urbain africain.</p>
                        <a href="#" className="mt-4 inline-block font-bold text-white hover:text-brand-yellow">LIRE LIFESTYLE →</a>
                    </div>
                    <div className="p-8 bg-black rounded-lg text-center">
                        <h3 className="text-xl font-bold text-brand-yellow mb-2">SOCIÉTÉ</h3>
                        <p className="text-gray-400">Une lecture contemporaine des faits sociaux, des mutations urbaines et des dynamiques générationnelles. Ici, l'image dialogue avec l'analyse.</p>
                        <a href="#" className="mt-4 inline-block font-bold text-white hover:text-brand-yellow">LIRE SOCIÉTÉ →</a>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center uppercase tracking-tight mb-8">Nos Formats</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-black p-6 rounded-lg">
                            <h4 className="font-bold text-white">MINI-DOCS</h4>
                            <p className="text-sm text-gray-400 mt-1">Raconter le réel, sans filtre inutile (5-12 min). Diffusion : YouTube, Instagram, TikTok.</p>
                        </div>
                         <div className="bg-black p-6 rounded-lg">
                            <h4 className="font-bold text-white">EN APPARTHE</h4>
                            <p className="text-sm text-gray-400 mt-1">Là où les masques tombent. Interview longue écrite + portrait photo. Bi-mensuel.</p>
                        </div>
                         <div className="bg-black p-6 rounded-lg">
                            <h4 className="font-bold text-white">SPOT</h4>
                            <p className="text-sm text-gray-400 mt-1">Sous les projecteurs. 60-90s vidéo verticale pour les réseaux sociaux. Hebdomadaire.</p>
                        </div>
                         <div className="bg-black p-6 rounded-lg">
                            <h4 className="font-bold text-white">NOTABOO RADIO</h4>
                            <p className="text-sm text-gray-400 mt-1">Le podcast qui connecte l'art, l'entreprise et la culture urbaine. Disponible sur Spotify, Apple Podcasts...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Media;
