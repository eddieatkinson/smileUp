import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginAction from '../actions/LoginAction';

class Test extends Component {
  buttonPressed() {
    console.log('Pressed!');
    const result = this.props.LoginAction(2);
    console.log(result.payload);
  }
  render() {
    return (
      <button onClick={this.buttonPressed.bind(this)}>Test!</button>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {
  LoginAction,
})(Test);
