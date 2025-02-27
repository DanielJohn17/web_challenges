import { TextField } from '@mui/material';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const MePage = () => {
  const user = useContext(UserContext);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <h1 className="text-5xl font-semibold tracking-wide">Profile</h1>

        {user && (
          <div className="mt-14 h-[200px] flex flex-col gap-10 flex-wrap">
            <TextField
              label="Full name"
              slotProps={{ input: { readOnly: true } }}
              value={user.name}
              variant="filled"
            />
            <TextField
              label="Email"
              slotProps={{ input: { readOnly: true } }}
              value={user.email}
              variant="filled"
            />
            <TextField
              label="Role"
              slotProps={{ input: { readOnly: true } }}
              value={user.role}
              variant="filled"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MePage;
