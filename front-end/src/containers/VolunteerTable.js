import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import { TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';

const rows = [
  {}
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

            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default VolunteerTable;
