import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { yellow } from '../utilities';
import Grid from '@material-ui/core/Grid';
import { isEmpty } from 'lodash';

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
  menuLinks: {
    margin: 50,
    textDecoration: 'none',
    color: 'black',
  },
  image: {
    height: 60,
  },
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
    if(isEmpty(auth)) {
      console.log('nothing!');
      return (
        <div style={styles.container}>
          <Link to='/' style={styles.links}><img src={logo} alt='logo' style={styles.image} /></Link>
          <Link to='/about' style={styles.links}>About Us</Link>
          <Link to='/events' style={styles.links}>Events</Link>
          <Dropdown />
          <Link to='/testimonials' style={styles.links}>Testimonials</Link>
          <Link to='/' onClick={this.state.scrollToBottom} style={styles.links}>Contact Us</Link>
        </div>
      );
    }
    return (
      <div style={styles.container}>
        <div style={styles.links}>
          {`Hey, ${auth.name}!`}
        </div>
        <Link style={styles.links} to='/volunteers'>Volunteers</Link>
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
