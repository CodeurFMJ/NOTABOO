
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Qui sommes-nous ?' },
    { href: '#services', label: 'Pour les Marques' },
    { href: '#in-muros', label: 'Le Lieu' },
    { href: '#media', label: 'Média' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-black tracking-tighter text-white uppercase">
              Notaboo<span className="text-brand-yellow">.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-brand-yellow transition-colors duration-200">
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="ml-4 px-4 py-2 text-sm font-bold bg-brand-yellow text-black rounded-full hover:bg-yellow-300 transition-colors duration-200">
                Démarrer un projet
              </a>
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-brand-yellow hover:bg-gray-800">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-center font-bold bg-brand-yellow text-black rounded-md hover:bg-yellow-300 transition-colors duration-200">
                Démarrer un projet
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
