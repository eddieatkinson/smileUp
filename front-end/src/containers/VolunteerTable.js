import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import { TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';

import GetVolunteerInfo from '../actions/GetVolunteerInfo';

class VolunteerTable extends Component {
  componentDidMount() {
    this.props.GetVolunteerInfo();
  }
  render() {
    return (
      <div>
        <div>
          <a href='/'>Home</a>
        </div>
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
              {this.props.volunteerInfo.map(volunteer => (
                <TableRow key={volunteer.id}>
                  <TableCell>{volunteer.firstName}</TableCell>
                  <TableCell>{volunteer.lastName}</TableCell>
                  <TableCell>{volunteer.birthday}</TableCell>
                  <TableCell>{volunteer.email}</TableCell>
                  <TableCell>{volunteer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    volunteerInfo: state.volunteerInfo,
  }
}

export default connect(mapStateToProps, {
  GetVolunteerInfo,
})(VolunteerTable);
