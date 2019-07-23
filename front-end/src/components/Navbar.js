import React from 'react';
import { Link } from 'react-router-dom';
import { yellow } from '../utilities';
import Grid from '@material-ui/core/Grid';

import logo from '../assets/logo.gif';
import Dropdown from './Dropdown';

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

function Navbar(props){
  return (
    <Grid style={styles.container}>
      <Link to='/' style={styles.links}><img src={logo} alt='logo' style={styles.image} /></Link>
      <Link to='/about' style={styles.links}>About Us</Link>
      {/* <Link to='/' style={styles.links}>Who We Are</Link> */}
      <Link to='/events' style={styles.links}>Events</Link>
      <Dropdown />
      <Link to='/testimonials' style={styles.links}>Testimonials</Link>
      <Link to='/' onClick={props.scrollToBottom} style={styles.links}>Contact Us</Link>
    </Grid>
  );
}

export default Navbar;
