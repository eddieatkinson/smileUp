import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { teal, yellow, signInSuccess } from '../utilities';
import Grid from '@material-ui/core/Grid';
import { isEmpty } from 'lodash';
import MediaQuery from 'react-responsive';
import Reorder from '@material-ui/icons/Reorder';

import logo from '../assets/logo.gif';
import Dropdown from './Dropdown';

import LogoutAction from '../actions/LogoutAction';

const styles = {
  container: {
    backgroundColor: yellow,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    margin: 50,
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
  },
  tonya: {
    margin: 50,
    textDecoration: 'none',
    color: 'white',
  },
  menuLinks: {
    margin: 50,
    textDecoration: 'none',
    color: 'black',
  },
  image: {
    height: 60,
  },
}

const getImage = () => {
  return (
      <Reorder style={{fontSize: 60, color: teal}} />
  )
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollToBottom: props.scrollToBottom,
    }
  }

  logoutAction() {
    this.props.LogoutAction();
  }

  logoutButton() {
    const { auth } = this.props;
    const dropdownTitle = 'How to Give Back';
    const dropdownItemsLarge = [
      {
        path: '/donate',
        text: 'Donate',
      },
      {
        path: '/signup',
        text: 'Volunteer',
      },
      {
        path: '/sponsor',
        text: 'Sponsor',
      },
    ]
    const dropdownItemsSmall = [
      {
        path: '/about',
        text: 'About Us',
      },
      {
        path: '/events',
        text: 'Events',
      },
      {
        path: '/donate',
        text: 'Donate',
      },
      {
        path: '/signup',
        text: 'Volunteer',
      },
      {
        path: '/sponsor',
        text: 'Sponsor',
      },
      {
        path: '/testimonials',
        text: 'Testimonials',
      },
    ]
    if(isEmpty(auth) || auth.msg !== signInSuccess) {
      return (
        <div style={styles.container}>
          <Link to='/' style={styles.links}><img src={logo} alt='logo' style={styles.image} /></Link>
          <MediaQuery query='(min-width: 1224px)'>
            <Link to='/about' style={styles.links}>About Us</Link>
            <Link to='/events' style={styles.links}>Events</Link>
            <Dropdown dropdownTitle={dropdownTitle} dropdownItems={dropdownItemsLarge} />
            <Link to='/testimonials' style={styles.links}>Testimonials</Link>
            <Link to='/' onClick={this.state.scrollToBottom} style={styles.links}>Contact Us</Link>
          </MediaQuery>
          <MediaQuery query='(max-width:1223px)'>
            <Dropdown image={getImage()} dropdownItems={dropdownItemsSmall} />
          </MediaQuery>
        </div>
      );
    }
    return (
      <div style={styles.container}>
        <div style={styles.tonya}>
          {`Hey, ${auth.name}!`}
        </div>
        <div style={styles.links} onClick={this.logoutAction.bind(this)}>Logout</div>
      </div>
    )
  }

  render() {
    return (
      <Grid style={styles.container}>
        {this.logoutButton()}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {
  LogoutAction,
})(Navbar);
