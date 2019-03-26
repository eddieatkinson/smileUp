import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import { TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';

const rows = [
  {
    id: 1,
    firstName: 'Eddie',
    lastName: 'Atkinson',
    birthday: '08-05-1984',
    email: 'eddiebatkinson@gmail.com',
    phone: '770-627-4776',
  },
  {
    id: 2,
    firstName: 'Crystal',
    lastName: 'Taylor',
    birthday: '09-23-1983',
    email: 'crystaleddie@gmail.com',
    phone: '352-870-0690',
  },
]

class VolunteerTable extends Component {
  render() {
    return (
      <div>
        VolunteerTable
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.birthday}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default VolunteerTable;
