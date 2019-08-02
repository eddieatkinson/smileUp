import React from 'react';
import { teal } from '../utilities';

import facebookIcon from '../assets/facebook.png';

const styles = {
  container: {
    backgroundColor: teal,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    color: 'white',
    margin: 20,
    textAlign: 'center',
  },
  facebook: {
    height: 40,
    margin: 20,
  },
}

function Footer(props) {
  return (
    <div className='container'>
      <div style={styles.copyright}>&copy; 2019 SmileUp! Charitable Foundation is a 501(c)3 non-profit organization</div>
      <div>
        <a href='https://www.facebook.com/smileupfoundation' target='_blank' rel="noopener noreferrer"><img src={facebookIcon} alt='Facebook icon' style={styles.facebook} /></a>
      </div>
    </div>
  )
}

export default Footer;