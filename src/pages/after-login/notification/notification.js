import React from 'react'
import { Heading, Layout } from '../../../components/shared'
import Styles from './notification.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, Subject,Description) {
  return { name, Subject,Description};
}
 const Notification = () => {
  const rows = [
    createData('TechnoMile Schedule Upgrade', 'GovSearch will be down for 5 hours from 3pm to 8pm of Saturday on March the 12th 2022 for scheduled maintance and upgrades. '),
    createData('Training Webinar', 'TechnoMile will be hosting a webinar on 12th of March for GovSearch.'),
    createData('Build Out Profile', 'To get the most out of your GovSearch investment make sure to populate your profile for your account and profile.'),
    createData('Subject 1', 'Description'),
    createData('Subject 2', 'Description'),
    createData('Subject 3', 'Description'),
  ];
  return (
 
  <Layout>
    
    <div className={`${Styles.table}`}>
    <Heading headingType={"h1"} >Notification/ Alerts</Heading>
    </div>
    <TableContainer >
      <Table sx={{ minWidth: 600 }} >
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell >Description</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              component={Paper}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.Subject}</TableCell>
              <TableCell >{row.Description}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Layout>
 
  )
}

export default Notification