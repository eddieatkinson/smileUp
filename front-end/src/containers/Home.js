import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mainSmiles from '../assets/main-smiles.jpg';

import LogoutAction from '../actions/LogoutAction';
import Quotes from '../components/Quotes';

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
        <img className='home-image' src={mainSmiles} alt='smiling children' />
        {/* <p>Home</p>
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
        </div> */}
        <div className='text-block home-text'>
          <h1>Welcome to the SmileUp! Charitable Foundation!</h1>
          <p>
            We believe that EVERY CHILD should live a life full of hope, joy, and purpose and we believe this can be done by getting
            children involved in volunteerism and community service efforts that focus on helping other children.<br /><br /> 
            Our mission is to get children involved in volunteerism and community service by partnering with charities and outreach
            organizations that focus on helping children, ultimately bringing a smile and purpose to the lives of ALL children. We
            work with volunteers, donors and SmileUp! Ambassadors to bring joy, restore hope, and provide purpose to every child we
            come into contact with, in hopes to fulfill our organization's motto: "Sometimes your joy is the source of your SMILE, but
            sometimes your SMILE can be the source of your joy!"<br /><br /> 
            To see how we have been making an impact, visit and join our <Link className='fb-link' to='/facebook' target='_blank'>Facebook page!</Link> 
          </p>
        </div>
        <Quotes />
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
