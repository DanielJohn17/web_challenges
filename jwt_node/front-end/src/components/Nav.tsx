import { Button } from '@mui/material';
import { NavLink } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
};

const Nav = () => {
  const user = useContext(UserContext);
  return (
    <nav className="w-full h-48 bg-custom-blue flex justify-between items-center px-14 text-white">
      <h1 className="text-5xl font-semibold">
        Hello, <span className="font-light">name</span>
      </h1>

      <ul className="flex gap-14">
        <li className="text-2xl">
          <CustomLink to={'/'}>Me</CustomLink>
        </li>
        <li className="text-2xl">
          <CustomLink to={'/users'}>Users</CustomLink>
        </li>
      </ul>

      <div className="w-3xs flex">
        <Button
          variant="contained"
          color="error"
          sx={{ width: '100%', fontSize: '1.1rem', color: 'white' }}
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
