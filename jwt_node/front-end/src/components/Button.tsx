import React from 'react';
import { Button } from '@mui/material';

type CustomButtonProps = {
  type: 'login' | 'register' | 'logout';
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomButton = ({ type, handleClick }: CustomButtonProps) => {
  if (type === 'login') {
    return (
      <Button
        variant="contained"
        color="primary"
        sx={{ padding: '15px 0', fontSize: '1.1rem' }}
        onClick={handleClick}
      >
        Login
      </Button>
    );
  }

  if (type === 'register') {
    return (
      <Button
        variant="contained"
        color="primary"
        sx={{ padding: '15px 0', fontSize: '1.1rem' }}
        onClick={handleClick}
      >
        Register
      </Button>
    );
  }

  if (type === 'logout') {
    return (
      <Button
        variant="contained"
        color="error"
        sx={{ padding: '15px 0', fontSize: '1.1rem' }}
        onClick={handleClick}
      >
        Logout
      </Button>
    );
  }
};

export default CustomButton;
