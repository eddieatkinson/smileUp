import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { emailCheck } from '../utilities';
import SignInAction from '../actions/SignInAction';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    staySignedIn: false,
  }
  handleRadioButtonCheck() {
    document.getElementById('keepSignedOn').checked = !this.state.staySignedIn;
    this.setState({
      staySignedIn: !this.state.staySignedIn,
    });
  }
  handleFieldChange(event, field) {
    let { value } = event.target;
    this.setState({
      [field]: value,
    });
  }
  storeToken() {
    const { token } = this.props.auth;
    localStorage.setItem('smileUpToken', token);
  }
  async handleSubmit(event) {
    const { email, password, staySignedIn } = this.state;
    event.preventDefault();
    if (password === '') {
      alert('Password is required.');
    } else if (!email.match(emailCheck)) {
      alert('Please enter a valid email.');
    } else {
      await this.props.SignInAction(this.state);
      if (staySignedIn) {
        this.storeToken();
      }
    }
  }
  renderErrorMessage() {
    let errorMessage = '';
    if(this.props.auth) {
      if (this.props.auth.msg === 'badPassword') {
        errorMessage = 'Incorrect password';
      } else if (this.props.auth.msg === 'badLogin') {
        errorMessage = 'Incorrect email';
      }
    }
    return errorMessage;
  }
  render() {
    console.log(this.props.auth);
    return (
      <div>
        <p>SignIn</p>
        <Link to='/'>To Home</Link>
        <form>
          <input onChange={(event) => this.handleFieldChange(event, 'email')} type='email' placeholder='Email' />
          <input onChange={(event) => this.handleFieldChange(event, 'password')} type='password' placeholder='Password' />
          <input id='keepSignedOn' onClick={this.handleRadioButtonCheck.bind(this)} type='radio' value={false} />
          <label>Keep me signed in</label>
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
