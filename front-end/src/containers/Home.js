import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import LogoutAction from '../actions/LogoutAction';

class Home extends Component {
  buttonClicked() {
    this.props.LogoutAction();
    localStorage.removeItem('smileUpToken');
  }

  renderLogoutButton() {
    if (this.props.auth.token){
      return (
        <button onClick={this.buttonClicked.bind(this)}>Logout</button>
      )
    }
    return null;
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>Home</p>
        <Link to='/signup'>To SignUp</Link>
        <div>
          <Link to='/register'>To Register</Link>
        </div>
        <div>
          <Link to='/signin'>To SignIn</Link>
        </div>
        <div>
          <Link to='/volunteers'>To VolunteerTable</Link>
        </div>
        <div>
          {this.renderLogoutButton()}
        </div>
        <Footer />
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
  LogoutAction,
})(Home);
