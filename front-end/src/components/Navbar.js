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
  // const [anchorEl, setAnchorEl] = useState(null);
 
  // // const handleHover = (event) => {
  // //   setAnchorEl(event.currentTarget);
  // // }

  // const handleClose = () => {
  //   setAnchorEl(null);
  // }

  // const handleClick = (event) => {
  //   alert('Clicked');
  //   setAnchorEl(event.currentTarget);
  // }

  return (
    <Grid style={styles.container}>
      <Link to='/' style={styles.links}><img src={logo} alt='logo' style={styles.image} /></Link>
      <Link to='/about' style={styles.links}>About Us</Link>
      {/* <Link to='/' style={styles.links}>Who We Are</Link> */}
      <Link to='/' style={styles.links}>Events</Link>
      <Dropdown />
      {/* <NavDropdown title='How to Give Back'>
        <NavDropdown.Item><Link to='/signup' style={styles.links}>Volunteer</Link></NavDropdown.Item>
        <NavDropdown.Item>Volunteer</NavDropdown.Item>
        <NavDropdown.Item>Volunteer</NavDropdown.Item>
      </NavDropdown> */}
      {/* <Link to='/' style={styles.links} onClick={handleClick}>How to Give Back</Link> */}
      {/* <Dropdown.Menu> */}
        {/* <Dropdown.Header>How to Give Back</Dropdown.Header> */}
      
      {/* </Dropdown.Menu> */}
      {/* <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem><Link to='/donate'>Donate</Link></MenuItem>
        <MenuItem><Link to='/signup'>Volunteer</Link></MenuItem>
        <MenuItem><Link to='/sponsor'>Sponsor</Link></MenuItem>
      </Menu> */}
      <Link to='/' style={styles.links}>Testimonials</Link>
      <Link to='/' style={styles.links}>Contact Us</Link>
    </Grid>
    // </div>
  );
}

export default Navbar;
