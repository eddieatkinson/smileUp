import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Person from '@material-ui/icons/Person';
import Icon from '@material-ui/core/Icon';

import { emailCheck, badLogin, teal, badPassword } from '../utilities';
import SignInAction from '../actions/SignInAction';
import logo from '../assets/logo-donate.jpg';

const inputLabelProps = {
  shrink: true,
};

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
      if (this.props.auth.msg !== badLogin) {
        this.props.history.push('/volunteers');
      }
      if (staySignedIn) {
        this.storeToken();
      }
    }
  }
  renderErrorMessage() {
    let errorMessage = '';
    if(this.props.auth) {
      if (this.props.auth.msg === badPassword) {
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
        <div className='signin-logo-container'>
          {/* <img className='signin-logo' src={logo} alt='logo' /> */}
        </div>
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
            style={{color: 'white', backgroundColor: teal}}
          >
            Sign me in!
          </Button>
        </form>
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
