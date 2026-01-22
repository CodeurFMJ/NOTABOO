
import React from 'react';
import { NewsArticle } from '../data/content';

const NewsCard: React.FC<NewsArticle> = ({ title, category, imageSeed }) => (
    <div className="bg-black rounded-lg overflow-hidden group">
        <div className="aspect-w-16 aspect-h-9">
            <img src={`httpshttps://picsum.photos/seed/${imageSeed}/600/400`} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" width="600" height="400" />
        </div>
        <div className="p-6">
            <p className="text-sm font-bold text-brand-yellow">{category}</p>
            <h4 className="mt-2 text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">{title}</h4>
        </div>
    </div>
);

interface NewsProps {
  newsData: NewsArticle[];
}

const News: React.FC<NewsProps> = ({ newsData }) => {
    return (
        <section id="news" className="py-20 sm:py-28 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        On ne s'arrête <span className="text-brand-yellow">jamais</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-300">
                        Suivez nos dernières productions, collaborations, événements et réflexions sur l'industrie créative africaine.
                    </p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map(news => <NewsCard key={news.id} {...news} />)}
                </div>

                <div className="mt-12 text-center">
                     <a href="#" className="inline-block px-8 py-3 text-md font-bold bg-brand-yellow text-black rounded-full hover:bg-yellow-300 transition-transform duration-200 transform hover:scale-105">
                        LIRE LES NEWS
                    </a>
                </div>
            </div>
        </section>
    );
};

export default News;
