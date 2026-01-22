
import React from 'react';
import { CheckCircleIcon } from './icons';
import { WhyUsPoint } from '../data/content';

interface WhyUsProps {
  points: WhyUsPoint[];
  clients: string[];
}

const WhyUs: React.FC<WhyUsProps> = ({ points, clients }) => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Pourquoi nous <span className="text-brand-yellow">choisir ?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircleIcon className="w-8 h-8 text-brand-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white">{point.title}</h3>
                <p className="mt-1 text-gray-400">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Nos clients nous font confiance</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                {clients.map((client, index) => (
                    <span key={index} className="text-gray-400 text-lg font-semibold italic">{client}</span>
                ))}
                 <span className="text-gray-500 text-lg font-semibold italic">et bien d'autres...</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
