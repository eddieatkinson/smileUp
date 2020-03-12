import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";
import UpdateVolunteerAction from "../actions/UpdateVolunteerAction";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { teal, updateSuccessful } from "../utilities";

class IndVolunteerInfo extends Component {
  state = {
    id: this.props.location.state.volunteerInfo.id || null,
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
    hours: this.props.location.state.volunteerInfo.hours || 0,
    notes: this.props.location.state.volunteerInfo.notes || "",
    isLoading: false
  };
  handleFieldChange(event, field) {
    const { value } = event.target;
    this.setState({
      [field]: value
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoading: true
    });
    await this.props.UpdateVolunteerAction(this.state);
    if (this.props.msg === updateSuccessful) {
      this.props.history.push("/volunteers");
    } else {
      alert("An error occurred");
      this.setState({
        isLoading: false
      });
    }
  }
  renderProgressSpinner() {
    if (this.state.isLoading) {
      return (
        <div className="spinner-container">
          <CircularProgress className="spinner" />
        </div>
      );
    }
    return null;
  }
  render() {
    const inputLabelProps = {
      shrink: true
    };
    return (
      <div className="volunteer-info">
        <div className="volunteer-form-ind">
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
            <TextField
              variant="outlined"
              margin="normal"
              onChange={event => this.handleFieldChange(event, "notes")}
              value={this.state.notes}
              type="text"
              multiline
              label="Notes"
              InputLabelProps={inputLabelProps}
            />
            <div id="edit-volunteer-button">
              <Button
                style={{ backgroundColor: teal, color: "white" }}
                onClick={this.handleSubmit.bind(this)}
                type="submit"
              >
                Submit Changes
              </Button>
            </div>
            {this.renderProgressSpinner()}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msg: state.volunteerInfo.msg
  };
};

export default connect(mapStateToProps, {
  UpdateVolunteerAction
})(IndVolunteerInfo);
