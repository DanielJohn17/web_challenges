import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const Users = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
        <Table sx={{ maxWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Date Of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
