
import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Parlons de votre <span className="text-brand-yellow">projet</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Un brief ? Une idée ? Une deadline serrée ? Nous sommes prêts à donner vie à vos ambitions.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black p-8 rounded-lg text-center flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-white">Lancer un projet</h3>
            <p className="text-gray-400 mt-2 mb-4">Réponse sous 48h</p>
            <a href="mailto:projects@notaboomedia.com" className="w-full px-6 py-3 text-md font-bold bg-brand-yellow text-black rounded-full hover:bg-yellow-300 transition-colors duration-200">
              REMPLIR LE BRIEF EN LIGNE
            </a>
          </div>
          <div className="bg-black p-8 rounded-lg text-center flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold text-white">Planifier un appel</h3>
            <p className="text-gray-400 mt-2 mb-4">Échange de 30min sans engagement</p>
            <a href="#" className="w-full px-6 py-3 text-md font-bold bg-gray-800 text-white rounded-full hover:bg-brand-yellow hover:text-black transition-colors duration-200">
              PRENDRE RDV
            </a>
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Contact direct</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-gray-300">
                <a href="mailto:projects@notaboomedia.com" className="flex items-center gap-2 hover:text-brand-yellow">
                    <MailIcon className="w-5 h-5"/>
                    <span>projects@notaboomedia.com</span>
                </a>
                <a href="tel:+237000000000" className="flex items-center gap-2 hover:text-brand-yellow">
                    <PhoneIcon className="w-5 h-5"/>
                    <span>+237 [NUMÉRO]</span>
                </a>
                <p className="flex items-center gap-2">
                    <LocationMarkerIcon className="w-5 h-5"/>
                    <span>Rue Drouot, Akwa, Douala</span>
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
