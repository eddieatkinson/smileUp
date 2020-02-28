import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import {
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody
} from "@material-ui/core";
import moment from "moment";
import Delete from "@material-ui/icons/Delete";
import { isEmpty, find } from "lodash";

import GetVolunteerInfo from "../actions/GetVolunteerInfo";
import DeleteVolunteerAction from "../actions/DeleteVolunteerAction";
import { signInSuccess } from "../utilities";
import IndVolunteerInfo from "./IndVolunteerInfo";

class VolunteerTable extends Component {
  // state = {
  //   selectedVolunteerId: 0
  // };

  componentDidMount() {
    this.props.GetVolunteerInfo();
  }

  deleteVolunteer(id) {
    this.props.DeleteVolunteerAction({ id });
  }

  selectVolunteer(selectedVolunteerId) {
    const volunteerInfo = find(this.props.volunteerInfo, [
      "id",
      selectedVolunteerId
    ]);
    this.props.history.push({
      pathname: `/volunteers/${volunteerInfo.firstName}${volunteerInfo.lastName}`,
      state: { volunteerInfo }
    });
  }

  renderTable() {
    // if (isEmpty(this.props.auth) || this.props.auth.msg !== signInSuccess) {
    //   this.props.history.push("/");
    //   return null;
    // }
    // if (this.state.selectedVolunteerId) {
    //   const volunteerInfo = find(this.props.volunteerInfo, [
    //     "id",
    //     this.state.selectedVolunteerId
    //   ]);
    //   this.props.history.push("/volunteers/hey");
    //   // return <IndVolunteerInfo volunteerInfo={volunteerInfo} />;
    //   return;
    // }

    return (
      <div className="volunteer-table-wrapper">
        <div className="volunteer-table">
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
                  <TableCell>Hours</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.volunteerInfo.map(volunteer => {
                  const birthdayFormatted = moment
                    .utc(volunteer.birthday)
                    .format("LL");
                  const age = moment().diff(volunteer.birthday, "years");
                  return (
                    <TableRow
                      key={volunteer.id}
                      hover
                      onClick={() => this.selectVolunteer(volunteer.id)}
                    >
                      <TableCell>{volunteer.firstName}</TableCell>
                      <TableCell>{volunteer.lastName}</TableCell>
                      <TableCell>{birthdayFormatted}</TableCell>
                      <TableCell>{age}</TableCell>
                      <TableCell>{volunteer.email}</TableCell>
                      <TableCell>{volunteer.phone}</TableCell>
                      <TableCell>{volunteer.hours}</TableCell>
                      <TableCell>
                        <Delete
                          className="delete-volunteer"
                          onClick={() => this.deleteVolunteer(volunteer.id)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }

  renderVolunteerInfo() {
    return <div></div>;
  }

  render() {
    console.log(this.props.volunteerInfo);
    return <div>{this.renderTable()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    volunteerInfo: state.volunteerInfo
  };
};

export default connect(mapStateToProps, {
  GetVolunteerInfo,
  DeleteVolunteerAction
})(VolunteerTable);
