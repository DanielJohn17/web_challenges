import { TextField } from '@mui/material';
import CustomButton from '../components/Button';
import { NavLink } from 'react-router';

const Login = () => {
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
            />
            <TextField
              sx={{ color: 'white' }}
              required
              label="Password"
              variant="outlined"
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
          <CustomButton type="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
