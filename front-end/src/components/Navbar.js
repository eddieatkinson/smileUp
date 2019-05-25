import React from 'react';
import { Link } from 'react-router-dom';
import { yellow } from '../utilities';
import Grid from '@material-ui/core/Grid';

import logo from '../assets/logo.gif';

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
  },
  image: {
    height: 60,
  },
}

function Navbar(props) {
  return (
    <Grid style={styles.container}>
      <Link to='/' style={styles.links}><img src={logo} alt='logo' style={styles.image} /></Link>
      <Link to='/' style={styles.links}>I'm Here To...</Link>
      <Link to='/' style={styles.links}>Ambassador Program</Link>
      <Link to='/' style={styles.links}>Testimonials</Link>
      <Link to='/' style={styles.links}>Events</Link>
    </Grid>
  )
}

export default Navbar;
