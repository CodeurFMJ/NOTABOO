
import React from 'react';
import { FacebookIcon, InstagramIcon, TiktokIcon, LinkedinIcon, YoutubeIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-black tracking-tighter text-white uppercase">
                           Notaboo<span className="text-brand-yellow">.</span>
                        </h3>
                        <p className="mt-2 text-gray-400 text-sm">Le laboratoire où les cultures urbaines deviennent des récits de marques inoubliables.</p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-brand-yellow"><FacebookIcon className="h-6 w-6"/></a>
                            <a href="#" className="text-gray-400 hover:text-brand-yellow"><InstagramIcon className="h-6 w-6"/></a>
                            <a href="#" className="text-gray-400 hover:text-brand-yellow"><TiktokIcon className="h-6 w-6"/></a>
                            <a href="#" className="text-gray-400 hover:text-brand-yellow"><LinkedinIcon className="h-6 w-6"/></a>
                            <a href="#" className="text-gray-400 hover:text-brand-yellow"><YoutubeIcon className="h-6 w-6"/></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">Services</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#imagerie" className="text-gray-400 hover:text-brand-yellow">Imagerie</a></li>
                            <li><a href="#videographie" className="text-gray-400 hover:text-brand-yellow">Vidéographie</a></li>
                            <li><a href="#sound-branding" className="text-gray-400 hover:text-brand-yellow">Sound Branding</a></li>
                            <li><a href="#strategie" className="text-gray-400 hover:text-brand-yellow">Stratégie de contenu</a></li>
                        </ul>
                    </div>

                     <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">Navigation</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#about" className="text-gray-400 hover:text-brand-yellow">À propos</a></li>
                            <li><a href="#in-muros" className="text-gray-400 hover:text-brand-yellow">In Muros</a></li>
                            <li><a href="#media" className="text-gray-400 hover:text-brand-yellow">Média</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-brand-yellow">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm">Légal</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-brand-yellow">Mentions légales</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-brand-yellow">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} NOTABOO MEDIA — Tous droits réservés. Conçu avec ambition à Douala.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
