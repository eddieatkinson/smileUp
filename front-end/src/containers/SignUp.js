import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { emailCheck } from '../utilities';
import SignUpAction from '../actions/SignUpAction';

const inputLabelProps = {
  shrink: true,
};

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
      <div style={{marginTop: 75, marginBottom: 75, marginLeft: 225, marginRight: 225}}>
        <div style={{fontFamily: 'Quicksand'}}>
          <h1 style={{fontWeight: 400, marginBottom: 50}}>Register to become a SmileUp! Volunteer!!!</h1>
          <p style={{fontStyle: 'italic'}}>Our current volunteer locations:</p>
          <p style={{color: '#0092b3', marginBottom: 50}}>SmileUp! GEORGIA - Cherokee County</p>
          <p style={{lineHeight: 2}}>
            If you would like to register your son or daughter (ages 3-17) as a volunteer with SmileUp!, please fill out the form with the names and birth 
            dates of your children in the "message" section. Also include your zip code. GROUPS: If you would like to sign up an entire youth group (Girl 
            Scouts, sports team, school group, etc.), provide contact information for Group Leader with number of children in the group plus their age 
            ranges in "message" section.
          </p>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1, marginRight: 10}}>
            <form>
              <TextField
                variant='outlined'
                margin='normal'
                onChange={(event) => this.handleFieldChange(event, 'firstName')}
                type='text'
                label='First Name'
                InputLabelProps={inputLabelProps}
              />
              <TextField
                variant='outlined'
                margin='normal'
                onChange={(event) => this.handleFieldChange(event, 'lastName')}
                type='text'
                label='Last Name'
                InputLabelProps={inputLabelProps}
              />
              <TextField
                variant='outlined'
                margin='normal'
                onChange={(event) => this.handleFieldChange(event, 'birthday')}
                type='date'
                label='Birthday'
                InputLabelProps={inputLabelProps}
              />
              <TextField
                variant='outlined'
                margin='normal'
                onChange={(event) => this.handleFieldChange(event, 'email')}
                type='email'
                label='Email'
                InputLabelProps={inputLabelProps}
              />
              <TextField
                variant='outlined'
                margin='normal'
                onChange={(event) => this.handleFieldChange(event, 'phone')}
                type='tel'
                label='Phone'
                InputLabelProps={inputLabelProps}
              />
              <TextField
                variant='outlined'
                margin='normal'
                onChange={(event) => this.handleFieldChange(event, 'zip')}
                type='text'
                label='Zip code'
                InputLabelProps={inputLabelProps}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                onChange={(event) => this.handleFieldChange(event, 'zip')}
                type='text'
                label='Message'
                InputLabelProps={inputLabelProps}
                multiline
              />
              <Button onClick={this.handleSubmit.bind(this)} type='submit'>Sign me up!</Button>
            </form>
          </div>
          <div style={{flex: 1}}>
            <p style={{fontWeight: 400, lineHeight: 2}}>
            ***IMPORTANT*** If you do not receive an email within 24 hours, please check your email's spam/junk folders. If you haven't received anything 
            after 24 hours, please email our team at info@smileupfoundation.org<br/><br/>
            Thank you! #SmileUp 
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  SignUpAction,
})(SignUp);
