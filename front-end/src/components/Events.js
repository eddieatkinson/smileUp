import React from 'react';
import { Link } from 'react-router-dom';

import upcoming1 from '../assets/upcoming1.jpg';
import upcoming2 from '../assets/upcoming2.jpg';
import upcoming3 from '../assets/upcoming3.jpg';

function Events() {
  return (
    <div>
      <div className='text-block events-container'>
        <h1>Upcoming SmileUp! Events</h1>
        <div className='events-row'>
          <div className='event'>
            <img src={upcoming1} alt='Event cover' />
            <Link className='event-link' to='/5k' target='_blank'><h2>Collins Dixon Bend Your Knees 5K</h2></Link>
            <p>Saturday, July 20, 2019</p>
          </div>
          <div className='event'>
            <img src={upcoming2} alt='Event cover' />
            <h2>MLK Day of Service</h2>
            <p>Monday, January 20, 2020</p>
          </div>
          <div className='event'>
            <img src={upcoming3} alt='Event cover' />
            <h2>Bascomb Elementary Book Drive</h2>
            <p>March 2-6, 2020</p>
          </div>
        </div>
      </div>
      <div className='past-events'>
        <div className='text-block'>
          <h1>Past SmileUp! Events <Link className='past-photos' to='/past-photos' target='_blank'>(click here to see photos)</Link></h1>
        </div>
      </div>
    </div>
  );
}

export default Events;
