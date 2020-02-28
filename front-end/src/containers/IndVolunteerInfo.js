import React, { Component } from "react";

class IndVolunteerInfo extends Component {
  state = {
    firstName: this.props.location.state.volunteerInfo.firstName || "",
    lastName: this.props.location.state.volunteerInfo.lastName || "",
    birthday: this.props.location.state.volunteerInfo.birthday || "",
    email: this.props.location.state.volunteerInfo.email || "",
    phone: this.props.location.state.volunteerInfo.phone || "",
    zip: this.props.location.state.volunteerInfo.zip || "",
    school: this.props.location.state.volunteerInfo.school || "",
    hours: this.props.location.state.volunteerInfo.hours || ""
  };
  changeInput(target) {
    const { id, value } = target;
    this.setState({
      [id]: value
    });
  }
  render() {
    return (
      <form className="volunteerTable">
        <label>
          First Name:
          <input
            id="firstName"
            type="text"
            value={this.state.firstName}
            onChange={e => this.changeInput(e.target)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            id="lastName"
            type="text"
            value={this.state.lastName}
            onChange={e => this.changeInput(e.target)}
          />
        </label>
        <br />
        <label>
          Birthday:
          <input
            id="birthday"
            type="date"
            value={this.state.birthday}
            onChange={e => this.changeInput(e.target)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            id="email"
            type="email"
            value={this.state.email}
            onChange={e => this.changeInput(e.target)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            id="phone"
            type="phone"
            value={this.state.phone}
            onChange={e => this.changeInput(e.target)}
          />
        </label>
        <br />
        <label>
          Zipe Code:
          <input
            id="zip"
            type="number"
            value={this.state.zip}
            onChange={e => this.changeInput(e.target)}
          />
        </label>
        <br />
        <label>
          School:
          <input
            id="school"
            type="text"
            value={this.state.school}
            onChange={e => this.changeInput(e.target)}
          />
        </label>
        <br />
        <label>
          Hours:
          <input
            id="hours"
            type="number"
            value={this.state.hours}
            onChange={e => this.changeInput(e.target)}
          />
        </label>
      </form>
    );
  }
}

export default IndVolunteerInfo;
