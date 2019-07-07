import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  links: {
    margin: 50,
    textDecoration: 'none',
    color: 'white',
  },
}

function Dropdown() {
  const node = useRef();
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  });

  const handleClick = (event) => {
    const items = document.getElementById('give-back-items');
    if (node.current.contains(event.target)) {
      items.style.visibility = 'visible';
      return;
    }
    items.style.visibility = 'hidden';
  }

  return (
    <div style={{position: "relative"}}>
      <div ref={node} className='give-back-dropdown' style={styles.links} onClick={handleClick}>How to Give Back</div>
      <div id='give-back-items'>
        <Link className='dropdown-items' to='/donate'><div>Donate</div></Link>
        <Link className='dropdown-items' to='/signup'><div>Volunteer</div></Link>
        <Link className='dropdown-items' to='/sponsor'><div>Sponsor</div></Link>
      </div>
    </div>
  );
}

export default Dropdown;
