
import React, { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import AdminServices from './AdminServices';
import AdminNews from './AdminNews';
import AdminWhyUs from './AdminWhyUs';

const AdminLayout: React.FC = () => {
  const [subRoute, setSubRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setSubRoute(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pushstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    window.navigate('/login');
  };
  
  const NavLink: React.FC<{path: string, children: React.ReactNode}> = ({ path, children }) => {
    const isActive = subRoute === path;
    return (
        <a href={path} onClick={(e) => { e.preventDefault(); window.navigate(path); }} className={`block px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-brand-yellow text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            {children}
        </a>
    )
  }

  const renderContent = () => {
    switch (subRoute) {
      case '/admin/services':
        return <AdminServices />;
      case '/admin/news':
        return <AdminNews />;
      case '/admin/why-us':
        return <AdminWhyUs />;
      case '/admin':
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex">
      <aside className="w-64 bg-black p-4 flex flex-col">
        <div className="flex-shrink-0 mb-8">
            <a href="/" className="text-2xl font-black tracking-tighter text-white uppercase">
              Notaboo<span className="text-brand-yellow">.</span>
            </a>
            <span className="block text-xs text-gray-500">Admin Panel</span>
        </div>
        <nav className="flex-grow">
            <ul className="space-y-2">
                <li><NavLink path="/admin">Dashboard</NavLink></li>
                <li><NavLink path="/admin/services">Services</NavLink></li>
                <li><NavLink path="/admin/news">News</NavLink></li>
                <li><NavLink path="/admin/why-us">Why Us</NavLink></li>
            </ul>
        </nav>
        <div>
            <button onClick={handleLogout} className="w-full text-left px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Logout
            </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminLayout;
