import { useState } from 'react';
import { TextField } from '@mui/material';
import CustomButton from '../components/Button';
import { NavLink, useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[] | string>();

  const handleName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setName(e.target.value);
  };

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

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.message);
        throw new Error('Register failed');
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
          <h1 className="text-6xl font-bold tracking-wide">Register</h1>
          <p className="font-sans font-light text-lg mt-5">
            Register to continue
          </p>
        </div>

        <div className="py-12 px-6 flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <TextField
              sx={{ color: 'white' }}
              required
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => handleName(e)}
            />
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
                to={'/login'}
                className="text-custom-blue font-sans font-light"
              >
                Already have an account? Login
              </NavLink>
            </div>

            <div className="flex flex-col gap-2">
              {errors &&
                (typeof errors === 'string' ? (
                  <p className="text-red-500">{errors}</p>
                ) : (
                  errors.map((error) => (
                    <p key={error} className="text-red-500">
                      {error}
                    </p>
                  ))
                ))}
            </div>
          </div>
          <CustomButton type="register" handleClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default Register;
