
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://picsum.photos/seed/notaboohero/1920/1080')` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight mb-4">
          <span className="text-brand-yellow">NOTABOO</span><br />
          Où la culture africaine devient votre avantage créatif
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-6">
          Studio. Média. Communauté. <br />
          Le seul hub où votre marque gagne en authenticité culturelle et en impact visuel.
        </p>
        <p className="max-w-2xl mx-auto text-md md:text-lg italic text-gray-400 mb-8">
            "Nous ne produisons pas du contenu. Nous documentons ce qui mérite de traverser les générations."
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto px-8 py-3 text-md font-bold bg-brand-yellow text-black rounded-full hover:bg-yellow-300 transition-transform duration-200 transform hover:scale-105">
            DÉMARRER UN PROJET
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-3 text-md font-bold bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-200">
            EXPLORER NOS CONTENUS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
