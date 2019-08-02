import React from 'react';

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
            <a className='event-link' href='https://www.active.com/canton-ga/running/distance-running-races/8th-annual-bend-your-knees-5k-run-walk-2019?int=' target='_blank' rel="noopener noreferrer"><h2>Collins Dixon Bend Your Knees 5K</h2></a>
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
          <h1>Past SmileUp! Events <a className='past-photos' href='https://www.facebook.com/pg/smileupfoundation/photos/?tab=albums' target='_blank' rel="noopener noreferrer">(click here to see photos)</a></h1>
        </div>
      </div>
    </div>
  );
}

export default Events;
