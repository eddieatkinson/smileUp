import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { teal } from "../utilities";

class IndVolunteerInfo extends Component {
  state = {
    firstName: this.props.location.state.volunteerInfo.firstName || "",
    lastName: this.props.location.state.volunteerInfo.lastName || "",
    birthday:
      moment(this.props.location.state.volunteerInfo.birthday).format(
        "YYYY-MM-DD"
      ) || "",
    email: this.props.location.state.volunteerInfo.email || "",
    phone: this.props.location.state.volunteerInfo.phone || "",
    zip: this.props.location.state.volunteerInfo.zip || "",
    school: this.props.location.state.volunteerInfo.school || "",
    hours: this.props.location.state.volunteerInfo.hours || 0
  };
  handleFieldChange(event, field) {
    const { value } = event.target;
    this.setState({
      [field]: value
    });
  }
  render() {
    const inputLabelProps = {
      shrink: true
    };
    console.log(this.state.birthday);
    return (
      // <form className="volunteerTable">
      //   <label>
      //     First Name:
      //     <input
      //       id="firstName"
      //       type="text"
      //       value={this.state.firstName}
      //       onChange={e => this.changeInput(e.target)}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Last Name:
      //     <input
      //       id="lastName"
      //       type="text"
      //       value={this.state.lastName}
      //       onChange={e => this.changeInput(e.target)}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Birthday:
      //     <input
      //       id="birthday"
      //       type="date"
      //       value={this.state.birthday}
      //       onChange={e => this.changeInput(e.target)}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Email:
      //     <input
      //       id="email"
      //       type="email"
      //       value={this.state.email}
      //       onChange={e => this.changeInput(e.target)}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Phone:
      //     <input
      //       id="phone"
      //       type="phone"
      //       value={this.state.phone}
      //       onChange={e => this.changeInput(e.target)}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Zipe Code:
      //     <input
      //       id="zip"
      //       type="number"
      //       value={this.state.zip}
      //       onChange={e => this.changeInput(e.target)}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     School:
      //     <input
      //       id="school"
      //       type="text"
      //       value={this.state.school}
      //       onChange={e => this.changeInput(e.target)}
      //     />
      //   </label>
      //   <br />
      //   <label>
      //     Hours:
      //     <input
      //       id="hours"
      //       type="number"
      //       value={this.state.hours}
      //       onChange={e => this.changeInput(e.target)}
      //     />
      //   </label>
      // </form>
      <div className="volunteer-info">
        <div className="volunteer-form">
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "firstName")}
              value={this.state.firstName}
              type="text"
              label="First Name"
              InputLabelProps={inputLabelProps}
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "lastName")}
              value={this.state.lastName}
              type="text"
              label="Last Name"
              InputLabelProps={inputLabelProps}
            />
            <TextField
              error={this.state.dateError}
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "birthday")}
              // value={moment(this.state.birthday, 'YYYY-MM-DD').format('L')}
              value={this.state.birthday}
              type="date"
              label="Birthday"
              InputLabelProps={inputLabelProps}
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "email")}
              value={this.state.email}
              type="email"
              label="Email"
              InputLabelProps={inputLabelProps}
            />
            {/* {this.getParentFields()} */}
            <TextField
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "phone")}
              value={this.state.phone}
              type="tel"
              label="Phone"
              InputLabelProps={inputLabelProps}
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "zip")}
              value={this.state.zip}
              type="text"
              label="Zip code"
              InputLabelProps={inputLabelProps}
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "school")}
              value={this.state.school}
              type="text"
              label="School"
              InputLabelProps={inputLabelProps}
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "hours")}
              value={this.state.hours}
              type="number"
              label="Hours"
              InputLabelProps={inputLabelProps}
            />
            <div id="edit-volunteer-button">
              <Button
                style={{ backgroundColor: teal, color: "white" }}
                // onClick={this.handleSubmit.bind(this)}
                type="submit"
              >
                Submit Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default IndVolunteerInfo;
