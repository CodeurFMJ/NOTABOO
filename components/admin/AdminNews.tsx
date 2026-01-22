
import React, { useState } from 'react';
import { useContent } from '../../hooks/useContent';
import { NewsArticle } from '../../data/content';
import { XIcon } from '../icons';

const emptyArticle: Omit<NewsArticle, 'id' | 'imageSeed'> = { title: '', category: '' };

const AdminNews: React.FC = () => {
  const { content, setContent } = useContent();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | typeof emptyArticle | null>(null);

  const openModalForNew = () => {
    setEditingArticle(emptyArticle);
    setIsModalOpen(true);
  };
  
  const openModalForEdit = (article: NewsArticle) => {
    setEditingArticle(article);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!editingArticle) return;

    if ('id' in editingArticle) {
      // Editing existing article
      const updatedNews = content.news.map(n => n.id === editingArticle.id ? editingArticle : n);
      setContent(prev => ({...prev, news: updatedNews}));
    } else {
      // Adding new article
      const newArticle: NewsArticle = {
        ...editingArticle,
        id: `news-${Date.now()}`,
        imageSeed: `news-${Date.now()}`,
      };
      setContent(prev => ({...prev, news: [...prev.news, newArticle]}));
    }
    setIsModalOpen(false);
    setEditingArticle(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
        const updatedNews = content.news.filter(n => n.id !== id);
        setContent(prev => ({...prev, news: updatedNews}));
    }
  }
  
  const commonInputClass = "mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-yellow focus:border-brand-yellow sm:text-sm";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Edit News</h1>
        <button
          onClick={openModalForNew}
          className="px-4 py-2 text-sm font-bold bg-brand-yellow text-black rounded-full hover:bg-yellow-300 transition-colors duration-200"
        >
          Add News Article
        </button>
      </div>

      <div className="bg-black p-4 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.news.map(article => (
            <div key={article.id} className="bg-gray-900 rounded-lg p-4 flex flex-col justify-between">
              <div>
                <p className="text-sm font-bold text-brand-yellow">{article.category}</p>
                <h4 className="mt-1 font-bold text-white">{article.title}</h4>
              </div>
              <div className="mt-4 flex gap-2">
                <button onClick={() => openModalForEdit(article)} className="text-sm font-semibold text-blue-400 hover:text-blue-300">Edit</button>
                <button onClick={() => handleDelete(article.id)} className="text-sm font-semibold text-red-400 hover:text-red-300">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && editingArticle && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-8 w-full max-w-lg m-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">{'id' in editingArticle ? 'Edit' : 'Add'} Article</h2>
              <button onClick={() => setIsModalOpen(false)}><XIcon className="w-6 h-6 text-gray-400 hover:text-white"/></button>
            </div>
            <div className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-300">Title</label>
                  <input type="text" value={editingArticle.title} onChange={(e) => setEditingArticle({...editingArticle, title: e.target.value})} className={commonInputClass} />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-300">Category</label>
                  <input type="text" value={editingArticle.category} onChange={(e) => setEditingArticle({...editingArticle, category: e.target.value})} className={commonInputClass} />
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-bold bg-gray-700 text-white rounded-full hover:bg-gray-600">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 text-sm font-bold bg-brand-yellow text-black rounded-full hover:bg-yellow-300">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNews;
