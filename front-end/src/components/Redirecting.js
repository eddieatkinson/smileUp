import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { teal } from '../utilities';

function Redirecting() {
  return (
    <div className='loading-screen'>
      <BeatLoader
        css={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}
        color={teal}
        size={150}
      />
    </div>
  );
}

export default Redirecting;
