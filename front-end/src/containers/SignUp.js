import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { emailCheck } from '../utilities';
import SignUpAction from '../actions/SignUpAction';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    phone: '',
    zip: '',
  }
  handleFieldChange(event, field) {
    const { value } = event.target;
    this.setState({
      [field]: value,
    });
  }
  handleSubmit(event) {
    const { firstName, lastName, birthday, email, zip } = this.state;
    event.preventDefault();
    if (firstName === '' || lastName === '' || birthday === '' || zip === '') {
      alert('First name, last name, birthday, and zip are required.');
    } else if (!email.match(emailCheck)) {
      alert('Please enter a valid email.');
    } else {
      this.props.SignUpAction(this.state);
    }
  }
  render() {
    return (
      <div>
        <p>SignUp</p>
        <Link to='/'>Home</Link>
        <form>
          <input onChange={(event) => this.handleFieldChange(event, 'firstName')} type='text' placeholder='First Name' />
          <input onChange={(event) => this.handleFieldChange(event, 'lastName')} type='text' placeholder='Last Name' />
          <input onChange={(event) => this.handleFieldChange(event, 'birthday')} type='date' placeholder='Birthday' />
          <input onChange={(event) => this.handleFieldChange(event, 'email')} type='email' placeholder='Email' />
          <input onChange={(event) => this.handleFieldChange(event, 'phone')} type='tel' placeholder='Phone' />
          <input onChange={(event) => this.handleFieldChange(event, 'zip')} type='text' placeholder='Zip code' />
          <button onClick={this.handleSubmit.bind(this)} type='submit'>Sign me up!</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {
  SignUpAction,
})(SignUp);
