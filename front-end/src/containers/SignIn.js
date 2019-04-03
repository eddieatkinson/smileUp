import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { emailCheck } from '../utilities';
import SignInAction from '../actions/SignInAction';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }
  handleFieldChange(event, field) {
    const { value } = event.target;
    this.setState({
      [field]: value,
    });
  }
  handleSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();
    if (password === '') {
      alert('Password is required.');
    } else if (!email.match(emailCheck)) {
      alert('Please enter a valid email.');
    } else {
      this.props.SignInAction(this.state);
    }
  }
  renderErrorMessage() {
    let errorMessage = '';
    if(this.props.auth.data) {
      if (this.props.auth.data.msg === 'badPassword') {
        errorMessage = 'Incorrect password';
      } else if (this.props.auth.data.msg === 'badLogin') {
        errorMessage = 'Incorrect email';
      }
    }
    return errorMessage;
  }
  render() {
    return (
      <div>
        <p>SignIn</p>
        <Link to='/'>To Home</Link>
        <form>
          <input onChange={(event) => this.handleFieldChange(event, 'email')} type='email' placeholder='Email' />
          <input onChange={(event) => this.handleFieldChange(event, 'password')} type='password' placeholder='Password' />
          <button onClick={this.handleSubmit.bind(this)} type='submit'>Sign me in!</button>
        </form>
        <div>{this.renderErrorMessage()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {
  SignInAction,
})(SignIn);
