
import React from 'react';
import { CameraIcon, VideoIcon, SoundIcon, StrategyIcon } from './icons';
import { Service } from '../data/content';

type ServiceCardProps = Service;

const ServiceCard: React.FC<ServiceCardProps> = ({ id, number, title, subtitle, description, cta, icon, details }) => {
  const icons: { [key: string]: React.ReactNode } = {
    camera: <CameraIcon className="w-12 h-12 text-brand-yellow" />,
    video: <VideoIcon className="w-12 h-12 text-brand-yellow" />,
    sound: <SoundIcon className="w-12 h-12 text-brand-yellow" />,
    strategy: <StrategyIcon className="w-12 h-12 text-brand-yellow" />,
  };

  return (
    <div id={id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 border-b border-gray-800 last:border-b-0">
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          {icons[icon]}
          <div>
            <p className="text-brand-yellow font-bold text-lg">{number}</p>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{title}</h3>
          </div>
        </div>
        <p className="text-xl font-semibold text-gray-300 mt-2">{subtitle}</p>
        <p className="mt-4 text-gray-400">{description}</p>
        {details.map((detail, index) => (
          <div key={index} className="mt-6">
            <h4 className="font-bold text-white">{detail.title}:</h4>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              {detail.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
        <a href="#" className="mt-8 inline-block self-start px-6 py-3 text-sm font-bold bg-gray-800 text-white rounded-full hover:bg-brand-yellow hover:text-black transition-colors duration-200">
          {cta}
        </a>
      </div>
      <div className="h-80 lg:h-full w-full bg-gray-800 rounded-lg overflow-hidden">
          <img src={`https://picsum.photos/seed/${id}/800/600`} alt={title} className="w-full h-full object-cover" loading="lazy" width="800" height="600" />
      </div>
    </div>
  );
}

interface ServicesProps {
  servicesData: Service[];
}

const Services: React.FC<ServicesProps> = ({ servicesData }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-yellow font-bold">Pour les Marques</p>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mt-2">
            Vos histoires méritent mieux qu'un brief standard
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Dans un marché saturé de contenus interchangeables, votre différence viendra d'une compréhension intime des codes culturels qui résonnent avec vos audiences. NOTABOO STUDIO transforme vos objectifs commerciaux en récits qui s'inscrivent naturellement dans les conversations urbaines africaines.
          </p>
        </div>
        <div>
          {servicesData.map(service => <ServiceCard key={service.id} {...service} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;
