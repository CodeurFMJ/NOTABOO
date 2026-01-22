
import React from 'react';
import { StudioIcon, MediaIcon, CommunityIcon, CreateIcon, CaptivateIcon, ConnectIcon } from './icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Trois expertises. Un seul <span className="text-brand-yellow">ADN.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            NOTABOO est né d'une conviction : les cultures urbaines africaines méritent mieux que des formats génériques. Cette triple identité est notre garantie que chaque projet bénéficie d'une vision éditoriale aiguisée, d'une expertise technique irréprochable et d'un ancrage culturel authentique.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-8 bg-black rounded-lg">
            <StudioIcon className="w-12 h-12 mx-auto text-brand-yellow mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Un studio de production premium</h3>
            <p className="text-gray-400">Qui transforme vos briefs en récits visuels mémorables.</p>
          </div>
          <div className="p-8 bg-black rounded-lg">
            <MediaIcon className="w-12 h-12 mx-auto text-brand-yellow mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Un média éditorial natif</h3>
            <p className="text-gray-400">Qui documente le réel sans filtre ni folklore.</p>
          </div>
          <div className="p-8 bg-black rounded-lg">
            <CommunityIcon className="w-12 h-12 mx-auto text-brand-yellow mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Un lieu physique de 400m²</h3>
            <p className="text-gray-400">Pensé pour créer, connecter et expérimenter.</p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
             <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Notre différence en 3 mots</h3>
             <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                 <div className="flex items-center gap-4">
                     <CreateIcon className="w-10 h-10 text-brand-yellow"/>
                     <div>
                         <p className="text-xl font-bold text-white">CRÉER</p>
                         <p className="text-gray-400">Transformer l'intuition en concept vendable.</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-4">
                     <CaptivateIcon className="w-10 h-10 text-brand-yellow"/>
                     <div>
                         <p className="text-xl font-bold text-white">CAPTIVER</p>
                         <p className="text-gray-400">Gagner l'attention sans la mendier.</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-4">
                     <ConnectIcon className="w-10 h-10 text-brand-yellow"/>
                     <div>
                         <p className="text-xl font-bold text-white">CONNECTER</p>
                         <p className="text-gray-400">Bâtir des communautés, pas des audiences.</p>
                     </div>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default About;
