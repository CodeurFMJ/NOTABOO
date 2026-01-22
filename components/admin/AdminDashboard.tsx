
import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
      <div className="bg-black p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-brand-yellow">Welcome to the Notaboo Admin Panel</h2>
        <p className="mt-2 text-gray-300">
          From here, you can manage the content displayed on the public website. Use the navigation on the left to select a section to edit.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          All changes you make are saved automatically to your browser's local storage.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
