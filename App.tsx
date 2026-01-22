
import React, { useState, useEffect } from 'react';
import MainSite from './MainSite';
import Login from './components/admin/Login';
import Admin from './components/admin/Admin';

// Augment the Window interface to include our custom navigate function
declare global {
  interface Window {
    navigate: (path: string) => void;
  }
}

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    // Helper for programmatic navigation
    window.navigate = (path: string) => {
      window.history.pushState({}, '', path);
      // Dispatch a custom event that we can listen for
      window.dispatchEvent(new Event('pushstate'));
    };

    const handleLocationChange = () => {
      setRoute(window.location.pathname);
    };

    // Listen for browser's back/forward navigation
    window.addEventListener('popstate', handleLocationChange);
    // Listen for our custom navigation event
    window.addEventListener('pushstate', handleLocationChange);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  if (route.startsWith('/admin')) {
    return <Admin />;
  }
  if (route === '/login') {
    return <Login />;
  }
  return <MainSite />;
};

export default App;
