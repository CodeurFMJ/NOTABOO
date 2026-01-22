
import React, { useState } from 'react';
import { InMurosTabContent } from '../data/content';

type Tab = 'plateau' | 'studio' | 'event';

interface InMurosProps {
  tabContentData: Record<Tab, InMurosTabContent>;
}

const InMuros: React.FC<InMurosProps> = ({ tabContentData }) => {
  const [activeTab, setActiveTab] = useState<Tab>('plateau');

  const tabContent: Record<Tab, React.ReactNode> = {
    plateau: (
      <div>
        <h4 className="text-2xl font-bold text-white mb-4">{tabContentData.plateau.title}</h4>
        <p className="text-lg font-semibold text-gray-300 mb-4">{tabContentData.plateau.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-400">
          {tabContentData.plateau.details.map(detail => <div key={detail.label}><strong className="text-white">{detail.label}:</strong> {detail.value}</div>)}
        </div>
        <h5 className="font-bold text-white mt-6 mb-2">{tabContentData.plateau.usageTitle}</h5>
        <p className="text-gray-400">{tabContentData.plateau.usageText}</p>
      </div>
    ),
    studio: (
      <div>
        <h4 className="text-2xl font-bold text-white mb-4">{tabContentData.studio.title}</h4>
        <p className="text-lg font-semibold text-gray-300 mb-4">{tabContentData.studio.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-400">
          {tabContentData.studio.details.map(detail => <div key={detail.label}><strong className="text-white">{detail.label}:</strong> {detail.value}</div>)}
        </div>
        <h5 className="font-bold text-white mt-6 mb-2">{tabContentData.studio.usageTitle}</h5>
        <p className="text-gray-400">{tabContentData.studio.usageText}</p>
      </div>
    ),
    event: (
      <div>
        <h4 className="text-2xl font-bold text-white mb-4">{tabContentData.event.title}</h4>
        <p className="text-lg font-semibold text-gray-300 mb-4">{tabContentData.event.subtitle}</p>
        <h5 className="font-bold text-white mt-6 mb-2">{tabContentData.event.usageTitle}</h5>
        <ul className="list-disc list-inside text-gray-400">
           {tabContentData.event.details.map(detail => <li key={detail.label}>{detail.label}</li>)}
        </ul>
      </div>
    ),
  };

  const TabButton: React.FC<{ tabId: Tab; children: React.ReactNode }> = ({ tabId, children }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`px-4 py-2 text-sm sm:text-base font-bold rounded-full transition-colors duration-200 ${activeTab === tabId ? 'bg-brand-yellow text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
    >
      {children}
    </button>
  );

  return (
    <section id="in-muros" className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-80 lg:h-[500px] w-full bg-gray-800 rounded-lg overflow-hidden">
                <img src={`https://picsum.photos/seed/${activeTab}/800/600`} alt="In Muros Space" className="w-full h-full object-cover" loading="lazy" width="800" height="600" />
            </div>
            <div>
                <p className="text-brand-yellow font-bold">IN MUROS (Le Lieu)</p>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mt-2 mb-4">
                    400m² pensés pour que vos idées deviennent réalité
                </h2>
                <p className="text-gray-300 mb-8">
                IN MUROS, c'est le cœur physique de NOTABOO. Un espace de création professionnelle accessible, au cœur du quartier d'affaires d'Akwa. Que vous tourniez votre premier podcast vidéo ou produisiez une émission TV, nos infrastructures s'adaptent à votre vision et votre budget.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    <TabButton tabId="plateau">Plateau de Tournage</TabButton>
                    <TabButton tabId="studio">Studio d'Enregistrement</TabButton>
                    <TabButton tabId="event">Espace Événementiel</TabButton>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg min-h-[250px]">
                    {tabContent[activeTab]}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InMuros;
