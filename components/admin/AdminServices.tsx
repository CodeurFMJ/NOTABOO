
import React, { useState } from 'react';
import { useContent } from '../../hooks/useContent';
import { Service } from '../../data/content';

const AdminServices: React.FC = () => {
  const { content, setContent } = useContent();
  const [localServices, setLocalServices] = useState<Service[]>(JSON.parse(JSON.stringify(content.services)));
  const [status, setStatus] = useState('');

  const handleInputChange = (index: number, field: keyof Service, value: string) => {
    const updatedServices = [...localServices];
    const serviceToUpdate = { ...updatedServices[index] };
    (serviceToUpdate[field] as any) = value;
    updatedServices[index] = serviceToUpdate;
    setLocalServices(updatedServices);
  };

  const handleSave = () => {
    setContent(prevContent => ({
      ...prevContent,
      services: localServices,
    }));
    setStatus('Services updated successfully!');
    setTimeout(() => setStatus(''), 3000);
  };
  
  const commonInputClass = "mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-brand-yellow focus:border-brand-yellow sm:text-sm";

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Edit Services</h1>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm font-bold bg-brand-yellow text-black rounded-full hover:bg-yellow-300 transition-colors duration-200"
        >
          Save Changes
        </button>
      </div>
       {status && <div className="mb-4 text-center text-green-400 bg-green-900/50 p-2 rounded-md">{status}</div>}

      <div className="space-y-8">
        {localServices.map((service, index) => (
          <div key={service.id} className="bg-black p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-brand-yellow border-b border-gray-800 pb-2 mb-4">
              Service #{service.number}: {service.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300">Title</label>
                  <input type="text" value={service.title} onChange={(e) => handleInputChange(index, 'title', e.target.value)} className={commonInputClass} />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-300">Subtitle</label>
                  <input type="text" value={service.subtitle} onChange={(e) => handleInputChange(index, 'subtitle', e.target.value)} className={commonInputClass} />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300">Description</label>
                    <textarea value={service.description} onChange={(e) => handleInputChange(index, 'description', e.target.value)} rows={4} className={commonInputClass}></textarea>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
