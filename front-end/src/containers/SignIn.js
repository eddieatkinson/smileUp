import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

import { emailCheck, badLogin, teal, badPassword, signInSuccess } from '../utilities';
import SignInAction from '../actions/SignInAction';

const inputLabelProps = {
  shrink: true,
};

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    staySignedIn: false,
    isLoading: false,
    apiError: false,
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
      this.setState({
        isLoading: true,
      });
      await this.props.SignInAction(this.state);
      if (this.props.auth.msg === signInSuccess) {
        this.props.history.push('/volunteers');
      } else {
        this.setState({
          isLoading: false,
          apiError: true,
        });
      }
      if (staySignedIn) {
        this.storeToken();
      }
    }
  }
  renderErrorMessage() {
    let errorMessage = '';
    if(this.state.apiError) {;
      errorMessage = 'There was a problem with your login. Please try again later :)';
    }
    if(this.props.auth) {
      if (this.props.auth.msg === badPassword) {
        errorMessage = 'Incorrect password';
      } else if (this.props.auth.msg === badLogin) {
        errorMessage = 'Incorrect email';
      }
    }
    return errorMessage;
  }
  renderProgressSpinner() {
    if (this.state.isLoading) {
      return (
        <div className='spinner-container'>
          <CircularProgress className='spinner' />
        </div>
      )
    }
    return null;
  }
  render() {
    return (
      <div className='signin-container'>
        <form className='signin-form'>
          <div className='signin-label-container'>
            <Icon className='signin-person-logo'>person</Icon>
            <div className='signin-label'>Sign In</div>
          </div>
          <TextField
            onChange={(event) => this.handleFieldChange(event, 'email')}
            type='email'
            label='Email'
            variant='outlined'
            margin='normal'
            fullWidth
            InputLabelProps={inputLabelProps}
          />
          <TextField
            onChange={(event) => this.handleFieldChange(event, 'password')}
            type='password'
            label='Password'
            variant='outlined'
            margin='normal'
            fullWidth
            InputLabelProps={inputLabelProps}
          />
          {/* <TextField id='keepSignedOn' onClick={this.handleRadioButtonCheck.bind(this)} type='radio' value={false} />
          <label>Keep me signed in</label> */}
          <div className='signin-error-container'>{this.renderErrorMessage()}</div>
          <Button
            onClick={this.handleSubmit.bind(this)}
            variant='contained'
            type='submit'
            style={{color: 'white', backgroundColor: teal, marginTop: 10}}
          >
            Sign me in!
          </Button>
        </form>
        {this.renderProgressSpinner()}
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
