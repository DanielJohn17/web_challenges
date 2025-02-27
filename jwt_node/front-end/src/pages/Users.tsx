import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { User, UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router';

const Users = () => {
  const [rows, setRows] = useState<User[] | null>(null);
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setRows(data);
      } catch (error: unknown) {
        if (error instanceof Error) console.log(`Error: ${error.message}`);
        else console.log('Unkown Error');
      }
    };

    const getRole = () => {
      if (user?.role !== 'admin') {
        navigate('/');
      } else {
        fetchUsers();
      }
    };

    getRole();
  }, [navigate, user]);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
        <Table sx={{ maxWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows?.length > 0 &&
              rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
