import React, { useState } from 'react';
import { TextField } from '@mui/material';
import CustomButton from '../components/Button';
import { NavLink, useNavigate } from 'react-router';
// import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(e.target.value);
  };

  const handlePassword = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      navigate('/');
    } catch (error: unknown) {
      if (error instanceof Error) console.log(`Error: ${error.message}`);
      else console.log('Unkown Error Occured');
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-custom-gray overflow-clip">
      <div className="w-lg bg-white flex flex-col rounded-lg overflow-clip shadow-2xl">
        <div className="w-full py-10 px-6 bg-custom-blue text-custom-white">
          <h1 className="text-6xl font-bold tracking-wide">Login</h1>
          <p className="font-sans font-light text-lg mt-5">Login to continue</p>
        </div>

        <div className="py-12 px-6 flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <TextField
              sx={{ color: 'white' }}
              required
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => handleEmail(e)}
            />
            <TextField
              sx={{ color: 'white' }}
              required
              label="Password"
              variant="outlined"
              value={password}
              type="password"
              onChange={(e) => handlePassword(e)}
            />

            <div className="flex justify-end">
              <NavLink
                to={'/register'}
                className="text-custom-blue font-sans font-light"
              >
                Don't have an account? Register
              </NavLink>
            </div>
          </div>
          <CustomButton type="login" handleClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
