import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';
import moment from 'moment';

import GetVolunteerInfo from '../actions/GetVolunteerInfo';

class VolunteerTable extends Component {
  componentDidMount() {
    this.props.GetVolunteerInfo();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        VolunteerTable
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.volunteerInfo.map(volunteer => {
                const birthdayFormatted = moment(volunteer.birthday).format('LL');
                const age = moment().diff(volunteer.birthday, 'years');
                return (
                  <TableRow key={volunteer.id}>
                    <TableCell>{volunteer.firstName}</TableCell>
                    <TableCell>{volunteer.lastName}</TableCell>
                    <TableCell>{birthdayFormatted}</TableCell>
                    <TableCell>{age}</TableCell>
                    <TableCell>{volunteer.email}</TableCell>
                    <TableCell>{volunteer.phone}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    volunteerInfo: state.volunteerInfo,
  }
}

export default connect(mapStateToProps, {
  GetVolunteerInfo,
})(VolunteerTable);
