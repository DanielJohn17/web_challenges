import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import Nav from '../components/Nav';

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getToken = () => {
      const token = Cookies.get('auth_cookie');
      if (!token) {
        // navigate('/login');
      }
    };

    getToken();
  }, [navigate]);
  return (
    <div className="min-h-screen w-screen flex flex-col gap-24">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
