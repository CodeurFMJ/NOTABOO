
import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
      if (!loggedIn) {
        window.navigate('/login');
      } else {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, []);

  if (!isLoggedIn) {
    // Render nothing while redirecting to avoid flashing content
    return null;
  }

  return <AdminLayout />;
};

export default Admin;
