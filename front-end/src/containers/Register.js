import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { emailCheck } from '../utilities';
import RegisterAction from '../actions/RegisterAction';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  handleFieldChange(event, field) {
    const value = event.target.value;
    this.setState({
      [field]: value,
    });

  }
  handleSubmit(event) {
    const { name, email, password, confirmPassword } = this.state;
    event.preventDefault();
    if (name === '' || password === '') {
      alert('All fields must be filled.');
    } else if (!email.match(emailCheck)) {
      alert('Please enter a valid email.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      this.props.RegisterAction(this.state);
    }
  }
  render() {
    return (
      <div>
        <p>Register</p>
        <Link to='/'>To Home</Link>
        <div>
          <form>
            <input onChange={(event) => this.handleFieldChange(event, 'name')} placeholder='Name' type='text' />
            <input onChange={(event) => this.handleFieldChange(event, 'email')} placeholder='Email' type='email' />
            <input onChange={(event) => this.handleFieldChange(event, 'password')} placeholder='Password' type='password' />
            <input onChange={(event) => this.handleFieldChange(event, 'confirmPassword')} placeholder='Confirm Password' type='password' />
            <button onClick={this.handleSubmit.bind(this)}>Submit!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  RegisterAction,
})(Register);
