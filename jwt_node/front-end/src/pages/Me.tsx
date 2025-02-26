import { TextField } from '@mui/material';

const MePage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <h1 className="text-5xl font-semibold tracking-wide">Profile</h1>

        <div className="mt-14 h-[200px] flex flex-col gap-10 flex-wrap">
          <TextField
            label="Full name"
            slotProps={{ input: { readOnly: true } }}
            defaultValue={'name'}
            variant="filled"
          />
          <TextField
            label="Email"
            slotProps={{ input: { readOnly: true } }}
            defaultValue={'Email'}
            variant="filled"
          />
          <TextField
            label="Password"
            slotProps={{ input: { readOnly: true } }}
            defaultValue={'Password'}
            variant="filled"
          />
          <TextField
            label="DOB"
            slotProps={{ input: { readOnly: true } }}
            defaultValue={'DOB'}
            variant="filled"
          />
        </div>
      </div>
    </div>
  );
};

export default MePage;
