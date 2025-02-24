import { Button } from '@mui/material';
type CustomButtonProps = {
  type: 'login' | 'register' | 'logout';
};

const CustomButton = ({ type }: CustomButtonProps) => {
  if (type === 'login') {
    return (
      <Button
        variant="contained"
        color="primary"
        sx={{ padding: '15px 0', fontSize: '1.1rem' }}
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
      >
        Logout
      </Button>
    );
  }
};

export default CustomButton;
