import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/styles';
// import { KeyboardDatePicker } from '@material-ui/pickers';
// import {  } from '@material-ui/core/styles';
import moment from 'moment';

import { emailCheck, dateCheck } from '../utilities';
import SignUpAction from '../actions/SignUpAction';
import { teal } from '../utilities';
// import { DatePicker } from '@material-ui/pickers';

const inputLabelProps = {
  shrink: true,
};

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    birthday: this.hasDatePicker() ? '' : moment().subtract(18, 'years').calendar(),
    email: '',
    phone: '',
    zip: '',
    guardianName: '',
    school: '',
    message: '',
    showChildFields: false,
    dateError: false,
    hasDatePicker: false,
  }
  componentDidMount() {
    this.setState({
      hasDatePicker: this.hasDatePicker(),
    });
  }
  hasDatePicker() {
    var input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.value = '2018-01-01';
    return !!input.valueAsDate;
  }
  handleFieldChange(event, field) {
    const { value } = event.target;
    console.log(`${field} is changing to ${value}`);
    if (field === 'birthday') {
      if (!this.state.hasDatePicker && !value.match(dateCheck)) {
        // value = moment(value, 'MM-DD-YYYY').format('YYYY-MM-DD');
        console.log(value);
        console.log(this.state);
        console.log('bad birthday');
        this.setState({
          dateError: true,
        });
      } else {
        if (this.state.dateError) {
          this.setState({
            dateError: false,
          });
        }
        const valueToTest = this.state.hasDatePicker ? value : moment(value, 'MM-DD-YYYY').format('YYYY-MM-DD');
        this.addParentSchoolFields(valueToTest);
      }
    }
    console.log(value);
    this.setState({
      [field]: value,
    });
  }
  addParentSchoolFields(birthday) {
    const age = moment().diff(birthday, 'years');
    const showChildFields = age < 18;
    this.setState({
      showChildFields,
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
  getParentFields() {
    if (this.state.showChildFields) {
      return (
        <div id='guardian-fields'>
          <TextField
            style={{marginRight: 10, width: 195}}
            variant='outlined'
            margin='normal'
            onChange={(event) => this.handleFieldChange(event, 'guardianName')}
            type='text'
            label='Guardian Name'
            InputLabelProps={inputLabelProps}
          />
          <TextField
            style={{width: 195}}
            variant='outlined'
            margin='normal'
            onChange={(event) => this.handleFieldChange(event, 'school')}
            type='text'
            label='School'
            InputLabelProps={inputLabelProps}
          />
        </div>
      );
    }
    return null;
  }
  render() {
    console.log(this.state);
    return (
      <div className='text-block'>
        <div style={{fontFamily: 'Quicksand'}}>
          <h1>Register to become a SmileUp! Volunteer!!!</h1>
          <p style={{fontStyle: 'italic'}}>Our current volunteer locations:</p>
          <p style={{color: '#0092b3', marginBottom: 50}}>SmileUp! GEORGIA - Cherokee County</p>
          <p>
            If you would like to register your son or daughter (ages 3-17) as a volunteer with SmileUp!, please fill out the form with the names and birth 
            dates of your children. Also include your zip code. GROUPS: If you would like to sign up an entire youth group (Girl 
            Scouts, sports team, school group, etc.), provide contact information for Group Leader with number of children in the group plus their age 
            ranges in "message" section.
          </p>
        </div>
        <div className='volunteer-form-with-note'>
          <div className='volunteer-form'>
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
                error={this.state.dateError}
                variant='outlined'
                margin='normal'
                onChange={(event) => this.handleFieldChange(event, 'birthday')}
                // value={moment(this.state.birthday, 'YYYY-MM-DD').format('L')}
                value={this.state.birthday}
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
              {this.getParentFields()}
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
                onChange={(event) => this.handleFieldChange(event, 'message')}
                type='text'
                label='Message'
                InputLabelProps={inputLabelProps}
                multiline
              />
              <Button
                style={{backgroundColor: teal, color: 'white'}}
                onClick={this.handleSubmit.bind(this)}
                type='submit'
              >
                Sign me up!
              </Button>
            </form>
          </div>
          <div style={{flex: 1}}>
            <p style={{fontWeight: 400}}>
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
