import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import { TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';
import moment from 'moment';
import Delete from '@material-ui/icons/Delete';
import { isEmpty } from 'lodash';

import GetVolunteerInfo from '../actions/GetVolunteerInfo';
import DeleteVolunteerAction from '../actions/DeleteVolunteerAction';
import { badLogin } from '../utilities';

class VolunteerTable extends Component {
  componentDidMount() {
    this.props.GetVolunteerInfo();
  }

  deleteVolunteer(id) {
    console.log(id);
    this.props.DeleteVolunteerAction({id});
  }

  renderTable() {
    if(isEmpty(this.props.auth) || this.props.auth.msg === badLogin){
      this.props.history.push('/');
      return null;
    }

    return (
      <div className='text-block'>
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
                <TableCell>Delete</TableCell>
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
                    <TableCell><Delete className='delete-volunteer' onClick={() => this.deleteVolunteer(volunteer.id)} /></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }

  render() {
    console.log(this.props);
    return (
      <div>{this.renderTable()}</div>
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
  DeleteVolunteerAction,
})(VolunteerTable);
