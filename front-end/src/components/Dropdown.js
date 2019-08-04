import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

const styles = {
  links: {
    margin: 50,
    textDecoration: 'none',
    color: 'white',
  },
}

function Dropdown(props) {
  const { image, dropdownTitle, dropdownItems } = props;
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
      alert('IN');
      return;
    }
    items.style.visibility = 'hidden';
    alert('OUT');
  }

  return (
    <div style={{position: "relative"}}>
      <div ref={node}>
        <div className='give-back-dropdown' style={styles.links} onClick={handleClick}>
          {image || dropdownTitle}
        </div>
        <div id='give-back-items'>
          {
            map(dropdownItems, (info) => <Link className='dropdown-items' key={info.path} to={info.path}><div>{info.text}</div></Link>)
          }
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
