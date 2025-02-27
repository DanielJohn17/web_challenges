import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { User } from '../context/UserContext';

const Users = () => {
  const [rows, setRows] = useState<User[] | null>(null);

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

        console.log(data);
        setRows(data);
      } catch (error: unknown) {
        if (error instanceof Error) console.log(`Error: ${error.message}`);
        else console.log('Unkown Error');
      }
    };

    fetchUsers();
  }, []);
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
