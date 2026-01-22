
import React, { useState } from 'react';
import { useContent } from '../../hooks/useContent';
import { WhyUsPoint } from '../../data/content';

const AdminWhyUs: React.FC = () => {
  const { content, setContent } = useContent();
  const [localPoints, setLocalPoints] = useState<WhyUsPoint[]>(JSON.parse(JSON.stringify(content.whyUs.points)));
  const [localClients, setLocalClients] = useState(content.whyUs.clients.join(', '));
  const [status, setStatus] = useState('');

  const handlePointChange = (index: number, field: keyof WhyUsPoint, value: string) => {
    const updatedPoints = [...localPoints];
    updatedPoints[index][field] = value;
    setLocalPoints(updatedPoints);
  };

  const handleSave = () => {
    const clientsArray = localClients.split(',').map(c => c.trim()).filter(Boolean);
    setContent(prevContent => ({
      ...prevContent,
      whyUs: {
        points: localPoints,
        clients: clientsArray,
      },
    }));
    setStatus('Content updated successfully!');
    setTimeout(() => setStatus(''), 3000);
  };
  
  const commonInputClass = "mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-yellow focus:border-brand-yellow sm:text-sm";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Edit "Why Us" Section</h1>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm font-bold bg-brand-yellow text-black rounded-full hover:bg-yellow-300 transition-colors duration-200"
        >
          Save Changes
        </button>
      </div>
       {status && <div className="mb-4 text-center text-green-400 bg-green-900/50 p-2 rounded-md">{status}</div>}
      
      <div className="bg-black p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold text-brand-yellow border-b border-gray-800 pb-2 mb-4">
          Key Points
        </h2>
        <div className="space-y-6">
          {localPoints.map((point, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-300">Point {index + 1} Title</label>
                <input type="text" value={point.title} onChange={(e) => handlePointChange(index, 'title', e.target.value)} className={commonInputClass} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300">Description</label>
                <textarea value={point.description} onChange={(e) => handlePointChange(index, 'description', e.target.value)} rows={3} className={commonInputClass}></textarea>
              </div>
            </div>
          ))}
        </div>
      </div>

       <div className="bg-black p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-brand-yellow border-b border-gray-800 pb-2 mb-4">
          Client List
        </h2>
        <div>
            <label className="block text-sm font-medium text-gray-300">Clients (comma-separated)</label>
            <input type="text" value={localClients} onChange={(e) => setLocalClients(e.target.value)} className={commonInputClass} />
        </div>
      </div>

    </div>
  );
};

export default AdminWhyUs;
