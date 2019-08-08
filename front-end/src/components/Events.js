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
            <h2>Eagle Watch Chili Cookoff</h2>
            <p>Sunday, November 10, 2019</p>
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
          <a href='https://www.facebook.com/pg/smileupfoundation/photos/?tab=albums' target='_blank' rel="noopener noreferrer"><h1>Past SmileUp! Events <span className='past-photos'>(click here to see photos)</span></h1></a>
        </div>
      </div>
    </div>
  );
}

export default Events;
