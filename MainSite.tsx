
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import InMuros from './components/InMuros';
import Media from './components/Media';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useContent } from './hooks/useContent';

const MainSite: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="bg-black text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services servicesData={content.services} />
        <WhyUs points={content.whyUs.points} clients={content.whyUs.clients} />
        <InMuros tabContentData={content.inMuros} />
        <Media />
        <News newsData={content.news} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MainSite;
