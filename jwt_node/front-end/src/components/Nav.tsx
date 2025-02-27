import { Button } from '@mui/material';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { UserContext } from '../context/UserContext';

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
};

const Nav = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }
      navigate('/login');
    } catch (error: unknown) {
      if (error instanceof Error) console.log(`Error: ${error.message}`);
      else console.log('Unkown Error Occured');
    }
  };

  return (
    <nav className="w-full h-48 bg-custom-blue flex justify-between items-center px-14 text-white">
      <h1 className="text-5xl font-semibold">
        Hello, <span className="font-light">{user?.name}</span>
      </h1>

      <ul className="flex gap-14">
        <li className="text-2xl">
          <CustomLink to={'/'}>Me</CustomLink>
        </li>
        {user?.role === 'admin' && (
          <li className="text-2xl">
            <CustomLink to={'/users'}>Users</CustomLink>
          </li>
        )}
      </ul>

      <div className="w-3xs flex">
        <Button
          variant="contained"
          color="error"
          sx={{ width: '100%', fontSize: '1.1rem', color: 'white' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

const CustomLink = ({ to, children }: CustomLinkProps) => {
  return (
    <NavLink
      to={to}
      className="text-2xl hover:text-custom-gray transition-colors duration-300"
    >
      {children}
    </NavLink>
  );
};

export default Nav;
