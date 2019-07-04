import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { yellow } from '../utilities';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  menuLinks: {
    margin: 50,
    textDecoration: 'none',
    color: 'black',
  },
  image: {
    height: 60,
  },
}

function Navbar(){
  const [anchorEl, setAnchorEl] = useState(null);
 
  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <Grid style={styles.container}>
      <Link to='/' style={styles.links}><img src={logo} alt='logo' style={styles.image} /></Link>
      {/* <Link to='/' style={styles.links} onMouseOver={handleHover}>I'm Here To...</Link>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal:'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem><Link to='/signup' style={styles.menuLinks}>Volunteer</Link></MenuItem>
        <MenuItem><Link to='/signup' style={styles.menuLinks}>Learn More</Link></MenuItem>
      </Menu> */}
      <Link to='/about' style={styles.links}>About Us</Link>
      <Link to='/' style={styles.links}>Who We Are</Link>
      <Link to='/' style={styles.links}>Events</Link>
      <Link to='/' style={styles.links}>How to Give Back</Link>
      <Link to='/' style={styles.links}>Testimonials</Link>
      <Link to='/' style={styles.links}>Contact Us</Link>
    </Grid>
  );
}

export default Navbar;
