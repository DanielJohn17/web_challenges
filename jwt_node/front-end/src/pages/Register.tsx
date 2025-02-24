import { TextField } from '@mui/material';
import CustomButton from '../components/Button';
import { NavLink } from 'react-router';

const Register = () => {
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
            />
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
                to={'/login'}
                className="text-custom-blue font-sans font-light"
              >
                Already have an account? Login
              </NavLink>
            </div>
          </div>
          <CustomButton type="register" />
        </div>
      </div>
    </div>
  );
};

export default Register;
