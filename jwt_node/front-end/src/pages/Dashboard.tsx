import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import Nav from '../components/Nav';
import { User } from '../context/UserContext';

type DashboardProps = {
  setUser: (user: User) => void;
};

const Dashboard = ({ setUser }: DashboardProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        const data = await response.json();

        setUser(data);
      } catch (error: unknown) {
        if (error instanceof Error) console.log(`Error: ${error.message}`);
        else console.log('Unkown Error');
      }
    };

    const getToken = () => {
      const token = Cookies.get('auth_cookie');
      if (!token) {
        navigate('/login');
      } else {
        getUserData();
      }
    };

    getToken();
  }, [navigate, setUser]);
  return (
    <div className="min-h-screen w-screen flex flex-col gap-24">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
