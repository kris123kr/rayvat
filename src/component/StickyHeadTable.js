import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import axios from 'axios';
import { setUsers } from './redux/store';


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const showdata =()=>{
    console.log(users.users)
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        dispatch(setUsers(response.data));
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                   id
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                    firstName
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                   lastName
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  maidenName
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                    age
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                    gender
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                   email
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                    phone
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                   username
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                    birthDate
                  </TableCell>
                </TableRow>
              </TableHead>
         
          <TableBody>
            {users.users
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.firstName}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.lastName}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.maidenName}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.age}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.gender}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.email}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.phone}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.username}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    {item.birthDate}
                  </TableCell>
                  
                  
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

     
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.users?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}