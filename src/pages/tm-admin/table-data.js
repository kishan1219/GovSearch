
import * as React from 'react';
import Styles from "./tm-admin.module.scss";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import {useState} from "react";
import { Heading,Modal,Card,Text,Button } from '../../components/shared';


function createData(id,name, user, active, users, expiration, createDate, licenseTypes, action, userAccount, email, phone, accountID) {
  return {
    id,
    name,
    user,
    active,
    users,
    expiration,
    createDate,
    licenseTypes, 
    action, 
    userAccount, 
    email, 
    phone, 
    accountID
  };
}

const rows = [
  createData(1, 'BAE Systems', 'Tom Smith', 'Yes', '----', '1/4/2023', '1/3/2022', 'Proffesional', 'Reset Password', 'Core Admin', 'mailto:hunter@technomile.com', '334 320 6666', '8675309'),
  createData(2, 'BAE Systems', 'Tom Smith', 'Yes', '----', '1/4/2023', '1/3/2022', 'Proffesional', 'Reset Password', 'Core Admin', 'mailto:hunter@technomile.com', '334 320 6666', '8675309'),
  createData(3, 'BAE Systems', 'Tom Smith', 'Yes', '----', '1/4/2023', '1/3/2022', 'Proffesional', 'Reset Password', 'Core Admin', 'mailto:hunter@technomile.com', '334 320 6666', '8675309'),
  createData(4, 'BAE Systems', 'Tom Smith', 'Yes', '----', '1/4/2023', '1/3/2022', 'Proffesional', 'Reset Password', 'Core Admin', 'mailto:hunter@technomile.com', '334 320 6666', '8675309'),
  createData(5, 'BAE Systems', 'Tom Smith', 'Yes', '----', '1/4/2023', '1/3/2022', 'Proffesional', 'Reset Password', 'Core Admin', 'mailto:hunter@technomile.com', '334 320 6666', '8675309'),
  createData(6, 'BAE Systems', 'Tom Smith', 'Yes', '----', '1/4/2023', '1/3/2022', 'Proffesional', 'Reset Password', 'Core Admin', 'mailto:hunter@technomile.com', '334 320 6666', '8675309'),
  createData(7, 'BAE Systems', 'Tom Smith', 'Yes', '----', '1/4/2023', '1/3/2022', 'Proffesional', 'Reset Password', 'Core Admin', 'mailto:hunter@technomile.com', '334 320 6666', '8675309'),
  createData(8, 'BAE Systems', 'Tom Smith', 'Yes', '----', '1/4/2023', '1/3/2022', 'Proffesional', 'Reset Password', 'Core Admin', 'mailto:hunter@technomile.com', '334 320 6666', '8675309'),
  createData(9, 'Donut', 'Tom Smith', 25.0, 51, 4.9),
  createData(10, 'Donut', 'Tom Smith', 25.0, 51, 4.9),
  createData(11, 'Eclair', 262, 16.0, 24, 6.0),
  createData(12, 'Gingerbread', 356, 16.0, 49, 3.9),
  createData(13, 'Honeycomb', 408, 3.2, 87, 6.5),
  createData(14, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(15, 'Jelly Bean', 375, 0.0, 94, 0.0),
  createData(16, 'KitKat', 518, 26.0, 65, 7.0),
  createData(17, 'Lollipop', 392, 0.2, 98, 0.0),
  createData(18, 'Marshmallow', 318, 0, 81, 2.0),
  createData(19, 'Nougat', 360, 19.0, 9, 37.0),
  createData(20, 'Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Account',
  },
  {
    id: 'user',
    numeric: true,
    disablePadding: false,
    label: 'User',
  },
  {
    id: 'active',
    numeric: true,
    disablePadding: false,
    label: 'Active',
  },
  {
    id: 'users',
    numeric: true,
    disablePadding: false,
    label: '# Users',
  },
  {
    id: 'expiration',
    numeric: true,
    disablePadding: false,
    label: 'Expiration',
  },
  {
    id: 'createDate',
    numeric: true,
    disablePadding: false,
    label: 'Created Date',
  },
  {
    id: 'licenseTypes',
    numeric: true,
    disablePadding: false,
    label: 'License Types',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
  {
    id: 'userAccount',
    numeric: true,
    disablePadding: false,
    label: 'User / Account',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'Phone',
  }, {
    id: 'accountID',
    numeric: true,
    disablePadding: false,
    label: 'User/Account ID',
  },
  {
id: 'enterprise',
numeric:true,
disablePadding:false,
label:"Enterprise",
  },
];

function EnhancedTableHead(props) {
  const {  order, orderBy, } =
    props;
    

  return (
    <TableHead>
      <TableRow sx={{
                      backgroundColor: "#F5F5F5",
                      borderBottom: 0,
                      border: 0,
                     
                      
                    }}>
        <TableCell padding="checkbox">
         
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell className={Styles.tableHead}
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              // direction={orderBy === headCell.id ? order : 'asc'}
              // onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {/* {order === 'desc' ? 'sorted descending' : 'sorted ascending'} */}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="checkbox">
         
        </TableCell>
      </TableRow>
    </TableHead>
  );
}



export default function AdminData({setdesable}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('user');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const [enable,setEnable] = useState();
  const[showReset,setShowReset]=useState(false);
  const[showCheck,setShowCheck]=useState(false);
 

  const handleMouseOver = () => {
    setShowCheck(true);
  };

  const handleMouseOut = () => {
    setShowCheck(false);
  };


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
       
        <TableContainer className={Styles.scrollBar} >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page *rowsPerPage, page *rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                 const check =(e)=>{
                  setdesable(e.target.checked)
                 }

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          // checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                            
                          }}
                          onChange={(check)}
                        />
                      </TableCell>
                      <TableCell className={Styles.user}
                        // component="th"
                        // id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell className={Styles.user} align="left">{row.user}</TableCell>
                      <TableCell align="left">{row.active}</TableCell>
                      <TableCell align="left">{row.users}</TableCell>
                      <TableCell align="left">{row.expiration}</TableCell>
                      <TableCell align="left">{row.createDate}</TableCell>
                      <TableCell align="left">{row.licenseTypes}</TableCell>
                      <TableCell align="left" ><Link onClick={() => setShowReset(!showReset)} style={{ color: "black" }} >{row.action}</Link></TableCell>
                      <TableCell align="left">{row.userAccount}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left" className={Styles.user}>{row.phone}</TableCell>
                      <TableCell align="left">{row.accountID}</TableCell>
                      <TableCell padding="checkbox" align="center">
                      
                        {/* <Checkbox className={Styles.check}
                          color="primary"
                          inputProps={{
                            'aria-label': 'select all desserts',
                          }}
                        /> */}
                
                    { row.id &&  showCheck  &&
                        <Checkbox 
                          color="primary"
                          inputProps={{
                            'aria-label': 'select all desserts',
                          }}
                        />
                }

                        {/* { row.id === showCheck ? "" :  
                        <Checkbox 
                          color="primary"
                          inputProps={{
                            'aria-label': 'select all desserts',
                          }}
                        />
                } */}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer >
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      { showReset && 
      <Modal className={Styles.mainModal}>
            <div className={Styles.profileModel}>
                <div>
              <Heading headingType={"h1"} color={"secondary"} className={Styles.resetHead}>Reset password</Heading>
              <Card className={Styles.profileCard}>
                <Text strong={"strong6"}  >Email</Text>
                <Text  className={Styles.resetText}>hunter@technomile.com</Text>
                <Text strong={"strong6"} className={Styles.resetHeadText} >Account</Text>
                <Text  className={Styles.resetText}>BAE Systems</Text>
                <Text strong={"strong6"} className={Styles.resetHeadText} >Password</Text>
                <Text className={Styles.resetText}>GovSearch123_2022</Text>
              </Card>
              </div>
              <div className={Styles.btnMain}>
              <Button size={"xmd"} variant={"solidPrimary"} btnHandler={() => setShowReset(false)}>Cancle</Button>
              <Button size={"xmd"} variant={"solidPrimary"}>Reset</Button>
              </div>
            </div>
            </Modal>
            }
    </Box>
    
  );
}







